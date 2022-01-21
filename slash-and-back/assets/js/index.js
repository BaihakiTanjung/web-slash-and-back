function handleLogin(params) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin" && password === "admin") {
    window.location.href = "dashboard.html";
  } else {
    window.alert("email & password salah");
  }
}

function handleRegister(params) {
  window.location.href = "register.html";
}

function handleLogout(params) {
  window.location.href = "login.html";
}

function handleTambah(params) {
  window.location.href = "tambah.html";
}

function render() {
  const dataset = JSON.parse(localStorage.getItem("data"));
  const output = document.querySelector("#dataTable");

  const rows = dataset
    .map((data) => {
      return `
          <tr>
              <td>${data.programStudi}</td>
              <td>${data.tahunMasuk}</td>
              <td>${data.tahunLulus}</td>
              <td>${data.alamatLinkedin}</td>
              <td>${data.pekerjaan}</td>
              <td>${data.alamat}</td>
          </tr>`;
    })
    .join("");

  output.innerHTML = `
      <table class="table table-bordered table-hover">
          <thead>
              <tr>
                  <th>Program Studi</th>
                  <th>Tahun Masuk</th>
                  <th>Tahun Lulus</th>
                  <th>Alamat Linkedin</th>
                  <th>Pekerjaan</th>
                  <th>Alamat</th>
              </tr>
          </thead>

          <tbody>
              ${rows}
          </tbody>
      </table>`;
}

function getData() {
  const data = [];

  localStorage.setItem("data", JSON.stringify(data));
}

function addData() {
  const programStudi = document.getElementById("programStudi").value;
  const tahunMasuk = document.getElementById("tahunMasuk").value;
  const tahunLulus = document.getElementById("tahunLulus").value;
  const alamatLinkedin = document.getElementById("alamatLinkedin").value;
  const pekerjaan = document.getElementById("pekerjaan").value;
  const alamatKantor = document.getElementById("alamatKantor").value;

  const data = {
    programStudi: programStudi,
    tahunMasuk: tahunMasuk,
    tahunLulus: tahunLulus,
    alamatLinkedin: alamatLinkedin,
    pekerjaan: pekerjaan,
    alamat: alamatKantor,
  };

  const dataLocal = JSON.parse(localStorage.getItem("data"));

  dataLocal.push(data);

  localStorage.setItem("data", JSON.stringify(dataLocal));

  window.location.href = "dashboard.html";
}

window.addEventListener("load", function () {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
    /** Your code here. **/

    this.getData();
    localStorage.setItem("hasCodeRunBefore", true);
  }
  render();
});
