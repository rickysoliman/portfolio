import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() url: string = '';
  @Input() contentTemplate: TemplateRef<any> = null!;

  constructor() { }

  ngOnInit(): void {
  }

}
