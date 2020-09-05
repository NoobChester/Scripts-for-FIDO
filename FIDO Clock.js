// ==UserScript==
// @name         FIDO clock
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  FIDO CLOCK
// @author       NoobChester
// @match        https://fido.asas.qld.edu.au/*
// @run-at       document-start
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js
// ==/UserScript==
/* globals $ */
$(function() {
    var d = new Date();
    var n = d.toLocaleTimeString();
    let app = document.querySelector('h1');
    app.append(" [" + n + "]");
});
