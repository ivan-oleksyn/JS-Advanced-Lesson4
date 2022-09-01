import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './phone-book.component';
import { SortColumn, SortOrder } from './sort.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(myContacts: IContact[],  sortColumn=SortColumn.NAME, sortOrder = SortOrder.ASC): IContact[] {
    if (!myContacts) return [];
    let contacts:IContact[] = [];
    switch (true) {
      case sortColumn===SortColumn.NAME && sortOrder===SortOrder.ASC:
        contacts = myContacts.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0));
        break;
      case sortColumn===SortColumn.SURNAME && sortOrder===SortOrder.ASC:
        contacts = myContacts.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((a.lastName < b.lastName) ? -1 : 0));
        break;
      case sortColumn===SortColumn.PHONE && sortOrder===SortOrder.ASC:
        contacts = myContacts.sort((a, b) => (a.number > b.number) ? 1 : ((a.number < b.number) ? -1 : 0));
        break;
      case sortColumn===SortColumn.NAME && sortOrder===SortOrder.DESC:
       contacts = myContacts.sort((a, b) => (a.firstName < b.firstName) ? 1 : ((a.firstName > b.firstName) ? -1 : 0));
        break;
      case sortColumn===SortColumn.SURNAME && sortOrder===SortOrder.DESC:
         contacts = myContacts.sort((a, b) => (a.lastName < b.lastName) ? 1 : ((a.firstName > b.firstName) ? -1 : 0));
        break;
      case sortColumn===SortColumn.PHONE && sortOrder===SortOrder.DESC:
        contacts = myContacts.sort((a, b) => (a.number < b.number) ? 1 : ((a.number > b.number) ? -1 : 0));
        break;
    }
    return contacts;
  }
}
