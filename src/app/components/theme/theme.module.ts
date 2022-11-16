import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AppContainerComponent } from './app-container/app-container.component';
import { DefaultLayoutComponent } from './default/default.component';
import { MainLayoutComponent } from './main/main.component';

@NgModule({
    declarations: [DefaultLayoutComponent, MainLayoutComponent, AppContainerComponent],
    imports: [RouterModule, FlexLayoutModule],
    exports: [AppContainerComponent]
})
export class ThemeModule{}