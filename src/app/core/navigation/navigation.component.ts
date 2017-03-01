import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public user;

  constructor(public af: AngularFire, ) {}

  login() {
    const promise = this.af.auth.login();
    promise.then((data) => {
      this.user = data;
      console.log(this.user);
    });
  }

  logout() {
     this.af.auth.logout();
  }

  ngOnInit() {
  }

}
