export class Modal {
  constructor(id) {
    this.element = document.getElementById(id);
    this.overlay = document.querySelector(".overlay");
    this.closeBtn = this.element.querySelector(".modal__close");
    this.listenClose();
  }
  open() {
    this.element.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
  }

  close() {
    this.element.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
  }

  isOpen() {
    return this.element.classList.contains("modal-showed");
  }

  listenClose() {
    this.closeBtn.addEventListener("click", () => this.close());
  }
}
