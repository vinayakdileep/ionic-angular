import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  place:Place | undefined;
  constructor(private route: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.hasOwnProperty('placeId')){
        return;
      }
      if (this.placesService.getPlaceById(params['placeId']))
        this.place = this.placesService.getPlaceById(params['placeId']);
    });
  }

}
