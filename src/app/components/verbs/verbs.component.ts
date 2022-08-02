import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Verb } from 'src/app/models/verb.model';
import { VerbService } from 'src/app/services/verb.service';

@Component({
  selector: 'app-verbs',
  templateUrl: './verbs.component.html',
  styleUrls: ['./verbs.component.scss']
})
export class VerbsComponent implements OnInit, OnDestroy {

  verbs: Verb[] = [];
  displayVerbs: Verb[] = [];
  error: Error | null = null;
  private getVerbsSubscription: Subscription | undefined;

  constructor(private verbService: VerbService) { }

  ngOnInit(): void {
    this.getVerbsSubscription = this.verbService.getVerbs().subscribe(
      (res: Verb[]) => {
        this.verbs = res;
        this.displayVerbs = this.verbs;       
      },
      (err: Error) => {
        this.error = err;
      }
    );
    
  }

  ngOnDestroy(): void {
    this.getVerbsSubscription?.unsubscribe();
  }

  searchVerb(searchVerb: string): void {
    let result = this.verbs.filter(verb => {    
      let bv = verb.baseVerbal.includes(searchVerb);
      let sp = verb.simplePast.includes(searchVerb);
      let pp = verb.pastParticipe.includes(searchVerb);      
      return bv || sp || pp;
    });
    
    this.displayVerbs = result;
  }
}
