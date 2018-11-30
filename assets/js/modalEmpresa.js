var modalInvestidor = document.querySelector(".modal-investidor")
var modalEmpresa = document.querySelector(".modal-empresa");
var optionEmpresa = document.querySelector(".optionEmpresa");
var optionFactoring = document.querySelector(".optionFactoring")
var closeButtonEmpresa = document.querySelector(".close-button-empresa");
var closeButtonInvestidor = document.querySelector(".close-button-investidor");

function toggleEmpresaModal() {
  modalEmpresa.classList.toggle("show-modal");
}

function toggleInvestidorModal() {
  modalInvestidor.classList.toggle("show-modal")
}

function windowOnClick(event) {
  if (event.target === modalEmpresa) {
    toggleEmpresaModal();
  } else if(event.target === modalInvestidor) {
    toggleInvestidorModal();
  }
}

optionEmpresa.addEventListener("click", toggleEmpresaModal);
closeButtonEmpresa.addEventListener("click", toggleEmpresaModal);
window.addEventListener("click", windowOnClick);

optionFactoring.addEventListener("click", toggleInvestidorModal);
closeButtonInvestidor.addEventListener("click", toggleInvestidorModal);
window.addEventListener("click", windowOnClick);
