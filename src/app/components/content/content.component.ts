import { Component, OnInit } from '@angular/core';
import { projects } from './projects.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  projects = projects;

  constructor() { }

  ngOnInit(): void {
  }

}
