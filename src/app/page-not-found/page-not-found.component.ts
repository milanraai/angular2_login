import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  @Input() data
  @Output() getMe = new EventEmitter();



  public animal =  {
    name : "Bruno",
    age : 15
  }
  public joker : string = "Mark Hamill"
  constructor() { }

  ngOnInit() {

  }

  sendMe(e){
    this.getMe.emit(e);
  }

}
