import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {


constructor(private document: DocumentViewer) { }

  ngOnInit() {
  }

//const options: DocumentViewerOptions = {
//  title: 'My PDF'
//}

openPDF(){
//  this.document.viewDocument('assets/myFile.pdf', 'application/pdf');
}



};
