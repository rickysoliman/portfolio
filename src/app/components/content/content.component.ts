import { Component, OnInit } from '@angular/core';
import { projects, workExperience } from './experience.model';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  projects = projects;
  workExperience = workExperience;

  constructor() { }

  ngOnInit(): void {
  }

}
