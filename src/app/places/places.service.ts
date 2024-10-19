import { Injectable } from '@angular/core';
import { Place } from './place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place('1','Eiffel Tower', 'Paris', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpN7iNnHHCWENfRo-ozIhTmohw5NWDsD-pMQ&s', 48.8583),
    new Place('2','Colosseum', 'Rome', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqWzpvyZ_QXXmNqy498fS5LpvBELlXxG8MA&s', 41),
    new Place('3','Taj Mahal', 'Agra', 'https://live.staticflickr.com/5039/14267206165_e1f8e96f22_b.jpg', 27),
    new Place('4','Great Wall of China', 'Beijing', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvesk7asIvE99aew0LHw0oYdE751z_anzcRA&s', 39),
    new Place('5','Pyramids of Giza', 'Giza', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8sCENUikCtRffOz7PVVyNLO4JBrRtoEb-Ig&s',44)
  ];
  constructor() { }

  getPlaces(){
    return [...this._places];
  }

  getPlaceById(id: string){
    const place = this._places.find(p => p.id === id);
    return place? {...place}: undefined;
  }
}
