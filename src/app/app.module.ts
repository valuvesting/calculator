import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

const myFirebaseConfig = {
  apiKey: 'AIzaSyBFlcCX5ws3hFEjXfsx6yyofj2laPqd1To',
  authDomain: 'valuvesting-2d83f.firebaseapp.com',
  databaseURL: 'https://valuvesting-2d83f.firebaseio.com',
  storageBucket: 'valuvesting-2d83f.appspot.com',
  messagingSenderId: '725228214497'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule.forRoot(),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
