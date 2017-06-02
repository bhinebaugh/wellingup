import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

export const slideAnimation: AnimationEntryMetadata =
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
