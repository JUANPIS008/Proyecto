const formulario = document.getElementById("formularioCita");
const listaCitas = document.getElementById("listaCitas");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;

  const respuesta = await fetch("http://localhost:8080/api/citas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, fecha })
  });

  if (respuesta.ok) {
    alert("Cita guardada con éxito");
    cargarCitas(); // Recargar lista
  }
});

async function cargarCitas() {
  const res = await fetch("http://localhost:8080/api/citas");
  const citas = await res.json();

  listaCitas.innerHTML = "";
  citas.forEach(cita => {
    const li = document.createElement("li");
    li.textContent = `${cita.nombre} - ${cita.fecha}`;
    listaCitas.appendChild(li);
  });
}

// Cargar citas al iniciar
cargarCitas();