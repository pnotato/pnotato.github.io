import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, 'html');
mkdirSync(outDir, { recursive: true });

const LINE_COUNT = 30;
const layers = [1, 2, 3, 4, 5];

const bars = (n) =>
  Array.from({ length: LINE_COUNT }, () => `        <li class="sun__body--line-${n}__line"></li>`).join('\n');

const layer = (n) => `      <ul class="sun__body--line-${n}">
${bars(n)}
      </ul>`;

const paletteVars = (p) =>
  [
    `--b1:${p.b1}; --c1:${p.c1};`,
    `--b2:${p.b2}; --c2:${p.c2};`,
    `--b3:${p.b3}; --c3:${p.c3};`,
    `--b4:${p.b4}; --c4:${p.c4};`,
    `--b5:${p.b5}; --c5:${p.c5};`,
    `--body:${p.body}; --glow-a:${p.glowA}; --glow-b:${p.glowB};`,
  ].join('\n    ');

const build = (p, title, label, variant) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<style>
  :root{
    --sun-size: clamp(200px, 68vmin, 500px);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    ${paletteVars(p)}
  }
  *{box-sizing:border-box}
  html,body{margin:0;height:100%}
  body{
    background:#181743;
    display:flex;align-items:center;justify-content:center;
    overflow:hidden;
    font-family:Inter,system-ui,-apple-system,sans-serif;
  }
  .sun-stage{position:relative;width:var(--sun-size);height:var(--sun-size)}
  .sun{
    position:absolute;
    width:var(--sun-size);height:var(--sun-size);
    top:45%;left:50%;
    transform:translate(-50%,-50%);
    animation:float 4s var(--ease-out-quad) infinite;
  }
  .sun__body{
    width:100%;height:100%;border-radius:50%;
    transform:rotate(${variant.rotation});
    background:var(--body);
    z-index:1;overflow:hidden;position:absolute;
    box-shadow: calc(var(--sun-size) * -0.1) 0 calc(var(--sun-size) * 0.26) calc(var(--sun-size) * -0.03) var(--glow-a),
                calc(var(--sun-size) * 0.1) 0 calc(var(--sun-size) * 0.26) calc(var(--sun-size) * -0.09) var(--glow-b);
  }
  .sun__body ul{list-style:none;padding:0;margin:0;font-size:0;position:relative}
  .sun__body li{
    width:100%;
    height:calc(var(--sun-size) / 30 + 1px);
    margin-bottom:-1px;
    border-radius:calc(var(--sun-size) * 0.04);
  }
  .sun__body li:nth-of-type(odd)::before{
    content:'';
    position:absolute;
    width:calc(var(--sun-size) / 20);
    height:calc(var(--sun-size) / 30 + 1px);
    border-radius:0 calc(var(--sun-size) * 0.02) calc(var(--sun-size) * 0.02) 0;
  }
  .sun__body li:nth-of-type(1),
  .sun__body li:nth-of-type(7),
  .sun__body li:nth-of-type(13),
  .sun__body li:nth-of-type(19),
  .sun__body li:nth-of-type(25){transform:translateX(calc(var(--sun-size) * 0.11))}
  .sun__body li:nth-of-type(5),
  .sun__body li:nth-of-type(9),
  .sun__body li:nth-of-type(17),
  .sun__body li:nth-of-type(21),
  .sun__body li:nth-of-type(27){transform:translateX(calc(var(--sun-size) * 0.06))}
  .sun__body li:nth-of-type(8),
  .sun__body li:nth-of-type(14),
  .sun__body li:nth-of-type(18),
  .sun__body li:nth-of-type(24){transform:translateX(calc(var(--sun-size) * -0.08))}
  .sun__body li:nth-of-type(4),
  .sun__body li:nth-of-type(10),
  .sun__body li:nth-of-type(16),
  .sun__body li:nth-of-type(22){transform:translateX(calc(var(--sun-size) * -0.12))}

  .sun__body--line-1{left:85%;z-index:0;animation:line-movement 10s var(--ease-out-quad) infinite}
  .sun__body--line-1__line{background:var(--b1)}
  .sun__body--line-1 li:nth-of-type(odd)::before{background:var(--c1)}

  .sun__body--line-2{left:65%;bottom:100%;z-index:-1;animation:line-movement 8s var(--ease-out-quad) infinite}
  .sun__body--line-2__line{background:var(--b2)}
  .sun__body--line-2 li:nth-of-type(odd)::before{background:var(--c2)}

  .sun__body--line-3{left:30%;bottom:200%;z-index:-2;animation:line-movement 6s var(--ease-out-quad) infinite}
  .sun__body--line-3__line{background:var(--b3)}
  .sun__body--line-3 li:nth-of-type(odd)::before{background:var(--c3)}

  .sun__body--line-4{left:10%;bottom:300%;z-index:-3;animation:line-movement 4s var(--ease-out-quad) infinite}
  .sun__body--line-4__line{background:var(--b4)}
  .sun__body--line-4 li:nth-of-type(odd)::before{background:var(--c4)}

  .sun__body--line-5{left:-20%;bottom:400%;z-index:-4;animation:line-movement 2s var(--ease-out-quad) infinite}
  .sun__body--line-5__line{background:var(--b5)}
  .sun__body--line-5 li:nth-of-type(odd)::before{background:var(--c5)}

  @keyframes float{
    0%{transform:translate(-50%,-50%)}
    60%{transform:translate(-50%,-30%)}
    100%{transform:translate(-50%,-50%)}
  }
  @keyframes line-movement{
    0%{transform:translateX(0)}
    60%{transform:translateX(-10px)}
    80%{transform:translateX(10px)}
    100%{transform:translateX(0)}
  }
