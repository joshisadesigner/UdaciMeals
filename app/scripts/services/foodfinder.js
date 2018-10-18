'use strict';
/**
 * @ngdoc service
 * @name udaciMealsApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udaciMealsApp.
 */

angular.module('udaciMealsApp')
  .service('foodFinder', function () {
    // this.getMenu = function () {
    //   return $.get( '/menu/menu.json' );
    // };

    this.items = [
      {
        id: 'chicken-pomegranate-salad',
        name: 'Chicken Pomegranate Salad',
        img: 'chicken-pomegranate-salad.jpg',
        calories: 430,
        rating: 4.1
      },
      {
        id: 'strawberry-pudding',
        name: 'Strawberry Pudding',
        img: 'strawberry-pudding.jpg',
        calories: 280,
        rating: 5
      },
      {
        id: 'ham-goat-cheese-croissant',
        name: 'Ham and Goat Cheese Croissant',
        img: 'ham-goat-cheese-croissant.jpg',
        calories: 670,
        rating: 3.9
      }
    ];
  });
