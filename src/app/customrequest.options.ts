import { Injectable } from '@angular/core';
// import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './environment';

@Injectable()
export class CustomRequestOptions implements HttpInterceptor {
    intercept( request:HttpRequest<any>, next:HttpHandler ):Observable<HttpEvent<any>> {
        console.log(request.url);
        return next.handle(
            request.clone({ url: environment.wordpressUrl + request.url })
        )
    }
}