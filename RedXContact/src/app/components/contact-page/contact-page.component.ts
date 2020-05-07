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
  clicked = false;
  currentButton;

  

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
      event.target.querySelector('mat-icon').innerHTML = 'arrow_drop_down'
      event.target.style.borderBottom="#c2185b solid"
    } else if (this.clicked === true && this.currentButton === event.target) {
      this.clicked = false
      event.target.querySelector('mat-icon').innerHTML = 'arrow_right'
      event.target.style.borderBottom="none"
    } else if (this.clicked === true && this.currentButton !== event.target) {
      let allArrow = document.querySelectorAll('.arrow')
      allArrow.forEach(arrow => {
        arrow.innerHTML = 'arrow_right'
        arrow.parentElement.style.borderBottom="none"
      })
      event.target.querySelector('mat-icon').innerHTML = 'arrow_drop_down'
      event.target.style.borderBottom="#c2185b solid"
    }
    this.currentButton = event.target
   
  }

  deleteContactById(id) {
    this.apiService.deleteContactbyId(id).subscribe(data => window.location.reload())
  }

}
