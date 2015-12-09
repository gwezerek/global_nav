'use strict';

//
// app.js is the entry point for the entire client-side
// application. All of the top-level views should be
// instantiated here.

var $ = require('jquery');
var analytics = require('./analytics.js');
var pageconfig = require('../data/pageconfig.json');
var notes = require('../data/notes.json');
var noteTemplate = require('../templates/includes/note.jade');
var speech = $('.js--speech');
require('./recirc.js');


/* ==========  Local variables  ========== */

var btnMenu = $('#js--global__header__nav__btn');
var menu = $('#js--global__header__wrap--secondary');
var btnSearch = $('#js--global__header__search__submit');
var primaryWrap = $('#js--global__header__wrap--primary');

/* ==========  Handlers  ========== */

btnSearch.on('click', function(event) {
	primaryWrap.toggleClass('global__header__wrap--primary--is--searching');
	$(this).toggleClass('btn--ui--is--on');
	$('#js--global__header__search__field').focus();
});

btnMenu.on('click', function() {
	$('body').toggleClass('body__global__nav--is--open');
	$(this).toggleClass('global__header__nav__btn--is--open btn--ui--is--on');
	menu.toggleClass('global__header__wrap--secondary--is--open');
});