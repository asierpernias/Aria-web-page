const ARTIST = {
  name: "Asier",
  tagline: "Live-coded music, fully written and performed in the browser.",
};

const TRACKS = [
  {
    number: "01",
    title: "Phase Drift",
    year: "2026",
    tags: ["first-strudel-song"],
    description: "",
    code: `setcpm(90/3)

// DATA 
//@by Asier

//Drums
$: sound("- bd bd - bd bd bd bd")
  .bank("bossdr220")
  .gain("<0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 0.8 0.6 0.3 0>")
  .lpf("<1000 800 800>")

$: sound("sd - - sd - - sd ")
  .gain("<0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 0.8 0.6 0.3 0>")

$: sound("rim rim rim - rim rim rim -")
  .gain("<0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 0.8 0.6 0.3 0>")
  .lpf("300")

$: every(3,
    x => x.sound("hh - hh oh hh - hh oh"),
    sound("hh hh hh - hh hh hh oh")
      .gain("<0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 0.8 0.6 0.3 0>")
      .lpf("200")
  )
  .gain("0.25")
  .lpf("200")

$: sound("cr - - - - - - -")
  .gain("<0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 0.8 0.6 0.3 0>")
  .attack("0.25")

$: sound("bd bd - - bd bd - -")
  .gain("<0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 0.8 0.6 0.3 0>")
  .attack(0.3)

//Bass

$: note("a1 ~ a1 - a2 - a1 ~ a1 - a2 ~")
  .gain("<0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 0.8 0.6 0.3 0>")
  .sound("saw")
  .lpf("300")
  .legato(2)
  .attack("0.2")
  .release("0.8")

$: note("a4 b4 c5 b4 e5 c5 ")
  .gain("<0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 0.8 0.6 0.3 0>")
  .sound("triangle")
  .lpf("300")
  .attack(0.5)

//Lead

$: every(6,
    x => x.rev(),
    every(3,
      x => x.note("a3 c4 e4 d4 g3 e3 d3 a3"),
      note("a3 a3 d4 e4 a3 d3 g3 e3")
    )
  )
  .sound("triangle")
  .gain("<0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 0.8 0.6 0.3 0>")
  .lpf("<600 800 900>")
  .release("<0.1 0.2 0.15>")`,
  },
  {
    number: "02",
    title: "Mist",
    year: "2026",
    tags: ["ambient"],
    description: "",
    code: `setcpm(75 / 4)
stack(
  // Drums
  sound("bd ~ ~ bd bd ~ sd ~ ~")
    .bank("RolandTR909")
    .gain("<0 0.025 0.05 0.05 0.05 0.05 0.05 0.05 0.05 0.05 0.05 0.05 0.05 0.03 0.00>")
    .room(0.15),
  sound("~ hh ~ hh ~ hh hh ~ hh hh ~")
    .bank("RolandTR909")
    .gain("<0 0.083 0.167 0.250 0.250 0.250 0.250 0.250 0.250 0.250 0.250 0.250 0.250 0.167 0.083 0>")
    .hpf(9000)
    .sometimes(x => x.gain(0.15)),
  sound("~ ~ ~ ~ ~ cp ~ ~")
    .bank("RolandTR909")
    .gain(0.35)
    .room(0.3)
    .mask("<0 0 0 1>/4"),
  // Bajo
  note("<eb2 bb1 f2 g1>/2")
    .s("sawtooth")
    .lpf(200)
    .gain("<0 0.15 0.275 0.55 0.55 0.55 0.55 0.55 0.55 0.55 0.55 0.55 0.55 0.25 0>"),
  note("<[eb3 g3 bb3 d4] [bb3 d4 f4 a4] [f3 a3 c4 e4] [g3 bb3 d4 f4]>/4")
    .s("gm_pad_2")
    .gain(0.36)
    .room(0.55)
    .lpf(sine.range(900, 2000).slow(12))
    .delay(0.2),
  // Piano
  note("eb3 g3 bb3 bb3 d4 f4 f3 c4 g3 bb3 d4")
    .s("piano")
    .gain("<0 0.133 0.267 0.4 0.4 0.4 0.4 0.4 0.4 0.4 0.4 0.4 0>")
    .lpf(sine.range(800, 2200).slow(8))
    .slow(2),
  // Melodía
  note("<bb4 d5 f5 eb5 d5 bb4 f4 eb4>/2")
    .s("triangle")
    .gain(0.4)
    .delay(0.3)
    .lpf(2000)
)`,
  },
];

