import {ChangeDetectionStrategy,Component, OnInit,Input,AfterViewInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Store} from "@ngrx/store";
import * as fromRoot from './store/index';
import * as actions from './store/actions'
import {Observable} from 'rxjs/Observable'
import api from './api';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{

  isLoading$:Observable<boolean>;
  loadingTitle$:Observable<string>;

  @Input()
  _isBackGround=true;
  @Input()
  _formLogin=true;
  @Input()
  _routermenu=false;
  username:string;
  // _isMenu = true;
  formModel: FormGroup;
  constructor(fb: FormBuilder,private http: HttpClient,private router: Router,private store:Store<fromRoot.State>) {
    this.formModel = fb.group(
      {
        user: [''],
        pwd: ['']
      });

  }
  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getCurrentLoading);
    this.loadingTitle$ = this.store.select(fromRoot.getCurrentLoadingTitle);

  }
  onSubmit(){
    let username=this.formModel.get('user').value;
    let password=this.formModel.get('pwd').value;
    // userInfo:UserInfo = new UserInfo(username,password);
    console.log("用户名"+username+"密码"+password);
    console.log(this.formModel.value);
    this.username=username;
    this.http.post(api.userLogin, this.formModel.value, {
      headers: new HttpHeaders({
        'Content-type': 'application/json;charset=UTF-8'
      })
    }).subscribe((res) => {
      console.dir(res);
      if(res){
        this._isBackGround=false;
        this._formLogin = false;
        this._routermenu=true;
        $(document).ready(function () {
          $(".container").attr("class", "container");
        });
      }else {
        this._isBackGround=true;
        this._formLogin = true;
        this._routermenu=false;
      }
      // const list = <any>res;

    },(error)=>{
      this._isBackGround=false;
      this._formLogin = false;
      this._routermenu=true;
    });
  }
}
