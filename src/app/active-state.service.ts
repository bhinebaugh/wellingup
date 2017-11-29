import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Episode } from './episode';
import { EpisodesService } from './episodes.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ActiveState {

    // rootLinksVisible: boolean = false;
    private audioPlayerVisibleSource = new Subject<boolean>(); // BehaviorSubject is probably more appropriate
    private audioPlayerMaximizedSource = new Subject<boolean>();
    private currentEpisodeSource = new Subject<Episode>();
    audioPlayerVisible$ = this.audioPlayerVisibleSource.asObservable();
    audioPlayerMaximized$ = this.audioPlayerMaximizedSource.asObservable();
    currentEpisode$ = this.currentEpisodeSource.asObservable();


    // implementing service as store with old-style plain variables
    rootLinks : boolean;
    audioPlayer : boolean;
    currentEpisode : Episode;
    episodes : Episode[];
    painting : boolean;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private episodesService: EpisodesService){
        console.log('new state service');
        this.painting = true;
        this.rootLinks = false;
        this.audioPlayer = false;
        this.episodes = episodesService.episodes;
        this.currentEpisode = this.episodes[0]; // or 0 for prelude/intro?
        this.currentEpisodeSource.next();
        this.audioPlayerVisibleSource.next(false);
        this.audioPlayerMaximizedSource.next(true);
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
    public minimizeAudioPlayer() {
        console.log("min player")
        this.audioPlayerMaximizedSource.next(true);
    }
    public maximizeAudioPlayer() {
        // console.log("max player")
        this.audioPlayerMaximizedSource.next(false);
        // this.audioPlayerMaximizedSource.toPromise().then(x => console.log("min source", x))
    }

    public hideAudioPlayer(){
      this.audioPlayerVisibleSource.next(false);

    }
    public hideRootLinks() {
        console.log("service making root links hidden");
        this.rootLinks = false;
        // this.rootLinksVisibleSource.next(false);
    }
    public changeEpisode( id : number ) {
        this.currentEpisodeSource.next(this.episodes[id]);
    }
}
