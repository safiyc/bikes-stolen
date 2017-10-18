(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bike = exports.Bike = function () {
  function Bike() {
    _classCallCheck(this, Bike);
  }

  _createClass(Bike, [{
    key: 'listBikeByLocation',
    value: function listBikeByLocation(location, distance) {
      $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + location + '&distance=' + distance + '&stolenness=proximity').then(function (response) {
        var list = response.bikes;
        list.forEach(function (bike) {
          $('.showBikes').append('<li>' + bike.title + '</li>');
        });
      });
    }
  }]);

  return Bike;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _bike = require('./../js/bike.js');

$(document).ready(function () {
  $('#bikesLocation').click(function () {
    var location = $('#location').val();
    var distance = $('#distance').val();
    $('#location').val("");
    $('#distance').val("");
    var bike = new _bike.Bike();
    bike.listBikeByLocation(location, distance);
  });
});

},{"./../js/bike.js":1}]},{},[2]);
