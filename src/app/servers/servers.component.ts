import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // use the selectore like html attributr
  //selector: '.app-servers', // use the selector like css
   selector: 'app-servers',
  template: `
      <app-server></app-server>
      <app-server></app-server>
      <app-allert></app-allert>
      <app-goodallert></app-goodallert>`,
  //styleUrls: ['./servers.component.css']
  styles:[`
  h3{
    color:dodgerblue;
  }
  `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
