// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};

// place any jQuery/helper plugins in here, instead of separate, slower script files.

var ADAPT_CONFIG = {
  // Where is your CSS?
  path: 'stylesheets/',

  // false = Only run once, when page first loads.
  // true = Change on window resize and page tilt.
  dynamic: true,

  // First range entry is the minimum.
  // Last range entry is the maximum.
  // Separate ranges by "to" keyword.
  range: [
    '0px    to 600px  = core.css',
    '600px  to 1920px  = 600-and-up.css',
    '1920px           = tv-projection.css'
  ]
};