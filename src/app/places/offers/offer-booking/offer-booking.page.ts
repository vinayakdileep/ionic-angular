import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place';

@Component({
  selector: 'app-offer-booking',
  templateUrl: './offer-booking.page.html',
  styleUrls: ['./offer-booking.page.scss'],
})
export class OfferBookingPage implements OnInit {

  place: Place | undefined;
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placesService: PlacesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.hasOwnProperty('placeId')){
        this.navCtrl.navigateBack("/places/tabs/offers");
        return;
      }
      if (this.placesService.getPlaceById(params['placeId']))
        this.place = this.placesService.getPlaceById(params['placeId']);
    });
  } 

}
