SIGNO: 
`
------------------------------------------INDICE CURSO JS DOM LVL 2------------------------------------------

---------[QUERY SELECTOR - TextContent - innerHTML
      Seleccion de un nodo y actualizacion de datos]---------
N1 - N6

APRENDIZAJE: 
API: Interfaz de Programación de Aplicaciones
-querySelector
-textContent:
 -siempre retorna un str
-innerHTML

-----[Eventos - captura del click de un boton]-----
N7 - N10

APRENDIZAJE: 
addeventlist
value: los inputs tienen una propiedad llamado value, que es el valor que ha cargado dentro, pero siempre se carga como str entonces 

---------------------------------------------------------------[Eventos - captura del click de un boton]---------------------------------------------------------------
n11-n12: form text
n13-n14: form radio
n15-n16: form checkbox
n17-n20: form option select
n21-n23: form text area
n22-n26: form password

APRENDIZAJE:
checked: los radio tienen un atributo llamado checked, que almacena true si esta seleccionado dicho valor.
checked: los checkbox también tienen ese atributo.

input tipo number:
-En vez de usar el parseint para convertir a entero el value, usamos el valueAsNumber (solo aplicable para tipo de dato number)
-Value también aplicable para input tipo textarea
-Se puede descomponer el for


---------[Seleccion de varios elementos con querySelectorAll - Selector de elemento]
n27 -n30: querySelectorAll

APRENDIZAJE:
queryselectorall: retorna una lista con las referencias de un elemento común (nodo de elemento)
queryselector: retorna la referencia de un solo elemento.

La clase NodeList tiene un método foreach

----
Descendiente de otro
n31
---------[Selectores CSS]---------

Aprendizaje:
Interfaces visuales web (GUI)

---[Selectores de clase]---
N32 - N34

APRENDIZAJE:
-Selector de id
-Selector de elemento
-Selector de clase

---[Definición de estilos en linea - inputs y label]---
N35 - N37

APRENDIZAJE:
queryselector para img

---[Definición de estilos en linea - selector universal]---
N38 - N40

APRENDIZAJE:
TAG NAME: devuelve el nombre del elemento en mayuscula 
en un SelectorAll se pueden seleccionar por comas
---[Manipulación del atributo 'class' de los elementos HTML - ClassList]---
N41 -N42

APRENDIZAJE: 
La propiedad classList permite acceder y manipular las clases CSS de un elemento HTML.
tiene estos métodos:
-add (clase)
-remove (clase)
-toggle (clase)
-contains (clase)
-replace(clase vieja, clase nueva)

El objeto classlist no tiene un método llamado removeall, por lo tanto usamos ClassName=""


---[acceso a Los atributos estandar de elementos HTML con notación punto]---
N43 -N44

APRENDIZAJE:
los atributos estándar pueden modificarse mediante puntos.
No se puede asignar a innerhtml un arreglo, sino un str

---[acceso a Los atributos estandar de elementos HTML mediante metodos]---
N45 - n51

APRENDIZAJE:
.Uso del método setAttribute para acceder y cambiar los atributos de los elementos estándar = modificar el atributo
.Uso del método getAttribute para acceder y consular los atributos de los elementos estándar = consultar el atributo
.removeAttribute: para eliminar un atributo
.hasAttribute: si un elemento estándar tiene tal atributo.
.attributes: todo nodo elemento tienen una propiedad que almacena todos los atributos llamado "attributes" (se trata de una colección).

---[Atributos no estándar de elementos HTML]---
N52 - N57

APRENDIZAKE: 
-No se puede acceder al atributo no estándar mediante la notación . (punto)
-pero los atributos no estándar son accesibles mediante los métodos para acceder a dichos atributos (hasAttribute, getAttribute, setAttribute, removeAttribute)
-ante ponemos el "data-" seguido del atributo no estándar o personalidado para evitar problemas a futuro, por ejemplo quedaría asi:
elemento.dataset.longitud (están disponibles en la propiedad dataset (se puede acceder a ellos usando esa propiedad))
---[Propiedades de navegacion entre los nodos]---
N58 - N59

APP:
CHILDREN: todo nodo tiene un atributo llamado children. Es una colección con todos los hijos.
nos devuelve una colección de tipo htmlcollection, no tiene el método foreach.
Como children no tiene un método foreach, lo podemos convertir en array con spray-array, y ahí ya tendría todos los métodos propios de array.

ParentElement: se usa para obtener la referencia del padre

propiedades vistas:
-firstelementchild
-lastelementchild
-nextelemetsibling
-previuselemtsibling
-parentElement 

---[Creación de nodos elemento individuales]---
N60 - N64

Arendizaje:
createElement: crea un elemento HTML indicando en el primer parámetro
append: añade un nodo al final de todos los nodos hijos.
prepend: añade el nodo al principio de todos los nodos hijos

---[Borrado de nodo elemento]---
N65 - N66

Aprendizaje:
remove: en combinación con el foreach para eliminar tales nodos

---------------------------------------------------------------[Eventos en el navegador web]---------------------------------------------------------------
N67 - N69

INTRODUCCION A LOS DISTINTOS TIPOS DE EVENTOS:
1. Eventos de teclado
2. Eventos de mause
3. Eventos de formulario
4. Eventos de tiempo
5. Eventos de ventana
6. Eventos de arrastrar y solar
7. Eventos de medios
8. Eventos de selección
9. Eventos de animación
10. Eventos de historial de navegación
11. Eventos táctiles
12. Eventos de sensor
13. Eventos de base de datos
14. Eventos de red
15. Eventos de pantalla completa

3 formas de capturar eventos:
1. onclick
2. propiedad en scrip onlick
3. addeventlistener (esta va a ser la mecánica para capturar todos los tipos de eventos)

---[Eventos de teclado]---
N70 - N74
problema1: primer addeventlistener para elemento nodo de input
problema2: preventDefault
problema3: ctrlkey, altkey,key.

textarea también tiene para value


---[Eventos del mouse]---
N75 - N78

problema 1: target: tiene la referencia del cuadrado donde se ha ingresado la flecha del mouse.

---[Eventos de formulario -submit]---
N79 - N81

aprendizake: uso de un servidor en internet
https://www.scratchya.com.ar/cursojs/procesarformulario.php
submit no funciona de tipo button (no envia los datos al formulario)
preventDefault: método del objeto evento para que el formulario no envie los datos al servidor (para que no haga la actividad por defecto)
concepto-nuevo: lenguaje de servidor 

---[Eventos de formulario - change - input]---
N82 - N83

change: se aplica a controles input, select y textearea
input: se aplica a controles input y textarea. es adecuado para actualizaciones en tiempo real.


---[eventos de tiempo - funciones: setTimeout y rearTimeout]---
N84 - n85
setTimeot 
clearTimeout 

---[eventos de tiempo - setInterval y clearInterval]---
n86 - n87

---[eventos de ventana (DOMContentLoaded y load)]---
n88 - n89

DOMContentLoaded: sirve para poner código js al principio del todo, antes de que el navegador carge en memoria todos los objetos del dom

Load: se ejecutara una vez que este todo el dom y todos los recurso cargados en el navegador
---[eventos de tiempo - evento resize (del objeto window)]---
n90

document: representa la pagina web actual que se esta visualizando en el navegador.
window: representa la ventana del navegador en la que se carga la pagina web

---Propagación de eventos---
n91-93
target: la propiedad guarda la referencia del elemento que inicio el evento
currentTarget: almacena la referencia del elemento actual que recibe el evento

stopPropagation: evita la propagación de eventos

---Eventos de drag and drop---
n94

Conceptos nuevos:
dragstart: se dispara cuando el usuario comienza a arrastar un elemento.
drag: se dispara repetidamente mientras el usuario sigue arrastrando el elemento.
dragend: se dispara cuando el usuario suelta el elemento.
dragenter: se dispara cuando se ingresa a una zona especifica de la pagina.
dragleave: se dispara cuando se sale de una zona especifica.
dragover: se dispara constantemente mientras el objeto arrastrado se mueve sobre otro elemento destino.
drop: se dispara cuando el objeto arrastrado se suelta sobre el elemento destino

draggable: Se utiliza para especificar si un elemento es arrastrable

dataTransfer: se usa para almacenar y manipular datos relacionados con el elemento que esta siendo arrastrado.
contener los datos que se transfieren durante una operación de arrastrar y soltar.

preventDefault(): se llama para permitir que el elemento sea un destino de arrastre válido. Sin esta llamada, el navegador no permitiría soltar el elemento arrastrado en el área de destino porque el comportamiento predeterminado del navegador para dragover es no permitir el soltado


setData:  Se utiliza para establecer datos en el objeto DataTransfer durante una operación de arrastre, que luego pueden ser recuperados cuando el elemento es soltado.


getData:  Se usa para recuperar los datos que se han establecido en el objeto DataTransfer durante una operación de arrastrar y soltar.


---------------------JSON -¿Que es JSON?---------------------
n95 - n100

-Es ampliamente aceptado en aplicaciones que incluyen arquitectura cliente-servidor para intercambio de datos.
-JSON es una especificación para la notación de datos.
-Se utiliza también como archivo para guardar configuraciones de proyectos, por ejemplo los archivos
de 'package.json', 'angular.json' y 'tsconfig.json'
-Js tiene integrado un objeto llamdado: JSON para trabajar con este tipo de formato de datos.
-El objeto JSON dispone de dos métodos: -------stringify y parse-------

stringify: crea el archivo con formato json

-JSON se basa en dos estructuras:
-objeto
-arreglo

método parse: Es el proceso inverso.
---------------------API fetch---------------------
n101 - n104


---[conceptos basicos]---

API fetch: realiza solicitudes asincrónicas desde el navegador a un servidor de internet
podemos enviar solicitud http y recuperar datos, generalmente en formato JSON (luego
veremos que podemos recuperar otros formatos como texto, XML, HTML, imágenes, etc.)

then: se pasa una función que procesara los datos asíncronos que retorna la promesa.
manejadores para los casos en que la promesa se cumpla o se rechace.

promise: representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

response: representa la respuesta a una solicitud HTTP. 

---
se puede hacer mucho mas conciso haciendo llamadas encadenadas 

---[parámetros en la URL]---
n105-n106
Uso del preventDefault en los 2 ejercicios (para evitar que se ejecute al presionar un enlace)


---[Envio de datos de un formulario]---
N107 - N108

Objeto: FormData(): nos permite acceder a los datos de un formulario HTML.
uso de preventDefault(): para envió de formulario

---[envio de un str con formato json]---
N109 - N110

servidor que recibe un flujo de datos con formato JSON para que lo procese

uso de keyup: ENTER de la tecla.
2 estructuras de JSON:
-Objeto: normalmente están del lado del servidor
-Array: lista ordenada de valores encerrados entre comillas con elementos también encerrados entre comillas que el cliente envia hacia el servidor.

---[envió y recuperación de una imagen del servidor]---
n111 - n112

multipart/form-data: se utiliza para adjuntar archivos en formulario.

accept: para que pueda seleccionar en el disco duro solamente imágenes de tipo jpeg o algún otro

evento change: se dispara cuando el operador selecciona una imagen

URL.createObjectURL: crea una referencia a la imagen que hemos seleccionado en el disco duro.
obtiene la url del disco duro donde se encuentra el archivo que nosotros queremos seleccionar.
crea una URL que representa la imagen.
luego, se asigna esa URL a la propiedad src de un elemento img para mostrar la imagen en la pagina web.

objeto de tipo Blob(): es un tipo de dato que se utiliza para almacenar grandes cantidades de datos binarios

---[Manejo de errores]---
N113

método catch(): se utiliza para capturar cualquier error que se produzca en las llamadas a fetch.
El método JSON no puede convertir un formato binario, una imagen a formato JSON

Los tipos de errores se dan cuando:
1. petición a un servicio que no existe a un servidor
2. conversiones incorrectas
3. o propiamente de la aplicación si el código de js si es incorrecto

---[Empresas que suministran APIS publicas]---

setAttribute: para modificar los atributos
las imágenes también pueden devolverse en formato json, no necesariamente en formato blob (se recupera una URL)

Sitio donde están todas las apis publicas:
https://github.com/public-apis/public-apis




------


------------------------[Estructura try/catch]------------------------
---try/catch---
n115 - n118
un array siempre te devolverá un tipo de dato object

https://jsonlint.com

ej-n118: uso del className 



---try/catch y throw---
n119 - n122
aprendemos a como elevar nuestras propias excepciones

si no se capturan las excepciones (cuando se pone un throw new) este te lo imprime en la consola.



---try/catch/finally---
n223
El bloque "finally" se utiliza junto con la declaración "try...catch"

------------------------[Recursividad]------------------------
---Donde no conviene usar recursividad---
n124 - n130

técnica de programación que nos permite que un bloque de instrucciones se ejecute n veces. Reemplaza en ocasiones a estructuras repetitivas.

NUEVO: seguimiento linea a linea (depurar linea por linea)


---Donde conviene usar recursividad---
n131 - n134

Una estructura de una pagina HTML se la representa mediante un árbol de nodos.
El algoritmo mas conveniente para recorrer el árbol de nodos del DOM es un algoritmo recursivo.
En la función recursiva lo primero que hacemos es hacer algún proceso con el nodo que visitamos y seguidamente llamar recursivamente para todos los nodos elemento hijos.

[[[uso de document.body]]]

la clase array tiene un método estatico llamado "isArray", que me va a devolver si el elemento es un arreglo
-uso del método llamado "table"


nanochess.org/chess4

jslk.com: desarrolla certámenes para que se puedan presentar programas de js.


------------------servidor web local------------------
El tema de modulos no funciona cuando se abre en formato archivo



------------------MODULOS[creacion de una carpeta para trabjar con modulos]------------------
carpetas desarrolladas: proyecto1 - proyecto2 - proyecto3 - proyecto4 - proyecto5

uso de objeto literal
indicar en la propiedad type:"module", con eso sabe el navegador que lo tiene que importar como un modulo
js clásico no tiene la sintaxis para trabajar con modulos 


https://www.tutorialesprogramacionya.com/herramientas/javascript/domjs/ 


proyecto2:
dentro de una función se usa return de otra función para ordenar los datos (los datos ya están ordenados)


--exportar por defecto---
2 tipos de exportación:
-Exportación con nombre
-Exportación por defecto (js te permite exportar un solo elemento por defecto)
Normalmente exportamos por defecto la funcionalidad principal del modulo.
-en export default no es necesario darle un nombre a la función.

--exportar mediante un alias---



------------------Conceptos y métodos principales de la clase MAP------------------
proyecto6 - n135 -n138

Uno de los objetivos esenciales de los Map es para realizar búsquedas rápida en una colección de datos, en lugar de recorrer un Array.
si o si las claves tienen que ser distintas.
size: propiedad para saber la cantidad de elementos de la clase map
has: verificar si un objeto Map coniene una clave espeficifa


---problema 1---
creación de la carpeta: Proyecto6

uso de innerText
/*copiar el contenido del mapa en un array mediante desestructuracion*/


------------------Clase Set -conceptos esenciales y sus métodos principales------------------
n139 - n141 (sirve para validar que un objeto, array o cualquier tipo de dato sea único)


estructura de datos nativas de js: Array, Object, Map, set

la clase Set permite almacenar un conjunto de valores únicos, sin duplicados.

------n142 (se toca el tema de teoría de conjuntos) ---143 (se aplica):
La clase set de js no dispone de métodos, por lo cual las funcionalidades de las operaciones con conjuntos las debemos implementar nosotros.

Las operaciones básicas son: unión, intersección y diferencia.


------------------Api localStorage------------------
n144 -n147

-es algo propio del navegador, no es directamente de javascript, ya que js en el servidor no existe este objeto localstorage
-el objeto document es una propiedad tambien del objeto window

-setItem: se utiliza para almacenar un par clave-valor en el almacenamiento local del navegador
-getItem: nos devuelve el valor a buscar

se disponen de 5 métodos
setItem
GetItem
removeItem
clear
key
propiedad: length

SOLO PERMITE EL ALMACENAMIENTO DE CADENA DE TEXTO, TANTO LAS CLAVES COMO LOS VALORES.

---guardar y recuperar objetos con formato JSON---
n148 -n149

podemos utilizar el formato JSON para almacenar en el localStorage datos con estructuras mas complejas.


---Iterar por todas las claves y valores---
n150

------------------Promesas------------------
n151 - n159
Las promesas son la propuesta mas modera para el manejo de la asincronía en JavaScript.
Sobre la asincronía:
Una operación asíncrona es una tarea que se ejecuta de manera independiente del flujo principal del programa, permitiendo que el programa continúe ejecutándose sin esperar a que esta tarea se complete. En otras palabras, una operación asíncrona permite realizar tareas en paralelo sin bloquear la ejecución del resto del código.

iterable en js: es un array, map, set.


CUATRO METODOS ESTATICOS DE LA CLASE PROMISE
-all
-rice
-allsettled
-any

-----async await----
n160 - n163

async await no posee del método catch, entonces se tendría que hacer con el catch tradicional





------------------------------------------------------SINTESIS DE VOZ------------------------------------------------------
------------------SpeechSynthesis------------------
n164 - n168
Propiedades del objeto SpeechSynthesisUtterance
Eventos del objeto SpeechSynthesisUtterance
Metodos del objeto SpeechSynthesis

tipo de dato text = oracion


------------------SpeechRecognition------------------
n169-170
Propiedades el objeto webkitSpeechRecognition

------------------SpeechRecognition y SpeechSynthesis------------------
n171-n172





