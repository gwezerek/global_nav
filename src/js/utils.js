'use strict';

var utils = require('@fivethirtyeight/interactive-utils');
var _ = require('underscore');
var moment = require('moment-timezone');

// Put your project specific utility functions here
module.exports = _.extend(utils, {
	formatTimeStamp: function(time) {
		var timeObj = moment.tz(time, 'America/New_York');
		return timeObj.format('h:mm a ') + ' EST | ' + timeObj.format('MMM D, YYYY');
	}
});
