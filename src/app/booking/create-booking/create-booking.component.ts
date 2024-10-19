import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/places/place';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent  implements OnInit {

  @Input() selectedPlace: Place | undefined;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log('');
  }

  confirmBooking(){
    this.modalController.dismiss({message:'Booking done successfully'}, 'booked').then(() => {});
  }

  onClose(){
    this.modalController.dismiss({message:'Booking cancelled'}, 'close').then(() => {});
  }
 

}
