import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent {
  submited: boolean = false;

  user: {
    username: string;
    email: string;
    secret: string;
    gender: string;
  };

  onSubmit(form: NgForm) {
    this.user = {
      username: form.value.username,
      email: form.value.email,
      secret: form.value.secret,
      gender: form.value.gender,
    };
    this.submited = true;
    form.reset();
  }
}
