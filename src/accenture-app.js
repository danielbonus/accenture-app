import { LitElement, html, css } from 'lit-element';
import { initRouter } from './utils/router';


class accentureApp  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;

      }

    `;
  }

  static get properties() {
    return {};
  }


  firstUpdated() {
    initRouter(this);
  }


  createRenderRoot() {
    return this;
  }



  render() {
    return html`
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <a class="navbar-brand" href="/">OnBoarding Accenture</a>
            <img src="./assets/img/acenture-icon.png" alt="acenture" id="icon">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/javascript">JavaScript</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/polymer">Polymer 2</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
      </header>
      <main class="content-views-accenture">

      </main>
      <footer>

      </footer>
    `;
  }
}

window.customElements.define('accenture-app', accentureApp);
