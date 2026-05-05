// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-首页",
    title: "首页",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-研究方向",
          title: "研究方向",
          description: "研究组主要研究方向。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-学术成果",
          title: "学术成果",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-成员",
          title: "成员",
          description: "研究组内成员。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-新闻",
          title: "新闻",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-杨智-卓妙华-贺紫盈-曾振涛四位同学在2025第一届全国大学生人工智能安全竞赛对抗赛中获全国一等奖",
          title: '杨智、卓妙华、贺紫盈、曾振涛四位同学在2025第一届全国大学生人工智能安全竞赛对抗赛中获全国一等奖。🎉🎉🎉',
          description: "",
          section: "News",},{id: "news-广州大学网络空间安全学院与杭州君同未来科技有限责任公司共建的-人工智能安全治理创新联合实验室-正式揭牌成立-双方将整合学术与产业优势-聚焦人工智能安全核心领域开展协同攻关-共筑人工智能安全防线-赋能粤港澳大湾区人工智能产业高质量发展",
          title: '广州大学网络空间安全学院与杭州君同未来科技有限责任公司共建的 “人工智能安全治理创新联合实验室”  正式揭牌成立，双方将整合学术与产业优势，聚焦人工智能安全核心领域开展协同攻关，共筑人工智能安全防线、赋能粤港澳大湾区人工智能产业高质量发展。🎉🎉🎉',
          description: "",
          section: "News",},{id: "news-研究组成员张梦霞的研究论文-bdpackets-a-clean-label-backdoor-attack-on-network-traffic-classifiers-via-feature-fusion-被ccf-a类会议ieee-infocom-2026录用-该成果为网络流量分类模型安全防护提供了新视角",
          title: '研究组成员张梦霞的研究论文《BDpackets: A Clean-label Backdoor Attack on Network Traffic Classifiers via Feature Fusion》被CCF A类会议IEEE...',
          description: "",
          section: "News",},{id: "news-研究组成员胥迤潇的论文-at-field-rethinking-the-games-in-adversarial-training-被ccf-a类会议aaai-2026录用-并受邀作口头报告-录用率仅17-6-口头报告率小于5-该成果为对抗训练领域研究作出了积极贡献",
          title: '研究组成员胥迤潇的论文《AT-Field: Rethinking the Games in Adversarial Training》被CCF A类会议AAAI 2026录用，并受邀作口头报告（录用率仅17.6%，口头报告率小于5%），该成果为对抗训练领域研究作出了积极贡献。🎉🎉🎉',
          description: "",
          section: "News",},{id: "news-人工智能安全治理创新联合实验室的成果-towards-robust-and-secure-embodied-ai-a-survey-on-vulnerabilities-and-attacks-研究组负责人李默涵为作者之一-被acm-computing-surveys正式接收-2024-impact-factor-28-0-ranked-1-147-in-computer-science-theory-amp-amp-methods-该成果系统梳理具身智能安全漏洞与攻击范式-为构建安全可信的具身智能系统提供重要研究框架",
          title: '人工智能安全治理创新联合实验室的成果《Towards Robust and Secure Embodied AI: A Survey on Vulnerabilities and Attacks》（研究组负责人李默涵为作者之一）被ACM Computing...',
          description: "",
          section: "News",},{id: "news-研究组成员胥迤潇的论文-neural-honeytrace-plug-amp-amp-play-watermarking-framework-against-model-extraction-attacks-被ccf-a类会议icml-2026接收-该成果提出了神经蜜洞-将四蜜思想引入模型产权保护领域-利用后门长尾效应设计了即插即用-无需重训练的模型水印-在模型知识产权保护-抵御模型窃取攻击领域作出了积极贡献",
          title: '研究组成员胥迤潇的论文《Neural Honeytrace:Plug&amp;amp;amp;Play Watermarking Framework against Model Extraction Attacks》被CCF A类会议ICML 2026接收，该成果提出了神经蜜洞，将四蜜思想引入模型产权保护领域，利用后门长尾效应设计了即插即用、无需重训练的模型水印，在模型知识产权保护、抵御模型窃取攻击领域作出了积极贡献。🎉🎉🎉',
          description: "",
          section: "News",},{id: "projects-模型隐私性攻击机理",
          title: '模型隐私性攻击机理',
          description: "从信息流视角分析模型反演攻击（MIA）的隐私威胁，建立攻击误差概率下界，揭示攻击效能与信息泄露的内在机理。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_%E6%A8%A1%E5%9E%8B%E9%9A%90%E7%A7%81%E6%80%A7%E6%94%BB%E5%87%BB%E6%9C%BA%E7%90%86/";
            },},{id: "projects-模型鲁棒性优化机理",
          title: '模型鲁棒性优化机理',
          description: "AT-Field：从博弈结构重构角度解决对抗训练收敛震荡问题，为大模型鲁棒性优化提供理论保障。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_%E6%A8%A1%E5%9E%8B%E9%B2%81%E6%A3%92%E6%80%A7%E4%BC%98%E5%8C%96%E6%9C%BA%E7%90%86/";
            },},{id: "projects-模型数据投毒脆弱性评估",
          title: '模型数据投毒脆弱性评估',
          description: "针对多用户协同数据分析场景，建模恶意数据提供者行为，研究不同防御强度与行为模式下的数据提供者可信度评估方法。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_%E9%9D%A2%E5%90%91%E6%95%B0%E6%8D%AE%E6%8A%95%E6%AF%92%E7%9A%84%E6%95%B0%E6%8D%AE%E6%BA%90%E5%8F%AF%E4%BF%A1%E6%80%A7%E5%BB%BA%E6%A8%A1/";
            },},{id: "projects-人工智能韧性分析",
          title: '人工智能韧性分析',
          description: "提出AI韧性四维定义框架，系统刻画关键基础设施中AI技术的安全运行能力构成，剖析现存结构性短板并指出发展路径。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E9%9F%A7%E6%80%A7%E5%88%86%E6%9E%90/";
            },},{id: "projects-多模态大模型幻觉缓解",
          title: '多模态大模型幻觉缓解',
          description: "揭示视觉语言模型物体幻觉源于对无关视觉特征的过度自信，提出自适应变分信息瓶颈方法ADAVIB，有效缓解多模态大模型幻觉问题。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_%E5%A4%9A%E6%A8%A1%E6%80%81%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%B9%BB%E8%A7%89%E7%BC%93%E8%A7%A3/";
            },},{id: "projects-模型后门长尾效应研究",
          title: '模型后门长尾效应研究',
          description: "提出首个利用长尾效应、无需搜索的轻量级后门防御方法LT-Defense，高效精准抵御语言模型后门攻击。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E9%9D%9E%E4%BE%B5%E5%85%A5%E5%BC%8F%E8%BD%BB%E9%87%8F%E7%BA%A7%E5%90%8E%E9%97%A8%E9%98%B2%E6%8A%A4/";
            },},{id: "projects-模型隐私主动防御方法",
          title: '模型隐私主动防御方法',
          description: "项目组对MIA防护进行了理论分析，形式化定义了狭义和广义的MIA防护问题，并进一步提出神经蜜点（Neural Honeypoint）以捕获攻击行为。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_%E9%98%B2%E6%8A%A4%E6%9C%BA%E7%90%86/";
            },},{id: "projects-大模型越狱风险评估",
          title: '大模型越狱风险评估',
          description: "提出基于善意词诱导与文本恶意度降低的越狱提示生成方法，系统评估大模型对齐后的越狱风险与安全认知能力。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%B6%8A%E7%8B%B1%E9%A3%8E%E9%99%A9%E8%AF%84%E4%BC%B0/";
            },},{id: "projects-模型后门鲁棒性评估",
          title: '模型后门鲁棒性评估',
          description: "针对网络流量分类模型的后门安全问题，提出协议合规的分组级后门攻击方法BDpackets，大幅提升黑盒场景下攻击效能。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_%E6%A8%A1%E5%9E%8B%E5%90%8E%E9%97%A8%E9%B2%81%E6%A3%92%E6%80%A7%E8%AF%84%E4%BC%B0/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
