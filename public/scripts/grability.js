
'use strict';

/**  
  * Get the news
  * "/api/news_mock.json" 
 **/
var NewsWorkIt = function (url) {
  this._urlGet = url,
  this._oReq = new XMLHttpRequest(),
  this._news = 'error'

  this.reqListener = function() {
    //console.log(JSON.parse(this.responseText)
  	addNewsMenu(JSON.parse(this.responseText))
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
  * Add the news to the page
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
      'style':'display: none',
      'html':'<a><img src="' + newItem.image + '" class="img_news"></a>' +
          		'<article class="news">' +
            	  '<h1 class="head ellipsis"><p class="id_new">' + newItem.id +'</p>' +
              	  	'<p class="title_new ellipsis uppercase">' + newItem.title + '</p>' +
            	  '</h1>' +
            	  '<div>' + newItem.content + '</div>' +
          		'</article>'
    }).appendTo(main);
  })

  /**
   * Control to behaviour when the user clicks on a new
   **/
  $('.intro_news').on('click', function(e) {
  	$( '.nav h1.head' ).remove()
  	$( $(this).next()[0] ).clone().appendTo( '.nav' )
  	if (navigator.userAgent.search('Firefox') != -1) {
  	  $('.nav .head').css("margin", "10px")
    }

  	if ($(this).parent().next()[0].style.display == "none") {
  	  $(this).parent().parent().children(".content").css("display", "none")
  	  $(this).parent().next().css("display", "flex") 
  	} else {
  	  $(this).parent().next().css("display", "none")
  	}
  });
}


























