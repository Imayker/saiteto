// SPA navigation
document.querySelectorAll('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>openSection(btn.dataset.target)));
function openSection(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.target===id));window.scrollTo({top:0,behavior:'smooth'});}

// Accordion
function toggleAcc(el){const panel=el.nextElementSibling;const open=el.classList.contains('open');document.querySelectorAll('.heading').forEach(h=>{h.classList.remove('open');h.nextElementSibling.style.maxHeight=null});if(!open){el.classList.add('open');panel.style.maxHeight=panel.scrollHeight+'px'}}

// Modal preview
function preview(src){const m=document.getElementById('modal');document.getElementById('modalImg').src=src;m.classList.add('show')}
function closeModal(){document.getElementById('modal').classList.remove('show')}

// Quest logic
const correct='подарок';function checkPass(){const v=document.getElementById('pass').value.trim().toLowerCase();const err=document.getElementById('passErr');if(v===correct){err.classList.add('hidden');document.getElementById('qstep1').classList.remove('active');document.getElementById('qstep2').classList.add('active');initPuzzle('puzzle1');}else{err.classList.remove('hidden')}}
function nextQ(step){document.querySelectorAll('.qstep').forEach(s=>s.classList.remove('active'));if(step===3){document.getElementById('qfinal').classList.add('active')} }

// Simple puzzle implementation
function initPuzzle(id){const grid=document.getElementById(id);grid.innerHTML='';const total=9;const order=Array.from({length:total},(_,i)=>i).sort(()=>Math.random()-0.5);const correct=Array.from({length:total},(_,i)=>i);
let sel=null;for(let i=0;i<total;i++){const btn=document.createElement('button');btn.style.backgroundImage='url(https://i.postimg.cc/PprHrdfd/image.jpg)';const v=order[i];const bgx=(v%3)*50;const bgy=Math.floor(v/3)*50;btn.style.backgroundPosition=`${bgx}% ${bgy}%`;btn.addEventListener('click',()=>{if(sel===null){sel=i;btn.style.opacity='0.5'}else{swap(order,sel,i);sel=null;render();if(order.join(',')===correct.join(',')){document.getElementById(id+'next').classList.remove('hidden')}}});grid.appendChild(btn)}
function swap(arr,a,b){[arr[a],arr[b]]=[arr[b],arr[a]]}
function render(){const children=document.getElementById('puzzle1').children;for(let k=0;k<children.length;k++){children[k].style.backgroundPosition=( (order[k]%3)*50)+'% '+(Math.floor(order[k]/3)*50)+'%';children[k].style.opacity='1'}}

// small helper to keep order variable available in render
let order; // declared above to prevent errors

// ensure puzzle works: reassign local order to global after init
function initPuzzle(id){const grid=document.getElementById(id);grid.innerHTML='';const total=9;order=Array.from({length:total},(_,i)=>i).sort(()=>Math.random()-0.5);const correctArr=Array.from({length:total},(_,i)=>i);let sel=null;for(let i=0;i<total;i++){const btn=document.createElement('button');btn.style.backgroundImage='url(https://i.postimg.cc/PprHrdfd/image.jpg)';const v=order[i];const bgx=(v%3)*50;const bgy=Math.floor(v/3)*50;btn.style.backgroundPosition=`${bgx}% ${bgy}%`;btn.addEventListener('click',()=>{if(sel===null){sel=i;btn.style.opacity='0.5'}else{swap(order,sel,i);sel=null;build();if(order.join(',')===correctArr.join(',')){document.getElementById(id+'next').classList.remove('hidden')}}});grid.appendChild(btn)}function build(){for(let k=0;k<grid.children.length;k++){const vv=order[k];grid.children[k].style.backgroundPosition=( (vv%3)*50)+'% '+(Math.floor(vv/3)*50)+'%';grid.children[k].style.opacity='1'}}}

// end
