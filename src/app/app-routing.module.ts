import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VerbsComponent } from './components/verbs/verbs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'verbs', component: VerbsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
