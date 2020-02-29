// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://fido.asas.qld.edu.au/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
addGlobalStyle('body {background: rgb(24, 24, 24);}');
addGlobalStyle('h1 {color: rgba(255,255,255,0.87);}');
addGlobalStyle('.island section {background-color: rgb(48, 48, 48);}');
addGlobalStyle('a {color: rgba(100, 184, 255,1);}');
addGlobalStyle('body {color: rgb(255, 255, 255);}');
addGlobalStyle('.move-right .left-off-canvas-menu {box-shadow: 2px 2px 4px rgba(255, 255, 255, 0.66);');
addGlobalStyle('.left-off-canvas-menu {background: #242424;}');
addGlobalStyle('.left-off-canvas-menu ul.off-canvas-list li a {color: rgb(100, 184, 255);}');
addGlobalStyle('.left-off-canvas-menu .logo-wrapper {background-color: #242424;}');
addGlobalStyle('.left-off-canvas-menu .left-menu-dock {color: rgb(150, 234, 255);}');
addGlobalStyle('.card-new .card-feature-image {position: relative;padding-top: 50%;background-color: rgba(255, 224, 204, 0.5);}');
addGlobalStyle('background-color: rgba( 52, 156, 217, 0.1 );}');
addGlobalStyle('.calendar-list {list-style: none;margin: 0;padding: 0;padding-right: 0px;padding-left: 0px;clear: both;background-color: rgba(77,144,201,0);}');
addGlobalStyle('.card-new .card-feature-image {opacity: 0.5!important}');
addGlobalStyle('ul.tileList {opacity: 0.5}');
addGlobalStyle('.swiper-container .swiper-slide img {opacity: 0.5}');
addGlobalStyle('.calendar-list {opacity: 0.5;}');
addGlobalStyle('.tabs {background: rgb(36, 36, 36);}');
addGlobalStyle('.tabs dd.active > a, .tabs .tab-title.active > a {color: #ffffff;}');
addGlobalStyle('.right-off-canvas-menu {background-color: rgb(18, 18, 18);');
addGlobalStyle('.button, .context-switch nav a, .avatar-switch nav a, .attachzone .dzone.button, .dropzone-wrap .dzone.button, button, input[type="submit"], a.submit, button.submit, .flex-list.buttons a.submit, .flex-list.buttons button.submit, .flex-list.buttons a, .flex-list.buttons button, .adtp-btn {background-color: rgba(202, 218, 228,0.5);}');
addGlobalStyle('.column-left .island section {color: rgba(0,0,0, 1)!important;background-color: rgba(42, 42, 42, 1)!important;}');
addGlobalStyle('h3{color: #000000;');
addGlobalStyle('#component-layout .column-right .island section {color: rgba(42, 42, 42, 0.970);background-color: rgba(255, 5, 5, 0)!important;}');
})();