import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VerbsRoutingModule } from './verbs-routing.module';
import { VerbsComponent } from './verbs.component';
import { MatButtonModule } from '@angular/material/button';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
    imports: [VerbsRoutingModule, CommonModule, MatButtonModule, ThemeModule],
    declarations: [VerbsComponent]
})
export class VerbsModule{}