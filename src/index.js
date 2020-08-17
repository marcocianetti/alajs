(function() {
  document.addEventListener('copy', function(event) {
    event.preventDefault();

    var clipboardData = (event.clipboardData || window.clipboardData);
    if (!clipboardData) {
      return;
    }

    clipboardData.setData('text/plain', window.getSelection().toString() + ' [Source: ' + window.location.href + ']');
  });
})();