export class Form {
  constructor(id) {
    this.element = document.getElementById(id);
  }

  getValues() {
    const formData = new FormData(this.element);
    return Object.fromEntries(formData);
  }

  isValid() {
    return this.element.checkValidity();
  }

  reset() {
    this.element.reset();
  }
}
