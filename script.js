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
];

const ABOUT = {
  eyebrow: "About",
  heading: "On writing music as code",
  paragraphs: [
    "Hi! My name is Asier, I'm a 15 year old teenager who loves everything related to programming, and this time, through Hack Club, I got into Aria, an awesome YSWS where I had to create songs with Strudel.cc. It has definetely been a greate challenge to work on this since my experience with music is null, however, isn't life anything but challenging you to push further? Well, compared to other my work won't seem anything spectacular, but I'm proud of what I acomplished for this YSWS.",
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
  <p class="eyebrow">My work for Aria, a HackClub YSWS.</p>
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