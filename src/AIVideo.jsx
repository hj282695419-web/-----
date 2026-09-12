import React from 'react';
import BorderGlow from './BorderGlow';
import {useState} from 'react';
function AdditionalVideo({number,src}){const[failed,setFailed]=useState(false);return <BorderGlow className="video-glow" glowColor="275 85 78"><article className="ai-video-work"><video controls playsInline preload="none" poster={src.replace('.mp4', '-poster.jpg')} src={src} aria-label={`AI 视频作品 ${number}`} onError={()=>setFailed(true)}/><div className="series-caption"><div><span className="series-kicker">{number} / AI VIDEO</span><h3>AI 视频作品 {number}</h3></div><a className="series-action" href={src} target="_blank" rel="noreferrer">打开视频 ↗</a></div>{failed&&<p role="status">视频暂时无法播放，请点击“打开视频”查看原文件。</p>}</article></BorderGlow>}

export default function AIVideo(){
  const [failed,setFailed]=useState(false);
  return <section className="section wrap" id="ai-video">
    <div className="section-top"><span>03 / AI VIDEO</span><span>动态影像与创意叙事</span></div>
    <div className="section-heading"><h2>AI <span>视频。</span></h2><p>让想象成为流动的画面。</p></div>
    <BorderGlow className="video-glow" glowColor="275 85 78"><article className="ai-video-work">
      <video controls playsInline preload="none" poster="/media/spring-outing-poster.jpg" aria-label="踏春：一次有趣的出行" onError={()=>setFailed(true)} src="/media/spring-outing.mp4">你的浏览器不支持视频播放。</video>
      <div className="series-caption"><div><span className="series-kicker">01 / AI 动漫短片</span><h3>踏春：一次有趣的出行</h3></div><a className="series-action" href="/media/spring-outing.mp4" target="_blank" rel="noreferrer">打开视频 ↗</a></div>
      {failed&&<p role="status">视频暂时无法播放，请点击“打开视频”查看原文件。</p>}
    </article></BorderGlow>
    <div className="additional-ai-videos"><AdditionalVideo number="02" src="/media/ai-video-02.mp4"/><AdditionalVideo number="03" src="/media/ai-video-03.mp4"/></div>
  </section>;
}
