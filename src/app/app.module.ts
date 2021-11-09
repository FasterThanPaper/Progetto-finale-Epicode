import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReaderComponent } from './reader/reader.component';
import { HeadingComponent } from './heading/heading.component';
import { FootingComponent } from './footing/footing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    HeadingComponent,
    FootingComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
