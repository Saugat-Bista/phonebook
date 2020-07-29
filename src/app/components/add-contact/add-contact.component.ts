import { PhonebookService } from './../../service/phonebook.service';
import { Contact } from 'src/app/model/contact';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pb-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact;
  constructor(private service: PhonebookService, private router: Router) { }

  ngOnInit(): void {
    this.contact= new Contact();
  }

  addContact(){
    this.service.addNewContact(this.contact).subscribe(contact=>{
      console.log('New contact id:'+ contact.id);
      this.router.navigate(['/contact-details', contact.id]);
    });
  }
}
