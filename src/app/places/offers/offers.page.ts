import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit{

  offerPlace: Place[] = [];
  constructor(private placesService: PlacesService) { }
  ngOnInit(): void {
    this.offerPlace = this.placesService.getPlaces();
  }


}
