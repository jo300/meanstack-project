import { Injectable } from '@angular/core';
import { Contacts } from './contact';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  getContacts() {
    return this.http.get<Contacts>('http://localhost:3000/api/contacts');
  }
  addContacts(newContact: any) {
    console.log(newContact)
    var headers = new HttpHeaders();
    headers.append('Content_type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact, { headers: headers });
  }
  deleteContact(id: any) {
    console.log(id)
    return this.http.delete('http://localhost:3000/api/contact/' + id);
  }
}
