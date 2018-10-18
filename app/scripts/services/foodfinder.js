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
    this.getMenu = function () {
      return $.get( '/menu/menu.json' );
    };

    this.getItem = function(id) {
      var menuItemfile = '/menu/' + id + '.json';
      return $.get( menuItemfile );
    };
  });
