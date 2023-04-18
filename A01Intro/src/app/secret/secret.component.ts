import { Component } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css'],
})
export class SecretComponent {
  display: boolean = false;
  logs: string[] = [];

  showSecret() {
    this.display = !this.display;
    let date = new Date();
    this.logs.push(date.toLocaleTimeString());
  }
}
