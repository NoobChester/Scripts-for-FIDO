// ==UserScript==
// @name         Skip FIDO login
// @version      0.1
// @description  Skip FIDO login page
// @author       Chester Au
// @match        https://adfs.asas.qld.edu.au/adfs/ls/*
// @require      http://code.jquery.com/jquery-3.5.1.slim.min.js
// ==/UserScript==

$(function() {
    setTimeout(function(){
        document.getElementById('submitButton').dispatchEvent(new MouseEvent("click"));
    }, 314);
})();
