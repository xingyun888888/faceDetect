import {Component, Input,OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import api from './api';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    let isLogin = sessionStorage.getItem("isLogin");
    if(isLogin == "true"){
      this._isBackGround = false;
      this._formLogin = false;
      this._routermenu = true;
      this.pwdError = false;
    }else if(isLogin =="false"){
      this._isBackGround = true;
      this._formLogin = true;
      this._routermenu = false;
      this.pwdError = true;
    }
  }

  title = 'app';

  priceQuote: number = 0;
  @Input()
  _isBackGround = true;
  @Input()
  _formLogin = true;
  @Input()
  _routermenu = false;
  username: string;
  @Input()
  pwdError: boolean = false;
  errorInfo: string = '';
  // _isMenu = true;
  formModel: FormGroup;
  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }
  public subject: Subject<User> = new Subject<User>();
  constructor(fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.formModel = fb.group(
      {
        user: [''],
        pwd: ['']
      });
  }

  priceQuoteHandler() {

  }

  onSubmit() {

    let username = this.formModel.get('user').value;
    let password = this.formModel.get('pwd').value;
    // userInfo:UserInfo = new UserInfo(username,password);
    this.username = username;
    this.http.post(api.userLogin, this.formModel.value, {
      headers: new HttpHeaders({
        'Content-type': 'application/json;charset=UTF-8'
      })
    }).subscribe((res) => {
      console.dir(res);
      let result = <any>res;
      if (result.code == 1) {
        this._isBackGround = false;
        this._formLogin = false;
        this._routermenu = true;
        this.pwdError = false;
        window.localStorage.setItem("token",result.msg);
        sessionStorage.setItem("isLogin","true");
        $(document).ready(function () {
          $('.container').attr('class', 'container');
        });
      } else if (res === 2) {
        this._isBackGround = true;
        this._formLogin = true;
        this._routermenu = false;
        this.pwdError = true;
        this.errorInfo = '用户名错误！';
      } else if (res === 3) {
        this._isBackGround = true;
        this._formLogin = true;
        this._routermenu = false;
        this.pwdError = true;
        this.errorInfo = '密码错误！';
      }else if (res === 4) {
        this._isBackGround = true;
        this._formLogin = true;
        this._routermenu = false;
        this.pwdError = true;
        this.errorInfo = '账号未启用！';
      }
      // const list = <any>res;

    }, (error) => {
      this._isBackGround = true;
      this._formLogin = true;
      this._routermenu = false;
    });
  }
  public logout(): void {
    localStorage.removeItem('currentUser');
    this.subject.next(Object.assign({}));
    this._isBackGround = true;
    this._formLogin = true;
    this._routermenu = false;
    this.pwdError = false;
  }
}
export class User {
  constructor(public user: string,
              public pwd: string) {
  }
}
