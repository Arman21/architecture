import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGE_URLS as urls } from 'src/environments/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: urls.signUpPage,
    pathMatch: 'full'
  },
  {
    path: urls.signUpPage,
    loadChildren: async (): Promise<any> => (await import (`./pages/sign-up/sign-up.module`)).SignUpModule
  },
  {
    path: urls.signInPage,
    loadChildren: async (): Promise<any> => (await import (`./pages/sign-in/sign-in.module`)).SignInModule
  },
  {
    path: urls.usersPage,
    loadChildren: async (): Promise<any> => (await import (`./pages/home-page/home-page.module`)).HomePageModule
  },
  {
    path: `${urls.oneUserPage}/:id`,
    loadChildren: async (): Promise<any> => (await import (`./pages/user-page/user-page.module`)).UserPageModule
  },
  {
    path: '**',
    redirectTo: urls.signInPage,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
