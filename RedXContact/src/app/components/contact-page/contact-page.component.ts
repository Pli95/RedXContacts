import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  contacts;
  contact;
  clicked = false
  currentButton

  

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact() {
    this.apiService.getContacts().subscribe(data => this.contacts = data)
  }

  getContactById(id, event) {
    this.apiService.getContactbyId(id).subscribe(data => this.contact = data)
    if(this.clicked === false) {
      this.clicked = true
    } else if (this.clicked === true && this.currentButton === event.target) {
      this.clicked = false
    }
    this.currentButton = event.target
   
  }

}
