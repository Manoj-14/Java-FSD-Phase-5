import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent {
  genders: string[] = ['Male', 'Female'];
  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
  }
}
