const memories = [
  [
    "ESTRELLA 01 · NUESTRO COMIENZO",
    "Donde empezó todo",
    "De todas las casualidades que existen en el universo, la más bonita fue encontrarte.",
  ],
  [
    "PLANETA 02 · PRIMEROS MOMENTOS",
    "Un instante",
    "Hay momentos que duran segundos, pero se quedan para siempre en el corazón.",
  ],
  [
    "ESTRELLA 03 · SONRISAS",
    "Tu sonrisa",
    "Si pudiera guardar una sola imagen para verla cuando quisiera, probablemente sería una de tus sonrisas.",
  ],
  [
    "PLANETA 04 · RECUERDOS",
    "Lo nuestro",
    "Lo bonito no es tener una historia perfecta, sino tener recuerdos que todavía nos hacen sonreír.",
  ],
  [
    "ESTRELLA 05 · MOMENTOS",
    "Pequeñas cosas",
    "A veces las cosas más pequeñas terminan convirtiéndose en nuestros recuerdos favoritos.",
  ],
  [
    "PLANETA 06 · CONTIGO",
    "Mi lugar",
    "No importa dónde estemos; cuando estoy contigo, cualquier lugar se siente especial.",
  ],
  [
    "ESTRELLA 07 · FELICIDAD",
    "Qué bonito coincidir",
    "Entre tantas personas, tantos caminos y tantos lugares, qué bonito que nuestros caminos se cruzaran.",
  ],
  [
    "PLANETA 08 · HISTORIAS",
    "Nuestra historia",
    "Esta historia tiene algo que ninguna otra tiene: nos tiene a nosotros.",
  ],
  [
    "ESTRELLA 09 · CERCA",
    "Aquí",
    "Hay personas que llegan y hacen que el mundo se sienta un poquito más bonito. Tú eres una de ellas.",
  ],
  [
    "PLANETA 10 · FAVORITOS",
    "Otra vez",
    "Si pudiera volver a vivir algunos días, elegiría volver a vivir muchos de los que compartimos.",
  ],
  [
    "ESTRELLA 11 · TÚ",
    "Eres especial",
    "No sé cómo explicarlo exactamente, pero hay algo en ti que hace que todo se sienta diferente.",
  ],
  [
    "PLANETA 12 · RECUERDO",
    "Para guardar",
    "Algunos recuerdos no necesitan palabras; basta con mirarlos para volver a sentirlos.",
  ],
  [
    "ESTRELLA 13 · NOSOTROS",
    "Tú y yo",
    "No necesito un universo perfecto, solo uno en el que sigamos encontrándonos.",
  ],
  [
    "PLANETA 14 · SIEMPRE",
    "Quédate",
    "Si pudiera pedirle algo a las estrellas, pediría más momentos como estos.",
  ],
  [
    "ESTRELLA 15 · FUTURO",
    "Lo que viene",
    "Todavía quedan muchas historias por vivir, muchos lugares por conocer y muchos recuerdos por crear.",
  ],
  [
    "PLANETA 16 · MI PERSONA",
    "Mi favorita",
    "De todas las personas que pudo haber puesto el universo en mi camino, me alegra que hayas sido tú.",
  ],
  [
    "ESTRELLA 17 · NUESTRO UNIVERSO",
    "Hasta las estrellas",
    "Y si alguna vez olvido lo grande que es el universo, solo tengo que recordar que en él existes tú.",
  ],
].map((x, i) => ({
  label: x[0],
  title: x[1],
  phrase: x[2],
  image: `fotos/foto${String(i + 1).padStart(2, "0")}.jpeg`,
}));

const pos = [
  [14, 35],
  [28, 22],
  [44, 15],
  [61, 20],
  [78, 30],
  [88, 47],
  [76, 65],
  [62, 79],
  [45, 85],
  [28, 75],
  [12, 59],
  [34, 53],
  [53, 34],
  [69, 48],
  [39, 68],
  [57, 61],
  [84, 76],
];
const colors = [
  ["#fff0f8", "#d05b9d", "#ff8bc9"],
  ["#e9e4ff", "#7566d9", "#9887ff"],
  ["#fff3d8", "#df9b67", "#ffc98f"],
  ["#d9f8ff", "#4faac3", "#72dfff"],
];
const objects = document.getElementById("objects");
memories.forEach((m, i) => {
  let b = document.createElement("button"),
    c = colors[i % 4];
  b.className = `celestial ${i % 3 === 0 ? "star" : ""} ${[3, 7, 11, 15].includes(i) ? "ring" : ""}`;
  b.dataset.i = i;
  b.style.cssText = `--x:${pos[i][0]}%;--y:${pos[i][1]}%;--size:${34 + (i % 4) * 7}px;--light:${c[0]};--dark:${c[1]};--glow:${c[2]};--speed:${2.8 + (i % 4) * 0.4}s;animation-delay:${-i * 0.25}s`;
  b.innerHTML = `<span>${String(i + 1).padStart(2, "0")}</span>`;
  b.onclick = () => open(i);
  objects.appendChild(b);
});
for (let i = 0; i < 170; i++) {
  let s = document.createElement("i");
  s.className = "background-star";
  s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;--twinkle:${2 + Math.random() * 4}s`;
  document.getElementById("stars").appendChild(s);
}
const modal = document.getElementById("modal"),
  pic = document.getElementById("pic"),
  label = document.getElementById("label"),
  title = document.getElementById("title"),
  phrase = document.getElementById("phrase"),
  count = document.getElementById("count"),
  num = document.getElementById("num");
let current = 0;
function fallback(i) {
  return (
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900"><rect width="100%" height="100%" fill="#241136"/><circle cx="600" cy="430" r="330" fill="#b85b9c" opacity=".5"/><text x="600" y="450" text-anchor="middle" fill="white" font-family="Georgia" font-size="58">Recuerdo ${i + 1} ✦</text></svg>`,
    )
  );
}
function render() {
  let m = memories[current];
  pic.onerror = () => {
    pic.onerror = null;
    pic.src = fallback(current);
  };
  pic.src = m.image;
  label.textContent = m.label;
  title.textContent = m.title;
  phrase.textContent = m.phrase;
  count.textContent = `${String(current + 1).padStart(2, "0")} · 17`;
  num.textContent = `${String(current + 1).padStart(2, "0")} / 17`;
}
function open(i) {
  current = i;
  render();
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function close() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}
document.querySelectorAll("[data-close]").forEach((x) => (x.onclick = close));
document.getElementById("next").onclick = () => {
  current = (current + 1) % 17;
  render();
};
document.getElementById("prev").onclick = () => {
  current = (current + 16) % 17;
  render();
};
document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("open")) return;
  if (e.key === "Escape") close();
  if (e.key === "ArrowRight") document.getElementById("next").click();
  if (e.key === "ArrowLeft") document.getElementById("prev").click();
});
document.getElementById("enter").onclick = () => {
  document.getElementById("intro").classList.add("leave");
  setTimeout(
    () =>
      document.getElementById("space").scrollIntoView({ behavior: "smooth" }),
    400,
  );
  setTimeout(() => document.getElementById("space").classList.add("zoom"), 500);
};
document.getElementById("replay").onclick = () => {
  document.getElementById("intro").classList.remove("leave");
  window.scrollTo({ top: 0, behavior: "smooth" });
};
