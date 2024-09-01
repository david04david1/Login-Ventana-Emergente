//Variables
const inicioSesion = document.querySelector('#iniciar_sesion');
const registro = document.querySelector('#registrarse');
let pantallaInicio = document.querySelector('.pantallaInicio')
const cierreInicio = document.querySelector('#botonCerrarIni');
let pantallaRegistro = document.querySelector('.pantallaRegistro')
const cierreRegistro = document.querySelector('#botonCerrarReg')

//Eventos
inicioSesion.addEventListener('click', (e)=>{
    let btninicio = e.target.parentElement.firstChild.nextSibling.value;
    mostrarInicio();
});

cierreInicio.addEventListener('click', (e)=>{
    pantallaInicio.style.display = 'none';
});

registro.addEventListener('click', (e)=>{
    let btnregistro = e.target.parentElement.firstChild.nextSibling;
    mostrarRegistro();
});

cierreRegistro.addEventListener('click', (e)=>{
    pantallaRegistro.style.display = 'none';
});

//Funciones
function mostrarInicio(){
    pantallaInicio.style.display = 'flex';
};

function mostrarRegistro(){
    pantallaRegistro.style.display='flex'; 
}