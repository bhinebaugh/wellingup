import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';

import { environment } from './environment';

@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {
    merge(options?:RequestOptionsArgs):RequestOptions {
        // import from api.ts if exists, otherwise fall back to localhost
        // options.url = 'http://localhost/wp-json/wp/v2' + options.url;
        options.url = environment.wordpressUrl + options.url;
        return super.merge(options);
    }
}