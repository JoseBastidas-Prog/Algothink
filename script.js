let container_sesion_registro = document.querySelector(".contenedor-sesion-registro");
let form_login = document.querySelector(".form-login");
let form_registro = document.querySelector(".form-registro");
let boxbg_inicio = document.querySelector(".inicio");
let boxbg_registro = document.querySelector(".registro");

abrNav = () =>{
    document.getElementById('navbarId').style.width = '85px';
    document.getElementById('main').style.marginLeft = '85px';
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}

cerrNav = () =>{
    document.getElementById('navbarId').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
}

const anchoPagina = () => {
    if (window.innerWidth > 800) {
        boxbg_inicio.style.display = "block";
        boxbg_registro.style.display = "block";
    } else {
        boxbg_registro.style.display = "block";
        boxbg_registro.style.opacity = "1"
        boxbg_inicio.style.display = "none";
        form_login.style.display = "block";
        form_registro.style.display = "none";
        container_sesion_registro.style.left = "0px"
        }
}
window.addEventListener("resize", anchoPagina);
anchoPagina();

const registro = () => {
    if (window.innerWidth >= 800){
    form_registro.style.display = "block";
    form_login.style.display= "none";
    container_sesion_registro.style.left = "410px";
    boxbg_inicio.style.opacity = "1";
    boxbg_registro.style.opacity = "0";
    } else {
    form_registro.style.display = "block";
    form_login.style.display= "none";
    container_sesion_registro.style.left = "0px";
    boxbg_registro.style.display = "none";
    boxbg_inicio.style.display = "block";
    boxbg_inicio.style.opacity = "1";
    }
}

const inisesion = () => {
    if(window.innerWidth >= 800) {
    form_login.style.display = "block";
    form_registro.style.display = "none";
    container_sesion_registro.style.left = "10px";
    boxbg_registro.style.opacity= "1";
    boxbg_inicio.style.opacity = "0";
    } else {
    form_login.style.display= "block";
    form_registro.style.display = "none";
    container_sesion_registro.style.left = "0px";
    boxbg_inicio.style.display = "none";
    boxbg_registro.style.display = "block";
    }
}

document.getElementById("btn-registro").addEventListener("click", registro);
document.getElementById("btn-incio-sesion").addEventListener("click", inisesion);