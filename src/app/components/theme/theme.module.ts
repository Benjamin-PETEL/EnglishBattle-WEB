import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default/default.component';
import { MainLayoutComponent } from './main/main.component';

@NgModule({
    declarations: [DefaultLayoutComponent, MainLayoutComponent],
    imports: [RouterModule, FlexLayoutModule]
})
export class ThemeModule{}