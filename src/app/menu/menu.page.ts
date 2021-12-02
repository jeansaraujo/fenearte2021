import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {
  optBrowser: InAppBrowserOptions = {
    location : 'no',//Or 'no'
    hidden : 'no', //Or  'yes'
    zoom : 'yes',//Android only ,shows browser zoom controls
    hideurlbar:'yes',//Or 'no'
    fullscreen:'yes',
  };
  optGMaps: InAppBrowserOptions = {
    location : 'yes',//Or 'no'
    hidden : 'no', //Or  'yes'
    zoom : 'yes',//Android only ,shows browser zoom controls
    hideurlbar:'yes',//Or 'no'
    fullscreen:'yes',
  };

  optDocument: DocumentViewerOptions = {
    title: 'Mapa Fenearte'
  };
  constructor(private iab: InAppBrowser ,private document: DocumentViewer) {

  }

  goMapaPDF(): void{
    const browser = this.iab.create('https://jeansaraujo.github.io/fenearte2021/doc/index.html','_blank',this.optBrowser);
  }

  goMapa(): void{
    //,"hideurlbar:'yes'"
    const browser = this.iab.create('https://jeansaraujo.github.io/fenearte2021/mapa/index.html','_self',this.optBrowser);
    //browser.executeScript();
    //browser.insertCSS();
    //browser.on('loadstop').subscribe(event => {
    //    browser.insertCSS({ code: "body{color: red;" });
    //});
    // browser.close();
    // alert("Ajustar o InAppBrowser >> https://jeansaraujo.github.io/apis/2021/mapa-fenearte/index.html");
  }
  goDocument(): void{
    const document = this.document.viewDocument('assets/doc/mapa.pdf', 'application/pdf',this.optDocument);

  }
  goMaps(): void{
    const browser = this.iab.create('https://goo.gl/maps/VWkDNpfDo1AedsccA','_blank',this.optGMaps);
  }

  goMestres(): void{
    const browser = this.iab.create('https://jeansaraujo.github.io/fenearte2021/mestres/index.html','_self',this.optBrowser);
  }

  goInstaFenearte(): void{
    const browser = this.iab.create('https://www.instagram.com/fenearte','_blank',this.optBrowser);
  }

  ngOnInit() {
  }
}
