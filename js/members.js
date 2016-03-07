(function() {

  // Variables
  var coreMembers = ["rrapstine", "allantito", "ryanorsinger"];
  var collaborators = [];

  // Counters
  var arrayCount;
  var memberCount = 0;
  var carouselCount = 0;

  // Pick member from list
  function selectMember(members) {
    members.forEach(getProfile);

    // Reset memberCount to allow new active item
    memberCount = 0;
  }

  // Get member information from GitHub
  function getProfile(user) {
    $.get("http://api.github.com/users/" + user)
    .done(function(profile) {
      console.log("Everything went well!");
      console.log(profile);

      displayMember(profile, arrayCount);
    }).fail(function(jqXHR, textStatus, errorThrown) {
      console.log("Something went wrong!");
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    });
  }

  // Write member information to screen
  // If status == 1 --> Core Member, else --> collaborator
  function displayMember(user, status) {
    // User Info
    var name = user.name;
    var login = user.login;
    var avatar = user.avatar_url;
    var url = user.html_url;

    // HTML Elements
    var $start;
    var $item;
    var $column;
    var $image = $('<img class="avatar center-block" src="' + avatar + '" alt="Avatar">');
    var $link = $('<a href="' + url + '" target="_blank">');
    var $text = $('<p class="text-center">').text(name + " (@" + login + ")");

    if(status == 1) {
      $start = $('#carousel1 > .carousel-inner');
    } else {
      $start = $('#carousel2 > .carousel-inner');
    }

    // Check for first member
    if(memberCount == 0) {
      $item = $('<div>', {
        class: "item active"}).appendTo($start);
      memberCount++;
    } else {
      $item = $('<div>', {
        class: "item"}).appendTo($start);
    }


    // Output member to carousel
    $column = $('<div>', {
      class: "col-md-4"
    }).appendTo($item);

    $column.append($link).append($text);
    $image.appendTo($link);

    // Increment carouselCount
    carouselCount++;

    // Check carouselCount to run renderCarousel in carousel.js
    if(carouselCount >= (coreMembers.length + collaborators.length)) {
      renderCarousel();
    }
  }

  // Slide one at a time
  function renderCarousel() {
    // Initialize carousel auto cycle
    $('#carousel1, #carousel2').carousel({
        interval: 5000
    });

    $('.fdi-carousel .item').each(function() {
      var next = $(this).next();
      if(!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));

      if(next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
      } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
    });
  }

  // Populate Carousels
  selectMember(coreMembers);
  arrayCount = 1;

  // If no collaborators, don't run
  if(collaborators.length > 0) {
    selectMember(coreMembers);
    arrayCount = 2;
  } else {
    $('#carousel2 > .carousel-inner').append("<p>Nothing to show here...yet</p>");
  }

})();
