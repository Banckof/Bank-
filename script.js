document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const usuario = usuarios.find(user => user.email === email && user.password === password);

  if (usuario) {
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
    window.location.href = "Cuenta.html";
  } else {
    alert("Credenciales incorrectas");
  }
});