const ABOUT = {
  eyebrow: "About",
  heading: "On writing music as code",
  paragraphs: [
    "Hi! My name is Asier. I'm a 15 year old teenager who loves everything related to programming. This time through Hack Club I got into Ariam an awesome YSWS where I had to create songs with Strudel.cc. It has definitely been a great challenge to work on since my experience with music is null. But isn't that what life is about? Being challenged to push further. Compared to other Ariam submissions my work won't seem anything spectacular. Still I'm proud of what I accomplished for this YSWS.",
  ],
};

const CONTACT = {
  eyebrow: "Contact",
  heading: "Get in touch",
  links: [
    { label: "Email", value: "asier.pernias@gmail.com", href: "mailto:asier.pernias@gmail.com" },
    { label: "Instagram", value: "@asier_10_22", href: "https://instagram.com/asier_10_22" },
  ],
};

function strudelEmbedURL(code) {
  const bytes = new TextEncoder().encode(code);
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  const base64 = btoa(binary);
  return `https://strudel.cc/#${base64}`;
}

const slidesEl = document.getElementById("slides");
const dotsEl = document.getElementById("dots");
const slideRefs = [];

function addSlide(id, className, html) {
  const section = document.createElement("section");
  section.className = `slide ${className}`;
  section.id = id;
  section.innerHTML = `<div class="slide-inner">${html}</div>`;
  slidesEl.appendChild(section);
  slideRefs.push(section);
}

addSlide(
  "intro",
  "intro",
  `
  <p class="eyebrow">My work for Ariam</p>
  <h1>${ARTIST.name}<span class="cursor">&nbsp;</span></h1>
  <p>${ARTIST.tagline}</p>
  <p class="scroll-hint">Scroll to see more</p>
  `
);

TRACKS.forEach((track, i) => {
  const url = track.embedUrl || strudelEmbedURL(track.code);
  const alt = i % 2 === 1 ? "slide--alt" : "";
  addSlide(
    `track-${track.number}`,
    `track-slide ${alt}`,
    `
    <div class="track-grid">
      <div class="track-info">
        <p class="track-number">// ${track.number}</p>
        <h2>${track.title}</h2>
        <p class="track-meta">
          <span>${track.year}</span>
          ${track.tags.map((t) => `<span>${t}</span>`).join("")}
        </p>
        <p>${track.description}</p>
      </div>
      <div>
        <div class="track-embed">
          <iframe
            src="${url}"
            loading="lazy"
            title="Strudel pattern for ${track.title}"
            allow="autoplay"
          ></iframe>
        </div>
        <p class="embed-caption">
          Press play inside the player to listen · <a href="${url}" target="_blank" rel="noopener">open in Strudel</a>
        </p>
      </div>
    </div>
    `
  );
});

addSlide(
  "about",
  "text-slide slide--alt",
  `
  <p class="eyebrow">${ABOUT.eyebrow}</p>
  <h2>${ABOUT.heading}</h2>
  ${ABOUT.paragraphs.map((p) => `<p>${p}</p>`).join("")}
  `
);

addSlide(
  "contact",
  "text-slide",
  `
  <p class="eyebrow">${CONTACT.eyebrow}</p>
  <h2>${CONTACT.heading}</h2>
  <ul class="contact-list">
    ${CONTACT.links
      .map(
        (l) =>
          `<li><a href="${l.href}" target="_blank" rel="noopener"><span>${l.label}</span><small>${l.value}</small></a></li>`
      )
      .join("")}
  </ul>
  `
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  },
  { threshold: 0.25 }
);

slideRefs.forEach((s) => observer.observe(s));

slideRefs.forEach((s, i) => {
  const btn = document.createElement("button");
  btn.setAttribute("aria-label", `Go to slide ${i + 1}`);
  btn.addEventListener("click", () => {
    s.scrollIntoView({ behavior: "smooth" });
  });
  dotsEl.appendChild(btn);
});

const dotButtons = Array.from(dotsEl.children);

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const idx = slideRefs.indexOf(entry.target);
        dotButtons.forEach((b) => b.classList.remove("active"));
        if (dotButtons[idx]) dotButtons[idx].classList.add("active");
      }
    });
  },
  { threshold: 0.5 }
);

slideRefs.forEach((s) => activeObserver.observe(s));