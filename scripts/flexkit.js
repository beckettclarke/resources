/* ===[ ✅ GENERAL ]==================== */
/* Longform */
function append(e,t){t.appendChild(e)}
/* Shortform */
function ap(e,t){t.appendChild(e)}

/* ===[ 🎯 SELECTORS ]================== */
/* Longform */
function getId(i){return document.getElementById(i)};
function getCss(i){return document.querySelector(i)};
function getAllCss(i){return document.querySelectorAll(i)};
/* Shortform */
function gi(i){return document.getElementById(i)};
function qs(i){return document.querySelector(i)};
function qsa(i){return document.querySelectorAll(i)};

/* ===[ 🏗️ COMPLEX ]=================== */
function addCSS(c){
  let e = document.createElement('link');
  e.rel='stylesheet';
  e.href = c;
  document.head.appendChild(e);
  return e;
}




/* ===[ 📥 IMPORTS ]==================== */
addCSS('https://cdn.jsdelivr.net/gh/ItsFoxDev/fa-turbo/css/all.min.css');
addCSS('https://itsfoxdev.github.io/resources/scripts/flexkit.css');