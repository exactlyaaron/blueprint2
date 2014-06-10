/* global describe, it */

'use strict';

process.env.DBNAME = 'blueprint-test';

//var cp = require('child_process');
var expect = require('chai').expect;
//var traceur = require('traceur');
//var db = traceur.require(__dirname + '/../../helpers/db.js');
//var factory = traceur.require(__dirname + '/../../helpers/factory.js');
var app = require('../../../app/app.js');
var request = require('supertest');


describe('users', function(){

  // before(function(done){
  //   db(function(){
  //     Floor = traceur.require(__dirname + '/../../../app/models/floor.js');
  //     done();
  //   });
  // });
  //
  // beforeEach(function(done){
  //   global.nss.db.collection('floors').drop(function(){
  //     cp.execFile(__dirname + '/../../fixtures/before.sh', {cwd:__dirname + '/../../fixtures'}, function(err, stdout, stderr){
  //       factory('floor', function(floors){
  //         done();
  //       });
  //     });
  //   });
  // });
  //
  //
  // afterEach(function(done){
  //   cp.execFile(__dirname + '/../../fixtures/after.sh', {cwd:__dirname + '/../../fixtures'}, function(err, stdout, stderr){
  //     done();
  //   });
  // });

  describe('GET /login', function(){
    it('should get the login webpage', function(done){
      request(app)
      .get('/login')
      .end(function(err, res){
        expect(res.status).to.equal(200);
        done();
      });
    });
  });

});
