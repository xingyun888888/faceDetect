import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
/**
 * Created by smileMAC on 11/27/17.
 */
export class LoginGuard implements CanActivate{

  canActivate() {
      let loggedIn:boolean = Math.random()<0.5;
      if(!loggedIn){
        console.log("用户未登录");
      }
      return loggedIn;
   }

}
