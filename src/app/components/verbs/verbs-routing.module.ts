import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../theme/main/main.component';
import { VerbsComponent } from './verbs.component';

const routes : Routes = [
    { 
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', component: VerbsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VerbsRoutingModule{}