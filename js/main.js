/* Modal Register*/
const openModalRegister = document.querySelector(".btn-register-class");
const modalRegister = document.querySelector(".modalReg");
const closeModalRegister = document.querySelector(".modal__closeReg");

openModalRegister.addEventListener("click", (e) => {
  e.preventDefault();
  modalRegister.classList.add("modal--show");
});

closeModalRegister.addEventListener("click", (e) => {
  e.preventDefault();
  modalRegister.classList.remove("modal--show");
});

/* Modal Log in */
const openModalLogin = document.querySelector(".btn-login-class");
const modalLog = document.querySelector(".modalLog");
const closeModalLog = document.querySelector(".modal__closeLog");

openModalLogin.addEventListener("click", (e) => {
  e.preventDefault();
  modalLog.classList.add("modal--showLog");
});

closeModalLog.addEventListener("click", (e) => {
  e.preventDefault();
  modalLog.classList.remove("modal--showLog");
});
