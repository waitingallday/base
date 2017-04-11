(function(root) {
  "use strict";

  var updateTheme = function(theme) {
    document.documentElement.style.setProperty('--theme', 'var(--theme-'+theme+')');
  };

  var handleClick = function(e) {
    e.preventDefault();
    updateTheme(this);
  };

  window.AppLoad = function() {
    for (var recs = document.querySelectorAll('a[data-update-theme]'), i = recs.length - 1; i >= 0; i--)
      recs[i].addEventListener('click', handleClick.bind(recs[i].getAttribute('data-update-theme')));
  };

  if (window.attachEvent) {
    window.attachEvent('onload', window.AppLoad);
  } else {
    document.addEventListener('DOMContentLoaded', window.AppLoad, false);
    document.addEventListener('page:load', window.AppLoad, false);
    document.addEventListener('page:restore', window.AppLoad, false);
  }

})(this);
