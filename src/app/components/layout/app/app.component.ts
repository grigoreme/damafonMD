import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interfon.md';

  options = {
    position: ['bottom', 'right'],
    timeOut: 5000,
    lastOnBottom: true
  };
}
