$(document).ready(function(){
  var lastSection;

  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    sectionsColor: ['#313131', '#F8F8F8', '#1E223F'],
    scrollBar: true,
    easing: 'swing',
    navigation: true,
    navigationPosition: 'right',

    afterRender: function(){
      lastSection = $('#section1');
      $('#section1 .pic').css('visibility','visible').hide().fadeIn('slow');
    },

    afterLoad: function(anchorLink, index){
      $(lastSection).find('.pic').css('visibility','hidden');

      var loadedSection = $(this);
      lastSection = loadedSection;
      loadedSection.find('.pic').css('visibility','visible').hide().fadeIn('slow');
    }
  });
});