import { LitElement, css, html } from 'lit-element';
import '../../components/view-code-accenture';

export class HomeAccentureTemplate extends LitElement {


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
      imgBackground: {
        type: String
      }
    }
  }


  render() {
    return html `
        <section class="jumbotron text-center header-image-accenture" style="background-image: url('./assets/img/es6.jpeg')">

        </section>
        <section class="container-fluid container-white">
          <div class="row">
            <div class="col-md-12 col-container">
              <h1>Novedades de Javascript ES6</h1>
              <p>Vamos a dar un repaso a todas las novedades de ES6 necesarias para poder trabajar con Webcomponents y más adelante con Cells</p>
            </div>
          </div>
        </section>
        <section class="container-fluid container-gray">
          <div class="col-md-12 col-container">
            <h1>Nueva declaración de variables</h1>
            <div class="container-explanation">
              <h5>let</h5>
              <p>La diferencia entre let y var es el ámbito de alcance. Con let el ámbito es local al bloque de código o función. mientras que con var la variable sera global o local en una función sin importar en ámbito del bloque.</p>
            </div>
            <div class="container-view-code">
              <view-code code="
                function varTest() {
                  var x = 31;
                  if (true) {
                    var x = 71;  // misma variable!
                    console.log(x);  // 71
                  }
                  console.log(x);  // 71
                }

                function letTest() {
                  let x = 31;
                  if (true) {
                    let x = 71;  // variable diferente
                    console.log(x);  // 71
                  }
                  console.log(x);  // 31
                }">
              </view-code>
            </div>
            <div class="container-explanation">
              <h5>const</h5>
              <p>Podremos definir una variable con valores fijos que solo serán de lectura a lo largo del código.</p>
            </div>
            <div class="container-view-code">
              <view-code code="
                (function() {
                  const PI;
                  PI = 3.15;
                  // ERROR, porque ha de asignarse un valor en la
                  // declaración
                })();

                (function() {
                  const PI = 3.15;
                  PI = 3.14159;
                  // ERROR de nuevo, porque es sólo-lectura
                })();
              ">
              </view-code>
            </div>
          </div>
          <div class="container-link">
            <a href="https://javascript.info/variables">Documentación oficial Javascript</a>
          </div>
        </section>
        <section class="container-fluid container-white">
          <div class="row">
            <div class="col-md-12 col-container">
              <h1>Nueva función Arrow</h1>
              <div class="container-explanation container-flex-column">
                <p>Con el nuevo estándar podremos ahorrar mucho código, hay varias formas de declararlas dependiendo el caso de uso. Lo más importante en cuanto a estas funciones es que mantiene el contexto del this dependiendo del ámbito donde se encuentre.</p>
                <div class="container-explanation">
                  <h5>Primero</h5>
                  <p>Como vemos en este caso recibe dos parámetros entre paréntesis y devuelve la suma de estos</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container-view-code">
            <view-code code="
            let sum = (param1,param2) => {
              return param1 + param2;
            }">
            </view-code>
          </div>
          <div class="container-explanation">
            <h5>Segundo</h5>
            <p>Como vemos en este caso recibe solo un parámetro y no hace falta poner el paréntesis, si la operación es sencilla y cabe en una sola línea, no hace falta poner ni las llaves ni el return</p>
          </div>
          <div class="container-view-code">
            <view-code code="
              let sum = param1 => 5 + param1;">
            </view-code>
          </div>
        </section>
        <section class="container-fluid container-gray">
          <div class="row">
            <div class="col-md-12 col-container">
              <h1>Clases</h1>
              <div class="container-explanation container-flex-column">
                <p>Ahora podemos utilizar todo el sistema de clases en JavaScript con todo lo que conlleva (Herencias, propiedades...etc).</p>
                <p>Este apartado es muy importante ya que los Webcomponents se basan en las clases, aunque esto lo veremos después..</p>
                <div class="container-view-code">
                  <view-code code="
                  class Point {
                    constructor ( x = 0, y = 0 ) {
                      this.x = x;
                      this.y = y;
                    }

                    toString () {
                      return '(' + this.x + ', ' + this.y + ')';
                    }
                  }

                  // Creating points
                  let p1 = new Point( 10, 20 );
                  let p2 = new Point();

                  // Output p1: (with params)
                  // p1.toString(); // (10, 20)

                  // Output p2: (without params)
                  p2.toString(); // (0, 0)">
                  </view-code>
                </div>
              </div>
            </div>
          </div>
          <div class="container-explanation">
            <h5>Class:</h5>
            <p>Podemos ver que aparece la palabra reservada ‘class‘, con esto la estamos creando seguido del nombre de la clase.</p>
          </div>
          <div class="container-explanation">
            <h5>Constructor:</h5>
            <p>Aparece el concepto de constructor es una función propia de la clase en la cual inicializamos las propiedades de nuestra clase. Como vemos las propiedades las recibe por parámetro y dentro le damos valor, aquí aparece el contexto del ‘this‘ hace referencia a la propia clase.</p>
          </div>
          <div class="container-explanation">
            <h5>New:</h5>
            <p>Para crear un objeto a partir de la clase usamos ‘new‘ {Nombre Clase}, una vez creado el objeto podremos acceder a sus propiedades o métodos.</p>
          </div>
          <p>Vemos también que podemos asignarle un valor por defecto a los parámetros de una función, es una característica de ES6.</p>
        </section>
        <section class="container-fluid container-white">
          <h3>Setters y Getters</h3>
          <div class="container-explanation container-flex-column">
          <p>Habituales en programación, los métodos de acceso denominados ‘getters‘ y ‘setters‘ se utilizan para obtener y asignar valores a los atributos de nuestros objetos respectivamente.</p>
          <div class="container-view-code">
            <view-code code="
            class Rectangle {
            constructor ( height = 0, width = 0 ) {
              this._height = height;
              this._width = width;
            }

            set height ( value ) {
              this._height = value;
            }

            set width ( value = 0 ) {
              this._width = value;
            }

            get area() {
              return this._height * this._width;
            }
          }

          let obj = new Rectangle();
          obj.height = 10;
          obj.width = 20;
          obj.area; //200
            ">
            </view-code>
          </div>
          </div>
        </section>
        <section class="container-fluid container-white">
          <h3>Métodos estáticos</h3>
          <div class="container-explanation container-flex-column">
          <p>Los métodos estáticos son aquellos que se ejecutan a través/desde de la propia clase, no desde sus instancias. Es decir no hace falta instanciar una clase para hacer uso de ellos.</p>
          <div class="container-view-code">
            <view-code code="
            class Tools {
              static strToURL ( str ) {
                return encodeURIComponent( str )
                  .replace( /%20/g,'+' );
              }
            }

            Tools.strToURL( 'La donna e mobile' );
            ">
              </view-code>
            </div>
            <p>Si nos fijamos utilizamos directamente el método de la clase sin el ‘new‘.</p>
          </div>
        </section>
        <section class="container-fluid container-white">
          <h3>Herencia: subclases o clases hijas</h3>
          <p>Como todos los lenguajes orientados a objetos en Javascript podemos utilizar la herencia, lo haremos por medio de la palabra reservada ‘extends‘.</p>
          <div class="container-code">
            <view-code code="
              class Device {
              constructor ( params = {} ) {
                ( {
                  status: this._status = 'off',
                  brand: this._brand = 'ACME',
                  firmware: this._firmware = 'unknown'
                } = params );
              }

              start () {
                this._status = 'on';
              }

              get status () {
                return this._status;
              }

              get brand () {
                return this._brand;
              }

              get firmware () {
                return this._firmware;
              }
            }
            ">
            </view-code>
          </div>
          <div class="container-explanation">
            <h5>Desestructuracion:</h5>
            <p>Aprovechamos para ver otro concepto el de desestructuracion, recibimos un objeto por parámetro y a su vez lo desestructuramos para añadir valores a las propiedades de la clase.</p>
          </div>
          <h3>Extends</h3>
          <p>Podemos extender a partir de una clase y heredar todas sus propiedades y métodos</p>
          <div class="container-code">
            <view-code code="
              class VideoDevice extends Device {
                start ( source = '' ) {
                  super.start();

                  return 'Rendering source...';
                }
              }
            ">
            </view-code>
          </div>
          <p>Esto lo haremos con la palabra reservada ‘extends‘.</p>
          <div class="container-code">
            <view-code code="
              class Device {
                constructor ( status = 'off', brand = 'ACME', firmware ='know') {
                  this._status = status;
                  this._brand = brand;
                  this._firmware = firmware;
                }

                start () {
                  this._status = 'on';
                }

                get status () {
                  return this._status;
                }

                get brand () {
                  return this._brand;
                }

                get firmware () {
                  return this._firmware;
                }
              }

              class Desktop extends Device {
                constructor(version) {
                super(version);
                this._version = version = 3;
                }
              }
            ">
            </view-code>
          </div>
          <p>Para hacerlo más fácil en este ejemplo no utilizaremos la desestructuracion de objetos. Podemos ver que creamos una clase ‘Desktop‘ que extiende de ‘Device‘.</p>
          <ul>
            <li>Si queremos utilizar el constructor en la clase hija es obligatorio llamar a ‘super‘.</li>
            <li>Si queremos añadir una nueva propiedad para esta clase hija, añadimos esta en el constructor, luego llamamos a super para tener todas las propiedades del padre e inicializamos la nueva propiedad en este caso con un valor por defecto.</li>
          </ul>
          <div class="container-link">
            <a href="https://javascript.info/class">Documentación oficial</a>
          </div>
        </section>
        <section class="container-fluid container-gray">
          <h1>Import y Export ES6</h1>
          <p>Es importante modularizar nuestro codigo e intentar separarlo en pequeñas funciones reutilizables, para esto tenemos los import y exports</p>
          <div class="container-code">
            <view-code code="
              //------ lib.js ------
              export const sqrt = Math.sqrt;
              export function square(x) {
                  return x * x;
              }
              export function diag(x, y) {
                  return sqrt(square(x) + square(y));
              }
            ">
            </view-code>
          </div>
          <p>Para poder exportar variables o funciones utilizaremos ‘export‘.</p>
          <div class="container-code">
            <view-code code="
              /------ main.js ------//
              import { square, diag } from 'lib';
              console.log(square(11)); // 121
              console.log(diag(4, 3)); // 5
            ">
            </view-code>
          </div>
          <p>Para poder utilizar estas variables o funciones exportadas utilizaremos ‘import‘.</p>
          <div class="container-link">
            <a href="https://javascript.info/import-export">Documentación oficial</a>
          </div>
          <img src="https://miro.medium.com/max/400/1*dbb7eIswD-w5cvVmevnANQ.jpeg" alt="Meme Javascript">
        </section>
    `;
  }
}
customElements.define('home-accenture-template', HomeAccentureTemplate);
