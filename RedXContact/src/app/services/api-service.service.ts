import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getContacts() {
    return this.http.get('http://localhost:3000/api/Contacts')
  }

  getContactbyId(_id:number) {
    return this.http.get(`http://localhost:3000/api/Contacts/${_id}`)
  }

  postContact(info) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }

    return this.http.post('http://localhost:3000/api/Contacts', info, httpOptions)

  }

  deleteContactbyId(_id:number) {
    return this.http.delete(`http://localhost:3000/api/Contacts/${_id}`)
  }
}
