import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

export const slideAnimation =
    trigger('routeAnimations',[
        // LandingComponent => *
        // Category <=> Page
        // Page <=> Page
        transition('Page <=> Page', [
            style({ position: 'relative' }),
            query(':enter', style({transform: 'translateX(100%)'})),
            query(':leave', style({transform: 'translateX(0)'})),
            group([
                query(':enter', [
                    animate('0.6s ease-out', style({ opacity: 0.5, transform: 'translateX(0)'}) ),
                ]),
                query(':leave', [
                    animate('0.5s ease-in',  style({ opacity: 0,   transform: 'translateX(-100%)' }))
                ])
            ])
        ])
    ]);

    
    // example from Angular 7 docs

    // export const slideInAnimation =
    // trigger('routeAnimations', [
    //   transition('HomePage <=> AboutPage', [
    //     style({ position: 'relative' }),
    //     query(':enter, :leave', [
    //       style({
    //         position: 'absolute',
    //         top: 0,
    //         left: 0,
    //         width: '100%'
    //       })
    //     ]),
    //     query(':enter', [
    //       style({ left: '-100%'})
    //     ]),
    //     query(':leave', animateChild()),
    //     group([
    //       query(':leave', [
    //         animate('300ms ease-out', style({ left: '100%'}))
    //       ]),
    //       query(':enter', [
    //         animate('300ms ease-out', style({ left: '0%'}))
    //       ])
    //     ]),
    //     query(':enter', animateChild()),
    //   ]),
    //   transition('* <=> FilterPage', [
    //     style({ position: 'relative' }),
    //     query(':enter, :leave', [
    //       style({
    //         position: 'absolute',
    //         top: 0,
    //         left: 0,
    //         width: '100%'
    //       })
    //     ]),
    //     query(':enter', [
    //       style({ left: '-100%'})
    //     ]),
    //     query(':leave', animateChild()),
    //     group([
    //       query(':leave', [
    //         animate('200ms ease-out', style({ left: '100%'}))
    //       ]),
    //       query(':enter', [
    //         animate('300ms ease-out', style({ left: '0%'}))
    //       ])
    //     ]),
    //     query(':enter', animateChild()),
    //   ])
    // ]);






export const pageBack = slideAnimation
    // trigger('routeAnimation', [
    //     state('*',
    //         style({
    //             opacity: 1,
    //             transform: 'none',
    //             position: 'absolute'
    //         })
    //     ),
    //     transition('void => *', [
    //         style({opacity: 0, transform: 'rotateY(-90deg'}),
    //         animate('1.2s ease-in', style({opacity: 1, transform: 'rotateY(0deg)'}))
    //     ]),
    //     transition('* => void', [
    //         animate('0.8s ease-in', style({opacity: 0, transform: 'rotateY(-90deg'}))
    //     ])
    // ])


export const pageTurn = slideAnimation
    // // new page is negative z-index to be below other content
    // // start with zero opacity
    // // fade in
    // // on removal / transition away,
    // // rotate about y-axis with perspective
    // // while fading to zero opacity

    // // enter (void => *)
    // // leave (* => void)
    // trigger('routeAnimation', [
    //     state('*',
    //         style({
    //             opacity: 1,
    //             transform: 'none',
    //             position: 'absolute'
    //         })
    //     ),
    //     // state('void',
    //     //     style({
    //     //         transform: 'translateX(90%)',
    //     //         opacity: '0.2',
    //     //         position: 'absolute'
    //     //     })
    //     // ),
    //     // working:
    //     // transition('void => *', animate('2s ease-in')),
    //     // transition('* => void', animate('2s ease-out'))
    //     transition('void => *', [
    //         style({ opacity: 0, transform: 'none'}),
    //         animate('0.6s ease-in')
    //     ]),
    //     transition('* => void', [
    //         style({ opacity: 1}),
    //         animate('1.2s ease-in', style({ opacity: 0}))
    //     ])
    //     // transition(':enter', [
    //     //     style({
    //     //         opacity: 0,
    //     //         position: 'absolute'
    //     //     }),
    //     //     animate('2s ease-in')
    //     // ]),
    //     // transition(':leave', [
    //     //     style({
    //     //         opacity: 0.5,
    //     //         transform: 'rotateY(-140deg)',
    //     //         position: 'absolute'
    //     //     }),
    //     //     animate('2s ease-in')
    //     // ])
    // ])
