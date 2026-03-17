---
layout: page
title: 研究方向
permalink: /projects/
description: 实验室主要研究方向。
nav: true
nav_order: 3
display_categories: [大模型安全机理,模型内生安全增强,模型红队评测方法,模型安全自适应防护,其他维度的机器学习安全性及可信性]
horizontal: false
---

<!-- pages/projects.md -->
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
</style>

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>

  <!-- 新增：每个方向的简介 -->
  <div class="category-desc">
    {% case category %}
      {% when "大模型安全机理" %}
        研究大模型在训练与推理过程中潜在的安全风险形成机理，重点分析模型脆弱性来源及其演化规律。
      {% when "模型内生安全增强" %}
        探索通过模型结构设计与训练策略优化，实现安全能力内嵌的主动防御机制。
      {% when "模型红队评测方法" %}
        构建系统化红队评测框架，对模型在复杂攻击场景下的安全性与鲁棒性进行评估。
      {% when "模型安全自适应防护" %}
        研究能够动态响应攻击行为的自适应防御机制，提高模型在开放环境中的安全性。
      {% when "其他维度的机器学习安全性及可信性" %}
        涵盖隐私保护、公平性、可解释性等方向，全面提升机器学习系统的可信水平。
    {% endcase %}
  </div>

  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
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

<!-- Display projects without categories -->
{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->
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