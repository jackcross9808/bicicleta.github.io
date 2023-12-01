class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        BENITEZ HERNANDEZ OMAR JOVANNY
        IC-43M
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
