window.addEventListener('DOMContentLoaded', () => {
    const boton = document.querySelector('#botonHuidizo');

    boton.addEventListener('mouseover', () => {
        // Cálculo de posiciones
        const x = Math.random() * (window.innerWidth - boton.clientWidth);
        const y = Math.random() * (window.innerHeight - boton.clientHeight);
        
        boton.style.left = x + "px";
        boton.style.top = y + "px";
    });
});