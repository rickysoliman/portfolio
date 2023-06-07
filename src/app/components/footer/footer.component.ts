import { Component, OnInit } from '@angular/core';
import { iconLinks } from '../header/header.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  iconLinks = iconLinks;

  constructor() { }

  ngOnInit(): void {
  }

}
