import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { CreateContactPageComponent } from './components/create-contact-page/create-contact-page.component';


const routes: Routes = [
  { path: '', redirectTo:'/create', pathMatch: 'full' },
  { path: 'create', component: CreateContactPageComponent },
  { path: 'contacts', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
