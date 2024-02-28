import { Contact } from './../model/contact';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private readonly API =  'http://localhost:8082';
  private cache: Contact[] = [];

  constructor(private http: HttpClient) { }

  save(contact: any) {
    if (contact.id) {
      return this.update(contact);
    }
    return this.create(contact);
  }

  private update(contact: any): Observable<string> {
    return this.http.put<string>(`${this.API}/api/contacts/${contact.id}`, contact).pipe(first());
  }

  private create(contact: any): Observable<any> {
    return this.http.post<any>(`${this.API}/api/contacts`, contact).pipe(first());
  }

  listContactsAll() {
    return this.http.get<Contact[]>(this.API + '/api/contacts')
    .pipe(tap(console.log));
  }

  findContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.API + '/api/contacts'}/${id}`).pipe(first());
  }

}
