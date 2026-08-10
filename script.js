const ARTIST = {
    name: "Asier",
    tagline: "Live-coded music, fully written and performed in the browser."
};

const TRACKS = [
    {
        number: "01",
        TITLE: "Phase Drift",
        year: "2026",
        tags: ["first-strudel-song"],
        description: 
            "",
        notes: "",
    },
];

const ABOUT = {
    eyebrow: "About",
    heading: "On writting music as code",
    paragraphs:  [
        "Hi! My name is Asier I'm a 15 years old teenager who loves everything related to programming and this time, through HackClub, I got into Ariam an awesome YSWS where I had to create songs with Strudel.cc"
    ],
};

const CONTACT = {
    eyebrow: "Contact",
    heading: "Get in touch",
    links: [
        {label: "Email", value: "asier.pernias@gmail.com", href: "mailto:asier.pernias@gmail.com"},
        {label: "Instagram", value: "@asier_10_22"},
    ],
};

function strudelEmbedURL(code) {
    const encoded = encodeURIComponent(code);
    return 'https://strudel.cc/#${encoded}';
}

const slidesEL = document.getElementById("slides");
const dotsEL = document.getElementById("dots");
const slideRefs = [];

function addSlide(id, className, html) {
    const section = document.createElement("section");
    section.className = `slide ${className}`;
    section.id = id;
    section.innerHTML = `<div class="slide-inner">${html}`;
    slidesEL.appendChild(section);
    slideRefs.push(section);
}

addSlide(
    "Intro",
    "Intro",
    `
    <p class="eyebrow">My work for Aria</p>
    <h1>${ARTIST.name}<span class="cursor">&nbsp;</span></h1>
    <p>${ARTIST.tagline}</p>
    <p class="scroll-hint">Scroll to see more</p>
    `
);

TRACKS.forEach((track, i) => {
    const url = track.emebedURL || strudelEmbedURL(track.code);
    const alt = i % 2 === 1 ? "slide-alt": "";
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
                    src="$${url}"
                    loading="lazy"
                    title="Strudel pattern for ${track.title}"
                    allow="autoplay"
                    ></iframe>
                <p class="embed-caption">
                Press play inside the player to listen · <a href="${url}" target="_blank" rel="noopener">open in strudel</a>
                </p>
                </div>
            </div>
        `
    );
});

//About

addSlide(
    "contact",
    "text-slide",
    `
    <p class="eyebrow">${CONTACT.eyebrow}</p>
    <u1 class="contact-list">
       ${CONTACT.links
      .map(
        (l) =>
          `<li><a href="${l.href}" target="_blank" rel="noopener"><span>${l.label}</span><small>${l.value}</small></a></li>`
      )
      .join("")}
    </ul>
    `
)

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toogle("is-visible", entry.isIntersecting);
        });
    },
    {threshold: 0.25}
);

slideRefs.forEach((s) => observer.observe(s));

slideRefs.forEach((s, i) => {
    const btn = document.createElement("button");
    btn.setAttribute("click", () => {
        s.scrollIntoView({behavior: "smooth"});
    });
    dotsEL.appendChild(btn);
});

const dotButtons = Array.from(dotsEL.children);

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
    {threshold: 0.5}
);

slideRefs.forEach((s) => activeObserver.observe(s));