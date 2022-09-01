import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './phone-book.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(myContacts: IContact[], contactInfo: string): IContact[] {
    if (!myContacts) return [];
    if (!contactInfo) return myContacts;
    return myContacts.filter(contact => 
      contact.firstName.toLowerCase().includes(contactInfo.toLowerCase())||
      contact.lastName.toLowerCase().includes(contactInfo.toLowerCase())||
      contact.number.toLowerCase().includes(contactInfo.toLowerCase())
    );
  }

}
