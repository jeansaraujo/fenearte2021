import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
 //page2 = Page2;
    ionViewDidLoad() {
    }
    pdfUrl : string;
  //  pins = PINS;
    str : string;
    constructor(public navCtrl: NavController) {
      //, private fileOpener: FileOpener
    }

  ngOnInit() {
  }
/*
  onSelect(pin: Pin): void {
        this.fileOpener.open('assets/helloworld.pdf', 'application/pdf')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error openening file', e));
    }
}
*/


};
