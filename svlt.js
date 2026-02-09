// 1. CONFIGURA TU FECHA AQUÍ (Año, Mes - 1, Día, Hora, Minuto)
// Ejemplo: Para el 14 de Febrero de 2024 sería (2024, 1, 14, 0, 0, 0)
const fechaInicio = new Date(2020, 2, 12, 0, 0, 0); 

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / 1000 / 60) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.innerHTML = `${dias} días ${horas}h ${minutos}m ${segundos}s`;
    }
}

function crearCorazon() {
    const container = document.getElementById('hearts-container');
    if (!container) return;

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    
    // Salen con una pequeña variación desde el centro
    heart.style.left = `calc(50% + ${Math.random() * 100 - 50}px)`;
    // Nacen dentro de la copa verde
    heart.style.top = (Math.random() * 50 + 20) + 'px'; 
    
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + 's';
    heart.style.fontSize = Math.random() * 15 + 12 + 'px';

    container.appendChild(heart);

    setTimeout(() => { heart.remove(); }, duration * 1000);
}

// ESTO ES LO QUE HACE QUE TODO EMPIECE A FUNCIONAR:
setInterval(actualizarContador, 1000);
setInterval(crearCorazon, 300);
actualizarContador();