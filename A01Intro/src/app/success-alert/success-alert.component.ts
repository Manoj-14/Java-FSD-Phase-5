import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'success-alert',
  template:
    '<p class="bg-success d-inline-block p-2 m-2">Success alert component</p>',
  styles: [
    `
      p {
        border: 2px solid red;
      }
    `,
  ],
})
export class SuccessAlertComponent {}
