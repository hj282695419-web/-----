import React from 'react';
import {lazy,Suspense,useEffect,useState} from 'react';
const Waves=lazy(()=>import('./GradientWaves'));
export default function DeferredWaves(props){const[enabled,setEnabled]=useState(false);useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches||navigator.connection?.saveData)return;const hero=document.getElementById('home');const observer=new IntersectionObserver(([entry])=>setEnabled(!entry.isIntersecting));if(hero)observer.observe(hero);return()=>observer.disconnect()},[]);return enabled?<Suspense fallback={null}><Waves {...props}/></Suspense>:null}
