import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class WebsocketService {

  url:"http://localhost:8080";
  socket:WebSocket;

  public webSocket():Observable<Event>{
    this.socket = new WebSocket(this.url);
    return Observable.fromEvent(this.socket,'message');
  }


  public send(message){
    this.socket.send(message)
  }


  constructor() { }

}
