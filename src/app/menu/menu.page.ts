import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {

  options: InAppBrowserOptions = {
    location : 'no',//Or 'no'
    hidden : 'no', //Or  'yes'
    zoom : 'yes',//Android only ,shows browser zoom controls
    hideurlbar:'yes',//Or 'no'
    fullscreen:'yes',
  };
  constructor(private iab: InAppBrowser ) {

  }


  goMapa(): void{
    //,"hideurlbar:'yes'"
    const browser = this.iab.create('https://jeansaraujo.github.io/fenearte2021/mapa/index.html','_self',this.options);
    //browser.executeScript();
    //browser.insertCSS();
    //browser.on('loadstop').subscribe(event => {
    //    browser.insertCSS({ code: "body{color: red;" });
    //});
    // browser.close();
    // alert("Ajustar o InAppBrowser >> https://jeansaraujo.github.io/apis/2021/mapa-fenearte/index.html");
  }
  goGMaps(): void{
    const browser = this.iab.create('https://goo.gl/maps/VWkDNpfDo1AedsccA','_blank',this.options);
  }

  goMestres(): void{
    const browser = this.iab.create('https://jeansaraujo.github.io/fenearte2021/mestres/index.html','_self',this.options);
  }

  goInstaFenearte(): void{
    const browser = this.iab.create('https://www.instagram.com/fenearte','_blank',this.options);
  }

  ngOnInit() {
  }
}
