import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URLs as urls } from 'src/environments/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: urls[0],
    pathMatch: 'full'
  },
  {
    path: urls[0],
    loadChildren: async (): Promise<any> => (await import (`./pages/home-page/home-page.module`)).HomePageModule
  },
  {
    path: `${urls[1]}/:id`,
    loadChildren: async (): Promise<any> => (await import (`./pages/user-page/user-page.module`)).UserPageModule
  },
  {
    path: '**',
    redirectTo: urls[0],
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
