const contenedorImagenes = document.getElementById("listaImagenes");
contenedorImagenes.classList.add("galeria");
const fuenteImagen = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.png",
];

for (let i = 0; i < fuenteImagen.length; i++) {
  const imagen = document.createElement("img");

  imagen.src = `../public/img/${fuenteImagen[i]}`;

  contenedorImagenes.appendChild(imagen);
}
