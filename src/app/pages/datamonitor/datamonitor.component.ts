import {Component, OnInit} from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-datamonitor',
  templateUrl: './datamonitor.component.html',
  styleUrls: ['./datamonitor.component.less']
})
export class DatamonitorComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    // $(document).ready(function () {
    //   $('.text').click(function () {
    //     $(".text").css("color","rgb(234, 84, 4)");
    //     // $("#cache1").css("color","rgb(234, 84, 4)");
    //     // $("#cache2").css("color","rgb(234, 84, 4)");
    //     // $("#u726_text").css("background","#FFFFFF");
    //   });
    // });
    // $(function() {
    $(document).ready(function () {
      $(".left_nav li" ).click(function (event) {
        // $(this).first().css("background","#FFFFFF");
        $(this).children("a").css("background", "#FFFFFF");
        $(this).children("a").css("color", "#EA5404");
        // $(this).children("a").css("border","0px solid");  left: 50px;
        // $(this).children("a").css("border-top-left-radius","15px");
        // $(this).children("a").css("padding-right","15px");
        // $(this).siblings("li").removeClass("active");
        $(this).children("a").attr("class", "a_active");
        // $(this).attr("class", "active");
        // $(this).css("border", "1px #f4f7fa");
        $(this).siblings("li").children("a").css("background", "#f4f7fa");
        $(this).siblings("li").children("a").css("color", "#999");
        // $(this).siblings("li").children("div").children("img").hide();
        // $(this).siblings("li").removeClass("active");
      });
    });
  }
}
