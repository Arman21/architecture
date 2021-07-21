import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSideComponent } from './components/user-side/user-side.component';

const routes: Routes = [
  {
    path: '',
    component: UserSideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserPageRoutingModule { }
