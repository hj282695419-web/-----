const {chromium}=require('C:/Users/Administrator/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'chrome'});
 const page=await browser.newPage({viewport:{width:1600,height:900}});
 await page.setContent('<canvas id="c" width="1600" height="900"></canvas>');
 const result=await page.evaluate(async()=>{
  const canvas=document.querySelector('canvas'),ctx=canvas.getContext('2d');
  function draw(t){
   ctx.fillStyle='#101310';ctx.fillRect(0,0,1600,900);
   const glow=ctx.createRadialGradient(1160,430,20,1160,430,650);glow.addColorStop(0,'#333c24');glow.addColorStop(.5,'#1d2518');glow.addColorStop(1,'#101310');ctx.fillStyle=glow;ctx.fillRect(0,0,1600,900);
   const pts=[];
   for(let i=0;i<180;i++){let u=i/180*Math.PI*2;for(let j=0;j<32;j++){let v=j/32*Math.PI*2;let r=275+66*Math.cos(v+u*3+t);let x=r*Math.cos(u),y=r*Math.sin(u),z=66*Math.sin(v+u*3+t);let a=.5+.12*Math.sin(t),b=.7;let yy=y*Math.cos(a)-z*Math.sin(a),zz=y*Math.sin(a)+z*Math.cos(a);let xx=x*Math.cos(b)+zz*Math.sin(b),z2=-x*Math.sin(b)+zz*Math.cos(b);let scale=950/(950-z2);pts.push([1100+xx*scale,430+yy*scale,scale,z2,j,u])}}
   pts.sort((a,b)=>a[3]-b[3]);for(const [x,y,s,z,j,u] of pts){let alpha=.2+(z+340)/1000;ctx.fillStyle=`rgba(${170+Math.round(45*Math.sin(u))},${190+Math.round(30*Math.sin(u))},${132+Math.round(28*Math.cos(u))},${alpha})`;ctx.beginPath();ctx.arc(x,y,1.05*s,0,Math.PI*2);ctx.fill()}
   ctx.strokeStyle='#d5f98115';ctx.lineWidth=.7;ctx.beginPath();ctx.ellipse(1100,430,470,205,-.55,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.ellipse(1100,430,410,375,.55,0,Math.PI*2);ctx.stroke();
  }
  draw(0);const poster=canvas.toDataURL('image/png').split(',')[1];
  const stream=canvas.captureStream(24);const rec=new MediaRecorder(stream,{mimeType:'video/webm;codecs=vp9',videoBitsPerSecond:2800000});const chunks=[];rec.ondataavailable=e=>chunks.push(e.data);const done=new Promise(resolve=>rec.onstop=resolve);rec.start();const start=performance.now();await new Promise(resolve=>{function frame(){let elapsed=performance.now()-start;draw(elapsed/8000*Math.PI*2);if(elapsed<8000)requestAnimationFrame(frame);else resolve()}frame()});rec.stop();await done;stream.getTracks().forEach(t=>t.stop());const blob=new Blob(chunks,{type:'video/webm'});const bytes=new Uint8Array(await blob.arrayBuffer());let binary='';for(let i=0;i<bytes.length;i+=8192)binary+=String.fromCharCode(...bytes.subarray(i,i+8192));return{poster,video:btoa(binary)};
 });
 fs.writeFileSync('public/assets/hero-poster.png',Buffer.from(result.poster,'base64'));fs.writeFileSync('public/assets/hero.webm',Buffer.from(result.video,'base64'));await browser.close();console.log('Created 8 second local hero video and poster');
})().catch(e=>{console.error(e);process.exit(1)});
