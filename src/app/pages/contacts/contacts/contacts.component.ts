import {Component} from '@angular/core';
import {ContactsService} from "../../../services/contacts/contacts.service";
import {IContact} from "../../../models/contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  public contact: IContact = {
    email: 'matthew.marinara@gmail.com',
    address: 'пр. Новоколомяжский, д. 11, оф. 13',
    city: {
      title: 'Санкт-Петербург',
    },
    phone: '+79213941777',
    geo: {
      lat: '30.966554',
      lon: '59.6654488'
    }
  };

  setContact(value: IContact): void {
    this.contact = value;
  }

  constructor(private readonly contactsService: ContactsService) {
    contactsService.inContactFind$.subscribe(contact => this.setContact(contact))
  }
}
