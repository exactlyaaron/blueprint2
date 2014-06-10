// /* global describe, it, before, beforeEach */
// /* jshint expr:true */
//
// 'use strict';
//
// process.env.DBNAME = 'blueprint-test';
//
// var expect = require('chai').expect;
// //var Mongo = require('mongodb');
// var traceur = require('traceur');
// var db = traceur.require(__dirname + '/../../helpers/db.js');
// var factory = traceur.require(__dirname + '/../../helpers/factory.js');
//
//
// var Building;
// var Floor;
// var Room;
//
// describe('Room', function(){
//   before(function(done){
//     db(function(){
//       // User = traceur.require(__dirname + '/../../../app/models/user.js');
//       // Location = traceur.require(__dirname + '/../../../app/models/location.js');
//       Building = traceur.require(__dirname + '/../../../app/models/building.js');
//       Floor = traceur.require(__dirname + '/../../../app/models/floor.js');
//       Room = traceur.require(__dirname + '/../../../app/models/room.js');
//       done();
//     });
//   });
//
//   beforeEach(function(done){
//     //global.nss.db.collection('floors').drop(function(){
//       global.nss.db.collection('buildings').drop(function(){
//         //factory('floor', function(floors){
//           factory('building', function(buildings){
//             done();
//           });
//         //});
//       });
//     //});
//   });
//
//
//   describe('.create', function(){
//     it('should create a room', function(done){
//       var body = {buildingId: 'c123456789abcdef01234567', name:'living room', beginX:'100', beginY:'200', endX:'200', endY:'400', floorId:'b123456789abcdef01234568'};
//       Room.create(body, function(bldg){
//         expect(bldg.rooms).to.be.instanceof(Array);
//         expect(bldg.rooms[0]).to.be.instanceof(Room);
//         expect(bldg.rooms[0].name).to.equal('living room');
//         done();
//       });
//
//
//
//
//       // Building.findById('c123456789abcdef01234567', function(building){
//       //   Room.create({name:'living room', beginX:'100', beginY:'200', endX:'200', endY:'400', floorId:'b123456789abcdef01234568'}, function(room){
//       //     building.rooms.push(room);
//       //     building.save(function(){
//       //       expect(room).to.be.instanceof(Room);
//       //       expect(room.floorId).to.be.instanceof(Mongo.ObjectID);
//       //       expect(room.name).to.equal('living room');
//       //       expect(room.begin).to.be.instanceof(Object);
//       //       expect(room.begin.x).to.deep.equal(100);
//       //       expect(room.begin.y).to.deep.equal(200);
//       //       done();
//       //     });
//       //   });
//       // });
//     });
//   });
//
//
// });
