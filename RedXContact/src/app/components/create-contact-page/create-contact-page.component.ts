import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact-page',
  templateUrl: './create-contact-page.component.html',
  styleUrls: ['./create-contact-page.component.scss']
})
export class CreateContactPageComponent implements OnInit {

  contact = {
    givenName: "",
    familyName: "",
    birthdate: "",
    email: "",
    phoneNumber: "",
};

  constructor(
    private apiService: ApiServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addContact(info) {
    this.apiService.postContact(JSON.stringify(info)).subscribe(contact => {
      this.router.navigate(['/contacts'])
    })
  }

}
