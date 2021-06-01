import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req : any, next : any) {
    
    const token = localStorage.token;

    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
                          .set('Access-Control-Allow-Origin', '*'),
    });

    return next.handle(req1);

  }
}
