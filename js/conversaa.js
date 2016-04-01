jQuery.conversaaPixel = function conversaaPixel() {
  var title = escape(document.title);
  var url = window.location.href;
  var ref = document.referrer;
  var userLang = navigator.language || navigator.userLanguage;
  var email = Drupal.settings.conversaa.email;
  var trackingPixel = Drupal.settings.conversaa.url + "/mtracking.gif?url=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(title)+
  "&language=" + encodeURIComponent(userLang)+"&referrer=" + encodeURIComponent(ref) + "&email=" + encodeURIComponent(email);
  return trackingPixel;
}
jQuery(document).ready(function($) {
  var pixel = $.conversaaPixel();
  $('body').append("<img src='"+pixel+"' style='display:none'; />");
});
