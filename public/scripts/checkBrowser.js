// if browser is IE, redirect

if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
  window.location = 'microsoft-edge:' + window.location
  setTimeout(function () {
    window.open('', '_self', '').close()
    window.location = '/outdated.html'
  }, 0)
}

if (window.navigator.userAgent.indexOf('Trident/') > 0) {
  alert('Internet Explorer is not supported.')
  window.location.replace('/outdated.html')
}

if (window.document.documentMode) {
  window.location.replace('/outdated.html')
}
