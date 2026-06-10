// Master slide registry — all 47 slides
// Each: { id, section, sectionNum, title, component, notes }
// Components are imported lazily by SlideEngine

export const SECTIONS = [
  { num: '01', title: 'Opening & Context' },
  { num: '02', title: 'Background of the Study' },
  { num: '03', title: 'Objectives & Framework' },
  { num: '04', title: 'Review of Related Literature' },
  { num: '05', title: 'Methodology' },
  { num: '06', title: 'System Features & Architecture' },
  { num: '07', title: 'Evaluation Framework' },
  { num: '08', title: 'Significance & Summary' },
]

export const slides = [
  // ── SECTION 01 ──────────────────────────────────────────────
  { id: 's01', section: '01', sectionTitle: 'Opening & Context',      type: 'title',   title: 'SEN-GEN',                            notes: 'Welcome panel members. I am Kenneth Rey Rallustian Tablang, MIT student at Universidad de Dagupan. This presentation covers SEN-GEN — Student Enlistment with Generative Scheduling System for STI Alaminos, under the mentorship of Prof. Rochelle Sotelo Lanto, MIT.' },
  { id: 's02', section: '01', sectionTitle: 'Opening & Context',      type: 'content', title: 'Presentation Outline',                notes: 'Here is our roadmap for the next 60 minutes. Eight sections covering background, objectives, literature, methodology, system, evaluation, and significance.' },
  { id: 's03', section: '01', sectionTitle: 'Opening & Context',      type: 'content', title: 'About the Researcher',                notes: 'I am the researcher and sole developer of SEN-GEN. My background in ASP.NET Core, React JS, and SQL Server directly informed all architectural decisions.' },
  { id: 's04', section: '01', sectionTitle: 'Opening & Context',      type: 'content', title: 'Institutional Context',               notes: 'STI Alaminos is a private HEI in Alaminos City, Pangasinan. It currently operates with manual paper-based enlistment — the gap SEN-GEN fills.' },

  // ── SECTION 02 ──────────────────────────────────────────────
  { id: 's05', section: '02', sectionTitle: 'Background of the Study', type: 'divider', title: 'Background of the Study',            notes: 'Section 2 — we now identify the specific operational gaps that motivated SEN-GEN.' },
  { id: 's06', section: '02', sectionTitle: 'Background of the Study', type: 'content', title: 'The Core Problem',                   notes: 'Seven compounding problems at STI Alaminos — all stemming from the absence of an integrated digital platform.' },
  { id: 's07', section: '02', sectionTitle: 'Background of the Study', type: 'content', title: 'Philippine HEI Context',             notes: 'ADMU, UP, DLSU, FEU, UST have had digital enlistment for over a decade. STI Alaminos has not yet achieved this standard.' },
  { id: 's08', section: '02', sectionTitle: 'Background of the Study', type: 'content', title: 'Walk-In Enlistment Flow',            notes: '6-step manual walk-in process — each step annotated with its operational failure mode.' },
  { id: 's09', section: '02', sectionTitle: 'Background of the Study', type: 'content', title: 'Manual Scheduling Flow',             notes: '18–22 working days per semester, 8–12% conflict density, no automated enforcement.' },
  { id: 's10', section: '02', sectionTitle: 'Background of the Study', type: 'content', title: 'Stakeholder Impact',                 notes: 'Six roles affected — School Admin, Academic Head, Registrar, Admission Officer, Faculty, Students. Students are most directly impacted.' },
  { id: 's11', section: '02', sectionTitle: 'Background of the Study', type: 'content', title: 'Consequences of Inaction',           notes: 'Short, medium, and long-term institutional risks if SEN-GEN is not implemented.' },

  // ── SECTION 03 ──────────────────────────────────────────────
  { id: 's12', section: '03', sectionTitle: 'Objectives & Framework',  type: 'divider', title: 'Objectives & Framework',            notes: 'Section 3 — research objectives and the IPO conceptual framework.' },
  { id: 's13', section: '03', sectionTitle: 'Objectives & Framework',  type: 'content', title: 'Statement of Objectives',           notes: 'Three specific objectives: Descriptive (identify procedures), Developmental (build the system), Evaluation (ISO 25010 assessment).' },
  { id: 's14', section: '03', sectionTitle: 'Objectives & Framework',  type: 'content', title: 'Conceptual Framework — IPO',        notes: 'Input: institutional data. Process: CSP scheduling engine + FDD. Output: schedules, confirmations, analytics dashboard.' },
  { id: 's15', section: '03', sectionTitle: 'Objectives & Framework',  type: 'content', title: 'Scope & Limitations',               notes: 'STI Alaminos only. No financial processing. No ML/AI (deliberate — insufficient historical data). No CHED SIS interface.' },

  // ── SECTION 04 ──────────────────────────────────────────────
  { id: 's16', section: '04', sectionTitle: 'Review of Related Literature', type: 'divider', title: 'Review of Related Literature', notes: 'Section 4 — 30+ verified sources organized around the 3 study objectives.' },
  { id: 's17', section: '04', sectionTitle: 'Review of Related Literature', type: 'content', title: 'Literature Overview',           notes: 'Sources span 2001–2025, international and Philippine, organized by objective.' },
  { id: 's18', section: '04', sectionTitle: 'Review of Related Literature', type: 'content', title: 'Manual vs Algorithmic Scheduling', notes: '62% still manual (Chen et al., 2021). 86% time reduction with algorithmic tools (Bui et al., 2022). 100% hard-constraint satisfaction by CSP (Diallo et al., 2024).' },
  { id: 's19', section: '04', sectionTitle: 'Review of Related Literature', type: 'content', title: 'Philippine HEI Evidence',       notes: 'Leite (2025), Mansoor (2022), Martinez & Chen (2023), Gkrimpizi (2024) — all confirm digital enrollment gaps in small-to-medium PH HEIs.' },
  { id: 's20', section: '04', sectionTitle: 'Review of Related Literature', type: 'content', title: 'CSP & Scheduling Engine',       notes: 'Hard constraints: no room double-booking, no faculty conflicts. Soft: preferences, load balance. Backtracking + constraint propagation.' },
  { id: 's21', section: '04', sectionTitle: 'Review of Related Literature', type: 'content', title: 'ETL, RBAC, Dashboard & Notifications', notes: 'Each SEN-GEN feature validated by literature: ETL (Mansoor), RBAC (Kim & Park), Dashboard (Leite), Notifications (Martinez & Chen).' },
  { id: 's22', section: '04', sectionTitle: 'Review of Related Literature', type: 'content', title: 'ISO 25010 Benchmarks',          notes: 'Comparable systems score 4.11–4.55. Target: ≥4.00 weighted mean. Leite (2025): 78% adoption probability above this threshold.' },
  { id: 's23', section: '04', sectionTitle: 'Review of Related Literature', type: 'content', title: 'Literature Synthesis & Gap',   notes: 'No study has built a purpose-built, fully integrated enlistment AND scheduling system for small-to-medium Philippine private HEIs. SEN-GEN fills this gap.' },

  // ── SECTION 05 ──────────────────────────────────────────────
  { id: 's24', section: '05', sectionTitle: 'Methodology',             type: 'divider', title: 'Methodology',                       notes: 'Section 5 — research design, FDD SDLC, data collection, and analytical tools.' },
  { id: 's25', section: '05', sectionTitle: 'Methodology',             type: 'content', title: 'Research Design',                   notes: 'Descriptive-Developmental. Descriptive: documents existing procedures. Developmental: builds SEN-GEN through FDD.' },
  { id: 's26', section: '05', sectionTitle: 'Methodology',             type: 'content', title: 'Agile Feature-Driven Development',  notes: 'FDD chosen because SEN-GEN has 6 clearly bounded functional domains. Each feature independently designed, built, validated.' },
  { id: 's27', section: '05', sectionTitle: 'Methodology',             type: 'content', title: 'FDD Phases 1–3',                   notes: 'Phase 1: domain model from interviews & observation. Phase 2: feature list (3 sets). Phase 3: dependency-based plan.' },
  { id: 's28', section: '05', sectionTitle: 'Methodology',             type: 'content', title: 'FDD Phases 4–5',                   notes: 'Phase 4: ERD, API spec, CSP pseudocode, React components, flowcharts. Phase 5: unit → integration → UAT → ISO 25010 evaluation.' },
  { id: 's29', section: '05', sectionTitle: 'Methodology',             type: 'content', title: 'Data Collection',                  notes: 'Primary: structured interviews + observation. Secondary: institutional documents. Tertiary: internet-accessed academic literature.' },
  { id: 's30', section: '05', sectionTitle: 'Methodology',             type: 'content', title: 'Tools for Data Analysis',           notes: 'Use Case Diagrams, Flowcharts, ERD, Database Schema, Likert Scale (5-point), Weighted Mean.' },
  { id: 's31', section: '05', sectionTitle: 'Methodology',             type: 'content', title: 'Respondents & Sampling',            notes: 'Purposive sampling. 45 respondents: 30 students, 10 faculty, 5 admin. Instrument validated by 3 IT experts + pilot test + Cronbach alpha ≥ 0.70.' },

  // ── SECTION 06 ──────────────────────────────────────────────
  { id: 's32', section: '06', sectionTitle: 'System Features & Architecture', type: 'divider', title: 'System Features & Architecture', notes: 'Section 6 — the technical heart of SEN-GEN. Three-tier architecture, tech stack, and all 6 modules.' },
  { id: 's33', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Three-Tier Architecture',     notes: 'Tier 1: React JS (6 role-differentiated UIs). Tier 2: ASP.NET Core Web API + EF Core (CSP engine, RBAC, ETL, notifications). Tier 3: SQL Server.' },
  { id: 's34', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Technology Stack',            notes: 'React JS + ASP.NET Core Web API + Entity Framework Core + Microsoft SQL Server + IIS. Each chosen for portability, maintainability, and ISO 25010 alignment.' },
  { id: 's35', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Feature 1: ETL Import',       notes: 'Extract XLSX → Validate → Transform → Load. Registrar uploads student list; system pre-authorizes all students for online enlistment.' },
  { id: 's36', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Feature 2: Scheduling Engine', notes: 'CSP algorithm. Hard: no room double-booking, no faculty conflicts, CHED load limits. Soft: time preferences, load equity. Manual override with real-time conflict detection.' },
  { id: 's37', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Feature 3: Student Portal',   notes: '24/7 online access. Browse published schedules. Real-time slot availability (max 40/section). Request → Approval workflow → Email notification.' },
  { id: 's38', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Feature 4: Dashboard',        notes: 'Semester-aware. Live: enlistment stats, room utilization, faculty load distribution, pre-enrollment trends. Exportable reports for CHED compliance.' },
  { id: 's39', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Features 5 & 6: Notifications + RBAC', notes: 'Automated emails for 6 lifecycle events. RBAC: 6 roles (School Admin, Academic Head, Registrar, Admission Officer, Faculty, Student). JWT + IIS SSL.' },

  // ── SECTION 07 ──────────────────────────────────────────────
  { id: 's40', section: '07', sectionTitle: 'Evaluation Framework',    type: 'divider', title: 'Evaluation Framework',               notes: 'Section 7 — ISO/IEC 25010:2023 quality evaluation methodology and benchmarks.' },
  { id: 's41', section: '07', sectionTitle: 'Evaluation Framework',    type: 'content', title: 'ISO 25010 — Six Dimensions',         notes: 'Functional Suitability, Performance Efficiency, Usability, Reliability, Maintainability, Portability — each with specific evaluation questions.' },
  { id: 's42', section: '07', sectionTitle: 'Evaluation Framework',    type: 'content', title: 'Evaluation Instrument',              notes: '5-point Likert scale. Expert panel validation → pilot test → Cronbach alpha → full administration to 45 respondents → weighted mean.' },
  { id: 's43', section: '07', sectionTitle: 'Evaluation Framework',    type: 'content', title: 'Usability Benchmarks',               notes: 'Literature scores: 4.11–4.55. SEN-GEN target: ≥4.00. Leite (2025): systems above this threshold show 78% sustained adoption probability.' },

  // ── SECTION 08 ──────────────────────────────────────────────
  { id: 's44', section: '08', sectionTitle: 'Significance & Summary',  type: 'divider', title: 'Significance & Summary',            notes: 'Final section — regulatory alignment, beneficiaries, and research summary.' },
  { id: 's45', section: '08', sectionTitle: 'Significance & Summary',  type: 'content', title: 'Regulatory & Policy Alignment',     notes: 'RA 10844 (DICT Act), CHED MO 46, RA 10173 (Data Privacy Act), UN SDG 4 (Quality Education), UN SDG 9 (Innovation & Infrastructure).' },
  { id: 's46', section: '08', sectionTitle: 'Significance & Summary',  type: 'content', title: 'Significance & Beneficiaries',      notes: 'STI Alaminos, School Admin, Academic Head, Registrar, Admission Officer, Faculty, Students (most direct), Future Researchers.' },
  { id: 's47', section: '08', sectionTitle: 'Significance & Summary',  type: 'closing', title: 'Summary & Thank You',              notes: 'SEN-GEN is not merely a technological upgrade — it is an instrument of academic quality, institutional efficiency, and student-centered service delivery. Thank you, distinguished panel. I am ready for your questions.' },
]
