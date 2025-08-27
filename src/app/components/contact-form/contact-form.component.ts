import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: Event): void {
    event.preventDefault();

    this.contactFormGroup.markAllAsTouched();

    if (this.contactFormGroup.invalid) {
      console.warn('Form is invalid');
      return;
    }

    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('name', this.contactFormGroup.get('name')?.value || '');
    formData.append('email', this.contactFormGroup.get('email')?.value || '');
    formData.append(
      'message',
      this.contactFormGroup.get('message')?.value || ''
    );

    fetch('/', {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        alert('Message sent!');
        this.contactFormGroup.reset();
      })
      .catch((error) => {
        alert('Something went wrong. Please try again.');
        console.error('Form submission error:', error);
      });
  }
}
