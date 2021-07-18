import { Component, OnInit } from '@angular/core';
import { Message } from '../../message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  model = new Message('', '', '', '');

  constructor() {}

  processForm() {
    console.log('TEST');
    console.log('My name is ' + this.model.name);
    //const allInfo = `My name is ${this.name}. My email is ${this.email}. My subject is ${this.subject}. The description is ${this.description}`;
    //alert(allInfo);
  }
}
