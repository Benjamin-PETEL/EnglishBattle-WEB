import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VerbsRoutingModule } from './verbs-routing.module';
import { VerbsComponent } from './verbs.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
    imports: [VerbsRoutingModule, CommonModule, ThemeModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule],
    declarations: [VerbsComponent]
})
export class VerbsModule{}