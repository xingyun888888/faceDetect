import { Injectable } from '@angular/core';
import {ActivatedRoute, Params,Router} from '@angular/router';
import { HttpClient,HttpEvent,HttpHeaders,HttpInterceptor,HttpHandler,HttpRequest,HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
@Injectable()
export class InterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders().set("Authorization","Bearer "+window.localStorage.getItem("token"));
    const authReq = req.clone({
      headers:headers,
      withCredentials:true
    });

    return next.handle(authReq).pipe(mergeMap((event: any) => {
        if (event instanceof HttpResponse && event.status != 200) {
          return ErrorObservable.create(event);
        }
        return Observable.create(observer => observer.next(event)); //请求成功返回响应
      }),
      catchError((res: HttpResponse<any>) => {   //请求失败处理
        switch (res.status) {
          case 401:
            sessionStorage.setItem("isLogin","false");
            break;
          case 200:
            sessionStorage.setItem("isLogin","true");
            break;
          case 404:
            break;
          case 403:
            break;
        }
        return ErrorObservable.create(event);
      }));
  }
  constructor(private router: Router) { }
}
