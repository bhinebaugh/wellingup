import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ActiveState {

    currentPath: any;
    path: string;
    routeChanges: number = 0;
    onLandingPage: Subject<boolean>;

    constructor(private router: Router, private activatedRoute: ActivatedRoute){
        this.onLandingPage = new Subject();
        // router.events.subscribe((url: any) => this.path)
        // activatedRoute.url.subscribe( data => {
        //   console.log('fragment',data);
        //   this.path = data[0].path;
        //   this.routeChanges++; console.log('routes changes', this.routeChanges)
        // })  
        // router.events.subscribe(url => this.currentPath = url)
        router.events.subscribe(url => {
          //this.onLandingPage = url
          this.path = url.toString();
        })
    }

    public isNavigationVisible(): Observable<boolean> {
      return this.onLandingPage.asObservable();
    }

    public onFrontPage() {
      // if (this.path == '/home') return true;
      // return (this.activatedRoute.snapshot.url[0].path == '/home')
      console.log('on front page? path', this.currentPath);
      return this.currentPath == '/home'
    }

    // public currentPath() {
    //   //   return this.activatedRoute.snapshot.url[0].path
    //   return this.activatedRoute.url // return Observable
    // }

}