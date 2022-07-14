import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SimpleService } from 'src/app/services/simple.service';

@Component({
    selector: 'app-simple',
    templateUrl: './simple.component.html'
})
export class SimpleComponent implements OnInit{
    wordsList: String[] =[];
    private getSimpleSubscription: Subscription | undefined;

    constructor(private simpleService: SimpleService) {}

    ngOnInit(): void {
        this.getSimpleSubscription = this.simpleService.getSimple().subscribe(
            (res: String[]) => {
                this.wordsList = res;
            }
        );
    }
}