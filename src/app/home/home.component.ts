import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Contacts } from '../contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ClientService]
})
export class HomeComponent implements OnInit {
  first_name = new FormControl('');
  last_name = new FormControl('');
  phone = new FormControl('');
  public myForm: FormGroup | undefined;
  public contacts: any;
  public sendContact: any;
  public info: any = '';
  constructor(public data: ClientService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.data.getContacts().subscribe(contacts => {
      this.contacts = contacts
    });

  }
  add() {
    this.sendContact = { first_name: this.first_name.value, last_name: this.last_name.value, phone: this.phone.value, }
    console.log(this.sendContact);
    this.data.addContacts(this.sendContact).subscribe(data => {
      this.info = data;
      window.location.reload();
      this.contacts.reverse();
      this.sendContact = '';
      setTimeout(() => {
        this.info = '';
      }, 1000);
    });
  }
  deleteData(index: any) {
    console.log(index)
    this.data.deleteContact(index).subscribe(data => {
      this.ngOnInit();
    });

  }
  updateData(index: any) {
    alert(index)
    let filtered = this.contacts.filter((item: any) => item._id === index);
    this.sendContact.this.first_name = 'ffdfd';
  }
}


