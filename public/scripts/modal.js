$(document).ready(function() {
  // MODAL
  var modalText = {
    othello: {
      title: 'Othello Game',
      tag: 'BOARD GAME',
      detail:
        'Othello game in C# using object oriented programming and simple interface.',
      link: 'https://github.com/itsikh100/OthelloGame_CS_Object_oriented'
    },
    garage: {
      title: 'Garage Managment System',
      tag: 'BUSINESS MANAGMENT',
      detail:
        'Garage managment system in C# using object oriented programming and factory design pattern.',
      link: 'https://github.com/itsikh100/GarageManagmentSystem_CS'
    },
    facebook: {
      title: 'Facebook App',
      tag: 'SOCIAL APPLICATION',
      detail:
        'Facebook app using different design patterns (Singelton, Facade, Proxy, Observer, Iterator, Strategy, Command) and working with facebook API.',
      link: 'https://github.com/itsikh100/Facebook_app_Design_Pattern_CS'
    },
    menus: {
      title: 'Menues Implementation',
      tag: '.NET FRAMEWORK',
      detail:
        'Menues implementation with interfaces and delegates in C# using .NET framework.',
      link: 'https://github.com/itsikh100/Menus_implementation_with_interfaces_and_delegates_CS'
    },
    caches: {
      title: 'Cache Unit Project - Server Side',
      tag: 'BACKEND DEVELOPMENT',
      detail:
        'Cache unit using cache algorithems to save requested pages - Server Side in Java.',
      link: 'https://github.com/itsikh100/CacheUnitProject_ServerSide_Java'
    },
    cachec: {
      title: 'Cache Unit Project - Client Side',
      tag: 'USER INTERFACE',
      detail:
        'Client side for sending requests for the server side by using JSON.',
      link: 'https://github.com/itsikh100/CachUnit_ClientSide_Java'
    },
    shortener: {
      title: 'URL-Shortener',
      tag: 'FULL-STACK',
      detail:
        'ShortURL is a url shortener to reduce a long link. Using tool to shorten links and share them, front-end: HTML, CSS and JavaScript, Back-end: Python, flask and sqlite.',
      link: 'https://github.com/itsikh100/URL_Shortener_Service'
    },
    todolist: {
      title: 'To Do List',
      tag: 'FULL-STACK',
      detail:
        'To do list contain all of the tasks that you need to complete on a given day or any other titles that you choose- for example: Home, Work etc. front-end: HTML, CSS, JavaScript, Back-end: Express in Node.js using MongoDB Atlas for Database.',
      link: 'https://ihtodolist.herokuapp.com/'
   },
   vidly: {
     title: 'Vidly- Movies Rental',
     tag: 'FULL-STACK',
     detail:
       'Vidly is Movies Reantal service, using C# ASP.NET MVC, HTML & CSS.',
     link: 'https://github.com/itsikh100/Vidly'
   },
   parkings: {
     title: 'Parking Management System - Server Side',
     tag: 'BUSINESS MANAGMENT',
     detail:
       'Parking managment system Web API in .NET Core using object oriented programming and factory design pattern.',
     link: 'https://github.com/itsikh100/Parking-Management-Server-C-.NET-Core'
   },
   parkingc: {
     title: 'Parking Management System - Client Side',
     tag: 'BUSINESS MANAGMENT',
     detail:
       'Parking managment system Client side using react.',
     link: 'https://github.com/itsikh100/Parking-Management-UI-React'
   }
  };

  $('#gallery .button').on('click touchend', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click touchend', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click touchend', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });

    if(/iPhone|iPad|iPodIEMobile/i.test(navigator.userAgent)){
      $('.close').css({
        bottom: "90px"
      });
      $('#modal .button').css({
        bottom: "90px"
      });
    }
  }
});
