import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SimpleComponent } from './components/simple/simple.component';
import { VerbsComponent } from './components/verbs/verbs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'verbs', component: VerbsComponent },
  { path: 'simple', component: SimpleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
