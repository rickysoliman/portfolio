import { Component, OnInit } from '@angular/core';
import { logoUrl, iconLinks } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public iconLinks = iconLinks;

  constructor() { }

  ngOnInit(): void {
  }

}
