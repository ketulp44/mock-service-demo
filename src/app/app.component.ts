import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mock-service-demo';
  selected = false;
  onClickReg() {
    this.selected = true;
  }
  onClickForm() {
    this.selected = false;
  }
}
