import React from 'react';
const experience=[
  ['2026.03 — 2026.06','可嗨品牌管理有限公司','设计师','为私域中台提供设计支持，涉及护肤、保健品与家居日用品。'],
  ['2025.06 — 2025.09','法本 · 阿里巴巴滨江园区驻场','设计师','为阿里国际站相关部门提供设计支持。'],
  ['2021.08 — 2025.05','纽西之谜（上海）国际贸易有限公司杭州分公司','电商设计师','负责纽乐葆、FNN 的电商视觉设计，涵盖首页、主图、详情页及活动页面，并参与产品建模与渲染。'],
  ['2020.04 — 2021.03','帕特广告','电商设计师','参与正宫御品粉底液与口红上线设计，负责拍摄前期沟通、脚本、现场跟拍及详情页设计；协助 DKB 沐浴露拍摄与详情页设计。'],
];
export default function About(){const [copied,setCopied]=React.useState(false);async function copyWechat(){try{await navigator.clipboard.writeText('houjiao8802');setCopied(true)}catch{setCopied(false)}}return <section id="about" className="section wrap">
  <div className="section-top"><span>01 / ABOUT ME</span><span>视觉表达，也是一种沟通。</span></div>
  <div className="bio-grid">
    <div className="bio-identity"><img className="bio-photo" src="/media/hou-jiaojiao.webp" alt="侯娇个人照片" width="1080" height="1805" loading="lazy"/><div className="bio-name"><span>HOU JIAO</span><h2>侯娇</h2><p>电商设计 / 视觉设计 / 品牌设计 / 三维设计</p></div></div>
    <div className="bio-copy"><div className="overline">DESIGN WITH PURPOSE</div><h2>从品牌表达，<br/>到<span>每一处产品细节。</span></h2><p className="bio-intro">近 10 年设计工作经验，专注电商视觉与品牌内容。从首页、详情页和活动视觉，到产品建模与渲染，将产品特点转化为清晰、有吸引力的视觉表达。</p>
      <div className="bio-highlight"><strong>近 10 年</strong><span>设计工作经验</span></div>
      <div className="bio-history"><h3>工作经历 <span>点击展开 / EXPERIENCE</span></h3>{experience.map(([date,company,role,description])=><details className="bio-job" name="work-experience" key={company}><summary><div className="bio-job-meta"><time>{date}</time><span>{role}</span></div><h4>{company}</h4><span className="bio-job-toggle" aria-hidden="true"/></summary><p>{description}</p></details>)}</div>
      <div className="bio-contacts"><a href="mailto:282695419@qq.com"><span>EMAIL</span>282695419@qq.com ↗</a><a href="tel:18042048802"><span>PHONE</span>18042048802 ↗</a><button className="wechat-copy" onClick={copyWechat} aria-label="复制微信号 houjiao8802"><span>WECHAT / 点击复制</span>houjiao8802{copied&&<small role="status"> 已复制</small>}</button></div>
    </div>
  </div>
</section>}
