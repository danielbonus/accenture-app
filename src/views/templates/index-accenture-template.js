import { LitElement, css, html } from 'lit-element';

export class IndexAccentureTemplate extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;

      }

    `;
  }

  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {

    }
  }

  render() {
    return html `
      <section class="container-fluid container-white">
        <div class="row">
          <div class="col-md-12 col-container">
            <h1>Indice</h1>
          </div>
          <div class="col-md-12 col-container">
            <ul class="list-group list-group-flush list-index">
              <li class="list-group-item"> <span>Javascript fundamentos ES6</span> <span class="date-index"> 1 día</span></li>
              <li class="list-group-item"> <span>Polymer 2</span> <span class="date-index"> 1 - 2 día</span></li>
              <li class="list-group-item"> <span>Lit Element</span> <span class="date-index">1 día</span></li>
              <li class="list-group-item"> <span>Cells</span> <span class="date-index">3 día</span></li>
               <ul class="list-group-item">
                <li class="list-group-item">Sass</li>
                <li class="list-group-item">Testing</li>
                <li class="list-group-item">Demo</li>
               </ul>
            </ul>
          </div>
        </div>
      </section>
    `;
  }



}
customElements.define('index-accenture-template', IndexAccentureTemplate);
