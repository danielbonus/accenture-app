import { LitElement, html, css } from 'lit-element';
import Prism from 'prismjs';

class ViewCode  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        background-color: #343a40;
        text-align: left;
      }
      .view-code {
        position: relative;
        left: -5%;
        color: #decf88;
      }

      .token.keyword {
        color:#cf3476;
      }
      .token.function {
        color: #417dc1;
      }
      .token.punctuation {
        color: white;
      }
      .token.operator {
        color: white;
      }
      .token.number {
        color: #cd5700;
      }
      .token.boolean {
        color: #417dc1;
      }
      .token.comment {
        color: #2E8B57;
      }

      @media only screen and (min-width : 320px) and  (max-device-width : 480px) {
        .view-code {
          left: -10%;
        }
      }
    `;
  }

  static get properties() {
    return {
      code: { type: String },
      codeTransform: { type: String }
    };
  }

  firstUpdated() {
    this.codeTransform = Prism.highlight(this.code, Prism.languages.javascript, 'javascript');
    let viewCode = this.shadowRoot.querySelector('.view-code');
    viewCode.innerHTML += this.codeTransform;
  }

  render() {
    return html`
      <pre>
        <div class="view-code"></div>
      </pre>

    `;
  }
}

customElements.define('view-code', ViewCode);
