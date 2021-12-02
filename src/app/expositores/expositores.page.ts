import { Component, OnInit } from '@angular/core';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-expositores',
  templateUrl: './expositores.page.html',
  styleUrls: ['./expositores.page.scss'],
})
export class ExpositoresPage implements OnInit {
  optBrowser: InAppBrowserOptions = {
    location : 'no',//Or 'no'
    hidden : 'no', //Or  'yes'
    zoom : 'yes',//Android only ,shows browser zoom controls
    hideurlbar:'yes',//Or 'no'
    fullscreen:'yes',
  };
  constructor(private iab: InAppBrowser) { }
  ngOnInit() {
  }
  goMapa(): void{
    const browser = this.iab.create('https://jeansaraujo.github.io/fenearte2021/mapa/index.html','_self',this.optBrowser);
  }

}
