const menu = document.querySelector('.perros');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btntodos = document.querySelector('.todos');
const btnpastorAlemans = document.querySelector('.pastorAlemans');
const btnchihuahua = document.querySelector('.chihuahua');
const btngolden = document.querySelector('.golden');
const btnpitbulls = document.querySelector('.pitbulls');
const contenedorperritos = document.querySelector('.perritos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    perritos();
         
});

const eventos =() =>{
    menu.addEventListener('click',abrirMenu);
} 


const abrirMenu =() =>{
    navegacion.classList.remove('ocultar');
    botoncerrar();
    

}
/*agregar la x del menu*/ /*overlay es como cubrir la pantalla*/
const botoncerrar=() =>{
    const btncerrar  = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    /*nos regresa una conexion de datos o sea un arreglo*/
    if(document.querySelectorAll('.pantalla-completa').length>0)return;
    body.appendChild(overlay);
    btncerrar.textContent = 'x';
    btncerrar.classList.add('btn-cerrar');

   //while(navegacion.children[ 5]){
      //  navegacion.removeChild(navegacion.children[5]);
    //}

    navegacion.appendChild(btncerrar);
    cerrarMenu (btncerrar,overlay);

    
}
const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen= entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }

    });
});

imagenes.forEach(imagen=> {
    
    observer.observe(imagen);
    
});


/*click del btncerrar*/
const cerrarMenu =(boton,overlay) =>{
    boton.addEventListener('click',() =>{;
    navegacion.classList.add('ocultar');
    overlay.remove();
    boton.remove();
});

overlay.onclick = function(){
    overlay.remove();
    navegacion.classList.add('ocultar');
    boton.remove();
}
}

const perritos = ()=>{
    let perritosArreglo = [];
    const perritos = document.querySelectorAll('.perro');
    

    perritos.forEach(perro=> perritosArreglo = [...perritosArreglo,perro]);

    const pastorAlemans = perritosArreglo.filter (pastoraleman=> pastoraleman.getAttribute('data-perro') === 'pastoraleman');
    const chihuahuas = perritosArreglo.filter (chihuahua=> chihuahua.getAttribute('data-perro')=== 'chihuahua');
    const goldens = perritosArreglo.filter (golden=> golden.getAttribute('data-perro')=== 'golden');
    const pitbulls = perritosArreglo.filter (pitbulls=> pitbulls.getAttribute('data-perro')=== 'pitbulls');

    mostrarperritos (pastorAlemans, chihuahuas, goldens, pitbulls, perritosArreglo);
    
    
}

const mostrarperritos = (pastorAlemans, chihuahuas, goldens, pitbulls, todos) =>{
    btnpastorAlemans.addEventListener('click',()=>{
        limpiarHtml (contenedorperritos);
        pastorAlemans.forEach(pastoraleman=> contenedorperritos.appendChild(pastoraleman));
    });
    btnchihuahua.addEventListener('click', ()=>{
        limpiarHtml (contenedorperritos);
        chihuahuas.forEach(chihuahua=> contenedorperritos.appendChild(chihuahua));
    });
    btngolden.addEventListener('click',  ()=>{
        limpiarHtml (contenedorperritos);
        goldens.forEach(golden=> contenedorperritos.appendChild(golden));
    });
    btnpitbulls.addEventListener('click', ()=>{
        limpiarHtml (contenedorperritos);
        pitbulls.forEach(pitbulls=> contenedorperritos.appendChild(pitbulls));
    });
    btntodos.addEventListener('click', ()=>{
        limpiarHtml(contenedorperritos);
        todos.forEach(todos=> contenedorperritos.appendChild(todos));
    });

}

const limpiarHtml = (contenedor) =>{
     while(contenedor.firstchild){
       contenedor.removeChild(contenedor.firstchild);
    }


}


