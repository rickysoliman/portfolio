import { Component, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { projects, workExperience } from './experience.constants';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter, :leave', animate('0.5s ease')),
    ]),
  ],
})
export class ContentComponent implements AfterViewInit {
  projects = projects;
  workExperience = workExperience;
  isAnimationEnabled: boolean = window.innerWidth > 767;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isAnimationEnabled = window.innerWidth > 767;
  }

  ngAfterViewInit() {
    const elements = this.elementRef.nativeElement.querySelectorAll('.fade-in');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value to control when the fading occurs
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    elements.forEach((element: any) => {
      observer.observe(element);
    });
  }
}
