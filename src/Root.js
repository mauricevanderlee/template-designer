import React, { Component } from 'react';
var template = require('./template.html');

export default class Root extends Component {
	createMarkup() {
		return {
			__html: template
		};
	}
	render() {
		return (
			<div dangerouslySetInnerHTML={this.createMarkup()} />
		)
	}
}

$(document).ready(function() {

	// Navigation sticks to top while scrolling
	$('#page_nav').clone().insertAfter('#page_nav').addClass('navbar-fixed-top').removeClass('navbar-static-top').hide();
	var scrollIntervalID = setInterval(stickIt, 10);
	function stickIt() {
		var orgElementTop = $('#page_nav').offset().top;
		if ($(window).scrollTop() >= (orgElementTop) & $(window).innerWidth() > 767) {
			$('.navbar-fixed-top').show();
			$('.navbar-static-top').css('visibility','hidden');
		} else {
			$('.navbar-fixed-top').hide();
			$('.navbar-static-top').css('visibility','visible');
		}
	}

	// Aktivate tooltips
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});

	// Highlight buttons in navigation while scrolling
	$('body').scrollspy({
		target: '.navbar-fixed-top'
	});

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

});
