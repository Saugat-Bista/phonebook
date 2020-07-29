import { Contact } from './../model/contact';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(contact: Contact): string {
    if (!contact){
      return '';
    }
    let title= contact.gender==='Male' ? 'Mr. ' : 'Ms. ';
    return title + contact.firstname + " " + contact.lastname;
  }

}
