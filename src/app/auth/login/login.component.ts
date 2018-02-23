import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { error } from 'util';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  data: City[];
  user;
  constructor(
    private router: Router,
    private authService: AuthService
  ) {

    this.user = {
      username: 'milanrai' || '',
      password: '123456A1' || ''
    };
  }

  ngOnInit() {
    this.authService.getW3service().subscribe(item => {
      //console.log(item['records'])
      this.data = item['records']
    })
  }

  alertEmail() {
    // return new Promise((resolve, reject) => {
    //   if (this.email) {
    //     resolve(this.email)
    //   } else {
    //     reject('nothing')
    //   }
    // })
    // return Observable.create((observer) => {
    //   if (this.email) {
    //     observer.next(this.email)
    //   } else {
    //     observer.error('nothing to show')
    //   }
    // })

  }

  onSubmit() {
    this.authService.login(this.user).subscribe(data => {
      if(data.msg){
        alert(data.msg)
      } else {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert("Hello " + data.user.username.toUpperCase());
      }
    }, error => {
      console.log('error in login component', error);

    })

  }

  getCity() {
   console.log(this.data)
  }


}

interface City {
  Name: string,
  City: string,
  Country: string

}
