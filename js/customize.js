$(document).ready(function(){
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    sectionsColor: ['#313131', '#F8F8F8', '#1E223F'],
    scrollBar: true,
    easing: 'swing',
    navigation: true,
    navigationPosition: 'right',

    afterRender: function(){
      $('#section1 .pic').css('visibility','visible').hide().fadeIn('slow');
    },

    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
      loadedSection.find('.pic').css('visibility','visible').hide().fadeIn('slow');
      var lastSection = '#section' + (index-1);
      var nextSection = '#section' + (index+1);
      console.log("lastSection: " + lastSection);
      console.log("nextSection:" + nextSection);
      if ($(lastSection)) {
        console.log("reset lastSection: " + lastSection);
        $(lastSection).find('.pic').css('visibility','hidden');
      }
      if ($(nextSection)) {
        console.log("reset nextSection:" + nextSection);
        $(nextSection).find('.pic').css('visibility','hidden');
      }
    }
  });
});