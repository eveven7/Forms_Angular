import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('otherForm', { static: false }) otherForm: NgForm;

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  subscriptions = ['basic', 'advanced', 'pro'];
  selectedSubscription = 'advanced';
  submittedForm = false;
  user = {
    username: '',
    password: '',

    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.signupForm.setValue({
    //   userData: {
    //     userName: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    }); // overrites parts of the form
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmitSign() {
    console.log(this.otherForm.value);
    this.otherForm.reset();
  }
  onSubmit() {
    this.submittedForm = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }
}
