import { Component, OnInit } from '@angular/core';
import { introText } from './introduction.component.constants';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  public introText = introText;

  constructor() { }

  ngOnInit(): void {
  }

}
