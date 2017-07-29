import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ActiveState {

    // rootLinksVisible: boolean = false;
    private rootLinksVisibleSource = new Subject<boolean>(); // BehaviorSubject is probably more appropriate
    rootLinksVisible$ = this.rootLinksVisibleSource.asObservable();

    constructor(private router: Router, private activatedRoute: ActivatedRoute){
        console.log('new state service');
        this.rootLinksVisibleSource.next(false); // start not visible
     }

    public getRootLinksVisibility() {
        // console.log("returning state:", this.rootLinksVisible);
        // return this.rootLinksVisible;
        return this.rootLinksVisible$.toPromise().then(res => res)
    }
    public makeRootLinksVisible() {
        console.log("service making root links visible");
        // this.rootLinksVisible = true;
        this.rootLinksVisibleSource.next(true);
    }
    public hideRootLinks() {
        console.log("service making root links hidden");
        // this.rootLinksVisible = true;
        this.rootLinksVisibleSource.next(false);
    }

}