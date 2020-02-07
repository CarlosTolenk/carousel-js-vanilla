import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';

import {AppComponent} from './app.component';
import { WelcomeAngularComponent } from './welcome-angular/welcome-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, WelcomeAngularComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const welcomeAngularComponent = createCustomElement(WelcomeAngularComponent, {injector});
    customElements.define('welcome-angular', welcomeAngularComponent);
  }
}
