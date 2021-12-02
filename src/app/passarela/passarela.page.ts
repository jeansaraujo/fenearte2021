import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passarela',
  templateUrl: './passarela.page.html',
  styleUrls: ['./passarela.page.scss'],
})
export class PassarelaPage implements OnInit {
  public aula:string;

 constructor() { }

  ngOnInit() {
    this.aula="teste";
  }

}
