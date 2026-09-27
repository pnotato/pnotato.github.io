import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const svgDir = join(here, 'svg');

const groups = [
  {
    id: 'backgrounds',
    title: 'Backgrounds',
    blurb: 'Navy wash, four-point stars, drifting glow. Built to sit behind text at low contrast.',
    items: [
      { file: 'bg-quiet.svg', title: 'Quiet', note: 'Sparse sparkle field with a soft navy vignette.', ratio: '2 / 1' },
      { file: 'bg-shoot.svg', title: 'Shooting', note: 'Same field, two gold meteors on a loop.', ratio: '2 / 1' },
      { file: 'bg-wash.svg', title: 'Wash', note: 'Gold and coral lift rising from the bottom edge.', ratio: '2 / 1' },
    ],
  },
  {
    id: 'shooting-stars',
    title: 'Shooting stars',
    blurb: 'The two shooting stars extracted from the supplied original scene, with their original tails, colors, paths, delays, and timing.',
    items: [
      { html: 'html/shooting-stars-original.html', title: 'Original pair', note: 'Purple and fuscia tails with gold heads, crossing on staggered loops.', ratio: '8 / 5' },
    ],
  },
  {
    id: 'rockets',
    title: 'Rockets',
    blurb: 'Three simple rocket silhouettes in the portfolio palette. The first translates the live CSS rocket; the others explore compact capsule and scout shapes.',
    items: [
      { file: 'rocket-original.svg', title: 'Original rocket', note: 'Pink body, blue window, paired fins, stripe, booster, thruster, and twin flame from the live implementation.', ratio: '1 / 1' },
      { file: 'rocket-capsule.svg', title: 'Capsule rocket', note: 'A broad gold-and-coral capsule with a dark round window and central flame.', ratio: '1 / 1' },
      { file: 'rocket-scout.svg', title: 'Scout rocket', note: 'A narrow blue scout with compact fins, magenta stripe, and single glowing exhaust.', ratio: '1 / 1' },
    ],
  },
  {
    id: 'volcanoes',
    title: 'Volcano',
    blurb: 'The exact supplied GeoEngineering-inspired SVG, CSS, and GSAP animation, preserved in a standalone HTML document.',
    items: [
      { html: 'html/volcano-original.html', title: 'Original GeoEngineering volcano', note: 'Original 1280 × 1024 artwork with randomized GSAP bubble and cloud motion.', ratio: '5 / 4' },
    ],
  },
  {
    id: 'planets',
    title: 'Original planets',
    blurb: 'Standalone ports of the supplied planet geometry, ring layering, shine marks, gradient, and motion.',
    items: [
      { html: 'html/planet-original-fuscia.html', title: 'Original fuscia', note: 'The supplied original palette and construction.', ratio: '1 / 1' },
      { html: 'html/planet-original-teal.html', title: 'Teal colorway', note: 'Identical geometry and motion with a teal, turquoise, and deep-blue palette.', ratio: '1 / 1' },
    ],
  },
  {
    id: 'moons',
    title: 'Original moon',
    blurb: 'The moon separated from the original composition, retaining its two-color gradient and motion.',
    items: [
      { html: 'html/moon-original.html', title: 'Blue and fuscia moon', note: 'Original #6E81E3 to #f9026d palette.', ratio: '1 / 1' },
    ],
  },
  {
    id: 'planet-studies',
    title: 'Planet studies',
    blurb: 'Flat, reference-inspired planet treatments adapted to the portfolio palette. The coral planet floats gently; its blue counterpart flows horizontally and the orbit example animates.',
    items: [
      { file: 'planet-molten-blue-animated.svg', title: 'Blue molten planet · animated', note: 'The molten geometry in an analogous blue palette, with islands flowing beneath a fixed circular clip.', ratio: '1 / 1' },
      { file: 'planet-molten-static.svg', title: 'Molten planet · floating', note: 'A coral, pink, and magenta study with organic landforms, a soft glow, and a slight bounce.', ratio: '1 / 1' },
      { file: 'planet-orbit-animated.svg', title: 'Orbited planet · animated', note: 'An analogous pink planet with soft patches, pulsing glow, and a moving pink moon.', ratio: '1 / 1' },
    ],
  },
  {
    id: 'bar-planets',
    title: 'Bar planets (CSS)',
    blurb: 'The same layered-bar planet in four palettes and four fixed rotations. Structure, bar sizes, float, and 10/8/6/4/2-second band motion are identical.',
    items: [
      { html: 'html/planet-bars-green.html', title: 'Green · −25°', note: 'Original rotation and motion.', ratio: '1 / 1' },
      { html: 'html/planet-bars-magenta.html', title: 'Magenta · 18°', note: 'Same planet and motion, rotated to 18 degrees.', ratio: '1 / 1' },
      { html: 'html/planet-bars-blue.html', title: 'Blue · −62°', note: 'Same planet and motion, rotated to −62 degrees.', ratio: '1 / 1' },
      { html: 'html/planet-bars-flame.html', title: 'Flame · 7°', note: 'Same planet and motion, rotated to 7 degrees.', ratio: '1 / 1' },
    ],
  },
  {
    id: 'land',
    title: 'Land',
    blurb: 'Layered silhouettes for section transitions. The divider ends flat so it still meets the coral about section.',
    items: [
      { file: 'land-hills.svg', title: 'Hills', note: 'Layered dusk hills with a low sun and a few stars.', ratio: '3 / 1' },
      { file: 'land-divider.svg', title: 'Divider', note: 'Stretches to full width. Flip with scaleY(-1) for the reverse wave.', ratio: '1440 / 200' },
    ],
  },
  {
    id: 'cavern',
    title: 'Cavern',
    blurb: 'A jagged cave mouth cut into volcanic rock, with a lava floor and drifting embers. Palette and faceting follow the volcano.',
    items: [
      { file: 'land-cavern.svg', title: 'Cavern', note: 'Layered violet rock slabs frame a glowing mouth over an orange lava floor.', ratio: '1200 / 674' },
    ],
  },
  {
    id: 'terrain-fields',
    title: 'Terrain fields',
    blurb: 'Violet ground fields speckled with stars. The hills have a rounded bottom edge; the spires sit on a flat baseline with a transparent sky.',
    items: [
      { file: 'land-starry-hills.svg', title: 'Starry hills field', note: 'Layered rolling dunes with lit crests, soft lee-side shading, and twinkling stars.', ratio: '5 / 1' },
      { file: 'land-jagged-hills.svg', title: 'Jagged hills', note: 'Low, rocky ridges in three layers with faceted lit and shadowed faces. Short enough to sit beside the volcano.', ratio: '6 / 1' },
      { file: 'land-jagged-spires.svg', title: 'Jagged spires', note: 'Low-poly rock spires and boulders with lit faces, starry dark stone, and pink crystals.', ratio: '1200 / 380' },
    ],
  },
];

