document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto (recarga la página)

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const datos = {
      username,
      password
    };

    try {
      const respuesta = await fetch('/procesar-formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        // Backend devuelve un objeto con errores por campo
        document.getElementById('responseMsgUser').textContent = resultado.errorUsuario || '';
        document.getElementById('responseMsgPass').textContent = resultado.errorContrasena || '';
        console.log('Respuesta del servidor:', resultado);
        return;
      }

      // Si todo sale bien, se limpian mensajes y muestra
      document.getElementById('msgUser').textContent = '';
      document.getElementById('msgPass').textContent = '';
      alert('Formulario enviado correctamente');
      
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Ocurrió un error al enviar los datos. Intente nuevamente.');
    }
  });
});