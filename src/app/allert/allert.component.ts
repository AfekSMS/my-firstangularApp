import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allert',
  templateUrl: './allert.component.html',
  styles: [`
  p{
    color:red;
    font-weight:bold;
    font-size:50px;
  }`]
})
export class AllertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
