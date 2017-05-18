jQuery(()=>{

  /*free hosting*/
  jQuery(".cbalink").hide();
  homeSlider();
  hamburgerMenu();
  upScroll();
  teamGrid();
  projectsGrid();
  gallery();
  if (jQuery(".visible-map").length>0){
    googleMap();
  }
  stickyHeader();
  formTest();
})

jQuery( window ).resize(function() {
  teamGrid();
  gallery();
});

function hamburgerMenu(){

  var McButton = jQuery("[data=hamburger-menu]");
  var McBar1 = McButton.find("b:nth-child(1)");
  var McBar2 = McButton.find("b:nth-child(2)");
  var McBar3 = McButton.find("b:nth-child(3)");

  McButton.click( function() {
    jQuery(this).toggleClass("active").closest(".top-menu").toggleClass("active");

    if (McButton.hasClass("active")) {
      McBar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
      McBar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
      .velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
      McButton.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
    } else {
      McButton.velocity("reverse");
      McBar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
      .velocity({ top: "100%" }, {duration: 200, easing: "swing"});
      McBar1.velocity("reverse", {delay: 800});
    }
  });

/*$element.velocity({ 
  width: "500px",
  property2: value2
}, {
  duration: 400,
  easing: "swing",
  queue: "",
  begin: undefined,
  progress: undefined,
  complete: undefined,
  display: undefined,
  visibility: undefined,
  loop: false,
  delay: false,
  mobileHA: true
});*/
}


function homeSlider(){
  var homeSlider = jQuery('.slider-home').slick({
    //fade: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });
  var totalSlides = jQuery('.slider-home').find(".item").length;
  jQuery('.slider-home').append('<div class="slideNumber"><span class="current">01</span><span class="total">' 
    + printZero(totalSlides) 
    + '</span></div>');
  jQuery('.slider-home').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    jQuery('.slider-home .total').text( printZero(slick.slideCount));
    jQuery('.slider-home .current').text( printZero(nextSlide + 1));
  });

}
function printZero(num){
  return (num < 10) ?("0" + num) : num;
}

function upScroll(){
  var toTop = jQuery("#toTop");
  document.addEventListener("scroll", 
    function() {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > window.innerWidth / 3) {
        toTop.addClass("active");
      } else {
        toTop.removeClass("active");
      }
    });
  toTop.click(function(){
    jQuery("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  })
}

function teamGrid(){
  var masonary = jQuery('.grid');
  jQuery(window).load(function () {
    if (window.matchMedia('(max-width: 768)').matches){
      masonary.masonry('destroy')
    } else {
      masonary.masonry({
        itemSelector: '.grid-item',
        columnWidth: 375
      });
    }
  })
};



function projectsGrid(){
  var masonary = null;
  jQuery(window).load(function () {
    if (true){
      masonary = jQuery('.grid-projects').masonry({
        itemSelector: '.grid-item',
        columnWidth: 430
      });
    } else {
      console.log("false")
      if (masonary != null)
        masonary.masonry('destroy');
    }
  })
}


function googleMap(){
  google.maps.event.addDomListener(window, 'load', initialize);
  function initialize() {
    var styles = [ { "featureType": "all", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" }, { "visibility": "off" } ] }, { "featureType": "administrative", "elementType": "all", "stylers": [ { "hue": "#ff0000" }, { "lightness": 100 }, { "visibility": "off" } ] }, { "featureType": "administrative", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "hue": "#ffffff" }, { "saturation": -100 }, { "lightness": 100 }, { "visibility": "on" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "hue": "#ffffff" }, { "saturation": -100 }, { "lightness": 100 }, { "visibility": "off" } ] }, { "featureType": "poi", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": -100 }, { "visibility": "simplified" } ] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [ { "color": "#eaeaea" } ] }, { "featureType": "road", "elementType": "labels", "stylers": [ { "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 100 }, { "visibility": "off" } ] }, { "featureType": "road", "elementType": "labels.text", "stylers": [ { "visibility": "simplified" }, { "color": "#dcdcdc" } ] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "color": "#8a8a8a" } ] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#e8e8e8" } ] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [ { "color": "#bbbbbb" } ] }, { "featureType": "road.highway.controlled_access", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway.controlled_access", "elementType": "labels.text", "stylers": [ { "visibility": "off" }, { "color": "#ff0000" } ] }, { "featureType": "road.highway.controlled_access", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [ { "visibility": "simplified" }]},{"featureType": "road.arterial","elementType": "labels","stylers": [{"visibility": "simplified"}]},{"featureType": "road.arterial","elementType": "labels.text","stylers": [{"color": "#bbbbbb"},{"visibility": "simplified"}]},{"featureType": "road.local","elementType": "labels.text","stylers": [{"color": "#bbbbbb"}]},{"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"hue": "#ff0000"},{"lightness": -100},{"visibility": "off"}]},{"featureType": "transit","elementType": "geometry.fill","stylers": [{"color": "#ebebeb"}, { "visibility": "simplified" } ] }, { "featureType": "transit", "elementType": "labels", "stylers": [ { "hue": "#ffffff" }, { "lightness": 100 }, { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "hue": "#ffffff" }, { "saturation": -100 }, { "lightness": 100 }, { "visibility": "on" } ] } ];
    var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
    var myLatlng = new google.maps.LatLng(52.536153, 13.377951);
    var myOptions = {
      zoom: 15,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    var image = {
      url: 'images/icons/google-pin@3x.svg.svg',// full path
      //size: new google.maps.Size(20, 32),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32)
    };
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image
    });
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    
  }

}
/***  /Google-map  ***/


function stickyHeader(){
  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 1) {
      jQuery("body").addClass("sticky");
    } else {
      jQuery("body").removeClass("sticky");
    }
  }
}

function gallery(){
  jQuery(document).ready(function() {
    if (window.matchMedia("screen and (min-width: 768px)").matches) {
       jQuery(".grid-projects .img-holder").fancybox({
        prevEffect  : 'none',
        nextEffect  : 'none',
        helpers : {
          title : {
            type: 'outside'
          },
          thumbs  : {
            width : 50,
            height  : 50
          }
        }
      });
    } else {
      var gall =jQuery(".grid-projects .img-holder").fancybox({
        prevEffect  : 'none',
        nextEffect  : 'none',
        helpers : {
          title : {
            type: 'outside'
          }
        },
        beforeShow : function() {
          this.title = (this.title ? '<span class="title">' + this.title + '</span>' : '') + ' <span class="num">' + printZero(this.index + 1) + ' | ' + printZero(this.group.length) + ' </span>';
        } // beforeSho
      });
    }
  });
}





function formTest(){
  jQuery(".wpcf7-form input[type=submit]").click(function(e){
    e.preventDefault();
    jQuery(".wpcf7-validation-errors").show();
  })
}