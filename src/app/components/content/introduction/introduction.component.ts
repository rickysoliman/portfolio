import { Component, OnInit } from '@angular/core';
import { introText, technicalSkills } from './introduction.component.constants';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  introText = introText;
  technicalSkills = technicalSkills;

  constructor() {}

  ngOnInit(): void {}
}
