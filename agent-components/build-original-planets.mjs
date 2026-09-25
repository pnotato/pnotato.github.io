import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, 'html');
mkdirSync(outDir, { recursive: true });

const palettes = {
  fuscia: {
    title: 'Original fuscia planet',
    fuscia: '#f9026d',
    middle: '#730F8E',
    dark: '#35145a',
    shine: '#eb6db4',
    shineDeep: '#c90779',
  },
  teal: {
    title: 'Teal planet',
    fuscia: '#16b8a6',
    middle: '#147f8b',
    dark: '#153b59',
    shine: '#8ce4d5',
    shineDeep: '#20a596',
  },
};

const base = (title, styles, markup) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<style>
  *{box-sizing:content-box}
  html,body{margin:0;width:100%;height:100%;overflow:hidden}
  body{
    display:flex;align-items:center;justify-content:center;
    background:#181743;font-size:clamp(16px,5vmin,28px);
  }
  ${styles}
  @media (prefers-reduced-motion:reduce){*{animation:none!important}}
</style>
</head>
<body>
${markup}
</body>
</html>
`;

const planet = (p) => base(
  p.title,
  `
  :root{
    --planet-accent:${p.fuscia};--planet-middle:${p.middle};
    --planet-dark:${p.dark};--planet-shine:${p.shine};
    --planet-shine-deep:${p.shineDeep};
  }
  .planet-container{
    width:10em;height:10em;padding:1em;border-radius:10em;
    position:relative;
    background:linear-gradient(150deg,var(--planet-accent),transparent,transparent);
    animation:planet-moving 2s ease infinite;
  }
  .planet{
    position:relative;z-index:1;width:10em;height:10em;border-radius:5em;
    background:linear-gradient(150deg,var(--planet-accent),var(--planet-middle),transparent);
  }
  .shine{
    width:0;height:0;position:absolute;z-index:2;
    border-left:1.75em solid transparent;border-right:1.75em solid transparent;
    border-top:1.4em solid var(--planet-shine);border-radius:50%;
    transform:rotate(-40deg);top:2.25em;left:1.9em;
  }
  .shine::after{
    content:"";position:absolute;width:8em;height:8em;border-radius:5em;
    left:-3.9em;top:-.8em;
    background:linear-gradient(190deg,var(--planet-shine-deep),var(--planet-middle),var(--planet-dark));
  }
  .shine-2,.shine-2::after{
    position:absolute;width:.65em;height:.55em;
    border-radius:5em;background:var(--planet-shine);
  }
  .shine-2{z-index:2;top:3.25em;left:2.275em;transform:rotate(-55deg)}
  .shine-2::after{
    content:"";width:.6em;height:.5em;top:.45em;left:2.175em;
    transform:rotate(206deg);
  }
  .shine-2::before{
    content:"";position:absolute;width:.7em;height:.5em;
    border-radius:10em;background:var(--planet-shine);
    top:1.2em;left:3em;transform:rotate(40deg);
  }
  .planet-ring,.planet-ring2{
    width:15em;height:2em;position:absolute;left:-2em;top:4em;
    border:.5em solid var(--planet-accent);border-top-color:transparent;
    border-radius:100%;transform:rotate(-30deg);
  }
  .planet-ring{z-index:3}
  .planet-ring2{z-index:0;border-top-color:var(--planet-accent)}
  @keyframes planet-moving{
    0%,100%{transform:translateY(-.1em)}
    50%{transform:translateY(.1em)}
  }
  `,
  `  <div class="planet-container" role="img" aria-label="${p.title}">
    <div class="planet-ring2"></div>
    <div class="planet"></div>
    <div class="shine"></div>
    <div class="shine-2"></div>
    <div class="planet-ring"></div>
  </div>`,
);

const moon = base(
  'Original blue and fuscia moon',
  `
  .moon{
    width:5em;height:5em;border-radius:100%;
    background:linear-gradient(150deg,#6E81E3 55%,#f9026d 98%);
    animation:moon-moving 2s ease .5s infinite both;
  }
  @keyframes moon-moving{
    0%,100%{transform:translateY(-.1em)}
    50%{transform:translateY(.1em)}
  }
  `,
  '  <div class="moon" role="img" aria-label="Blue and fuscia moon"></div>',
);

const shootingStars = base(
  'Original shooting stars',
  `
  :root{--u:.069444444vw;--purple2:#730F8E;--fuscia:#f9026d;--meteor-yellow:#fedc01}
  .meteor{
    position:absolute;width:auto;height:auto;opacity:0;
    transform:rotate(40deg);
  }
  .meteor-one{animation:meteor-drop 2s ease 2s infinite}
  .meteor-two{animation:meteor-drop2 2.5s ease 3s infinite;transform:rotate(40deg) scale(.9)}
  .meteor div{transition:all .3s ease}
  .meteor div:nth-child(1){
    position:absolute;width:calc(20 * var(--u));height:calc(150 * var(--u));
    left:calc(-5.5 * var(--u));top:calc(-96 * var(--u));z-index:-2;
    border-radius:calc(100 * var(--u));opacity:.8;
    background:linear-gradient(to top,var(--purple2),transparent);
  }
  .meteor div:nth-child(2){
    position:absolute;width:calc(12 * var(--u));height:calc(100 * var(--u));
    left:calc(-1.5 * var(--u));top:calc(-53 * var(--u));
    border-radius:calc(500 * var(--u));opacity:.8;
    background:linear-gradient(to top,var(--fuscia),transparent);
  }
  .meteor div:nth-child(3){
    position:absolute;width:calc(8 * var(--u));height:calc(8 * var(--u));
    top:calc(35 * var(--u));z-index:2;
    border-radius:calc(100 * var(--u));background:var(--meteor-yellow);
  }
  .meteor div:nth-child(4){
    position:absolute;width:0;height:0;top:calc(8 * var(--u));z-index:1;
    border-left:calc(4 * var(--u)) solid transparent;
    border-right:calc(5 * var(--u)) solid transparent;
    border-bottom:calc(30 * var(--u)) solid var(--meteor-yellow);
  }
  @keyframes meteor-drop{
    0%{opacity:0;top:calc(50 * var(--u));left:calc(1250 * var(--u))}
    50%{opacity:1}
    100%{opacity:0;top:calc(550 * var(--u));left:calc(800 * var(--u))}
  }
  @keyframes meteor-drop2{
    0%{opacity:0;top:calc(150 * var(--u));left:calc(1350 * var(--u))}
    50%{opacity:1}
    100%{opacity:0;top:calc(650 * var(--u));left:calc(900 * var(--u))}
  }
  `,
  `  <div class="meteor meteor-one" role="img" aria-label="Shooting star">
    <div></div><div></div><div></div><div></div>
  </div>
  <div class="meteor meteor-two" role="img" aria-label="Shooting star">
    <div></div><div></div><div></div><div></div>
  </div>`,
);

writeFileSync(join(outDir, 'planet-original-fuscia.html'), planet(palettes.fuscia));
writeFileSync(join(outDir, 'planet-original-teal.html'), planet(palettes.teal));
writeFileSync(join(outDir, 'moon-original.html'), moon);
writeFileSync(join(outDir, 'shooting-stars-original.html'), shootingStars);

console.log('Wrote original-style planets, moon, and shooting stars to html/');
