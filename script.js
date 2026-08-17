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
  {
    number: "03",
    title: "Megalovania Remix",
    year: "2026",
    tags: ["Remix"],
    description: "Just a try to recreate this iconic song!!",
    code: `// Data
//@by Asier
//@title Megalovania remix

setcpm(120/4)

// Instruments -----------------------------------------------------------------------------

const bassSound = (pat) => note(pat)
  .s("sawtooth")
  .gain(0.7)
  .room(0.1)
  .lpf(500)

const lead = (pat) => note(pat)
  .s("sawtooth")
  .room(0.1)
  .lpf(20000)
  .lpq(4)
  .decay(10)
  .sustain(0.1)
  .gain(0.7)

// RIFFS ---------------------------------------------------------------------------------------

const riff1 = lead(\`
  [d4 d4] d5 a4 ~
  [gs4 g4] f4
  [d4 f4] g4
\`)

const riffA = lead(\`
  [c4 c4] d5 a4 ~
  [gs4 g4] f4
  [d4 f4] g4
\`)

const riffB = lead(\`
  [b3 b3] d5 a4 ~
  [gs4 g4] f4
  [d4 f4] g4
\`)

const riffC = lead(\`
  [bb3 bb3] d5 a4 ~
  [gs4 g4] f4
  [d4 f4] g4
\`)

const mainRiff = cat(riff1, riffA, riffB, riffC)

// BASS ----------------------------------------------------------------------------------------

const mainBass = bassSound(\`<
  [d2 d2] [d2 d2]
  [c2 c2] [c2 c2]
  [b1 b1] [b1 b1]
  [bb1 bb1] [bb1 bb1]
>*4\`)

const bassIntense = bassSound(\`<
  d2*4
  c2*4
  b1*4
  bb1*4
>\`)

// DRUMS ---------------------------------------------------------------------------------------

const softdrums = s("bd*4, [ - sd]*2, hh*8") // Mirar despues sd
  .bank("rolandjd990").room(0.35).gain(0.65)

const fulldrums = s("bd*4, sd*2, hh*8")
  .bank("rolandjd990").room(0.3).gain(0.7)

const hardDrums = s("bd*4, sd*2, hh*8, [ - cp]*2")
  .bank("rolandjd990").room(0.3).gain(0.85)

const anotherDrumWhyNot = s("bd*8, sd*4, hh*16")
  .bank("rolandjd990").room(0.25).gain(0.75)

// PADS -----------------------------------------------------------------------------------------

const pads = chord("Dm C Bb A")
  .voicing()
  .s("gm_synth_strings_1")
  .gain(0.65)
  .room(0.5)
  .lpf(1300)

// MID PART ----------------------------------------------------------------------

const midRiff = lead(\`
  f4 f4 f4 f4 f4
  d4 d4
  f4 f4 f4 g4 gs4
  g4 f4 d4 f4 g4
  f4 f4 f4 g4 gs4 a4 c5 a4
  d5 d5 d5 a4 d5 c5
\`)

// Arrange --------------------------------------------------------------------------------------

arrange(
  [5, stack(mainBass.gain("<0.1 0.2 0.4 0.6 0.9>"))],
  [4, stack(mainBass, mainRiff)],
  [4, stack(mainBass, mainRiff, softdrums)],
  [4, stack(mainBass, mainRiff, softdrums, pads)],
  [2, stack(bassIntense, midRiff, fulldrums)],
  [4, stack(bassIntense, mainRiff, hardDrums, pads)],
  [2, stack(bassIntense, mainRiff.fast(1.15), anotherDrumWhyNot)],
  [4, stack(bassIntense, mainRiff, pads, hardDrums)],
  [2, stack(mainBass.gain(0.6), mainRiff.gain(0.6))],
  [4, stack(bassIntense, mainRiff, softdrums)],
  [4, stack(mainBass.gain("<0.8 0.6 0.4 0.0>"), mainRiff.gain("<0.9 0.7 0.5 0.1>"))]
)`,
  },
  {
    number: "04",
    title: "Flame",
    year: "2026",
    tags: ["Joke song"],
    description: "What could I say, just a project I didnt expect to submit on the beginning",
    code: `//DATA
//@by Asier
//@title FLAME
setcpm(120/3)


// CONSTS

const ROOM = 0.35
//DRUMS

const hit = (pat) => s(pat)
  .s("akaixr10_bd")
  .lpf(2000)
  .room(ROOM)

const hit1 = hit(\`
  bd bd bd bd,
  bd bd [bd bd] -
\`)
  .gain(0.2)

const hit2 = hit(\`
  bd bd bd bd,
  bd bd [bd -] -,
  - hh - hh
\`)
  .gain(0.2)

const hit3 = hit(\`
  bd bd bd bd,
  bd bd - [bd bd],
  - hh - hh
\`)
  .gain(0.2)

const hit4 = hit(\`
  bd bd bd bd,
  bd bd [bd -] bd
\`)
  .gain(0.35)

const hit5 = hit(\`
  bd bd [bd bd] bd
  bd [bd bd] bd [bd -]
\`)

const hit6 = hit(\`
  bd - bd - bd 
  bd bd - [bd, hh]
\`)

const hats = s(\`
  hh*2
\`)
  .s("d110_hh")
  .room(ROOM)
  .gain("<0.03 0.02 0.03 0.015>")
  .fast(0.2)
  .release(0.4)
  .pan(sine.range(0.3, 0.7).slow(4))

const hats3 = s(\`
  hh*4
\`)
  .s("d110_hh")
  .room(ROOM)
  .gain("<0.03 0.02 0.03 0.015>")
  .fast(0.2)
  .release(0.4)
  .pan(sine.range(0.3, 0.7).slow(4))

const hats2 = s(\`
  [hh - hh] [hh hh]*1
\`)
  .s("d110_hh")
  .gain(0.02)
  .pan(sine.range(0.8, 0.3).slow(6))

const moreeffects = hit(\`
  bd*3
\`)

const percs = s(\`
  - cp - [cp -]
  - - cp -
\`)
  .s("akaixr10_bd")
  .gain(0.4)
  .room(ROOM)

const riser = hit(\`
  bd*8
\`)
  .gain("<0.5 0.8 1.2 1.5>")
  .lpf("<500 500 3000 5000>")

// BASS (now an actual bass not those drums I called bass :sad)

const sub = note(\`
  c2 - - - 
  c2 - c2 -
\`)
  .s("sine")
  .lpf("<120 150 180 220 260>")
  .gain(0.65)
  .attack(0.1)
  .decay(0.15)
  .sustain("<0.3 0.3 0.5 0.5>")
  .release(0.1)

const mainbass = note(\`
  - c2 - g1
  c2 - eb2 g1
\`)
  .s("gm_acoustic_bass")
  .lpf(800)
  .gain(0.4)
  .release(0.12)

const bassVariant = note(\`
  g1 g1 - eb2
  - c2 - c2
\`)
  .s("gm_acoustic_bass")
  .lpf(1000)
  .gain(0.35)
  .release(0.2)

// LEADS

const lead = note(\`
  - c4 - eb4
  g4 - eb4 -
\`)
  .s("sawtooth")
  .lpf(1800)
  .resonance("<2 4 8 12>")
  .release(0.2)
  .room(ROOM)
  .pan(0.3)

const lead2 = note(\`
  - g4 - bb4
  g4 eb4 - c4
\`)
  .s("sawtooth")
  .lpf(3000)
  .release(0.15)
  .room(ROOM)
  .pan(0.7)

const leadVariant = note(\`
  eb5 g4 bb4 -
  g4 eb5 c4 eb4
\`)
  .s("supersaw")
  .lpf(2400)
  .release(0.1)
  .delay(0.25)
  .delaytime(0.18)
  .delayfeedback(0.3)
  .room(ROOM)
  .pan(0.5)

// EMPTY VAR ^^

const empty = note(\`
  - - - -
  - - - -
\`)

// ARANGES 

const leadloop = cat(lead, lead2)
const leadloopempty = cat(leadVariant, empty)
const hitloop = cat(hit3, hit3, hit5, hit3)
const hatsloop = cat(hats, hats3)

arrange(
  [4, stack(hitloop.gain("<0.05 0.1 0.18 0.3>").lpf("<600 650 750 700>"), sub.gain("<0 0.3>"))],
  [3, stack(hit4, sub, mainbass, percs).lpf("<400 1000 2000>")],
  [2, stack(hit5, sub, mainbass, hatsloop)],
  [2, stack(hit5, sub, mainbass, bassVariant, hats2, hats3)],
  [2, stack(sub.gain(0.3), moreeffects, hats, lead.room(0.6).lpf("<3000 2300>"))],
  [2, stack(hit5, sub, mainbass, hats3, leadloop)],
  [1, stack(hit6, sub, mainbass, hats3, lead2)],
  [1, stack(hit5, sub, mainbass, lead2 )],
  [3, stack(hit5, riser, hatsloop.gain(0.3))],
  [2, stack(hit6, sub, mainbass, bassVariant, leadVariant).gain("<0.85 1>").lpf(2500)],
  [4, stack(hit3, mainbass, leadloop)],
  [5, stack(hit3.gain("<0.8 0.4 0.3 0.2 0.1 0>"), sub.gain("<0.8 0.4 0.3 0.2 0.1 0>"), mainbass.gain("<0.8 0.4 0.3 0.2 0 0>"), leadloopempty.gain("<0.8 0.4 0.2 0 0 0>"))]
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