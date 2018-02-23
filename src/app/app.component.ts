import { Component } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app works!'; 

  // title : string = "Welcome to Jungle";

  person = {
    name : "Milan",
    age : 32
  }

  getData(e){
     console.log("This is my life now", e)
  }

}

