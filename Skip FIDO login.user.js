// ==UserScript==
// @name         Skip FIDO login
// @version      0.1
// @description  Skip FIDO login page
// @author       Chester Au
// @match        https://adfs.asas.qld.edu.au/adfs/ls/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById('submitButton').dispatchEvent(new MouseEvent("click"));

})();