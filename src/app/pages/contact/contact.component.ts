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
    console.log('Form sent');
    console.log('The name is ' + this.model.name);
    console.log('The email is ' + this.model.email);
    console.log('The subject is ' + this.model.subject);
    console.log('The description is ' + this.model.description);
    if (this.model.name == '') {
      console.log('Fill all the required values.');
    }
    //const allInfo = `My name is ${this.name}. My email is ${this.email}. My subject is ${this.subject}. The description is ${this.description}`;
    //alert(allInfo);
  }
}
