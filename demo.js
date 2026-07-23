const steps = [
  {
    image: "assets/inicio.png",
    alt: "Inicio con perfiles",
    kicker: "Paso 01",
    title: "Perfil listo o pendiente",
    text:
      "La app empieza mostrando qué perfiles están completos. Si falta un perfil, no fuerza una recomendación: te lleva a completarlo.",
  },
  {
    image: "assets/acciones.png",
    alt: "Acciones principales de Enrutados",
    kicker: "Paso 02",
    title: "Elige la intención",
    text:
      "Ruta, comer, dejar el coche, visitar o plan rápido. La intención define qué reglas entran en juego.",
  },
  {
    image: "assets/food.png",
    alt: "Ajuste de comida por presupuesto",
    kicker: "Paso 03",
    title: "Ajusta el momento",
    text:
      "Si hoy puedes gastar más, caminar menos o comer más rápido, se cambia esa búsqueda sin rehacer el perfil entero.",
  },
  {
    image: "assets/food-map.png",
    alt: "Comprobación de comida en mapa",
    kicker: "Paso 04",
    title: "Comprueba antes de ir",
    text:
      "La app recomienda pocas opciones. Después puedes comprobar fotos, reseñas, mapa y abrir navegación fuera de Enrutados.",
  },
  {
    image: "assets/scoring.png",
    alt: "Barras de scoring",
    kicker: "Paso 05",
    title: "Entiende el scoring",
    text:
      "Las barras enseñan el peso real de cada criterio. Al mover una variable, el resto se reajusta proporcionalmente.",
  },
  {
    image: "assets/plan.png",
    alt: "Plan rápido combinado",
    kicker: "Paso 06",
    title: "Combina lo importante",
    text:
      "Plan rápido une decisiones ya explicadas: ruta, comida, parking y visita sin convertirlo todo en una mezcla confusa.",
  },
];

let current = 0;

const image = document.querySelector("#demo-image");
const kicker = document.querySelector("#step-kicker");
const title = document.querySelector("#step-title");
const text = document.querySelector("#step-text");
const progress = document.querySelector("#progress-bar");
const tabs = Array.from(document.querySelectorAll(".step-tab"));
const previous = document.querySelector("#prev-step");
const next = document.querySelector("#next-step");

steps.forEach((step) => {
  const preload = new Image();
  preload.src = step.image;
});

function renderStep(index) {
  current = (index + steps.length) % steps.length;
  const step = steps[current];

  image.src = step.image;
  image.alt = step.alt;
  kicker.textContent = step.kicker;
  title.textContent = step.title;
  text.textContent = step.text;
  progress.style.width = `${((current + 1) / steps.length) * 100}%`;

  tabs.forEach((tab, tabIndex) => {
    tab.classList.toggle("is-active", tabIndex === current);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => renderStep(Number(tab.dataset.step)));
});

previous.addEventListener("click", () => renderStep(current - 1));
next.addEventListener("click", () => renderStep(current + 1));

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") renderStep(current - 1);
  if (event.key === "ArrowRight") renderStep(current + 1);
});
