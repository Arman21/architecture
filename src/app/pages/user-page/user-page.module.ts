import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageRoutingModule } from './user-page-routing.module';
import { TemplatesModule } from 'src/app/shared/templates/templates.module';
import { UserSideComponent } from './components/user-side/user-side.component';

@NgModule({
  declarations: [
    UserSideComponent
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    TemplatesModule
  ]
})

export class UserPageModule { }
