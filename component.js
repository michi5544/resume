// Descargar CV al hacer clic en el botón

document.getElementById("btnDescargar").addEventListener("click", () => {
  const enlace = document.createElement("a");
  enlace.href = "Cv Michelle Quintanilla.pdf"; // ruta al archivo PDF
  enlace.download = "Cv Michelle Quintanilla.pdf"; // nombre con el que se descargará
  enlace.click();
});

