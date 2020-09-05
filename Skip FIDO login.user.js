// ==UserScript==
// @name         Skip FIDO login
// @version      1.2
// @description  Skip FIDO login page
// @author       NoobChester
// @match        https://adfs.asas.qld.edu.au/adfs/ls/*
// @require      http://code.jquery.com/jquery-3.5.1.slim.min.js
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

document.getElementById('submitButton').dispatchEvent(new MouseEvent("click"));

$(function() {
    setTimeout(function(){
        document.getElementById('submitButton').dispatchEvent(new MouseEvent("click"));
    }, 31);
});

$(function() {
    setTimeout(function(){
        document.getElementById('submitButton').dispatchEvent(new MouseEvent("click"));
    }, 314);
});

$(function() {
    setTimeout(function(){
        document.getElementById('submitButton').dispatchEvent(new MouseEvent("click"));
    }, 3141);
});
