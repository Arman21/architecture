import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { TemplatesModule } from 'src/app/shared/templates/templates.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})

export class HomePageModule { }
