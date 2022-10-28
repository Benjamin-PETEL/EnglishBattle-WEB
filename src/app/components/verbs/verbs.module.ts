import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VerbsRoutingModule } from './verbs-routing.module';
import { VerbsComponent } from './verbs.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [VerbsRoutingModule, CommonModule, MatButtonModule],
    declarations: [VerbsComponent]
})
export class VerbsModule{}