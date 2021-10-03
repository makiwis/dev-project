var arrBooks = [];

function addProduct(){
    var name = document.getElementById("pName").value;
    var descript = document.getElementById("pDescript").value;
    var category = document.getElementById("sCategory").value;
    var image = document.getElementById("pDocument").files[0].name;
    var btnbook = document.getElementsByClassName("btn-verlibro").value;

    var objProduct = new Object();
    objProduct.name = name;
    objProduct.descript = descript;
    objProduct.category = category;
    objProduct.image = "img/books/" + image;
    objProduct.boton = btnbook;

    arrBooks.push(objProduct);

    setProduct();
}

function setProduct(){
    var divProducts = document.getElementById("cont-resultado-cat")

    for(var i =0; i < arrBooks.length; i ++){
        var title = document.createElement("h3");
        var imgP = document.createElement("img");
        var sCat = document.createElement("span");
        var pDescript = document.createElement("p");
        var btnbook = document.createElement("button");
        var div = document.createElement("div");

        imgP.setAttribute("src", arrBooks[i].image);
        imgP.setAttribute("class", "imagenproduct");

        title.setAttribute("class", "titulo");
        title.innerHTML = arrBooks[i].name;

        sCat.setAttribute("class", "categoria");
        sCat.innerHTML = arrBooks[i].category;

        pDescript.innerHTML = arrBooks[i].descript;

        btnbook.setAttribute("class", "btn-verlibro");
        btnbook.innerHTML = 'ver libro';

        div.setAttribute("class", "elem-categoria");

        div.appendChild(sCat);
        div.appendChild(title);
        div.appendChild(imgP);
        div.appendChild(pDescript);
        div.appendChild(btnbook);

        divProducts.appendChild(div);

    }
}



/*  lista de deseos*/
function mostrarListadedeseos() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultarListadedeseos() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}


/* agregar contacto*/

var arregloContacto = [];

function agregarRegistro(){
     var persona = new Object(); 
     var nombre = document.getElementById("nombre").value; 
     var correo = document.getElementById("correo").value; 
     var comentario = document.getElementById("comentario").value;

     persona.Nombre = nombre;
     persona.Correo = correo;
     persona.Comentario = comentario;

     arregloContacto.push(persona);

    alert(nombre+ '\u00a0' +"Tu mensaje fue enviado correctamente");
    }