import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const spotlight = document.getElementById('mouse-spotlight');
    if (spotlight) {
      spotlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    }
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    const spotlight = document.getElementById('mouse-spotlight');
    if (spotlight) {
      spotlight.style.opacity = '0';
    }
  }

  @HostListener('document:mouseenter')
  onMouseEnter() {
    const spotlight = document.getElementById('mouse-spotlight');
    if (spotlight) {
      spotlight.style.opacity = '1';
    }
  }
}
