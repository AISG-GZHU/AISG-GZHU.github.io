---
layout: page
title: 研究方向
permalink: /projects/
description: 研究组主要研究方向。
nav: true
nav_order: 2
display_categories: [安全机理,安全增强,红队评测]
horizontal: false
---

<style>
/* 标题统一黑色 + 左对齐 */
.category {
  color: #000 !important;
  text-align: left;
  margin-bottom: 5px;
}

/* 简介文本样式 */
.category-desc {
  text-align: left;
  margin-bottom: 20px;
  color: #333;
  font-size: 14px;
  line-height: 1.6;
}

.projects > .row > .project-col {
  display: flex;
  padding-bottom: 1.25rem;
}

.projects .project-card-link {
  color: inherit;
  display: flex;
  width: 100%;
}

.projects .project-card {
  display: grid;
  grid-template-rows: 40% 60%;
  height: 380px !important;
  overflow: hidden;
  width: 100%;
}

.projects .project-card-media {
  align-items: center;
  background: #f6f8fa;
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: 0;
  overflow: hidden;
  width: 100%;
}

.projects .project-card-media figure,
.projects .project-card-media picture {
  display: block;
  height: 100%;
  margin: 0;
  min-height: 0;
  overflow: hidden;
  width: 100%;
}

.projects .project-card-img {
  display: block;
  height: 100% !important;
  object-fit: cover;
  object-position: center center;
  padding: 0 !important;
  width: 100% !important;
}

.projects .project-card-body {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  padding: 0.95rem 1rem;
}

.projects .project-card-title {
  display: -webkit-box;
  font-size: 1.02rem;
  line-height: 1.35;
  margin-bottom: 0.5rem;
  min-height: 2.75rem;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.projects .project-card-text {
  color: #333;
  display: -webkit-box;
  flex: 1;
  font-size: 0.88rem;
  line-height: 1.5;
  margin-bottom: 0;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}

@media (max-width: 575.98px) {
  .projects .project-card {
    height: 350px !important;
  }

  .projects .project-card-body {
    padding: 0.85rem 0.9rem;
  }
}
</style>

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>

  <!-- 研究方向简介 -->
  <div class="category-desc">
    {% case category %}
      {% when "安全机理" %}
        研究大模型在训练与推理过程中潜在的安全风险形成机理，重点分析模型脆弱性来源及其演化规律。
      {% when "安全增强" %}
        探索通过模型结构设计与训练策略优化，实现安全能力内嵌的主动防御机制。
      {% when "红队评测" %}
        构建系统化红队评测框架，对模型在复杂攻击场景下的安全性与鲁棒性进行评估。
    {% endcase %}
  </div>

  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}

  <!-- 关键：修复多列布局，手机2列 + 电脑3列 -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

{% assign sorted_projects = site.projects | sort: "importance" %}

{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
