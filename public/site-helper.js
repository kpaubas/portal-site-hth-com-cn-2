// public/site-helper.js
// 页面辅助功能：提示卡片、关键词徽章、访问说明
(function () {
  'use strict';

  // 配置数据
  var config = {
    siteUrl: 'https://portal-site-hth.com.cn',
    keyword: '华体会',
    badgeColor: '#2c7a4d',
    cardBg: '#f0f7ff',
    borderColor: '#b0d4f1'
  };

  // 提示卡片数据
  var tips = [
    { title: '欢迎访问', content: '您正在浏览的是 ' + config.siteUrl + ' 的辅助页面。' },
    { title: '功能提示', content: '本站提供信息展示，请使用现代浏览器以获得最佳体验。' },
    { title: '安全提醒', content: '请勿在公共电脑上保存密码，保护好个人数据。' }
  ];

  // 关键词徽章列表
  var badges = [
    { text: config.keyword, color: config.badgeColor },
    { text: '体育', color: '#a0522d' },
    { text: '电竞', color: '#4a6fa5' },
    { text: '娱乐', color: '#8b5e3c' },
    { text: '直播', color: '#5a7a5a' }
  ];

  // 访问说明列表
  var instructions = [
    '本页面为辅助功能演示，不收集任何个人信息。',
    '所有链接均指向 ' + config.siteUrl + ' 下的合法内容。',
    '请遵守当地法律法规，合理使用网络资源。',
    '如遇问题，请联系站点管理员。'
  ];

  // 工具函数：创建DOM元素
  function createElement(tag, className, text) {
    var el = document.createElement(tag);
    if (className) { el.className = className; }
    if (text) { el.appendChild(document.createTextNode(text)); }
    return el;
  }

  // 渲染提示卡片
  function renderTipCards(container) {
    var i, card, titleEl, contentEl;
    for (i = 0; i < tips.length; i++) {
      card = createElement('div', 'tip-card');
      card.style.backgroundColor = config.cardBg;
      card.style.border = '1px solid ' + config.borderColor;
      card.style.borderRadius = '8px';
      card.style.padding = '12px 16px';
      card.style.marginBottom = '10px';

      titleEl = createElement('h4', 'tip-title', tips[i].title);
      titleEl.style.margin = '0 0 6px 0';
      titleEl.style.color = '#1a3a5c';
      card.appendChild(titleEl);

      contentEl = createElement('p', 'tip-content', tips[i].content);
      contentEl.style.margin = '0';
      contentEl.style.color = '#2d4a6e';
      card.appendChild(contentEl);

      container.appendChild(card);
    }
  }

  // 渲染关键词徽章
  function renderBadges(container) {
    var i, badge, spanEl;
    for (i = 0; i < badges.length; i++) {
      badge = badges[i];
      spanEl = createElement('span', 'keyword-badge', badge.text);
      spanEl.style.display = 'inline-block';
      spanEl.style.backgroundColor = badge.color;
      spanEl.style.color = '#ffffff';
      spanEl.style.padding = '4px 12px';
      spanEl.style.margin = '4px 6px 4px 0';
      spanEl.style.borderRadius = '20px';
      spanEl.style.fontSize = '14px';
      spanEl.style.fontWeight = '500';
      container.appendChild(spanEl);
    }
  }

  // 渲染访问说明
  function renderInstructions(container) {
    var i, item, pEl;
    for (i = 0; i < instructions.length; i++) {
      item = instructions[i];
      pEl = createElement('p', 'instruction-item', item);
      pEl.style.margin = '6px 0';
      pEl.style.padding = '4px 0';
      pEl.style.borderBottom = '1px dashed #cccccc';
      container.appendChild(pEl);
    }
  }

  // 初始化：查找容器并渲染
  function init() {
    var cardContainer = document.getElementById('tip-cards');
    var badgeContainer = document.getElementById('keyword-badges');
    var instructionContainer = document.getElementById('access-instructions');

    if (cardContainer) {
      renderTipCards(cardContainer);
    } else {
      console.warn('未找到 #tip-cards 容器');
    }

    if (badgeContainer) {
      renderBadges(badgeContainer);
    } else {
      console.warn('未找到 #keyword-badges 容器');
    }

    if (instructionContainer) {
      renderInstructions(instructionContainer);
    } else {
      console.warn('未找到 #access-instructions 容器');
    }
  }

  // 页面加载完成后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();