import React from 'react';
import works from './works.json';

export default function Navigation({name}){
  return <header className="site-navigation"><div className="navigation-main"><a href="#home" className="wordmark">{name}<sup>®</sup></a><nav aria-label="页面模块"><a href="#home">首页</a><a href="#about">关于我</a><a href="#projects">精选作品</a><a href="#ai-video">AI 视频</a><a href="#strengths">个人优势</a><a href="#contact">联系我 ↗</a></nav></div><nav className="navigation-categories" aria-label="作品分类">{works.map(work=><a key={work.id} href={`#${work.id}`} onClick={()=>{const section=document.getElementById(work.id);if(section)section.open=true;}}>{work.title}</a>)}</nav></header>;
}
