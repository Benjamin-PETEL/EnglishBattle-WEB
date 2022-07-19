import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VerbsComponent } from './components/verbs/verbs.component';
import { VerbService } from './services/verb.service';
import { SimpleService } from './services/simple.service';
import { SimpleComponent } from './components/simple/simple.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VerbsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    VerbService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
