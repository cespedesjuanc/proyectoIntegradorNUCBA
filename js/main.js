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
