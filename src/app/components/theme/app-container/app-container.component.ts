import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: './app-container.component.html',
    styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent {
    @Input() title!: string;
}