---
title: 自述
date: 2022-08-10 16:05:11
---

<div class="about-container">
  <div class="about-header">
    <img src="/assets/avatar.webp" alt="头像" class="about-avatar">
    <h1 class="about-title">关于我</h1>
    <p class="about-subtitle">总是学习，总在进步</p>
  </div>

  <div class="about-content">
<section class="about-section">
      <h2>个人介绍</h2>
      <p>你好，欢迎来到我的个人博客！我是一个热爱技术和生活的人，喜欢分享自己的学习心得和生活感悟。</p>
      <p>这个博客是我记录成长、分享知识的地方，希望能够为你带来一些有价值的内容。</p>
</section>

<section class="about-section about-journey">
  <h2>学习足迹</h2>
  <p><strong>大一</strong>：开始接触编程，学习算法。</p>
  <p><strong>大二上</strong>：决定开始学 Java，然后一直学技术栈。学得全，忘得也快，还是应该先看基础知识，再直接开始做项目，这样知识更牢。寒假学习做两个经典项目。</p>
  <p><strong>大二下</strong>：了解到大模型，并准备 Java + AI 一起学习。</p>
</section>
  </div>
</div>

<style>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.about-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.about-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.about-subtitle {
  font-size: 16px;
  color: #666;
}

.about-section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.about-section h2 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #00d1ff;
}

.about-section p {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 10px;
}

.about-interests {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.about-interests li {
  background-color: #f0f0f0;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  color: #555;
  transition: background-color 0.3s ease;
}

.about-interests li:hover {
  background-color: #00d1ff;
  color: white;
}

.about-contact p {
  margin-bottom: 10px;
}

.about-contact a {
  color: #00d1ff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.about-contact a:hover {
  color: #00ffa3;
  text-decoration: underline;
}

.about-video {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 10px;
}

.about-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .about-container {
    padding: 10px;
  }

  .about-header {
    padding: 20px 0;
  }

  .about-avatar {
    width: 100px;
    height: 100px;
  }

  .about-title {
    font-size: 24px;
  }

  .about-section {
    padding: 15px;
  }
}
</style>
