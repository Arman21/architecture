import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { headersInterceptorProvider } from './http-interceptors';
import { errorHandlingInterceptorProvider } from './http-interceptors/index';
import { authenticationInterceptorProvider } from './http-interceptors';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    headersInterceptorProvider,
    errorHandlingInterceptorProvider,
    authenticationInterceptorProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
