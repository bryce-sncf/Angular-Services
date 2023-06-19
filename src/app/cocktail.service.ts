import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

   cocktails: Cocktail[] = [
    { name: 'Mojito', prix: 8.5, image: 'mojito.jpg' },
    { name: 'Cosmopolitan', prix: 10, image: 'cosmo.jpg' },
    { name: 'Margarita', prix: 9, image: 'margarita.jpg' }
  ];

  constructor() { }

  getCocktails() {
    return this.cocktails;
    }
}
