'use strict';
$(document).ready(function() {
/*МОБИЛКА: Отрабатываем вксрытие описания в metro*/
var metroMobileLayer = document.getElementsByClassName('metro__item-layer-m');
var currentMobileLayer;
var currentMobileBlock;
var currentMobileLink;


$(metroMobileLayer).click(function(ev) {
  $(currentMobileLayer).addClass('metro__item-layer-m--visible');
  $(currentMobileLink).removeClass('metro__item-link-m--visible');

  $(this).removeClass('metro__item-layer-m--visible')
  currentMobileLayer = this;

  currentMobileBlock = $(this).parent();
  currentMobileLink = $(currentMobileBlock).children('.metro__item-link-m');
  $(currentMobileLink).addClass('metro__item-link-m--visible');
});
/* */
/*ТАБЛЕТ: Отрабатываем вскрытие описания в metro*/
var metroTabletLayer = document.getElementsByClassName('metro__tablet-layer');
var currentTablet;
var currentTabletBlock;
var currentTabletLink;
var currentTabletTitle;

$(metroTabletLayer).click(function(ev) {
  $(currentTabletTitle).removeClass('metro__item-title--active');

  $(currentTablet).removeClass('metro__tablet-layer--active');
  $(this).addClass('metro__tablet-layer--active');
  currentTablet = this;
  currentTabletBlock = $(this).parent();
  currentTabletLink = $(currentTabletBlock).children('.metro__item-link');
  currentTabletTitle = $(currentTabletLink).children('.metro__item-title');

  $(currentTabletTitle).addClass('metro__item-title--active');
});
/* */
/* скролл галерей в about */
		$("#about-gallery-list").smoothTouchScroll({ 
			continuousScrolling: false
		});
/* */
});
/* show more*/
var showMore = document.getElementsByClassName('show-more');

var forMoreAboutOne = document.getElementsByClassName('for-more--about-one');

$(showMore).click(function() {
  if (this.classList.contains('show-more--about-one')) {
    $(this).addClass('show-more--active');
    $(forMoreAboutOne).addClass('for-more--active');
  }
});