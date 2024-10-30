let validemail="user@cbtis258.edu.mx"
let validpass ="admin1234";

const login = (event) =>{
event.preventDefault();
const email=document.getElementById("email").value;
const password = document.getElementById("password").value;
const mensaje = document.getElementById("mensaje");
if(email=== validemail && password=== validpass){
mensaje.textcontent="inicio de sesion exitoso";
mensaje.style.color="green";
setTimeout(() => {
window.location.href="homeee.html";
}, 1000);

}
else{
mensaje.textContent="correo o contraseña incorrecta";
mensaje.style.color="red";

}
}
document.getElementById("registroBtn").onclick = function() {
    window.location.href = "registro.html"; // Cambia el nombre del archivo según sea necesario
};
  // Función para redirigir a la página de contacto
  function navigateToContact() {
    window.location.href = 'contacto.html'; // Cambia esto por la URL de tu página de contacto
}

// Agregar evento de clic a la lista de navegación
document.addEventListener('DOMContentLoaded', function() {
    const contactoItem = document.querySelector('nav li:nth-child(3)'); // Asumiendo que "Contacto" es el tercer elemento
    contactoItem.addEventListener('click', navigateToContact);
});