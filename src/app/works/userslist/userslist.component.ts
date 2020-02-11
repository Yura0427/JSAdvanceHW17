import { Component, OnInit } from '@angular/core';
import { IPerson } from './person.interface';
import { Person } from './person.model';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  personID: number;
  login: string;
  password: string;
  email: string;
  arrPerson: Array<IPerson> = [];
  editStatus: boolean;
  valueStatusLogin: boolean;
  valueStatusPassword: boolean;
  valueStatusEmail: boolean;

  constructor() { }

  ngOnInit() {
  }
  valueStatusReset() {
    this.valueStatusLogin = false;
    this.valueStatusPassword = false;
    this.valueStatusEmail = false;
  }
  resetForm() {
    this.login = '';
    this.password = '';
    this.email = '';
  }
  renderID() {
    for (let i = 0; i < this.arrPerson.length; i++) {
      this.arrPerson[i].id = i + 1;
    }
  }
  addPerson() {
    if (!this.login) {
      this.valueStatusReset();
      this.valueStatusLogin = true;
    }
    else if (!this.password) {
      this.valueStatusReset();
      this.valueStatusPassword = true;
    }
    else if (!this.email) {
      this.valueStatusReset();
      this.valueStatusEmail = true;
    }
    else {
      const newP: IPerson = new Person(1, this.login, this.password, this.email);
      if (this.arrPerson.length > 0) {
        newP.id = this.arrPerson.slice(-1)[0].id + 1;
      }
      this.arrPerson.push(newP);
      this.resetForm();
      this.editStatus = false;
      this.valueStatusReset();
    }
  }
  editPerson(person: IPerson): void {
    this.personID = person.id;
    this.login = person.login;
    this.password = person.password;
    this.email = person.email;
    this.editStatus = true;
  }
  saveEdit() {
    const editP: IPerson = new Person(this.personID, this.login, this.password, this.email);
    const index = this.arrPerson.findIndex(p => p.id === this.personID);
    this.arrPerson.splice(index, 1, editP);
    this.resetForm();
    this.editStatus = false;
  }
  deletePerson(person: IPerson): void {
    this.arrPerson.splice(person.id - 1, 1);
    this.renderID();
  }
}
