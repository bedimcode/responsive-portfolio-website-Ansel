// if browser is IE, redirect

console.log(window.document.documentMode)

if (window.navigator.userAgent.indexOf('Trident/') > 0) {
  alert('Internet Explorer is not supported.')
  window.location.replace('/outdated.html')
}

if (window.document.documentMode) {
  window.location.replace('/outdated.html')
}
