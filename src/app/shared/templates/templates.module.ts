import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesRoutingModule } from './templates-routing.module';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    UserCardComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ],
  exports: [
    UserCardComponent
  ]
})

export class TemplatesModule { }
