import { PhonebookService } from './../../../service/phonebook.service';
import { Contact } from './../../../model/contact';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const swal = window['swal'];
@Component({
  selector: 'pb-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private service: PhonebookService, private activaedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activaedRoute.params.subscribe(paramsData => {
      this.service.getContactDetails(paramsData['id'])
        .subscribe(data => this.contact = data);
    })

  }

  deleteContact() {
    swal({
      title: 'Are you sure you want to delete this contact!',
      buttons:[
        {text: 'Yes, delete contact', visible: true, value: true},
        {text: 'No', visible: true, value: false},
      ]
    }).then(result => {
      if (result === true) {
        this.service.deleteContact(this.contact.id).subscribe(() => {
          this.router.navigate(['/contact-list']);
        })
        }
    })
  }

}
