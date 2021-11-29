import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public item: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.paramMap.get('item');
  }

}
