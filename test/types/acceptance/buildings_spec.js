/* global describe, it, before, beforeEach */
/* jshint expr:true */

'use strict';

process.env.DBNAME = 'blueprint-test';

//var cp = require('child_process');
var expect = require('chai').expect;
var traceur = require('traceur');
var db = traceur.require(__dirname + '/../../helpers/db.js');
var factory = traceur.require(__dirname + '/../../helpers/factory.js');
var app = require('../../../app/app.js');
var request = require('supertest');

var User;
var Location;

describe('buildings', function(){

  before(function(done){
    db(function(){
      User = traceur.require(__dirname + '/../../../app/models/user.js');
      Location = traceur.require(__dirname + '/../../../app/models/location.js');
      done();
    });
  });

  beforeEach(function(done){
    global.nss.db.collection('users').drop(function(){
      global.nss.db.collection('locations').drop(function(){
        factory('user', function(users){
          factory('location', function(locations){
            done();
          });
        });
      });
    });
  });

  describe('Authentication', function(){
    var cookies;
    var cookie;

    beforeEach(function(done){
      console.log('******************************');
      console.log('   BEFORE EACH LOGIN');
      console.log('******************************');
      request(app)
      .post('/login')
      .send('email=sue@aol.com')
      .send('password=5678')
      .end(function(err, res){
        cookies = res.headers['set-cookie'];
        console.log('RES HEADERS-------------------');
        console.log(res.headers);

        var first = cookies[0].split(' ');
        var second = cookies[1].split(' ');
        cookie = first[0] + ' ' + second[0].slice(0, (second[0].length - 1));

        done();
      });
    });

    describe('GET /buildings/new', function(){
      it('should show the new buildings webpage', function(done){
        request(app)
        .get('/buildings/new')
        .set('cookie', cookie)
        .end(function(err, res){
          console.log('RES HEADERS-------------------');
          console.log(res.headers);
          expect(res.status).to.equal(200);
          expect(res.text).to.include('sue@aol.com');
          expect(res.text).to.include('Mountain');
          expect(res.text).to.include('a123456789abcdef01234567');
          done();
        });
      });

      it('should NOT show the new buildings webpage - NOT LOGGED IN', function(done){
        request(app)
        .get('/buildings/new')
        .end(function(err, res){
          expect(res.status).to.equal(302);
          expect(res.headers.location).to.equal('/login');
          done();
        });
      });
    });

    describe('POST /buildings', function(){
      it('should create a new building', function(done){
        request(app)
        .post('/buildings')
        .set('cookie', cookie)
        .send('_id=c123456789abcdef01234570')
        .send('name=mars')
        .send('x=100')
        .send('y=50')
        .send('locationId=a123456789abcdef01234567')
        .end(function(err, res){
          expect(res.status).to.equal(302);
          expect(res.headers.location).to.equal('/buildings/c123456789abcdef01234570');
          done();
        });
      });

      it('should NOT create a new building - NOT LOGGED IN', function(done){
        request(app)
        .post('/buildings')
        .end(function(err, res){
          expect(res.status).to.equal(302);
          expect(res.headers.location).to.equal('/login');
          done();
        });
      });
    });

    describe('GET /buildings/:id', function(){
      it('should show a building', function(done){
        request(app)
        .get('/buildings/c123456789abcdef01234567')
        .set('cookie', cookie)
        .end(function(err, res){
          expect(res.status).to.equal(200);
          expect(res.text).to.include('castle');
        //  expect(res.text).to.include('$');
          done();
        });
      });

      it('should NOT show a building - NOT LOGGED IN', function(done){
        request(app)
        .post('/buildings/c123456789abcdef01234567')
        .end(function(err, res){
          expect(res.status).to.equal(302);
          expect(res.headers.location).to.equal('/login');
          done();
        });
      });
    });




  });
});
