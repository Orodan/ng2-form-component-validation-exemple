import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  user = {
    firstName: 'Jon',
    lastName: 'Doe',
    age: ''
  };

  submit (value) {
    console.log('Submit : ', value);
  }
}
