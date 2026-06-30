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

.projects > .row > .col {
  display: flex;
}

.projects > .row > .col > a {
  display: flex;
  width: 100%;
}

.projects .card {
  display: flex;
  flex-direction: column;
  height: 360px !important;
  width: 100%;
  overflow: hidden;
}

.projects .card figure {
  flex: 0 0 40%;
  height: 40%;
  margin: 0;
  overflow: hidden;
}

.projects .card picture {
  display: block;
  height: 100%;
}

.projects .card-img-top {
  height: 100% !important;
  width: 100%;
  object-fit: cover;
  padding-top: 0;
}

.projects .card-body {
  flex: 0 0 60%;
  height: 60%;
  padding: 0.95rem 1rem;
  overflow: hidden;
}

.projects .card-title {
  font-size: 1.05rem;
  line-height: 1.35;
  margin-bottom: 0.55rem;
}

.projects .card-text {
  color: #333;
  display: -webkit-box;
  font-size: 0.9rem;
  line-height: 1.55;
  margin-bottom: 0;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}

@media (max-width: 575.98px) {
  .projects .card {
    height: 340px !important;
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
