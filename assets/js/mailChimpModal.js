function showEmpresaPopUp() {
  dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us19.list-manage.com","uuid":"8ffeab1d55e604110edf02de0","lid":"a1e19e9744","uniqueMethods":true}) });

  document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = 'MCPopupSubscribed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
}

document.getElementById("open-empresa-popup").onclick = function() {showEmpresaPopUp()};

function showFactoringPopUp() {
  dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us19.list-manage.com","uuid":"8ffeab1d55e604110edf02de0","lid":"60a8e86f5c","uniqueMethods":true}) });				

  document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = 'MCPopupSubscribed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
}

document.getElementById("open-factoring-popup").onclick = function() {showFactoringPopUp()};

function showNewsLetterPopUp() {
  dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us19.list-manage.com","uuid":"8ffeab1d55e604110edf02de0","lid":"6969b7a929","uniqueMethods":true}) })

  document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = 'MCPopupSubscribed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
}

document.getElementById("open-newsletter-popup").onclick = function() {showNewsLetterPopUp()};
