import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { PolicyComponent } from '../policy/policy.component';
import { TermsComponent } from '../terms/terms.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'app-contact', component: ContactComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-policy', component: PolicyComponent },
  { path: 'app-terms', component: TermsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
