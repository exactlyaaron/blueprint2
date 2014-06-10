'use strict';

var traceur = require('traceur');
var Location = traceur.require(__dirname + '/../models/location.js');

exports.new = (req, res)=>{
  res.render('locations/new', {title: 'New Location'});
};

exports.index = (req, res)=>{
  Location.findAll(locations=>{
    console.log('**********');
    console.log(locations[0].name);
    res.render('locations/index', {locations:locations, title: 'ALLL Locationz'});
  });
};

exports.create = (req, res)=>{
  Location.create(req.body, ()=>{
    res.redirect('/locations');
  });
};
