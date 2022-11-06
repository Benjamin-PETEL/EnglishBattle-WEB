import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DefaultLayoutComponent } from './components/theme/default/default.component';

const routes: Routes = [
  { 
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  { 
    path: 'verbs', 
    loadChildren: () => import('./components/verbs/verbs.module').then(m => m.VerbsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
