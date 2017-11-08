import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ActiveState {

    // rootLinksVisible: boolean = false;
    private audioPlayerVisibleSource = new Subject<boolean>(); // BehaviorSubject is probably more appropriate
    audioPlayerVisible$ = this.audioPlayerVisibleSource.asObservable();


    // implementing service as store with old-style plain variables
    rootLinks : boolean;
    audioPlayer : boolean;
    currentEpisode : number;
    painting : boolean;

    constructor(private router: Router, private activatedRoute: ActivatedRoute){
        console.log('new state service');
        this.painting = true;
        this.rootLinks = false;
        this.audioPlayer = false;
        this.currentEpisode = 0; // or 0 for prelude/intro?
        this.audioPlayerVisibleSource.next(false);
     }

    public getRootLinksVisibility() {
        // console.log("returning state:", this.rootLinksVisible);
        // return this.rootLinksVisible;
        // return this.rootLinksVisible$.toPromise().then(res => res)
    }
    public makeAudioPlayerVisible() {
        console.log("service revealing audio player");
        this.rootLinks = true;
        this.audioPlayerVisibleSource.next(true);
    }
    public hideAudioPlayer(){
      console.log("service hiding audio player");
      this.audioPlayerVisibleSource.next(false);
    }
    public hideRootLinks() {
        console.log("service making root links hidden");
        this.rootLinks = false;
        // this.rootLinksVisibleSource.next(false);
    }
}
