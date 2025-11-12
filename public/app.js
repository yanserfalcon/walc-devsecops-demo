document.getElementById('actionButton').addEventListener('click', () => {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = '¡Gracias por presionar el botón!';
    messageDiv.classList.remove('hidden', 'fade-in');
    void messageDiv.offsetWidth; 
    messageDiv.classList.add('fade-in');
});