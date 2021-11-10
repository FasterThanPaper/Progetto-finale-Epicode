import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReaderComponent } from './reader/reader.component';
import { HeadingComponent } from './heading/heading.component';
import { FootingComponent } from './footing/footing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from './details/details.component';
import { InterceptorInterceptor } from './interceptor.interceptor';
import { FormsModule } from '@angular/forms';
import { AccordionComponent } from './accordion/accordion.component';
import { CreatorComponent } from './creator/creator.component';

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    HeadingComponent,
    FootingComponent,
    DetailsComponent,
    AccordionComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
