import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesRoutingModule } from './templates-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { LoadingComponent } from './loading/loading.component';
@NgModule({
  declarations: [
    UserCardComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ],
  exports: [
    UserCardComponent,
    LoadingComponent
  ]
})

export class TemplatesModule { }
