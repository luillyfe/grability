
'use strict';

/**  Get the news **/
/** "/api/news_mock.json" **/
var NewsWorkIt = function (url) {
  this._urlGet = url,
  this._oReq = new XMLHttpRequest(),
  this._news = 'error'

  this.reqListener = function() {
  	var data = JSON.parse(this.responseText)
    //console.log(json)
  	
  	//json.forEach(function (item) {
  	  //console.log(main)
      addNewsMenu(data)
    //})
  },

  this.makeRequest = function () {
  	this._oReq.addEventListener("load", this.reqListener)
  	this._oReq.open("GET", this._urlGet, true)
  	this._oReq.send()
  }

}

var newsWorkItOne = new NewsWorkIt('/api/news_mock.json')
newsWorkItOne.makeRequest()


/**
   Add the news to the page
**/
var addNewsMenu = function (data) {
  var main = document.querySelector('main')
  
  data.forEach(function (newItem) {
  	$('<section/>', {
      'class':'top_news',
      'html':'<a class="intro_news">' +
                '<img src="'+ newItem.image +'" class="img_preview">' +
              '</a>' +
              '<h1 class="head ellipsis">' +
                '<p class="id_new">'+ newItem.id +'</p>' +
                '<p class="title_new ellipsis uppercase">' + newItem.title + '</p>' +
              '</h1>'
    }).appendTo(main);

    $('<section/>', {
      'class':'content',
      'html':'<a><img src="' + newItem.image + '" class="img_news"></a>' +
          		'<article class="news">' +
            	  '<h1 class="head ellipsis"><p class="id_new">' + newItem.id +'</p>' +
              	  	'<p class="title_new ellipsis uppercase">' + newItem.title + '</p>' +
            	  '</h1>' +
            	  '<div>' + newItem.content + '</div>' +
          		'</article>'
    }).appendTo(main);
  })
}


























