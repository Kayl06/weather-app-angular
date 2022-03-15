import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignupComponent,
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