</style>
</head>
<body>
  <div class="sun-stage" role="img" aria-label="${label}">
    <div class="sun">
      <div class="sun__body">
${layers.map(layer).join('\n')}
      </div>
    </div>
  </div>
</body>
</html>
`;

const palettes = {
  green: {
    b1: '#bfe08f', c1: '#8fc46d',
    b2: '#8fc46d', c2: '#5fa255',
    b3: '#5fa255', c3: '#478a48',
    b4: '#478a48', c4: '#35703c',
    b5: '#35703c', c5: '#e6f4cf',
    body: '#4f9150', glowA: '#5fa255', glowB: '#bfe08f',
  },
  magenta: {
    b1: '#e39a84', c1: '#cf6478',
    b2: '#cf6478', c2: '#bf3a6b',
    b3: '#bf3a6b', c3: '#a8336e',
    b4: '#a8336e', c4: '#8f2b60',
    b5: '#8f2b60', c5: '#f2dcc6',
    body: '#ad3a6f', glowA: '#bf3a6b', glowB: '#e39a84',
  },
  blue: {
    b1: '#a8c8ec', c1: '#7fa6dc',
    b2: '#7fa6dc', c2: '#5a84c0',
    b3: '#5a84c0', c3: '#40689f',
    b4: '#40689f', c4: '#2e4f80',
    b5: '#2e4f80', c5: '#dce9f7',
    body: '#4f7ab8', glowA: '#4f7ab8', glowB: '#a8c8ec',
  },
  flame: {
    b1: '#f2a85e', c1: '#e57338',
    b2: '#e57338', c2: '#d4502a',
    b3: '#d4502a', c3: '#b83a22',
    b4: '#b83a22', c4: '#8f2a18',
    b5: '#8f2a18', c5: '#ffd9a8',
    body: '#d4502a', glowA: '#d4502a', glowB: '#f2a85e',
  },
};

const variants = [
  {
    file: 'planet-bars-green.html', title: 'Green bar planet', label: 'Green bar planet',
    palette: palettes.green, rotation: '-25deg',
  },
  {
    file: 'planet-bars-magenta.html', title: 'Magenta bar planet', label: 'Magenta bar planet',
    palette: palettes.magenta, rotation: '18deg',
  },
  {
    file: 'planet-bars-blue.html', title: 'Blue bar planet', label: 'Blue bar planet',
    palette: palettes.blue, rotation: '-62deg',
  },
  {
    file: 'planet-bars-flame.html', title: 'Flame bar planet', label: 'Flame bar planet',
    palette: palettes.flame, rotation: '7deg',
  },
];

for (const v of variants) {
  writeFileSync(join(outDir, v.file), build(v.palette, v.title, v.label, v));
}

console.log(`Wrote ${variants.length} bar planets to html/`);
