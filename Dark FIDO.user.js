// ==UserScript==
// @name         Dark FIDO
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
addGlobalStyle('a {color: rgba(0, 139, 255,0.75);}');
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
addGlobalStyle('.column-left .island section {color: rgba(255,255,255, 0.75)!important;background-color: rgba(42, 42, 42, 1)!important;}');
addGlobalStyle('h3{color: #000000;');
addGlobalStyle('h2, h4{color: #ffffff;');
addGlobalStyle('::selection {color: #000;background-color: #fff;');
addGlobalStyle('table tr th, table tr td {color: rgba(0,0,0,1);');
addGlobalStyle('#component-layout .column-right .island section {color: rgba(42, 42, 42, 0.970);background-color: rgba(255, 5, 5, 0)!important;}');
addGlobalStyle('table thead {background: #808080;}')
addGlobalStyle('.meta {color: rgba(0, 0, 0, 1);-webkit-text-stroke-width: 0px;-webkit-text-stroke-color: white;margin: 0 0 0.375rem 0;font-size: 0.8125rem;font-style: italic;}')
addGlobalStyle('.island section {color: rgba(42, 42, 42, 0.970);background-color: rgb(0, 0, 0)!important;}')
addGlobalStyle('article > :first-child, .cke_editable > :first-child {margin-top: 0;opacity: 1;}')
addGlobalStyle('.component-titlebar {background-color: rgba(229, 239, 247, 0.5)!important;}')
addGlobalStyle('.island section {color: rgba(255, 255, 255, 0.75) !important;}')
addGlobalStyle('.tab-bar {background: #404040;}')
addGlobalStyle('table {background: rgb(42,42,42);}')
addGlobalStyle('table tr.even, table tr.alt, table tr:nth-of-type(2n) {background: rgb(42,42,42);}')
addGlobalStyle('.timetable-subject{opacity:0.75}');
addGlobalStyle('img {display: inline-block;vertical-align: middle;opacity: 0.5;}');
addGlobalStyle('');
;})();