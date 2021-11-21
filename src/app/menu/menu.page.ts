import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {

  constructor(private iab: InAppBrowser) {

  }

  goMapa(): void{
    const browser = this.iab.create('https://jeansaraujo.github.io/apis/2021/mapa-fenearte/index.html');
    //browser.executeScript();
    //browser.insertCSS();
    //browser.on('loadstop').subscribe(event => {
    //    browser.insertCSS({ code: "body{color: red;" });
    //});
    // browser.close();
    // alert("Ajustar o InAppBrowser >> https://jeansaraujo.github.io/apis/2021/mapa-fenearte/index.html");
  }
  ngOnInit() {
  }
}
