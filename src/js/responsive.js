var $ = require('jquery');

// Private Class Variable
var windowIsMobile;

// Constructor
var Responsive = function() {
  windowIsMobile = this.isMobile();
};

// Prototype
Responsive.prototype = {

  isRetina: function() {
    return window.devicePixelRatio > 1;
  },

  isMobile: function() {
    return $(window).width() < 980;
  },

  isDesktop: function() {
    return $(window).width() >= 980;
  },

  onSwitch: function(fn) {
    var self = this;
    // Listen to Resize Event
    $(window).resize(function () {
      var newWindowIsMobile = self.isMobile();
      // call fn if switching from mobile to desktop or vice versa
      if (windowIsMobile !== newWindowIsMobile) {
        fn();
      }
      windowIsMobile = newWindowIsMobile;
    });
  }

};

// Export
module.exports = new Responsive ({});
