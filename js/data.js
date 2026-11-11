/* ==========================================================================
   PORTFOLIO DATA — edit this file to update the site.
   Every translatable field is { en: "...", pt: "..." }.
   ========================================================================== */

window.PORTFOLIO = {
  profile: {
    name: "Matheus Sá Cardoso",
    role: { en: "Software Engineer | Full-Stack Developer", pt: "Engenheiro de Software | Desenvolvedor Full-Stack" },
    typed: {
      en: ["Full-Stack Engineer", "Software Engineer", "AI & Data Enthusiast", "Surfer 🌊"],
      pt: ["Engenheiro Full-Stack", "Engenheiro de Software", "Entusiasta de IA & Dados", "Surfista 🌊"]
    },
    photo: "assets/profile.jpg", // swap for assets/profile.jpg when you add a photo
    cv: "assets/cv.pdf",
    location: { en: "Salvador, Bahia, Brazil", pt: "Salvador, Bahia, Brasil" }
  },

  socials: {
    github: "https://github.com/matheussacardoso",
    linkedin: "https://www.linkedin.com/in/matheus-s%C3%A1-cardoso-262916218/",
    email: "matheussa20@gmail.com"
  },

  about: {
    en: "I'm a <strong>Full-Stack &amp; Software Engineer</strong> from Salvador, Bahia, with <strong>2+ years</strong> of experience building web and desktop applications with <strong>C#/.NET</strong>, <strong>Python</strong>, <strong>SQL</strong> and <strong>AWS</strong>. I've integrated PLCs and industrial HMIs at <strong>Fraunhofer IPT</strong> in Aachen, Germany, digitized workflows for 2,000+ employees at <strong>PetroReconcavo</strong>, and automated financial data pipelines at <strong>Fundação ECOS</strong>. On the data side, I've deployed <strong>machine learning</strong> models for industrial IoT that outperformed human detection by <strong>30%</strong>. I'm finishing my <strong>Computer Engineering</strong> degree at SENAI CIMATEC, and when I'm not coding you'll find me <strong>surfing</strong> 🏄.",
    pt: "Sou <strong>Engenheiro de Software &amp; Full-Stack</strong> de Salvador, Bahia, com <strong>2+ anos</strong> de experiência construindo aplicações web e desktop com <strong>C#/.NET</strong>, <strong>Python</strong>, <strong>SQL</strong> e <strong>AWS</strong>. Integrei CLPs e IHMs industriais no <strong>Fraunhofer IPT</strong> em Aachen, Alemanha, digitalizei fluxos para mais de 2.000 colaboradores na <strong>PetroReconcavo</strong> e automatizei pipelines de dados financeiros na <strong>Fundação ECOS</strong>. Na área de dados, implantei modelos de <strong>machine learning</strong> para IoT industrial que superaram a detecção humana em <strong>30%</strong>. Estou concluindo <strong>Engenharia de Computação</strong> no SENAI CIMATEC e, quando não estou programando, estou <strong>surfando</strong> 🏄."
  },

  stats: [
    { value: "2+", label: { en: "Years of experience", pt: "Anos de experiência" } },
    { value: "2", label: { en: "Countries worked in", pt: "Países de atuação" } },
    { value: "15+", label: { en: "Public projects", pt: "Projetos públicos" } }
  ],

  /* status: "ongoing" | "completed"   category: "ai" | "software" */
  projects: [
    {
      title: { en: "Cheap Flights Europe", pt: "Cheap Flights Europe" },
      status: "ongoing",
      category: "software",
      year: "2026",
      description: {
        en: "Automates the hunt for cheap weekend getaways: scans low-cost airlines in the background and finds direct-only round trips around bridge days, with custom time windows and price caps.",
        pt: "Automatiza a busca por viagens baratas de fim de semana: varre companhias low-cost em segundo plano e encontra voos diretos em feriados prolongados, com janelas de horário e limites de preço."
      },
      tags: ["TypeScript", "Automation", "Web App"],
      link: "https://github.com/matheussacardoso/Cheap_Flights_Europe"
    },
    {
      title: { en: "Thesis — Early Warning Stop System", pt: "TCC — Sistema de Alerta de Parada" },
      status: "ongoing",
      category: "ai",
      year: "2026",
      description: {
        en: "Undergraduate thesis on an early-warning system that predicts and triggers control stops in industrial processes using data analysis and machine learning.",
        pt: "Trabalho de conclusão sobre um sistema de alerta antecipado que prevê e aciona paradas de controle em processos industriais usando análise de dados e machine learning."
      },
      tags: ["Python", "Machine Learning", "Jupyter"],
      link: "https://github.com/matheussacardoso/Thesis_Early_Warning_Stop_System_Control"
    },
    {
      title: { en: "PID Optimization Monitor", pt: "Monitor de Otimização PID" },
      status: "completed",
      category: "ai",
      year: "2026",
      description: {
        en: "Industrial sensor simulator for tuning a PID tension controller. Event-driven Pub/Sub architecture on AWS SNS, with Amazon Translate (AI) localizing safety alerts per subscriber.",
        pt: "Simulador de sensores industriais para ajuste de um controlador PID de tensão. Arquitetura Pub/Sub orientada a eventos com AWS SNS e Amazon Translate (IA) traduzindo alertas por assinante."
      },
      tags: ["Python", "Docker", "AWS SNS", "Amazon Translate"],
      link: "https://github.com/matheussacardoso/Monitor_PID_Optimization"
    },
    {
      title: { en: "University Partnerships Scraper", pt: "Scraper de Parcerias Universitárias" },
      status: "completed",
      category: "ai",
      year: "2026",
      description: {
        en: "Data pipeline over Brazil's e-MEC records that filters top-rated engineering universities (ENADE ≥ 4, IGC = 5) and maps their official sites to crawl international exchange programs.",
        pt: "Pipeline de dados sobre o e-MEC que filtra as melhores universidades de engenharia (ENADE ≥ 4, IGC = 5) e mapeia seus sites oficiais para buscar programas de intercâmbio internacional."
      },
      tags: ["Python", "Pandas", "Web Scraping"],
      link: "https://github.com/matheussacardoso/Web_Scraping_Faculdades_Parcerias_Internacionais"
    },
    {
      title: { en: "Industrial Networks Dashboard", pt: "Dashboard de Redes Industriais" },
      status: "completed",
      category: "software",
      year: "2026",
      description: {
        en: "Mobile dashboard for visualizing industrial network data and device status in real time.",
        pt: "Dashboard mobile para visualizar dados de redes industriais e status de dispositivos em tempo real."
      },
      tags: ["Mobile", "IoT", "Dashboard"],
      link: "https://github.com/matheussacardoso/dashboard_mobile_redes_industriais"
    },
    {
      title: { en: "Learning FastAPI", pt: "Aprendendo FastAPI" },
      status: "completed",
      category: "software",
      year: "2026",
      description: {
        en: "A collection of small web applications exploring the core concepts of FastAPI: routing, validation, dependency injection and async endpoints.",
        pt: "Coleção de pequenas aplicações web explorando os conceitos centrais do FastAPI: rotas, validação, injeção de dependência e endpoints assíncronos."
      },
      tags: ["Python", "FastAPI", "REST"],
      link: "https://github.com/matheussacardoso/Learning_FastAPI"
    },
    {
      title: { en: "Currency App", pt: "Currency App" },
      status: "completed",
      category: "software",
      year: "2025",
      description: {
        en: "Modular WPF desktop app for currency information, built on the MVVM pattern with Dependency Injection and dynamically loaded user controls.",
        pt: "App desktop WPF modular para informações de câmbio, construído com o padrão MVVM, Injeção de Dependência e user controls carregados dinamicamente."
      },
      tags: ["C#", ".NET 8", "WPF", "MVVM"],
      link: "https://github.com/matheussacardoso/Currency_App"
    },
    {
      title: { en: "HPC Hackathon — SENAI CIMATEC", pt: "Hackathon HPC — SENAI CIMATEC" },
      status: "completed",
      category: "ai",
      year: "2024",
      description: {
        en: "High Performance Computing applied to industry: parallelized workloads and analyzed execution time and speedup across problem sizes as a team of three.",
        pt: "Computação de Alto Desempenho aplicada à indústria: paralelização de cargas e análise de tempo de execução e speedup em diferentes tamanhos de problema, em equipe de três."
      },
      tags: ["HPC", "Parallel Computing", "Jupyter"],
      link: "https://github.com/matheussacardoso/FPP_HACKATHON"
    },
    {
      title: { en: "ANTIGOLPE", pt: "ANTIGOLPE" },
      status: "completed",
      category: "software",
      year: "2021",
      description: {
        en: "Full-stack site that checks suspicious links against the VirusTotal API to help people avoid phishing scams.",
        pt: "Site full-stack que verifica links suspeitos na API do VirusTotal para ajudar as pessoas a evitar golpes de phishing."
      },
      tags: ["Python", "Flask", "VirusTotal API"],
      link: "https://github.com/matheussacardoso/ANTIGOLPE",
      demo: "https://matheussacardoso.github.io/ANTIGOLPE/"
    }
  ],

  education: [
    {
      period: { en: "2021 — 2026", pt: "2021 — 2026" },
      title: { en: "B.Eng. Computer Engineering", pt: "Bacharelado em Engenharia de Computação" },
      place: "SENAI CIMATEC · Salvador, Brazil",
      description: {
        en: "Software engineering, industrial networks, control systems, HPC and data science.",
        pt: "Engenharia de software, redes industriais, sistemas de controle, HPC e ciência de dados."
      }
    },
    {
      period: { en: "2025 — 2026", pt: "2025 — 2026" },
      title: { en: "B.Eng. Mechanical Engineering", pt: "Bacharelado em Engenharia Mecânica" },
      place: "RWTH Aachen University · Aachen, Germany"
    }
  ],

  experience: [
    {
      period: { en: "Feb 2025 — Feb 2026", pt: "fev 2025 — fev 2026" },
      title: { en: "Full-Stack Developer", pt: "Desenvolvedor Full-Stack" },
      place: "Fraunhofer IPT · Aachen, Germany",
      bullets: {
        en: [
          "Built C# .NET API endpoints to fetch data from Beckhoff PLCs via the ADS protocol.",
          "Implemented HMI features and custom WPF widgets for bulk parameter read/write (MVVM + CQRS).",
          "Refactored profile hashing and role-based widget permissions against unauthorized access.",
          "Built an end-to-end automated test environment with FlaUI and GitLab for HMI workflows."
        ],
        pt: [
          "Desenvolvi endpoints de API em C# .NET para ler dados de CLPs Beckhoff via protocolo ADS.",
          "Implementei funcionalidades de IHM e widgets WPF customizados para leitura/escrita de parâmetros em massa (MVVM + CQRS).",
          "Refatorei o hashing de perfis e as permissões de widgets por papel contra acessos não autorizados.",
          "Criei um ambiente de testes automatizados ponta a ponta com FlaUI e GitLab para fluxos da IHM."
        ]
      },
      stack: ["C#", ".NET", "WPF", "GitLab", "FlaUI", "TwinCAT 3"]
    },
    {
      period: { en: "Apr 2024 — Nov 2024", pt: "abr 2024 — nov 2024" },
      title: { en: "Full-Stack Developer", pt: "Desenvolvedor Full-Stack" },
      place: "PetroReconcavo · Salvador, Brazil",
      bullets: {
        en: [
          "Replaced manual Forms/Drive/Outlook workflows with a centralized reactive web app in OutSystems.",
          "Designed ERDs and CRUD operations managing assets and processes for 7,000+ reports.",
          "Integrated MySQL with AWS S3 for image storage, with compression to optimize costs.",
          "Wrote technical docs and user manuals for 2,000+ employees; gathered requirements with Kanban."
        ],
        pt: [
          "Substituí fluxos manuais (Forms, Drive, Outlook) por uma aplicação web reativa centralizada em OutSystems.",
          "Modelei ERDs e operações CRUD para gerenciar ativos e processos de mais de 7.000 relatórios.",
          "Integrei MySQL com AWS S3 para armazenar imagens, com compressão para otimizar custos.",
          "Escrevi documentação técnica e manuais para mais de 2.000 colaboradores; levantei requisitos com Kanban."
        ]
      },
      stack: ["OutSystems", "AWS S3", "MySQL", "JavaScript"]
    },
    {
      period: { en: "Apr 2023 — Mar 2024", pt: "abr 2023 — mar 2024" },
      title: { en: "Data Analyst", pt: "Analista de Dados" },
      place: "Fundação ECOS · Salvador, Brazil",
      bullets: {
        en: [
          "Built a weekly macroeconomic report in R and Excel to track key indicators.",
          "Automated debt detection across 300+ PDF documents with Java and Selenium.",
          "Integrated ANBIMA and Federal Reserve (FRED) REST APIs for real-time investment reports.",
          "CPA-20 certified (ANBIMA)."
        ],
        pt: [
          "Desenvolvi um relatório macroeconômico semanal em R e Excel para acompanhar indicadores-chave.",
          "Automatizei a identificação de dívidas em mais de 300 PDFs com Java e Selenium.",
          "Integrei as APIs REST da ANBIMA e do Federal Reserve (FRED) para relatórios de investimento em tempo real.",
          "Certificação CPA-20 (ANBIMA)."
        ]
      },
      stack: ["R", "Excel", "Java", "Selenium"]
    }
  ],

  certifications: [
    "AWS Academy Graduate — Cloud Foundations",
    "Capacita+: Build with Gemini",
    "Introduction to Data Science",
    "CPA-20 (ANBIMA)",
    "Leadership, Learning Agility & Resilience",
    "First Steps in Web Development"
  ],

  languages: [
    { name: { en: "Portuguese", pt: "Português" }, level: { en: "Native", pt: "Nativo" } },
    { name: { en: "English", pt: "Inglês" }, level: { en: "Full professional", pt: "Profissional completo" } }
  ],

  /* icon = Devicon class (https://devicon.dev). Leave empty for a text badge. */
  skills: {
    languages: [
      { name: "C#", icon: "devicon-csharp-plain", url: "https://learn.microsoft.com/dotnet/csharp/" },
      { name: ".NET / WPF", icon: "devicon-dot-net-plain", url: "https://dotnet.microsoft.com" },
      { name: "Python", icon: "devicon-python-plain", url: "https://www.python.org" },
      { name: "TypeScript", icon: "devicon-typescript-plain", url: "https://www.typescriptlang.org" },
      { name: "JavaScript", icon: "devicon-javascript-plain", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
      { name: "Java", icon: "devicon-java-plain", url: "https://www.java.com" },
      { name: "SQL / MySQL", icon: "devicon-mysql-plain", url: "https://www.mysql.com" },
      { name: "R", icon: "devicon-r-plain", url: "https://www.r-project.org" },
      { name: "C", icon: "devicon-c-plain", url: "https://en.cppreference.com/w/c" },
      { name: "FastAPI", icon: "devicon-fastapi-plain", url: "https://fastapi.tiangolo.com" },
      { name: "Flask", icon: "devicon-flask-original", url: "https://flask.palletsprojects.com" },
      { name: "HTML & CSS", icon: "devicon-html5-plain", url: "https://developer.mozilla.org/docs/Web/HTML" }
    ],
    tools: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark", url: "https://aws.amazon.com" },
      { name: "Docker", icon: "devicon-docker-plain", url: "https://www.docker.com" },
      { name: "Git", icon: "devicon-git-plain", url: "https://git-scm.com" },
      { name: "GitLab", icon: "devicon-gitlab-plain", url: "https://gitlab.com" },
      { name: "Selenium", icon: "devicon-selenium-original", url: "https://www.selenium.dev" },
      { name: "Jupyter", icon: "devicon-jupyter-plain", url: "https://jupyter.org" },
      { name: "Pandas", icon: "devicon-pandas-plain", url: "https://pandas.pydata.org" },
      { name: "OutSystems", icon: "", url: "https://www.outsystems.com" },
      { name: "Power BI", icon: "", url: "https://powerbi.microsoft.com" },
      { name: "TwinCAT 3", icon: "", url: "https://www.beckhoff.com/twincat3/" },
      { name: "Linux", icon: "devicon-linux-plain", url: "https://www.kernel.org" },
      { name: "VS Code", icon: "devicon-vscode-plain", url: "https://code.visualstudio.com" }
    ]
  },

  /* Static UI strings */
  i18n: {
    en: {
      "nav.home": "Home", "nav.about": "About", "nav.portfolio": "Portfolio",
      "nav.resume": "Resume", "nav.skills": "Skills", "nav.contact": "Contact",
      "nav.cv": "Download CV",
      "hero.hello": "Hi, I'm", "hero.im": "Currently riding the wave as a",
      "hero.work": "View work", "hero.scroll": "Dive in",
      "about.label": "Introduction", "about.title": "About me",
      "portfolio.label": "My work", "portfolio.title": "Portfolio",
      "portfolio.ongoing": "Ongoing", "portfolio.recent": "Recent projects",
      "filter.all": "All", "filter.ai": "AI & Data", "filter.software": "Software",
      "card.code": "View code", "card.demo": "Live demo",
      "status.ongoing": "In progress", "status.completed": "Completed",
      "resume.label": "Background", "resume.title": "Resume",
      "resume.education": "Education", "resume.experience": "Experience", "resume.cv": "Download CV",
      "resume.certs": "Certifications", "resume.languages": "Languages",
      "skills.label": "Toolbox", "skills.title": "Skills",
      "skills.languages": "Languages & Frameworks", "skills.tools": "Tools & Platforms",
      "contact.label": "Get in touch", "contact.title": "Let's catch the next wave together",
      "contact.text": "Open to software engineering, full-stack and data/AI roles and collaborations — in Brazil, Europe or remote. My inbox is always open.",
      "contact.email": "Send an email",
      "footer.rights": "Built with HTML, CSS & JS. Hosted on GitHub Pages.",
      "empty": "No projects in this category yet."
    },
    pt: {
      "nav.home": "Início", "nav.about": "Sobre", "nav.portfolio": "Portfólio",
      "nav.resume": "Currículo", "nav.skills": "Skills", "nav.contact": "Contato",
      "nav.cv": "Baixar CV",
      "hero.hello": "Olá, eu sou", "hero.im": "Atualmente pegando onda como",
      "hero.work": "Ver projetos", "hero.scroll": "Mergulhe",
      "about.label": "Introdução", "about.title": "Sobre mim",
      "portfolio.label": "Meu trabalho", "portfolio.title": "Portfólio",
      "portfolio.ongoing": "Em andamento", "portfolio.recent": "Projetos recentes",
      "filter.all": "Todos", "filter.ai": "IA & Dados", "filter.software": "Software",
      "card.code": "Ver código", "card.demo": "Ver online",
      "status.ongoing": "Em andamento", "status.completed": "Concluído",
      "resume.label": "Trajetória", "resume.title": "Currículo",
      "resume.education": "Formação", "resume.experience": "Experiência", "resume.cv": "Baixar CV",
      "resume.certs": "Certificações", "resume.languages": "Idiomas",
      "skills.label": "Ferramentas", "skills.title": "Skills",
      "skills.languages": "Linguagens & Frameworks", "skills.tools": "Ferramentas & Plataformas",
      "contact.label": "Contato", "contact.title": "Vamos pegar a próxima onda juntos",
      "contact.text": "Aberto a vagas e colaborações em engenharia de software, full-stack e dados/IA — no Brasil, na Europa ou remoto. Minha caixa de entrada está sempre aberta.",
      "contact.email": "Enviar e-mail",
      "footer.rights": "Feito com HTML, CSS & JS. Hospedado no GitHub Pages.",
      "empty": "Nenhum projeto nesta categoria ainda."
    }
  }
};
