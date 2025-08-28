import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  messageSent: boolean = true;
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
    if (this.contactFormGroup.invalid) return;

    const data = new URLSearchParams();
    data.append('name', this.contactFormGroup.get('name')?.value || '');
    data.append('email', this.contactFormGroup.get('email')?.value || '');
    data.append('message', this.contactFormGroup.get('message')?.value || '');

    fetch('https://formspree.io/f/mzzadpgr', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data.toString(),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        this.messageSent = true;
      })
      .catch((err) => {
        console.error('Formspree error:', err);
        alert('Submission failed. Please try again.');
      });
  }
}
