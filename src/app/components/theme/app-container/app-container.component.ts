import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: './app-container.component.html'
})
export class AppContainerComponent {
    @Input() title!: string;
}