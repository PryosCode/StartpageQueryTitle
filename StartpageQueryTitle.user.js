// ==UserScript==
// @name        StartpageQueryTitle
// @version     1.2
// @description Startpage.com Search Engine Title Changer
// @author      PryosCode
// @namespace   https://github.com/PryosCode/StartpageQueryTitle
// @website     https://github.com/PryosCode/StartpageQueryTitle
// @supportURL  https://github.com/PryosCode/StartpageQueryTitle/issues
// @icon        https://github.com/PryosCode/StartpageQueryTitle/raw/master/images/logo.png
// @updateURL   https://github.com/PryosCode/StartpageQueryTitle/raw/master/StartpageQueryTitle.meta.js
// @downloadURL https://github.com/PryosCode/StartpageQueryTitle/raw/master/StartpageQueryTitle.user.js
// @license     MIT
// @copyright   Copyright (c) 2020 PryosCode
// @run-at      document-start
// @match       https://*.startpage.com/*
// ==/UserScript==

const q = document.getElementById("q");
if(q !== null && q.value !== "") {
    document.title = q.value + " - Startpage.com";
}