import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public headerMessage: String;
  @Input()
  public title: String;
  @Input()
  public subTitle: String;
  @Input()
  public hideButton: boolean;

  constructor() { }

  ngOnInit() { }


}
