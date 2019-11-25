import { LitElement, css, html } from 'lit-element';

export class PolymerAccentureTemplate extends LitElement {

   static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;

      }
    `
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
      <section class="jumbotron text-center header-image-accenture" style="background-image: url('https://desarrolloweb.com/archivoimg/general/4296.jpg')"></section>
      <div class="submenu-category">
        <ul>
          <li><a class="link-submenu" href="/polymer/#titleWebcomponents">Web Components</a></li>
          <li><a class="link-submenu" href="/polymer/#titlePolymer">Polymer 2</a></li>
          <li><a class="link-submenu" href="/polymer/#titleInstalacion">Instalación Polymer</a></li>
          <li><a class="link-submenu" href="/polymer/#titlePropiedades">Propiedades</a></li>
          <li><a class="link-submenu" href="/polymer/#titleCiclos">Ciclos de vida</a></li>
          <li><a class="link-submenu" href="/polymer/#titleEventos">Eventos</a></li>
          <li><a class="link-submenu" href="/polymer/#titleComputed">Computed</a></li>
          <li><a class="link-submenu" href="/polymer/#titleObserver">Observer</a></li>
        </ul>
      </div>
      <section class="container-fluid container-gray">
          <div class="row">
            <div class="col-md-12 col-container">
              <h1 id="titleWebcomponents">Web Components</h1>
              <p>Polymer es un Framework / librería que nos ayuda a la creación de componentes basada en los estándares de los Web Components.</p>
              <div class="container-explanation">
                <h5>¿Que son los Web Components?</h5>
                <p>Los Web Components son un estándar de W3C para desarrollar web desglosando los elementos en pequeños paquetes reutilizables y personalizables, que mantienen toda su funcionalidad HTML, CSS y javascript.</p>
                <ul>
                  <li>Templates</li>
                  <li>Custom Elements</li>
                  <li>Shadow DOM</li>
                  <li>HTMLImports</li>
                </ul>
              </div>
              <div class="container-code">
                <view-code code='
                    <div class="banner">
                      <div id="caja-logo">
                        <img src="logo.png" alt="El logo de la empresa">
                      </div>
                      <div id="caja-titulo">
                        <h1>Mi empresa</h1>
                      </div>
                    </div>
                '>
                </view-code>
              </div>
            </div>
          </div>
          <p>Con Web Components</p>
          <div class="container-code">
            <view-code code='
            <mi-banner logo="logo.png">
              <h1>Mi empresa</h1>
            </mi-banner>
            '>
            </view-code>
          </div>
          <p>Al ser un estándar de W3C, en los navegadores que están soportados, no hace falta más librerías, ni extensiones para que funcionen.</p>
      </section>
      <section class="container-fluid container-white">
        <div class="row">
          <div class="col-md-12 col-container">
            <h5>Templates</h5>
            <p>Se trata de definir un bloque de código usando **HTML y javascript. Este código se ubica entre las etiquetas <b>"template"</b> y puede ser reutilizado en todas las páginas. Así todas pueden tener la misma apariencia sin reescribir el código.</p>
          </div>
        </div>
        <div class="container-code">
          <view-code code='
              <!DOCTYPE html>
              <html>
                <head>
                  <title>Page Title</title>
                </head>
                <body>
                  <template>
                    <p>
                      Prueba
                    </p>
                  </template>
                  <script>
                    var plantilla = document.querySelector("template p");
                    console.log(plantilla);
                  </script>
                </body>
              </html>
          '>
          </view-code>
        </div>
        <div class="container-explanation">
          <p>Si nos Fijamos hemos creado una etiqueta template y dentro el contenido, pero este no se renderizara y tampoco es accesible por javascript.</p>
          <a href="https://codepen.io/DROMERO14/project/editor/AzkBJN#0">Ver ejemplo practico</a>
        </div>
        <div class="container-code">
          <view-code code='
              <!DOCTYPE html>
              <html>
              <head>
                <title>Page Title</title>
              </head>
              <body>
                <customElements class="miplantilla">
                  <template id="miplantilla">
                    <style>
                      p {
                        color: #FAFAFA;
                        background-color: #0080FF;
                        padding: 10px;
                        width: 20%;
                        height: 100px;
                      }
                    </style>
                    <p>Esta es mi primera plantilla</p>
                  </template>
                </customElements>
                <customElements>
                  <p>Aquí vuelvo a usar la plantilla.</p>
                </customElements>
              </body>
              </html>
          '>
          </view-code>
        </div>
        <a href="https://codepen.io/DROMERO14/project/editor/AzkBJN#0">Ver ejemplo practico</a>
      </section>
      <section class="container-fluid container-gray">
        <h1>Custom Elements</h1>

        <div class="container-explanation">
          <h5>CustomElementRegistry</h5>
          <p> Esta es la clase encargada de crear los Custom Tags, por medio de los WebComponents, para simplificar el acceso se ha definido el objeto window.customElements.</p>
        </div>
        <div class="container-code">
              <view-code code='
              class MyElement extends HTMLElement {
                constructor() {
                  super();
                  // element created
                }

                connectedCallback() {
                  // calls this method when the element
                  // is added to the document (can be called
                  // many times if an element is repeatedly added/removed)
                }

                disconnectedCallback() {
                  // browser calls this method
                  // when the element is removed from the document
                  // (can be called many times if an element
                  // is repeatedly added/removed)
                }

                static get observedAttributes() {
                  return [/* array of attribute names to monitor for changes */];
                }

                attributeChangedCallback(name, oldValue, newValue) {
                  // called when one of attributes listed above is modified
                }

                adoptedCallback() {
                  // called when the element is moved to a new document
                  // (happens in document.adoptNode, very rarely used)
                }

                // there can be other element methods and properties
              }
              customElements.define("my-element", MyElement);

              <my-element></my-element>
              '>
              </view-code>
        </div>
      </section>
      <section class="container-fluid container-white">
        <div class="row">
          <div class="col-md-12 col-container">
              <h5>Shadow Dom</h5>
              <p>Se puede decir que es un DOM dentro del DOM, surge por el problema que teníamos con la manipulación del DOM, ya que al tener aplicaciones altamente reactivas y dinámicas surgen problemas de rendimiento. Si el DOM crea un árbol DOM global, el Shadow Root crea un sub-árbol dentro del DOM regular, y dentro de este los nodos HTML, CSS, JS son independientes, gracias a esto permite la encapsulacion.</p>
          </div>
          <div class="col-md-12 col-container">
              <h5>Html import</h5>
              <p>Los HTML imports son una nueva característica que tenemos en HTML5, formando parte de los web components y básicamente lo que nos permite es importar documentos HTML dentro de otros documentos HTML</p>
          </div>
        </div>
        <div class="container-code">
            <view-code code='
                <link rel="import" href="import.html">
            '>
            </view-code>
        </div>
      </section>
      <section class="container-fluid container-gray">
        <div class="row">
          <div class="col-md-12 col-container">
              <h1 id="titlePolymer">Polymer 2</h1>
              <p>Polymer se apoya al máximo en las características que nos ofrecen los navegadores, por ello al crear un componente con Polymer 2 no hay tanta diferencia.</p>
          </div>
        </div>
          <div class="container-code">
            <view-code code='
                <link rel="import"  href="https://polygit.org/components/polymer/polymer-element.html">
            '>
            </view-code>
          </div>
          <div class="container-code">
            <view-code code="
              class HolaComponentes extends Polymer.Element {
                static get template() { return document.getElementById('mi-template') }
                static get is() { return 'hola-componentes'; }
              }

              customElements.define(HolaComponentes.is, HolaComponentes);
            ">
            </view-code>
          </div>
          <div class="container-explanation">
          <h5>Class extends Polymer:</h5>
          <ul>
            <li>Creamos el shadow dom a partir de un template. Para ello definimos una propiedad getter llamada "template" que se encarga de acceder a la página, buscar una etiqueta TEMPLATE a través de su id "mi-template".</li>
            <li>Extendemos la clase HolaComponentes de Polymer.Element en lugar de HTMLElement.</li>
            <li>Creamos una propiedad getter que indica el nombre del custom element que estamos implementando.</li>
            <li>Luego el customElements.define() es prácticamente igual. Solo que nos apoyamos en la propiedad "is" de la clase, para acceder al nombre del custom element que se está definiendo.</li>
          </ul>
          </div>
          <div class="container-code">
            <view-code code='
            <html lang="en">
              <head>
                <meta charset="UTF-8">

                <link rel="import"  href="https://polygit.org/components/polymer/polymer-element.html">

                <title>Test de componente usando Polymer 2</title>
              </head>
              <body>

                <template id="mi-template">
                  <p>Hola! soy un Polymer Element simple!</p>
                </template>

                  <script>
                    class HolaComponentes extends Polymer.Element {
                      static get template() { return document.getElementById("mi-template") }
                      static get is() { return "hola-componentes"; }
                    }

                    customElements.define(HolaComponentes.is, HolaComponentes);>
                  </script>

                <hola-componentes></hola-componentes>
              </body>
            </html>
            '>
            </view-code>
          </div>
          <p>Para que esto funcione, en el cuerpo de la página debería figurar el template al que se está accediendo en "static get template()", como vemos en el ejemplo.</p>
      </section>
      <section class="container-fluid container-white">
        <div class="row">
          <div class="col-md-12 col-container">
            <h1>Estructura de un componente en polymer</h1>
            <p>Polymer trabaja con la etiqueta llamada dom-module, en la cual se engloban las distantas partes de un componente.</p>
            <div class="container-code">
              <view-code code='
                  <dom-module id="nombre-componente">
                  </dom-module>
              '>
              </view-code>
            </div>
            <p>Entre dom-module y su cierre colocaremos todo el código del componente. Además, como puedes apreciar, el nombre del componente que se está creando, indicado en el atributo "id", debe de tener al menos un carácter guión "-".</p>
            <p>En ese archivo además colocaremos los import HTML de las dependencias del componente, que al menos será la propia librería Polymer. Es decir, en el archivo HTML de implementación del componente tendremos algo como esto:</p>
            <div class="container-code">
              <view-code code='
                <link rel="import"  href="https://polygit.org/components/polymer/polymer-element.html">

                <dom-module id="nombre-componente">
                </dom-module>'>
              </view-code>
            </div>
          </div>
        </div>
      </section>
      <section class="container-fluid container-white">
        <div class="row">
          <div class="col-md-12 col-container">
            <h5>Template del componente</h5>
            <p>Dentro de un componente de Polymer podemos colocar un template con el código HTML que necesitaremos para la representación de ese elemento en la página. Las etiquetas HTML que coloquemos en el template formarán parte del shadow dom del componente que estamos implementando.</p>
            <div class="container-code">
              <view-code code='
                  <dom-module id="nombre-componente">
                    <template>
                      <h2>Esto es un test</h2>
                    </template>
                  </dom-module>
              '>
              </view-code>
            </div>
            <div class="container-explanation">
              <h5>Estilos del Componente</h5>
              <p>El componente que estamos generando tiene la posibilidad de tener sus propias reglas de estilos, que no afectarán más que al HTML que tengamos dentro del template.</p>
              <p>Los estilos tendrán que estar dentro de las etiquetas template</p>
              <div class="container-code">
                <view-code code='
                  <template>
                    <style>
                    h2 {
                      background-color: orange;
                      color: white;
                    }
                    </style>
                    <h2>Esto es un test</h2>
                  </template>
                '>
                </view-code>
              </div>
            </div>
          </div>
        </div>
        <div class="container-explanation">
          <h5>Javascript del componente</h5>
          <p>Ahora nos queda la parte del Javascript, que también debemos colocar dentro de dom-module para que todo funcione como debería ser</p>
          <div class="container-code">
            <view-code code="
                class NombreComponente extends Polymer.Element {
                    static get is() {
                      return 'nombre-componente';
                    }
                    constructor() {
                      super();
                    }
                }
            ">
            </view-code>
          </div>
        </div>
      </section>
      <section class="container-fluid container-gray">
        <div class="row">
          <div class="col-md-12 col-container">
              <h5>Ejemplo completo</h5>
              <div class="container-code">
              <view-code code='
                <link rel="import"  href="https://polygit.org/components/polymer/polymer-element.html">
                <dom-module id="nombre-componente">
                  <template>
                    <style>
                    h2 {
                      background-color: orange;
                      color: white;
                    }
                    </style>
                    <h2>Esto es un test</h2>
                  </template>

                  <script>
                    class NombreComponente extends Polymer.Element {
                      static get is() {
                        return "nombre-componente";
                      }
                    }
                    customElements.define(NombreComponente.is, NombreComponente);
                  </script>
                  </dom-module>
              '>
              </view-code>
            </div>
          </div>
        </div>
      </section>
      <section class="container-fluid container-white">
      <div class="row">
        <div class="col-md-12 col-container">
          <h1 id="titleInstalacion">Instalación de Polymer</h1>
          <p>¿Que necesitamos?</p>
          <ul>
            <li>Sistema de version Git <a href="https://git-scm.com/">Instalar Git</a></li>
            <li>Node <a href="https://nodejs.org/es/">Instalar Node</a></li>
            <li>Gestor de dependencias Bower <a href="https://bower.io/">Instalar Bower</a></li>
            <li>Ploymer CLI</li>
            <div class="container-code">
              <view-code code='
                  npm install -g polymer-cli
              '>
              </view-code>
            </div>
          </ul>
        </div>
      </div>
      <div class="container-explanation">
        <h5>Crear proyecto de cero</h5>
      </div>
      <div class="container-code">
        <view-code code='
            mkdir test-cli
        '>
        </view-code>
      </div>
      <div class="container-code">
        <view-code code='
            cd test-cli
        '>
        </view-code>
      </div>
      <div class="container-code">
        <view-code code='
          polymer init
        '>
        </view-code>
      </div>
      <p>Verás que te ofrece una serie de alternativas, de momento podemos crear una aplicación vacía con la opción "polymer-2-application". Puedes seleccionarla con los cursores y luego apretar "enter".</p>
      <img src="https://desarrolloweb.com/archivoimg/general/4300.png" alt="estructura">
      <div class="container-explanation">
        <h5>Servir un proyecto</h5>
        <p>Debido a la necesidad de un servidor web, el propio CLI incorpora uno, que podemos lanzar con el comando:</p>
      </div>
      <div class="container-code">
        <view-code code='
          polymer serve
        '>
        </view-code>
      </div>
      </section>
      <section>
        <div class="container-fluid container-gray">
          <div class="col-md-12 col-container">
            <h1 id="titlePropiedades">Propiedades del componente</h1>
            <p>Se definen devolviendo un objeto con todas las propiedades que nuestro componente vaya a necesitar. Podemos especificar muchas cosas al declararlas y gracias a ello podrán tener distintos comportamientos que nos facilitarán diversas situaciones</p>
          </div>
          <div class="container-code">
            <view-code code="
            class EstadoAnimo extends Polymer.Element {
              static get is() {
                return 'estado-animo';
              }
              static get properties() {
                return {
                  animo: {
                    type: String,
                    value: 'feliz'
                  }
                }
              }
            }
            customElements.define(EstadoAnimo.is, EstadoAnimo);
            ">
            </view-code>
          </div>
          <div class="container-explanation">
            <h5>Binding del valor de las propiedades al template</h5>
            <p>Otra de las ventajas de Polymer es que, mediante una simple sintaxis en el template, podemos volcar el valor de una propiedad en la representación del componente.</p>
          </div>
          <div class="container-code">
            <view-code code="
            <template>
              <style>
                span {
                  text-transform: uppercase;
                }
              </style>
              <div>
                Hoy me encuentro <span>{{animo}}</span>
              </div>
            </template
            ">
            </view-code>
          </div>
          <p>Otra de las cosas básicas que debemos saber de las propiedades es que en los componentes se pueden colocar atributos y asignarles desde fuera valores.</p>
          <div class="container-code">
            <view-code code='
              <estado-animo animo="sorprendido"></estado-animo>
            '>
            </view-code>
          </div>
          <a href="https://polymer-library.polymer-project.org/2.0/docs/devguide/properties">Documentación oficial</a>
        </div>
      </section>
      <section class="container-fluid container-white">
        <div class="row">
          <div class="col-md-12 col-container">
            <h1 id="titleCiclos">Ciclos de vida de Polymer 2</h1>
            <p>Para el desarrollo basado en componentes, el estándar de Web Components V1 ha establecido una serie de métodos que nos permiten realizar tareas a medida que ocurren ciertas cosas con los elementos personalizados, como su creación, inserción en la página, eliminación de la página, etc. </p>
            <ul>
              <li><b>constructor:</b> Es el propio constructor de la clase ES6 que se escribe para implementar un custom element. El constructor se invoca una vez por cada elemento singular creado de un tipo.</li>
              <li><b>connectedCallback:</b> Este estado del ciclo de vida ocurre cuando el elemento se inyecta en el DOM de la página.</li>
              <li><b>disconnectedCallback:</b> Este estado ocurre cuando el elemento se borra del DOM de la página.</li>
              <li><b>attributeChangedCallback:</b> Este momento del ciclo de vida de los componentes se produce cada vez que un atributo o propiedad del componente cambia.</li>
              <li><b>ready:</b> este callback para definir acciones durante el ciclo de vida se denomina "One-time initialization" en la documentación de Polymer 2. Básicamente es como un "connectedCallback", solo que no se ejecuta más que 1 vez, la primera que se inyecta en el DOM de la página.</li>
            </ul>
          </div>
        </div>
        <div class="container-code">
            <view-code code='
            <link rel="import" href="../bower_components/polymer/polymer-element.html">
            <dom-module id="ciclo-vida">
              <template>
                <style>
                  :host {
                    display: block
                  }
                </style>

                <div>Este es un elemento "ciclo-vida"</div>

              </template>

              <script>
                class CicloVida extends Polymer.Element {

                  static get is() {
                    return "ciclo-vida";
                  }

                  static get properties() {
                    return {
                      test: String
                    };
                  }

                  constructor() {
                    super();
                    console.log("Ejecutándose el constructor")
                  }

                  connectedCallback() {
                    super.connectedCallback();
                    console.log("Ejecutándose connectedCallback");
                  }

                  disconnectedCallback() {
                    super.disconnectedCallback();
                    console.log("Ejecutándose disconnectedCallback");
                  }

                  attributeChangedCallback(nombre, valorAnterior, valorNuevo) {
                    super.attributeChangedCallback();
                    console.log("Ejecutándose attributeChangedCallback", nombre, valorAnterior, valorNuevo);
                  }

                  ready() {
                    super.ready();
                    console.log("Ejecutándose ready");
                  }
                }

                window.customElements.define(CicloVida.is, CicloVida);
              </script>
            </dom-module>
            '>
            </view-code>
          </div>
          <a href="https://polymer-library.polymer-project.org/2.0/docs/devguide/registering-elements#lifecycle-callbacks">Documentación oficial</a>
      </section>
      <section class="container-fluid container-gray">
        <div class="row">
          <div class="col-md-12 col-container">
            <h1 id="titleEventos">Eventos</h1>
            <p>A la hora de escribir un template podemos asociar una función manejadora de evento en cualquier elemento del shadow dom del componente. Para ello simplemente usaremos un atributo "on-", seguido del nombre del evento que queramos definir su manejador. Ese atributo tendrá como valor el nombre del método manejador del evento que se desea asociar.</p>
            <div class="container-code">
              <view-code code='
                <button on-click="incrementaClic">Clic para contar</button>
              '>
              </view-code>
            </div>
            <div class="container-code">
              <view-code code="
                incrementaClic(e) {
                  console.log('Objeto evento', e)
                }
              ">
              </view-code>
            </div>
            <div class="container-explanation">
              <h5>Ejemplo en componente</h5>
              <div class="container-code">
              <view-code code='
              <link rel="import" href="../../bower_components/polymer/polymer-element.html">

              <dom-module id="cuenta-clics">
                <template>
                  <style>
                    :host {
                      display: block;
                      padding: 5px;
                      border: 1px solid orange;
                      margin-bottom: 5px;
                    }
                    p {
                      margin-top: 0;
                      padding: 5px;
                      background-color: darkorange;
                      color: white;
                    }
                  </style>

                  <p>
                    Llevas [[contador]] clics
                  </p>
                  <button on-click="incrementaClic">Clic para contar</button>
                  <button on-click="resetear">Resetear la cuenta</button>
                </template>

                <script>
                  class CuentaClics extends Polymer.Element {
                    static get is() {
                      return "cuenta-clics";
                    }

                    static get properties() {
                      return {
                        contador: {
                          type: Number,
                          value: 0
                        }
                      }
                    }

                    constructor() {
                      super();
                    }

                    incrementaClic(e) {
                      this.contador++;
                      console.log("Objeto evento", e)
                    }

                    resetear() {
                      this.contador = 0;
                    }

                  }

                  window.customElements.define(CuentaClics.is, CuentaClics);
                </script>
              </dom-module>
              '>
              </view-code>
            </div>
            <p>Ver más sobre eventos personalizados</p>
            <a href="https://polymer-library.polymer-project.org/2.0/docs/devguide/events">Documentación oficial</a>
            </div>
          </div>
        </div>
      </section>
      <section class="container-fluid container-white">
        <div class="row">
          <div class="col-md-12 col-container">
            <h1 id="titleComputed">Computed</h1>
            <p>Las propiedades computadas son aquellas que toman su valor por medio de un cómputo, al que se llega mediante los valores de otras propiedades del componente. Son especialmente útiles y se recurre a ellas en gran cantidad de ocasiones.</p>
            <div class="container-code">
              <view-code code="
              static get properties() {
                return {
                  nombre: String,
                  apellidos: String,
                  nombreCompleto: {
                    type: String,
                    computed: 'definirNombreCompleto(nombre, apellidos)'
                  }
                };
              }
              ">
              </view-code>
            </div>
            <p>Como puedes ver, el método que se usará para realizar el cómputo es "definirNombreCompleto" y las propiedades de las que se derivan el valor de la computada son "nombre" y "apellidos".</p>
            <div class="container-code">
              <view-code code="
              definirNombreCompleto(nombre, apellidos) {
                return nombre + ' ' + apellidos;
              }
              ">
              </view-code>
            </div>
            <a href="https://polymer-library.polymer-project.org/2.0/docs/devguide/observers">Documentación oficial</a>
          </div>
        </div>
      </section>
      <section class="container-fluid container-gray">
        <div class="row">
          <div class="col-md-12 col-container">
            <h1 id="titleObserver">Observer</h1>
            <p>Los observers nos permiten estar informados de los cambios en los datos que maneja el componente, ya sean propiedades comunes, propiedades de objetos, subpropiedades, o secciones de un array.</p>
            <h5>Observer sencillo</h5>
            <div class="container-code">
              <view-code code="
              static get properties() {
                return {
                  propiedad: {
                    type: String,
                    observer: 'funcionObservadora'
                  },
                };
              }
              ">
              </view-code>
            </div>
            <p>El observer se configura indicando el nombre del método que se va a ejecutar cuando se detecten cambios en la propiedad. La invocación será automática y correrá por cuenta de Polymer sin que tengamos que intervenir.</p>
            <p>El método observador recibirá como parámetro ciertos valores para facilitar el trabajo, que son básicamente el valor actual de la propiedad y el valor que tenía justo antes del cambio detectado.</p>
            <div class="container-code">
              <view-code code="
              funcionObservadora(valorActual, valorAnterior) {
                // Código del observer
              }
              ">
              </view-code>
            </div>
            <h5>Observers complejos</h5>
            <p>Los observers complejos en Polymer requieren una declaración específica, independiente de la declaración de propiedades. Esta declaración de observers complejos permite definir de manera centralizada todos los observers utilizados en un componente</p>
            <div class="container-code">
              <view-code code="
              static get observers() {
                return [
                  observer1(propiedad1, propiedad2)',
                  observer2(propiedad3, propiedad4, propiedad5)',
                  observerX(propiedadX)
                ]
              }
              ">
              </view-code>
            </div>
            <a href="https://polymer-library.polymer-project.org/2.0/docs/devguide/observers">Documentación oficial</a>
          </div>
        </div>
      </section>

    `;
  }
}
customElements.define('polymer-accenture-template', PolymerAccentureTemplate);
