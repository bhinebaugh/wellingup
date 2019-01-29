import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideAnimation =
    trigger('routeAnimation',[
        state('*',
            style({ opacity: 1, transform: 'translateX(0)' })
        ),
        transition(':enter', [
            style({ opacity: 0.5, transform: 'translateX(100%)'}),
            animate('0.6s ease-out')
        ]),
        transition(':leave', [
            animate('0.5s ease-in', style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }))
        ])
    ]);

export const pageBack =
    trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'none',
                position: 'absolute'
            })
        ),
        transition('void => *', [
            style({opacity: 0, transform: 'rotateY(-90deg'}),
            animate('1.2s ease-in', style({opacity: 1, transform: 'rotateY(0deg)'}))
        ]),
        transition('* => void', [
            animate('0.8s ease-in', style({opacity: 0, transform: 'rotateY(-90deg'}))
        ])
    ])


export const pageTurn =
    // new page is negative z-index to be below other content
    // start with zero opacity
    // fade in
    // on removal / transition away,
    // rotate about y-axis with perspective
    // while fading to zero opacity

    // enter (void => *)
    // leave (* => void)
    trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'none',
                position: 'absolute'
            })
        ),
        // state('void',
        //     style({
        //         transform: 'translateX(90%)',
        //         opacity: '0.2',
        //         position: 'absolute'
        //     })
        // ),
        // working:
        // transition('void => *', animate('2s ease-in')),
        // transition('* => void', animate('2s ease-out'))
        transition('void => *', [
            style({ opacity: 0, transform: 'none'}),
            animate('0.6s ease-in')
        ]),
        transition('* => void', [
            style({ opacity: 1}),
            animate('1.2s ease-in', style({ opacity: 0}))
        ])
        // transition(':enter', [
        //     style({
        //         opacity: 0,
        //         position: 'absolute'
        //     }),
        //     animate('2s ease-in')
        // ]),
        // transition(':leave', [
        //     style({
        //         opacity: 0.5,
        //         transform: 'rotateY(-140deg)',
        //         position: 'absolute'
        //     }),
        //     animate('2s ease-in')
        // ])
    ])
