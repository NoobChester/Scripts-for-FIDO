// ==UserScript==
// @name         Skip FIDO login
// @version      1.3
// @description  Skip FIDO login page
// @author       NoobChester
// @match        https://adfs.asas.qld.edu.au/adfs/ls/*
// ==/UserScript==
var counter = 0;
var i = setInterval(function(){
    // do your thing
    document.getElementById('submitButton').dispatchEvent(new MouseEvent("click"));
    counter++;
    if(counter === 9) {
        clearInterval(i);
    }
}, 9*i);
