import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VerbsRoutingModule } from './verbs-routing.module';
import { VerbsComponent } from './verbs.component';

@NgModule({
    imports: [VerbsRoutingModule, CommonModule],
    declarations: [VerbsComponent]
})
export class VerbsModule{}