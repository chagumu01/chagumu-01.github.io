---
title: 友链
date: 2026-05-29 12:00:00
type: link
top_img: false
comments: false
---

<link rel="stylesheet" href="/css/friends.css?v=20261014-2">

<div class="flk" id="flk-page">
  <header class="flk-intro">
    <p class="flk-intro__tag">chagumu.site / links</p>
    <h1 class="flk-intro__title"><i class="fas fa-handshake" aria-hidden="true"></i> 友情链接</h1>
    <p class="flk-intro__lead">个人博客与技术站点。点击卡片访问网站。</p>
  </header>

  <details class="flk-charter" open>
    <summary>交换友链</summary>
    <div class="flk-charter__body">
      <ol><li>将本站信息添加到你的友链页。</li><li>填写下方申请表，点击“生成申请草稿”。</li><li>登录 GitHub，核对信息后提交 Issue。</li></ol>
      <p>申请站点需能正常访问，并包含原创文章或作品。域名、头像或站点状态变更时，请在申请 Issue 中更新信息。</p>
    </div>
  </details>

  <div class="flk-roster-bar">
    <div>
      <h2 class="flk-roster-bar__title"><i class="fas fa-link" aria-hidden="true"></i> 友链列表</h2>
      <p class="flk-roster-bar__sub" id="flk-count">统计中</p>
    </div>
    <button type="button" class="flk-btn flk-btn--line" id="flk-random"><i class="fas fa-dice" aria-hidden="true"></i> 随机访问</button>
  </div>
</div>

<div class="flk-tail">
  <section class="flk-write" id="flk-write">
    <div class="flk-write__head">
      <h2><i class="fas fa-feather-alt" aria-hidden="true"></i> 提交申请</h2>
      <p>填写站名、地址、头像和简介。生成草稿后，在 GitHub 提交申请。</p>
    </div>
    <form class="flk-form" id="flk-form" novalidate>
      <div class="flk-form__row">
        <label class="flk-field">
          <span>站点名称</span>
          <input type="text" name="name" placeholder="博客或网站名称" required>
        </label>
        <label class="flk-field">
          <span>站点地址</span>
          <input type="url" name="link" placeholder="https://你的域名" required>
        </label>
      </div>
      <div class="flk-form__row">
        <label class="flk-field">
          <span>头像链接</span>
          <input type="url" name="avatar" placeholder="https://…/avatar.png" required>
        </label>
        <label class="flk-field">
          <span>联系方式（选填）</span>
          <input type="text" name="contact" placeholder="邮箱、GitHub 或社交账号">
        </label>
      </div>
      <label class="flk-field">
        <span>一句话介绍</span>
        <textarea name="descr" rows="2" placeholder="站点主题或主要内容" required></textarea>
      </label>
      <label class="flk-field">
        <span>预览图（选填）</span>
        <input type="url" name="siteshot" placeholder="https://…/preview.png">
      </label>
      <div class="flk-form__foot">
        <button type="submit" class="flk-btn flk-btn--solid"><i class="fas fa-paper-plane" aria-hidden="true"></i> 生成申请草稿</button>
        <span class="flk-form__tip">点击按钮后打开 GitHub，需手动提交 Issue。</span>
      </div>
    </form>
  </section>

  <aside class="flk-clip">
    <h2><i class="fas fa-copy" aria-hidden="true"></i> 本站信息</h2>
    <p>将以下信息添加到你的友链页。</p>
    <pre class="flk-clip__code" id="flk-clip-code">{
  "title": "chagumu's blog",
  "url": "https://chagumu.site/",
  "avatar": "https://chagumu.site/assets/avatar.webp",
  "description": "总是学习，总在进步"
}</pre>
    <button type="button" class="flk-btn flk-btn--line" id="flk-copy"><i class="fas fa-clipboard" aria-hidden="true"></i> 复制到剪贴板</button>
  </aside>
</div>

<script src="/js/friends.js?v=20261014-1" defer></script>
