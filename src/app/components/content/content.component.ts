import { Component } from '@angular/core';
import { projects, workExperience } from './experience.constants';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  projects = projects;
  workExperience = workExperience;

  constructor() {}
}
