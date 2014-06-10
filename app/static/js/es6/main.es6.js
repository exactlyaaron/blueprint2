/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  var xVals = [];
  var columns = [];
  var yVals = [];
  var rows = [];

  function init(){
    //$('body').on('mousedown', '.cell', startPaint);
    //$('body').on('mouseup', '.cell', stopPainting);
    $( '.cell' ).mouseup(function() {
        stopPainting();
    });
    $( '.cell' ).mousedown(function() {
        startPaint();
    });
  }


  function startPaint(){
    console.log('START PAINTING');
    var origin = [];
    origin.push($(this).attr('data-x'));
    origin.push($(this).attr('data-y'));

    columns.push(origin[0]*1);
    rows.push(origin[1]*1);


    $('.cell').mouseenter(function() {
      var x = $(this).attr('data-x');
      var y = $(this).attr('data-y');
      var destination = [];
      destination.push(x);
      destination.push(y);

      xVals = [];
      xVals.push(origin[0]*1);
      xVals.push(destination[0]*1);

      yVals = [];
      yVals.push(origin[1]*1);
      yVals.push(destination[1]*1);

      paintCells(origin, destination);
    });


  function paintCells(origin, destination){
    var rows = [];
    for(var y = yVals[0]; y <= yVals[1]; y++){
      rows.push(y);
    }

    var columns = [];
    for(var x = xVals[0]; x <= xVals[1]; x++){
      columns.push(x);
    }

    var paintedCells = [];
    for(var i = 0; i < columns.length; i++){
      for(var j = 0; j < rows.length; j++){
        var coordinates = [];
        coordinates.push(columns[i]);
        coordinates.push(rows[j]);
        paintedCells.push(coordinates);
      }
    }

    $('.cell').css('background-color', '#fff');

    paintedCells.forEach(c=>{
      x = c[0].toString();
      y = c[1].toString();
      $(`.cell[data-x=${x}][data-y=${y}]`).css('background-color', '#ccc');
      $(`.cell[data-x=${x}][data-y=${y}]`).toggleClass('painted');
    });
  }

  function stopPainting(paintedCells){
    console.log('STOP');
  }

  }
})();
