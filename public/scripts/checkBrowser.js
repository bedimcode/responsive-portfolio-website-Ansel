// if browser is IE, redirect

if (window.navigator.userAgent.indexOf('Trident/') > 0) {
  // alert('Internet Explorer is not supported.')
  window.location.replace('/outdated.html')
}

if (window.document.documentMode) {
  // alert('Internet Explorer is not supported.')
  window.location.replace('/outdated.html')
}