const inline = (file) => {
  const raw = readFileSync(join(svgDir, file), 'utf8').trim();
  return raw.replace(/<svg\b/, '<svg width="100%" height="100%"');
};

const embed = (file, title, ratio) => {
  const raw = readFileSync(join(here, file), 'utf8').trim();
  const escaped = raw.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  return `          <div class="frame" style="aspect-ratio:${ratio}">
            <iframe title="${title}" loading="lazy" srcdoc="${escaped}"></iframe>
          </div>`;
};

const countSvgs = readdirSync(svgDir).filter((f) => f.endsWith('.svg')).length;

const cards = groups
  .map((group) => {
    const items = group.items
      .map((item) => {
        const frame = item.html
          ? embed(item.html, item.title, item.ratio)
          : `          <div class="frame" style="aspect-ratio:${item.ratio}">
${inline(item.file)}
          </div>`;
        const path = item.html ? item.html : `svg/${item.file}`;
        return `        <article class="card">
${frame}
          <div class="meta">
            <h3>${item.title}</h3>
            <p>${item.note}</p>
            <code>${path}</code>
          </div>
        </article>`;
      })
      .join('\n');

    return `      <section id="${group.id}">
        <div class="section-head">
          <h2>${group.title}</h2>
          <p>${group.blurb}</p>
        </div>
        <div class="grid">
${items}
        </div>
      </section>`;
  })
  .join('\n\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>agent-components preview</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
  <style>
    :root {
      --navy: #181743;
      --navy-deep: #100f2e;
      --gold: #F2D8A7;
      --gold-hover: #F2C78A;
      --coral: #E85D5E;
      --white: #ffffff;
      --border: 6px;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      background: var(--navy);
      color: var(--white);
      font-family: Inter, system-ui, -apple-system, sans-serif;
      border-left: 16px solid var(--white);
      border-right: 16px solid var(--white);
      min-height: 100vh;
    }
    header {
      position: sticky;
      top: 0;
      z-index: 20;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem 1.5rem;
      align-items: baseline;
      justify-content: space-between;
      padding: 1.25rem 3rem 1.1rem;
      background: linear-gradient(rgba(10,9,32,.92), rgba(10,9,32,.55));
      backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(255,255,255,.12);
    }
    header .brand { font-weight: 800; letter-spacing: .01em; }
    header nav { display: flex; gap: 1.25rem; font-weight: 600; }
    header a { color: var(--gold); text-decoration: none; font-size: .92rem; }
    header a:hover { color: var(--gold-hover); }
    main { padding: 2.5rem 3rem 5rem; max-width: 1400px; margin: 0 auto; }
    .lead { max-width: 62ch; margin: 0 0 3rem; }
    .lead h1 { font-size: clamp(2rem, 3.4vw, 3rem); margin: 0 0 .75rem; }
    .lead p { color: rgba(255,255,255,.8); line-height: 1.6; margin: 0 0 .75rem; }
    .lead code {
      background: rgba(0,0,0,.35);
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 5px;
      padding: .12em .45em;
      font-size: .88em;
      color: var(--gold);
    }
    section { margin-bottom: 4rem; scroll-margin-top: 90px; }
    .section-head { margin-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,.14); padding-bottom: .85rem; }
    .section-head h2 { font-size: clamp(1.4rem, 2vw, 1.9rem); margin: 0 0 .35rem; }
    .section-head p { margin: 0; color: rgba(255,255,255,.72); max-width: 70ch; line-height: 1.55; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 1.75rem;
    }
    .card {
      border: 5px solid var(--white);
      border-radius: 6px;
      background: rgba(0,0,0,.32);
      overflow: hidden;
      box-shadow: 0 6px 18px rgba(0,0,0,.35);
      display: flex;
      flex-direction: column;
    }
    .card .frame {
      width: 100%;
      overflow: hidden;
      background:
        linear-gradient(45deg, rgba(255,255,255,.035) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.035) 75%) 0 0 / 22px 22px,
        linear-gradient(45deg, rgba(255,255,255,.035) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.035) 75%) 11px 11px / 22px 22px;
      border-bottom: 1px solid rgba(255,255,255,.12);
    }
    .card .frame svg { display: block; }
    .card .frame iframe { display: block; width: 100%; height: 100%; border: 0; }
    .card .meta { padding: 1rem 1.15rem 1.25rem; }
    .card h3 { margin: 0 0 .35rem; font-size: 1.15rem; }
    .card p { margin: 0 0 .7rem; color: rgba(255,255,255,.78); font-size: .9rem; line-height: 1.5; }
    .card code { font-size: .78rem; color: var(--gold); }
    footer {
      border-top: 1px solid rgba(255,255,255,.14);
      padding: 2rem 3rem 4rem;
      color: rgba(255,255,255,.66);
      font-size: .88rem;
      line-height: 1.6;
      max-width: 1400px;
      margin: 0 auto;
    }
    footer code {
      background: rgba(0,0,0,.35);
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 5px;
      padding: .12em .45em;
      color: var(--gold);
    }
    @media (max-width: 720px) {
      body { border-width: 8px; }
      header { padding: 1rem 1.25rem; }
      main { padding: 1.75rem 1.25rem 3rem; }
      footer { padding: 1.5rem 1.25rem 3rem; }
    }
  </style>
</head>
<body>
  <header>
    <span class="brand">agent-components</span>
    <nav>
      ${groups.map((g) => `<a href="#${g.id}">${g.title}</a>`).join('\n      ')}
    </nav>
  </header>

  <main>
    <div class="lead">
      <h1>Graphic sandbox</h1>
      <p>${countSvgs} self-contained SVG scenes plus eight HTML/CSS graphics. Every asset carries its own animation and needs no JavaScript.</p>
      <p>The supplied planet and moon are preserved as separate HTML/CSS assets in <code>html/</code>. SVGs can be inlined with a raw import. To swap the live waves, use <code>land-divider.svg</code> and flip the reverse copy with <code>scaleY(-1)</code>.</p>
      <p>Checked background marks transparency. For a server, run <code>python3 -m http.server</code> in this folder.</p>
    </div>

${cards}
  </main>

  <footer>
    Generated by <code>build-preview.mjs</code> from <code>svg/*.svg</code>. Edit a scene, then rerun <code>node build-preview.mjs</code>.
  </footer>
</body>
</html>
`;

writeFileSync(join(here, 'preview.html'), html);
console.log(`Wrote preview.html with ${countSvgs} scenes.`);
