'use strict';

var traceur = require('traceur');
//var User = traceur.require(__dirname + '/../models/user.js');
var Building = traceur.require(__dirname + '/../models/building.js');
var Location = traceur.require(__dirname + '/../models/location.js');
var Floor = traceur.require(__dirname + '/../models/floor.js');

exports.new = (req, res)=>{
  if(res.locals.user){
    Location.findAll(locations=>{
      res.render('buildings/new', {user: res.locals.user, locations: locations, title: 'New Building Page'});
    });
  } else {
    res.redirect('/login');
  }
};

exports.create = (req, res)=>{
  Building.create(req.body, building=>{
    console.log('REQ BODY--------------');
    console.log(req.body);
    res.redirect('/buildings/' + building._id);
  });
};

exports.show = (req, res)=>{
  Building.findById(req.params.id, building=>{
    Location.findById(building.locationId, location=>{
      building.cost(cost=>{
        Floor.findAll(floors=>{
          res.render('buildings/show', {floors: floors, location: location, user:res.locals.user, building: building, cost: cost});
        });
      });
    });
  });
};
