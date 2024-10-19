import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Place } from '../../place';
import { PlacesService } from '../../places.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place:Place | undefined;
  constructor(private router: Router, private nav: NavController, 
    private route: ActivatedRoute, private placesService: PlacesService,
  private modalCtrl: ModalController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.hasOwnProperty('placeId')){
        return;
      }
      if (this.placesService.getPlaceById(params['placeId'])){
        this.place = this.placesService.getPlaceById(params['placeId']);
      }

    });
  }
  bookPlace(){
    //this.router.navigate(['/places/tabs/discover']); //willn't give animation for back navigation
    //this.nav.navigateBack(['/bookings']); //will give animation for back navigation
    //this.nav.pop(); //should use this if we can ensure there are valid url's is stack memory

    this.modalCtrl.create({component: CreateBookingComponent, componentProps:{selectedPlace: this.place} }).then(elmnt => {
      elmnt.present(); 
      return elmnt.onDidDismiss();
    }).then(returnData => {
      if(returnData.role === 'booked'){
        console.log(returnData.data.message);
      }
      else{
        console.log(returnData.data.message);
      }
    });
  }

}
