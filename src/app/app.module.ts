import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { headersInterceptorProvider } from './http-interceptors';
import { errorHandlingInterceptorProvider } from './http-interceptors/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    headersInterceptorProvider,
    errorHandlingInterceptorProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
