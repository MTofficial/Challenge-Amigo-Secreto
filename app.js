// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//En esta lista se guardaran los nombres de los amigos
let listaAmigo = [];

/*Esta funcion agrega el nombre a la lista solamente si la lista no posee ya un registro.
Primero se obtiene el nombre desde la caja de texto.
Luego se verifica que no se ingrese un nombre vacio en el campo de texto.
Posteriormente se verifica si es que NO existe dentro de la lista, por loque en dado caso se agrega a esta.
En el caso contrario se muestra un alert indicando que el registro ya fue agregado.
*/
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert("Por favor, ingrese un nombre valido");
    } else {
        if (!listaAmigo.includes(amigo)) {
            listaAmigo.push(amigo);
            console.log(listaAmigo);
            limpiarTexto();
            mostrarTexto();
        } else {
            alert("El nombre ya fue agregado");
        }
    }
}

/*Esta funcion sortea uno de los amigos de la lista a traves de un numero generado aleatoriamente .
Primero se verifica si es que existen registros dentro de la lista.
En caso de que la lista este vacia se muestra un alert mencionando que no hay registros.
En el caso contrario, si hay registro se genera un numero random como posocion que se utilizara para mostrar un nombre de la lista.
*/
function sortearAmigo() {
    if (listaAmigo.length == 0) {
        alert("No se han agregado amigos");
    } else {
        let nombreSorteado = Math.floor(Math.random() * (listaAmigo.length) );
        console.log(`el numero sorteado es ${nombreSorteado}`);
        const listaElement = document.getElementById('resultado');
        const li = document.createElement('li');
        li.textContent = (`El amigo secreto sorteado es: ${listaAmigo[nombreSorteado]}`);
        listaElement.appendChild(li);
        limpiarNombres();
    }

}

function limpiarTexto() {
    document.querySelector('#amigo').value = '';
    return;
}

function mostrarTexto() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';
    for (let index = 0; index < listaAmigo.length; index++) {
        const li = document.createElement('li');
        li.textContent = listaAmigo[index];
        listaElement.appendChild(li);
    }
}

function limpiarNombres() {
    const listaAmigosIngresados= document.getElementById('listaAmigos');
    listaAmigosIngresados.innerHTML='';
    listaAmigo=[];
}


