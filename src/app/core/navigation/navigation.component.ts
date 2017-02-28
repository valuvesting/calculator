import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public displayName;

  constructor(public af: AngularFire) {}

  login() {
    const promise = this.af.auth.login();
    promise.then(function(data){
      console.log(data);
      this.displayName = data.auth.email;
    });
  }

  logout() {
     this.af.auth.logout();
  }

  ngOnInit() {
  }

}
