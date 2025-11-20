@extends('layouts/contentNavbarLayout')
@section('title', ' Odontogram')

@section('page-style')
<style>
 .odontogram-app{
    --bg:#f5f5f5;
    --card:#fff;
    --ink:#000;
    --line:#ccc;
    --blue:#2196F3;
    --deep-blue:#0047AB;
    --green:#00C853;
    --red:#FF0000;
    --gold:#FFD700;
  }
  .odontogram-app *{box-sizing:border-box}
  /* body{
    margin:0; padding:20px; background:var(--bg);
    font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial; color:var(--ink);
  } */
  .odontogram-app .container{
    max-width:1800px; margin:0 auto; background:var(--card);
    padding:20px; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,.08);
  }
  .patient-info{margin-bottom:24px; background:#f9f9f9; padding:16px; border-radius:6px}
  .patient-info h2{margin:0 0 12px}
  .form-row{
    display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:12px; margin-bottom:8px;
  }
  .form-group{display:flex; flex-direction:column; gap:6px}
  .form-group label{font-weight:600}
  .form-group input{
    padding:8px 10px; border:1px solid var(--line); border-radius:6px; font-size:14px
  }
  .button-group{display:flex; gap:10px; flex-wrap:wrap; margin-top:10px}
  button{
    border:0; border-radius:6px; padding:10px 14px; font-weight:700; cursor:pointer;
    background:#e9e9e9
  }
  .save-btn{background:#4CAF50; color:#fff}
  .reset-btn{background:#f44336; color:#fff}
  .main{display:grid; grid-template-columns:300px 1fr; gap:20px}
  .panel{
    background:#f9f9f9; padding:14px; border-radius:6px; max-height:100vh; overflow:auto
  }
  .panel h3{margin:6px 0 10px}
  .indicator-item{
    display:flex; align-items:center; gap:10px; padding:8px; background:#fff;
    border:2px solid transparent; border-radius:8px; margin-bottom:8px; cursor:pointer
  }
  .indicator-item:hover{background:#f0f4ff}
  .indicator-item.active{border-color:var(--blue); background:#eaf3ff}
  .chip{min-width:38px; height:30px; border:1px solid var(--line); border-radius:6px;
    display:flex; align-items:center; justify-content:center; font-weight:700; font-size:13px}
  .current{background:#eaf3ff; padding:10px; border-radius:6px; font-weight:700; text-align:center}
  .controls{display:flex; gap:10px; justify-content:center; margin:16px 0}
  .undo,.redo{background:#FF9800; color:#fff}
  .undo:disabled,.redo:disabled{background:#ccc; cursor:not-allowed; opacity:.6}
  .chart{background:#fff; border:1px solid #e6e6e6; border-radius:8px; padding:16px}
  .arch{font-weight:800; text-align:center; margin:10px 0}
  
  .teeth-row{display:flex; justify-content:center; gap: 0 !important; flex-wrap:nowrap}
  .tooth {
  width: 80px;              /* or 70 if you want them tighter */
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
}
  /* .tooth:hover{box-shadow:0 2px 10px rgba(0,0,0,.08)} */
  
  .tooth-img-box{
    width:100px; height:100px; position:relative; overflow:hidden; border-radius:6px; padding:0; margin:0;
 
  }
  .tooth-img{width:100%; height:100%; object-fit:contain; }

  


  .overlay{
    position:absolute; inset:0; pointer-events:none; z-index:2; overflow:hidden;
  }
  .tooth-number{font-size:12px; font-weight:800}
  .surfaces{
    display:grid; grid-template-columns:20px 20px 20px; grid-template-rows:20px 20px 20px; gap:2px;
    margin-top:2px; user-select:none
  }
  .surf{
    border:1px solid #bbb; font-size:10px; display:flex; align-items:center; justify-content:center;
    border-radius:2px; cursor:pointer; background:#fff; transition:background .15s, border-color .15s, outline .15s
  }
  .surf:hover{background:#e9f3ff; border-color:var(--blue)}
  .surf[data-surface="M"]{grid-area:2 / 1 / 3 / 2}
  .surf[data-surface="O"]{grid-area:1 / 2 / 2 / 3}
  .surf[data-surface="D"]{grid-area:2 / 3 / 3 / 4}
  .surf[data-surface="L"]{grid-area:3 / 2 / 4 / 3}
  .surf[data-surface="F"]{grid-area:2 / 2 / 3 / 3}
  /* Filled/outlined surface states */
  .fill-caries{background:var(--red) !important; color:#fff; border-color:#d20000}
  .fill-amalgam{background:var(--deep-blue) !important; color:#fff; border-color:#003a8f}
  .fill-temporary{background:var(--gold) !important; color:#000; border-color:#c9a500}
  .outline-composite{outline:2px solid var(--blue)}
  .outline-sealant{outline:2px solid var(--green)}
  .outline-failure{outline:2px solid var(--red)}
  /* overhang corner (tiny red triangle at top-right) */
  .corner-overhang{
    background-image: linear-gradient(135deg, var(--red) 0 70%, rgba(0,0,0,0) 71%);
    background-size: 10px 10px;
    background-repeat: no-repeat;
    background-position: top right;
  }
  /* tiny helper below tooth */
  .tooth-footer{height:12px; width:100%; display:flex; align-items:center; justify-content:center}
</style>
<link rel="stylesheet" href="{{ asset('assets/css/custom.css') }}">
@endsection


@section('content')
<div class="odontogram-app">





      <div class="container">
        
      <div class="patient-info">
        <h2>Patient Information</h2>
        <div class="form-row">
          <div class="form-group"><label for="pname">Patient Name</label><input id="pname" type="text" placeholder="Enter patient name"></div>
          <div class="form-group"><label for="age">Age</label><input id="age" type="number" placeholder="Enter age"></div>
          <div class="form-group"><label for="phone">Contact No</label><input id="phone" type="tel" placeholder="Enter contact number"></div>
          <div class="form-group"><label for="email">Email</label><input id="email" type="email" placeholder="Enter email"></div>
          
        </div>
        <div class="button-group">
          <button class="save-btn" id="saveBtn">Save JSON</button>
          <button class="reset-btn" id="resetBtn">Reset</button>
        </div>
      </div>

      <div class="main">
        <div class="panel">
          <h3>Indicators</h3>
          <div id="indicators"></div>
        </div>

        <div class="chart">
          <div class="current" id="currentTool">Select an indicator to begin</div>
          <div class="controls">
            <button id="undoBtn" class="undo" disabled>↶ Undo</button>
            <button id="redoBtn" class="redo" disabled>↷ Redo</button>
          </div>

          <div class="arch">FACIAL (Maxillary)</div>
          <div class="teeth-row" id="rowMax"></div>

          <div class="arch" style="margin-top:26px">LINGUAL (Mandibular)</div>
          <div class="teeth-row" id="rowMan"></div>

          <div id="odontogram-modal" class="modal" style="display:none;">
  <div class="modal-content">
    <span class="close-btn" onclick="closeModal()">&times;</span>
    <h2 id="modal-title"></h2>
    <form>
      <label for="note">Add Note/Status:</label>
      <textarea id="note" rows="3"></textarea>
      <button type="submit">Save</button>
    </form>
  </div>
</div>  
        </div>
      </div>
    </div>
</div>
@endsection

<!-- Page Script -->
@section('page-script')
<script>
/* =============================
   Indicator catalog (full, with colors)
   ============================= */

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('odontogram')) {
        document.body.classList.add('layout-menu-collapsed');
        document.body.classList.remove('layout-menu-expanded');
    }

});

let AI_MAP = {};

async function loadAIMap() {
   AI_MAP = await fetch("{{ asset('assets/js/odontogram/tooth_map.json') }}")
    .then(r => r.json());

}


const INDICATORS = [
  // Surface based
  { id:'caries', name:'Dental Caries', level:'surface', style:'fill', color:'#FF0000', icon:'fa-solid fa-circle-dot text-red-600' },
  { id:'amalgam', name:'Amalgam Restoration', level:'surface', style:'fill', color:'#0047AB', icon:'fa-solid fa-fill-drip text-blue-700' },
  { id:'composite', name:'Composite Restoration', level:'surface', style:'outline', color:'#2196F3', icon:'fa-regular fa-square text-blue-500' },
  { id:'temporary', name:'Temporary Filling', level:'surface', style:'fill', color:'#FFD700', icon:'fa-solid fa-clock text-yellow-500' },
  { id:'sealant', name:'Sealant', level:'surface', style:'outline', color:'#00C853', icon:'fa-solid fa-shield-halved text-green-600' },
  { id:'restoration-failure', name:'Restoration Needs Intervention', level:'surface', style:'outline', color:'#FF0000', icon:'fa-solid fa-triangle-exclamation text-red-600' },
  { id:'overhang', name:'Overhanging Restoration', level:'surface', style:'corner', color:'#FF0000', icon:'fa-solid fa-caret-right text-red-600' },

  // Tooth based: fractures / pathology
  { id:'crown-fracture', name:'Crown Fracture', level:'tooth', draw:'crown-fracture', color:'#FF0000', icon:'fa-solid fa-bolt text-red-600' },
  { id:'root-fracture', name:'Root Fracture', level:'tooth', draw:'root-fracture', color:'#FF0000', icon:'fa-solid fa-bolt text-red-600' },
  { id:'periapical', name:'Periapical Pathology', level:'tooth', draw:'periapical', color:'#FF0000', icon:'fa-solid fa-virus text-red-600' },

  // Tooth based: RCT indicators
  { id:'rct', name:'Root Canal Filled (Complete)', level:'tooth', draw:'rct', color:'#2196F3', icon:'fa-solid fa-syringe text-blue-600' },
  { id:'incomplete-rct', name:'Incomplete Root Canal', level:'tooth', draw:'rct-dashed', color:'#2196F3', icon:'fa-solid fa-syringe text-blue-600 opacity-60' },
  { id:'canal-fill', name:'Canal Filling (Single)', level:'tooth', draw:'rct-single', color:'#2196F3', icon:'fa-solid fa-circle text-blue-600' },
  { id:'improper-rct', name:'Improper RCT (Needs Intervention)', level:'tooth', draw:'rct-warning', color:'#FF0000', icon:'fa-solid fa-triangle-exclamation text-red-600' },

  // Tooth based: eruption / soft tissue / retention
  { id:'impacted', name:'Impacted Tooth', level:'tooth', draw:'impaction', color:'#FF0000', icon:'fa-solid fa-arrow-down-long text-red-600' },
  { id:'partial-eruption', name:'Partial Eruption', level:'tooth', draw:'eruption-line', color:'#FF0000', icon:'fa-solid fa-arrows-up-down text-red-600' },
  { id:'soft-tissue', name:'Soft Tissue Abnormality (Needs Intervention)', level:'tooth', draw:'gingival-wave', color:'#FF0000', icon:'fa-solid fa-wave-square text-red-600' },
  { id:'retained-deciduous', name:'Retained Deciduous Tooth', level:'tooth', draw:'retained-D', color:'#2196F3', icon:'fa-solid fa-baby text-blue-600' },

  // Missing teeth (two flavors)
  { id:'missing-noneed', name:'Missing Tooth – No Intervention', level:'tooth', draw:'x-blue', color:'#2196F3', icon:'fa-solid fa-xmark text-blue-600' },
  { id:'missing-need', name:'Missing Tooth – Needs Intervention', level:'tooth', draw:'x-red', color:'#FF0000', icon:'fa-solid fa-xmark text-red-600' },

  // Prosthetics
  { id:'metal-crown', name:'Metal Crown', level:'tooth', draw:'crown-metal', color:'#2196F3', icon:'fa-solid fa-chess-king text-blue-600' },
  { id:'pfm-crown', name:'Porcelain-Fused-to-Metal Crown', level:'tooth', draw:'crown-pfm', color:'#2196F3', icon:'fa-solid fa-chess-queen text-blue-600' },
  { id:'rpd', name:'Removable Partial Denture', level:'tooth', draw:'rpd', color:'#2196F3', icon:'fa-solid fa-teeth-open text-blue-600' },
  { id:'bridge', name:'Fixed Bridge (select two teeth)', level:'tooth', draw:'bridge', color:'#2196F3', icon:'fa-solid fa-link text-blue-600' },
  { id:'implant', name:'Implant', level:'tooth', draw:'implant', color:'#2196F3', icon:'fa-solid fa-screwdriver-wrench text-blue-600' },

  // Position
  { id:'rotation', name:'Rotation', level:'tooth', draw:'rotation', color:'#FF0000', icon:'fa-solid fa-rotate-right text-red-600' },
  { id:'malposed', name:'Malposed Tooth', level:'tooth', draw:'malposition', color:'#FF0000', icon:'fa-solid fa-up-down-left-right text-red-600' },
  { id:'extrusion', name:'Extrusion / Intrusion', level:'tooth', draw:'extrusion', color:'#FF0000', icon:'fa-solid fa-arrows-up-down text-red-600' },
];


const SURFACES = ['M','O','D','L','F'];
const surfaceSet = new Set(INDICATORS.filter(i=>i.level==='surface').map(i=>i.id));
const toothSet = new Set(INDICATORS.filter(i=>i.level==='tooth').map(i=>i.id));

/* =============================
   State & history
   ============================= */
let selectedIndicator = null;
const teethState = {}; // per tooth: { surfaces: {M: {marks:[]}}, tooth: { flags:[], bridges:[] } }
let history = [];
let hIndex = -1;

function snapshot(){
  history = history.slice(0, hIndex+1);
  history.push(JSON.parse(JSON.stringify(teethState)));
  hIndex++;
  updateUndoRedo();
}
function undo(){ if(hIndex>0){ hIndex--; load(history[hIndex]); } }
function redo(){ if(hIndex<history.length-1){ hIndex++; load(history[hIndex]); } }
function load(s){ Object.keys(teethState).forEach(k=>delete teethState[k]); Object.assign(teethState, JSON.parse(JSON.stringify(s))); renderAll(); updateUndoRedo(); }
function updateUndoRedo(){
  document.getElementById('undoBtn').disabled = !(hIndex>0);
  document.getElementById('redoBtn').disabled = !(hIndex<history.length-1);
}

/* =============================
   DOM build
   ============================= */
const rowMax = document.getElementById('rowMax');
const rowMan = document.getElementById('rowMan');

function toothBox(number, arch){
  const root = document.createElement('div');
  root.className = 'tooth';
  root.dataset.number = number;
  root.dataset.arch = arch;

  const imgBox = document.createElement('div');
  imgBox.className='tooth-img-box';

  const img = document.createElement('img');
  img.className='tooth-img';
  let base = ((number>=11 && number<=28) ? 'dentadura-sup-' : 'dentadura-inf-');
  img.src = `{{ asset('assets/img/odontogram_new/${number}.png')}}`; // adjust to your path
  img.alt = `Tooth ${number}`;
  imgBox.appendChild(img);

  const overlay = document.createElement('div');
  overlay.className='overlay';
  overlay.id = `overlay-${number}`;
  imgBox.appendChild(overlay);

  const tnum = document.createElement('div');
  tnum.className='tooth-number';
  tnum.textContent = number;

  const surfaces = document.createElement('div');
  surfaces.className='surfaces';
  surfaces.dataset.toothNumber = number;

SURFACES.forEach(s=>{
    const d = document.createElement('div');
    d.className='surf';
    d.dataset.surface = s;
    d.textContent = s;
    d.addEventListener('click',(ev)=>handleSurfaceClick(number, s, d, ev));
    surfaces.appendChild(d);
  });

  const foot = document.createElement('div');
  foot.className='tooth-footer';
  foot.id = `footer-${number}`;

  root.appendChild(imgBox);
  root.appendChild(tnum);
  root.appendChild(surfaces);
  root.appendChild(foot);

  root.addEventListener('click',(ev)=> {
    if(ev.target.classList.contains('surf')) return;
    handleToothClick(number);
  });

  return root;
}

function initRows(){
  for(let i=18;i>=11;i--) rowMax.appendChild(toothBox(i,'max'));
  for(let i=21;i<=28;i++) rowMax.appendChild(toothBox(i,'max'));
  for(let i=48;i>=41;i--) rowMan.appendChild(toothBox(i,'man'));
  for(let i=31;i<=38;i++) rowMan.appendChild(toothBox(i,'man'));
}

function buildIndicators(){
  const host = document.getElementById('indicators');
  
  INDICATORS.forEach(ind=>{
    const row = document.createElement('div');
    row.className='indicator-item';
    row.dataset.id = ind.id;
    row.addEventListener('click',()=>selectIndicator(ind.id));

    const chip = document.createElement('div');
    chip.className='chip';
    // chip.style.borderColor = '#ddd';
    // chip.style.color = (ind.style==='fill') ? '#111' : ind.color;
    // chip.textContent = ind.level==='surface' ? 'S' : 'T';

    const icon = document.createElement('i');
    icon.style.color = ind.color;
    icon.className = ind.icon;

    chip.appendChild(icon);


    const name = document.createElement('div');
    name.textContent = ind.name;
    name.style.fontWeight = '600';
    name.style.fontSize = '14px';

    row.appendChild(chip);
    row.appendChild(name);
    host.appendChild(row);
  });
}

function selectIndicator(id){
  selectedIndicator = id;
  document.querySelectorAll('.indicator-item').forEach(i=>i.classList.toggle('active', i.dataset.id===id));
  const def = INDICATORS.find(i=>i.id===id);
  document.getElementById('currentTool').textContent = `Selected: ${def.name} (${def.level === 'surface' ? 'Surface' : 'Tooth'})`;
}

/* =============================
   Rendering helpers
   ============================= */
function ensureTooth(number){
  if(!teethState[number]) teethState[number] = { surfaces:{}, tooth:{ flags:[], bridges:[] } };
  SURFACES.forEach(s=>{ if(!teethState[number].surfaces[s]) teethState[number].surfaces[s] = { marks:[] }});
}

function renderTooth(number){
  const ov = document.getElementById(`overlay-${number}`);
  const footer = document.getElementById(`footer-${number}`);
  ov.innerHTML = ''; footer.innerHTML = '';

  const t = teethState[number];
  if(!t) return;

  const svg = mkSVG();
  ov.appendChild(svg);
  const bbox = {x:0, y:0, w:80, h:80};

  // Draw tooth-level flags
  t.tooth.flags.forEach(f=>{
    const def = INDICATORS.find(i=>i.id===f);
    if(!def) return;
    drawSymbol(svg, def.draw, def.color, bbox, number);
  });

  // Draw bridges from this tooth (connector drawn only once from lower number)
  t.tooth.bridges.forEach(peer=>{
    const a = Number(number), b = Number(peer);
    if(isNaN(a) || isNaN(b)) return;
    if(a < b){ drawBridgeBetween(svg, a, b, '#2196F3'); }
  });

  // Surface fills and marks
  SURFACES.forEach(s=>{
    const el = document.querySelector(`.surfaces[data-tooth-number="${number}"] .surf[data-surface="${s}"]`);
    el.classList.remove('fill-caries','fill-amalgam','fill-temporary','outline-composite','outline-sealant','outline-failure','corner-overhang');
    const marks = t.surfaces[s].marks; // ids
    marks.forEach(id=>{
      switch(id){
        case 'caries': el.classList.add('fill-caries'); break;
        case 'amalgam': el.classList.add('fill-amalgam'); break;
        case 'temporary': el.classList.add('fill-temporary'); break;
        case 'composite': el.classList.add('outline-composite'); break;
        case 'sealant': el.classList.add('outline-sealant'); break;
        case 'restoration-failure': el.classList.add('outline-failure'); break;
        case 'overhang': el.classList.add('corner-overhang'); break;
      }
    });
  });

  // Mobility uses footer if present
  if(t.tooth.flags.includes('mobility')){ // preserved if you ever add it back
    footer.textContent = '↔';
    footer.style.color = '#FF0000';
    footer.style.fontWeight = '900';
    footer.style.fontSize = '12px';
  }
}

function renderAll(){
  document.querySelectorAll('.tooth').forEach(n=>renderTooth(n.dataset.number));
}

/* =============================
   Interactions
   ============================= */
let pendingBridgeStart = null;

function handleSurfaceClick(number, surface, node, ev){
  if(!selectedIndicator){ alert('Select an indicator first'); return; }
  if(!surfaceSet.has(selectedIndicator)){
    return; // ignore tooth-level tools on surface grid
  }
  ensureTooth(number);

  const marks = teethState[number].surfaces[surface].marks;
  const idx = marks.indexOf(selectedIndicator);
  if(idx>=0){
    marks.splice(idx,1);
  }else{
    // Composite vs amalgam conflict on same surface
    const conflict = (selectedIndicator==='amalgam' && marks.includes('composite')) ||
                     (selectedIndicator==='composite' && marks.includes('amalgam'));
    if(conflict){
      teethState[number].surfaces[surface].marks = marks.filter(m=>!['amalgam','composite'].includes(m));
      teethState[number].surfaces[surface].marks.push(selectedIndicator);
    }else{
      marks.push(selectedIndicator);
    }
  }
  snapshot();
  renderTooth(number);
  ev.stopPropagation();
}

function handleToothClick(number){
  if(!selectedIndicator){ alert('Select an indicator first'); return; }
  if(!toothSet.has(selectedIndicator)){
    return; // surface tool clicked on tooth image
  }
  ensureTooth(number);

  // Bridge requires two clicks
  if(selectedIndicator==='bridge'){
    if(pendingBridgeStart===null){
      pendingBridgeStart = number;
      document.getElementById('currentTool').textContent = `Bridge: choose second abutment (first: ${number})`;
      return;
    }else{
      const a = Number(pendingBridgeStart), b = Number(number);
      if(a!==b){
        // crown caps for abutments (metal default), If you want PFM crowns for bridges, switch (crown-metal) to (crown-pfm
        addFlag(a,'crown-metal'); addFlag(b,'crown-metal'); 
        linkBridge(a,b);
        snapshot();
        renderTooth(a); renderTooth(b);
      }
      pendingBridgeStart = null;
      document.getElementById('currentTool').textContent = `Bridge placed between ${a} and ${b}`;
      return;
    }
  }

  // Missing tooth flavors are mutually exclusive and clear surfaces
  const isMissing = (selectedIndicator==='missing-need' || selectedIndicator==='missing-noneed');
  if(isMissing){
    teethState[number].tooth.flags = [selectedIndicator]; // replace others
    SURFACES.forEach(s=>teethState[number].surfaces[s].marks=[]);
    snapshot(); renderTooth(number); return;
  }

  // Toggle generic tooth flag
  const flags = teethState[number].tooth.flags;
  const ix = flags.indexOf(selectedIndicator);
  if(ix>=0){
    flags.splice(ix,1);
  }else{
    flags.push(selectedIndicator);
  }
  snapshot();
  renderTooth(number);
}

function addFlag(num, id){
  ensureTooth(num);
  const f = teethState[num].tooth.flags;
  if(!f.includes(id)) f.push(id);
}
function linkBridge(a,b){
  ensureTooth(a); ensureTooth(b);
  if(!teethState[a].tooth.bridges.includes(String(b))) teethState[a].tooth.bridges.push(String(b));
  if(!teethState[b].tooth.bridges.includes(String(a))) teethState[b].tooth.bridges.push(String(a));
}

/* =============================
   SVG drawing
   ============================= */
function mkSVG(){
  const s = document.createElementNS('http://www.w3.org/2000/svg','svg');
  s.setAttribute('viewBox','0 0 80 80');
  s.setAttribute('width','100%'); s.setAttribute('height','100%');
  return s;
}
function line(s,x1,y1,x2,y2,color,w=2){
  const el = document.createElementNS(s.namespaceURI,'line');
  el.setAttribute('x1',x1); el.setAttribute('y1',y1);
  el.setAttribute('x2',x2); el.setAttribute('y2',y2);
  el.setAttribute('stroke',color); el.setAttribute('stroke-width',w);
  el.setAttribute('stroke-linecap','round');
  s.appendChild(el);
  return el;
}
function rect(s,x,y,w,h,color,fill='none',sw=2,rx=2){
  const el = document.createElementNS(s.namespaceURI,'rect');
  el.setAttribute('x',x); el.setAttribute('y',y); el.setAttribute('width',w); el.setAttribute('height',h);
  if(rx) el.setAttribute('rx',rx);
  el.setAttribute('stroke',color); el.setAttribute('fill',fill); el.setAttribute('stroke-width',sw);
  s.appendChild(el); return el;
}
function path(s,d,color,sw=2,fill='none'){
  const el = document.createElementNS(s.namespaceURI,'path');
  el.setAttribute('d',d); el.setAttribute('stroke',color); el.setAttribute('fill',fill);
  el.setAttribute('stroke-width',sw); el.setAttribute('stroke-linecap','round'); el.setAttribute('stroke-linejoin','round');
  s.appendChild(el); return el;
}
function circleEl(s,cx,cy,r,stroke,fill='none',sw=2){
  const el = document.createElementNS(s.namespaceURI,'circle');
  el.setAttribute('cx',cx); el.setAttribute('cy',cy); el.setAttribute('r',r);
  el.setAttribute('stroke',stroke); el.setAttribute('fill',fill); el.setAttribute('stroke-width',sw);
  s.appendChild(el); return el;
}
function textEl(s,x,y,txt,color,size=12,weight=800){
  const el = document.createElementNS(s.namespaceURI,'text');
  el.setAttribute('x',x); el.setAttribute('y',y);
  el.setAttribute('fill',color); el.setAttribute('font-size',size);
  el.setAttribute('font-weight',weight); el.setAttribute('text-anchor','middle');
  el.textContent = txt; s.appendChild(el); return el;
}
function dashLine(s,x1,y1,x2,y2,color,w=2,dash='4 4'){
  const el = line(s,x1,y1,x2,y2,color,w);
  el.setAttribute('stroke-dasharray',dash);
  return el;
}
function arrow(s,x1,y1,x2,y2,color,sw=2){
  line(s,x1,y1,x2,y2,color,sw);
  const ang = Math.atan2(y2-y1,x2-x1);
  const len = 6;
  const hx1 = x2 - len*Math.cos(ang - Math.PI/6);
  const hy1 = y2 - len*Math.sin(ang - Math.PI/6);
  const hx2 = x2 - len*Math.cos(ang + Math.PI/6);
  const hy2 = y2 - len*Math.sin(ang + Math.PI/6);
  line(s,x2,y2,hx1,hy1,color,sw);
  line(s,x2,y2,hx2,hy2,color,sw);
}

function drawSymbol(svg, kind, color, box, number){
  switch(kind){
    /* RCT variants */
    case 'rct': {
      line(svg,35,28,35,70,color,2);
      line(svg,45,28,45,70,color,2);
      break;
    }
    case 'rct-dashed': {
      dashLine(svg,40,28,40,70,color,2,'3 3');
      break;
    }
    case 'rct-single': {
      line(svg,40,28,40,70,color,2);
      break;
    }
    case 'rct-warning': {
      dashLine(svg,40,28,40,70,color,2,'3 3');
      textEl(svg,40,22,'!',color,12,900);
      break;
    }

    /* Crowns */
    case 'crown-metal': {
      rect(svg,18,8,44,20,color,'rgba(33,150,243,0.12)',2,4);
      break;
    }
    case 'crown-pfm': {
      rect(svg,18,8,44,20,color,'rgba(33,150,243,0.06)',2,4);
      // subtle cross-hatch
      for(let x=20;x<60;x+=6){ dashLine(svg,x,8,x+6,28,color,1,'3 3'); }
      break;
    }

    /* Fractures */
    case 'crown-fracture': {
      path(svg,'M20 16 L28 22 L24 28 L36 34 L30 40',color,2);
      break;
    }
    case 'root-fracture': {
      path(svg,'M28 44 L36 50 L32 56 L44 62 L40 68',color,2);
      break;
    }

    /* Periapical */
    case 'periapical': {
  const p = AI_MAP[number]?.apex || {x:40,y:70};
  circleEl(svg, p[0], p[1], 7, color, "rgba(255,0,0,0.10)", 2);
  break;
}

    /* Eruption / Impaction / Soft tissue / Retained */
    case 'eruption-line': {
      dashLine(svg,18,24,62,24,color,2,'4 3');
      break;
    }
    case 'impaction': {
      arrow(svg,22,30,58,50,color,2);
      break;
    }
    case 'gingival-wave': {
      path(svg,'M16 64 Q24 60 32 64 T48 64 T64 64',color,2);
      break;
    }
    case 'retained-D': {
      textEl(svg,40,44,'D',color,16,900);
      break;
    }

    /* Missing variants */
    case 'x-blue': {
      line(svg,18,18,62,62,color,3);
      line(svg,62,18,18,62,color,3);
      break;
    }
    case 'x-red': {
      line(svg,18,18,62,62,color,3);
      line(svg,62,18,18,62,color,3);
      break;
    }

    /* Implant */
    case 'implant': {
      rect(svg,34,40,12,26,color,'none',2,2);
      for(let y=44;y<=62;y+=4){ line(svg,34,y,46,y,color,1.5); }
      break;
    }

    /* RPD: saddle arc and clasps */
    case 'rpd': {
      path(svg,'M22 48 Q40 36 58 48',color,2);
      // clasps
      path(svg,'M20 46 q-4 4 0 8',color,2);
      path(svg,'M60 46 q4 4 0 8',color,2);
      break;
    }

    /* Bridge connector: per-tooth stub; long connector is drawn with drawBridgeBetween */
    case 'bridge': {
      // nothing here; handled by drawBridgeBetween
      break;
    }

    /* Position problems */
    case 'rotation': {
      path(svg,'M40 20 A20 20 0 1 1 30 24',color,2);
      arrow(svg,30,24,34,18,color,2);
      break;
    }
    case 'malposition': {
      // lateral displacement arrow
      arrow(svg,22,40,58,40,color,2);
      break;
    }
    case 'extrusion': {
      arrow(svg,40,62,40,20,color,2);
      arrow(svg,40,18,40,60,color,2);
      break;
    }
  }
}

function drawBridgeBetween(svg, a, b, color){
  // local stub showing connection direction so both teeth hint a bar across
  const leftward = a < b;
  const y = 24;
  if(leftward){
    line(svg,40, y, 78, y, color,3);
  }else{
    line(svg,2, y, 40, y, color,3);
  }
  // crown cap already added on abutments
}

/* =============================
   Save / Reset
   ============================= */
document.getElementById('saveBtn').addEventListener('click',()=>{
  const data = {
    patient:{
      name:document.getElementById('pname').value.trim(),
      age:document.getElementById('age').value,
      contact:document.getElementById('phone').value.trim(),
      email:document.getElementById('email').value.trim(),
    },
    teeth:teethState,
    savedAt:new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `odontogram-${data.patient.name||'patient'}-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById('resetBtn').addEventListener('click',()=>{
  if(!confirm('Reset all data?')) return;
  Object.keys(teethState).forEach(k=>delete teethState[k]);
  history=[]; hIndex=-1; updateUndoRedo();
  document.querySelectorAll('.overlay').forEach(o=>o.innerHTML='');
  document.querySelectorAll('.tooth-footer').forEach(f=>f.innerHTML='');
  document.querySelectorAll('.surfaces .surf').forEach(s=>s.className='surf');
  document.getElementById('currentTool').textContent = 'Select an indicator to begin';
});

document.getElementById('undoBtn').addEventListener('click',undo);
document.getElementById('redoBtn').addEventListener('click',redo);

/* =============================
   Boot (fixed async sequence)
   ============================= */
async function odontogramBoot() {
    await loadAIMap();     // load AI mapping first
    buildIndicators();      // build UI indicator list
    initRows();             // add 32 teeth to UI
    snapshot();             // initial empty state
}


document.addEventListener("DOMContentLoaded", odontogramBoot);

</script>
@endsection
