export default class AvisItem extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM
    this.shadow = this.attachShadow({ mode: "open" });

    // Wrapper
    this.container = document.createElement("article");
    this.container.classList.add("avis");

    // Contenu
    this.container.innerHTML = `
      <h3 class="avis-titre"></h3>
      <p class="avis-note ⭐"></p>
      <p class="avis-texte"></p>
      <p class="avis-date"></p>
    `;

    // Style
    const style = document.createElement("style");
    style.textContent = `
      .avis {
        background: #ffffff;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 16px;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
      }

      .avis-titre {
        margin: 0 0 8px;
        font-size: 18px;
        color: #333;
      }

      .avis-note {
        font-weight: bold;
        color: hsla(56, 68%, 27%, 1.00);
        margin-bottom: 8px;
      }

      .avis-texte {
        margin-bottom: 10px;
        color: #555;
      }

      .avis-date {
        font-size: 12px;
        color: #999;
        text-align: right;
      }
    `;

    // Append
    this.shadow.append(style, this.container);
  }

  static get observedAttributes() {
    return ["prenom", "nom", "ville", "note", "contenu", "date"];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const prenom = this.getAttribute("prenom") || "";
    const nom = this.getAttribute("nom") || "";
    const ville = this.getAttribute("ville") || "";
    const note = this.getAttribute("note") || "";
    const contenu = this.getAttribute("contenu") || "";
    const date = this.getAttribute("date") || "";

    this.shadow.querySelector(".avis-titre").textContent =
      `${prenom} ${nom} (${ville})`;

    this.shadow.querySelector(".avis-note").textContent =
      `Note : ${note}/5`;

    this.shadow.querySelector(".avis-texte").textContent = contenu;
    this.shadow.querySelector(".avis-date").textContent = date;
  }
}

customElements.define("avis-item", AvisItem);
