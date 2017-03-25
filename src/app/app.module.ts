import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule  } from '@angular/http';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent, NgbdModalContent  } from '../shared/modal/modal.component';

import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { NavComponent } from '../shared/navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
		NgbdModalComponent,
		NgbdModalContent
  ],
  imports: [
    BrowserModule,
    FormsModule,
		ReactiveFormsModule,
		JsonpModule,
    HttpModule,
		NgbModule.forRoot()
  ],
  entryComponents: [ NgbdModalContent ],
  providers: [ Angular2TokenService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
