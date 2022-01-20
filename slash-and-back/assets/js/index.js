function handleLogin(params) {
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  if (email === "admin" && password === "admin") {
    window.location.href = "dashboard.html"
  }else {
    window.alert("email & password salah")
  }

}

function handleRegister(params) {
  window.location.href = "register.html"
}

function handleLogout(params) {
  window.location.href = "login.html"
}

function handleTambah(params) {
  window.location.href = "tambah.html"
}
