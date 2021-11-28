import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  data:string = "teste";
  myJSON = [{ "name": "Chris", "age": "38" },{ "name": "Chris", "age": "38" }];

  constructor() { }

  ngOnInit() {
  }

}
