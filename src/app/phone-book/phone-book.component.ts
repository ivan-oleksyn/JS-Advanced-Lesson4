import { Component, OnInit } from '@angular/core';
import { SortColumn, SortOrder } from './sort.model';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent implements OnInit {

  public contacts: IContact[] = [{ 'firstName': 'Petya', 'lastName': 'Zhuk', 'number': '0631111111' },
  { 'firstName': 'Petro', 'lastName': 'Petriv', 'number': '0631222222' },
  { 'firstName': 'Alejandro', 'lastName': 'Del Rio Albrechet', 'number': '0633333333' },
  { 'firstName': 'Vasylyna', 'lastName': 'Vrublevska', 'number': '0635555555' },
  { 'firstName': 'Ira', 'lastName': 'Tytar', 'number': '0636666666' },
  { 'firstName': 'Sofia', 'lastName': 'Zhuk', 'number': '0977777777' }];
  public contactInfo!: string;
  public addPhone = false;
  public contact!: IContact;
  public contactFirstName!: string;
  public contactLastName!: string;
  public contactNumber!: string;
  public saveActive = false;
  public currentIndex!: number;
  public saveEditedBTN = false;
  public sortColumn = SortColumn.NAME;
  public sortOrder = SortOrder.ASC;
  public sortColumnEnum = SortColumn;
  public sortOrderEnum = SortOrder;

  constructor() { }

  ngOnInit(): void {
  }

  addContact(): void{
    this.addPhone = !this.addPhone;
  }
  saveContact(): void{
    this.contact = {
      firstName: this.contactFirstName,
      lastName: this.contactLastName,
      number: this.contactNumber
    }
    this.contacts.push(this.contact);
    this.contactFirstName = '';
    this.contactLastName = '';
    this.contactNumber = '';
    this.addPhone = !this.addPhone;
  }
  editContact(contactIndex:number): void{
    this.currentIndex = contactIndex;
    this.addPhone = !this.addPhone;
    this.saveEditedBTN = !this.saveEditedBTN;
    this.contactFirstName = this.contacts[contactIndex].firstName;
    this.contactLastName = this.contacts[contactIndex].lastName;
    this.contactNumber = this.contacts[contactIndex].number;
  }
  saveEditedContact(): void{
    this.contacts[this.currentIndex].firstName = this.contactFirstName;
    this.contacts[this.currentIndex].lastName = this.contactLastName;
    this.contacts[this.currentIndex].number = this.contactNumber;
    this.contactFirstName = '';
    this.contactLastName = '';
    this.contactNumber = '';
    this.saveEditedBTN = !this.saveEditedBTN;
    this.addPhone = false;
  }
  deleteContact(contactIndex:number): void { 
    this.contacts.splice(contactIndex, 1);
  };
  closeModal(): void{
    this.addPhone = false;
  }
  changeType(sortColumn: SortColumn): void{
    this.sortColumn = sortColumn;
    this.sortOrder = this.sortOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;
  }
}
export interface IContact{
  firstName: string,
  lastName: string,
  number:string
}
