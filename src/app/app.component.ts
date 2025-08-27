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
      const offsetX = spotlight.offsetWidth / 2;
      const offsetY = spotlight.offsetHeight / 2;
      spotlight.style.transform = `translate(${e.clientX - offsetX}px, ${
        e.clientY - offsetY
      }px)`;
    }
  }
}
