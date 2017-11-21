import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ActiveState {

    // rootLinksVisible: boolean = false;
    private audioPlayerVisibleSource = new Subject<boolean>(); // BehaviorSubject is probably more appropriate
    private currentEpisodeSource = new Subject<number>();
    audioPlayerVisible$ = this.audioPlayerVisibleSource.asObservable();
    currentEpisode$ = this.currentEpisodeSource.asObservable();


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
        this.currentEpisodeSource.next(0);
        this.audioPlayerVisibleSource.next(false);
     }

    public getRootLinksVisibility() {
        // console.log("returning state:", this.rootLinksVisible);
        // return this.rootLinksVisible;
        // return this.rootLinksVisible$.toPromise().then(res => res)
    }
    public makeAudioPlayerVisible() {
        this.rootLinks = true;
        this.audioPlayer = true;
        console.log();
        this.audioPlayerVisibleSource.next(true);
    }
    public hideAudioPlayer(){
      this.audioPlayerVisibleSource.next(false);
      console.log();
    }
    public hideRootLinks() {
        console.log("service making root links hidden");
        this.rootLinks = false;
        // this.rootLinksVisibleSource.next(false);
    }
}
