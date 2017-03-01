/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

const myFirebaseConfig = {
  apiKey: '1234',
  authDomain: '1234.firebaseapp.com',
  databaseURL: 'https://1234.firebaseio.com',
  storageBucket: '1234.appspot.com',
  messagingSenderId: '1234'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        CoreModule,
        MaterialModule,
        AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));

});
