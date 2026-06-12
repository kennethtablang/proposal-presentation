// Master slide registry
// hidden: true → not shown in sidebar; accessible via keyboard shortcut or button only

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
  {
    id: 's01', section: '01', sectionTitle: 'Opening & Context', type: 'title', title: 'SEN-GEN',
    notes: 'Welcome, distinguished panel members. I am Kenneth Rey Rallustian Tablang, MIT student at Universidad de Dagupan — School of Professional Studies. This presentation covers SEN-GEN: Student Enrollment with Generative Scheduling System for STI Alaminos, under the advisement of Prof. Rochelle Sotelo Lanto, MIT. SEN-GEN is a web-based system designed to automate the manual enrollment pipeline and generative class schedule construction currently in place at STI Alaminos.',
  },
  {
    id: 's02', section: '01', sectionTitle: 'Opening & Context', type: 'content', title: 'Presentation Outline',
    notes: 'This presentation is organized into 8 sections over approximately 60 minutes. Section 1 opens with context and researcher background. Section 2 identifies the problem and its consequences. Section 3 presents the objectives and the IPO conceptual framework. Section 4 reviews the literature that validates each SEN-GEN feature. Section 5 details the research methodology and SDLC. Section 6 covers the system architecture and all 6 features. Section 7 describes the ISO 25010 evaluation framework. Section 8 covers significance, regulatory alignment, and the research summary.',
  },
  {
    id: 's03', section: '01', sectionTitle: 'Opening & Context', type: 'content', title: 'About the Researcher',
    notes: 'I am the researcher and sole developer of SEN-GEN. My 3-year background in software development (freelance), combined with 2.5 years of teaching experience and 1 year of overseas web content management, directly informed the architectural decisions made in this study. My full-stack proficiency in React JS, ASP.NET Core, SQL Server, and Entity Framework Core allowed for end-to-end design, development, and deployment without outsourcing any system component.',
  },
  {
    id: 's04', section: '01', sectionTitle: 'Opening & Context', type: 'content', title: 'Institutional Context',
    notes: 'STI Alaminos is a TESDA-accredited Education Center in Alaminos City, Pangasinan, offering IT and allied programs. Although primarily TESDA-regulated, the institution follows STI corporate policy for faculty loading — an important distinction. The campus currently relies on manual SIS paper forms, disconnected spreadsheets, and a non-functional apply.sti.edu portal for enrollment and scheduling. This study directly addresses these operational gaps.',
  },

  // ── SECTION 02 ──────────────────────────────────────────────
  {
    id: 's05', section: '02', sectionTitle: 'Background of the Study', type: 'divider', title: 'Background of the Study',
    notes: 'Section 2 establishes the institutional problem that motivates SEN-GEN. We document 8 operational gaps at STI Alaminos, contextualize them against Philippine HEI standards, and trace their consequences across stakeholder groups.',
  },
  {
    id: 's06', section: '02', sectionTitle: 'Background of the Study', type: 'content', title: 'The Core Problem',
    notes: '8 compounding operational gaps identified through structured interviews and document analysis: (1) No integrated digital enrollment platform — all 4 enrollment steps are manual. (2) Problematic apply.sti.edu — Admission Officer does not use it due to UX problems: no terms acceptance, forced lowercase names, no document upload, no confirmation email, no enrollment term field. (3) No document submission checklist — missing papers discovered late. (4) No automated STI Policy faculty load enforcement — compliance tracked manually, overloading risk exists. (5) Manual scheduling — 18–22 working days per semester. (6) No automated faculty loading report. (7) No grid schedule views for Faculty, Classroom, or Section. (8) Compounding data silos with no audit trail or automated notifications.',
  },
  {
    id: 's07', section: '02', sectionTitle: 'Background of the Study', type: 'content', title: 'Philippine HEI Context',
    notes: 'Leading Philippine universities — ADMU (AISIS, 2005), UP Diliman (CRS), DLSU (Animo.sys, 2013), FEU (Student Central NEO), UST (myUSTe Portal) — have operated mature digital enlistment systems for over a decade. These institutions achieve real-time slot management, automated notifications, and 24/7 access that STI Alaminos currently cannot offer. This benchmark shows SEN-GEN addresses a well-documented institutional gap, not a novel or untested direction.',
  },
  {
    id: 's08', section: '02', sectionTitle: 'Background of the Study', type: 'content', title: 'Enrollment Process — 4 Steps (As-Is)',
    notes: 'The 4-step enrollment process at STI Alaminos: Step 1 — Document Submission: Student submits Form 137, birth certificate, good moral certificate to Admission Officer. No digital checklist exists; verification is entirely manual with no tracking system. Step 2 — Registration: Student fills out paper SIS form. The apply.sti.edu alternative is not actively used due to usability failures. Step 3 — Enlistment: Student physically visits the registrar to choose class sections. No self-service option; registrar manually checks spreadsheet for slot availability. Step 4 — Tuition Payment: Student visits cashier to finalize enrollment. Payment is disconnected from enrollment records; slot security is manually tracked. SEN-GEN digitizes Steps 1 through 3; Step 4 (payment) is deliberately out of scope.',
  },
  {
    id: 's09', section: '02', sectionTitle: 'Background of the Study', type: 'content', title: 'Manual Scheduling Flow',
    notes: 'The manual scheduling cycle at STI Alaminos follows 6 steps: (1) Coordinator opens scheduling spreadsheet and checks room availability row by row — no automation. (2) Emails sent to faculty for preferred time slots; responses arrive asynchronously. (3) Draft schedule assembled and shared for review. (4) Room double-bookings and faculty overloads discovered and corrected iteratively. (5) Revisions communicated across disconnected files. (6) A workable but rarely optimal schedule is finally published. Chen et al. (2021) documents this cycle at 18–22 working days on average, compared to 2–4 days with algorithmic tools. Conflict density in manual schedules averages 8–12% (Veenstra & Vis, 2023).',
  },
  {
    id: 's10', section: '02', sectionTitle: 'Background of the Study', type: 'content', title: 'Stakeholder Impact',
    notes: 'Six stakeholder roles are directly affected: School Admin — no real-time data, relies on outdated compiled reports. Academic Head — manually cross-references curriculum, faculty preferences, and room availability every semester. Registrar — processes every enlistment request manually with no digital tracking. Admission Officer — manually verifies enrollment requirements against no standardized digital checklist; newly highlighted in this study as a key administrative bottleneck. Faculty Members — no digital schedule view, no system-enforced load compliance monitoring. Students — most directly impacted: cannot enlist without physically visiting campus, disadvantaging working students and those with mobility constraints.',
  },
  {
    id: 's11', section: '02', sectionTitle: 'Background of the Study', type: 'content', title: 'Consequences of Inaction',
    notes: 'Short-term: Hidden costs from scheduling conflicts consuming staff time each cycle; enlistment queues degrade student experience; STI Policy load guideline violations go undetected; registrar capacity exceeded at peak periods. Medium-term: Risk of falling behind institutional quality audit standards; sustained student access inequity; faculty dissatisfaction; growing populations exceed sustainable administrative capacity. Long-term: Compounding institutional credibility gap versus peers; no historical data for evidence-based planning; persistent gap from quality benchmarks; missed opportunity to serve UN SDG 4 education mandates.',
  },

  // ── SECTION 03 ──────────────────────────────────────────────
  {
    id: 's12', section: '03', sectionTitle: 'Objectives & Framework', type: 'divider', title: 'Objectives & Framework',
    notes: 'Section 3 presents the research objectives and the conceptual framework guiding SEN-GEN. The IPO model shows how institutional inputs flow through the FDD-based development process to produce system outputs and institutional benefits.',
  },
  {
    id: 's13', section: '03', sectionTitle: 'Objectives & Framework', type: 'content', title: 'Statement of Objectives',
    notes: 'Main Objective: To design, develop, and implement SEN-GEN — a web-based Student Enrollment with Generative Scheduling System for STI Alaminos. Three Specific Objectives: (1) Descriptive — identify and document current enrollment and scheduling procedures at STI Alaminos through structured interviews, observation, and document analysis. (2) Developmental — determine and build SEN-GEN features through Agile Feature-Driven Development, each feature iteratively designed, built, and validated. (3) Evaluation — assess the usability of SEN-GEN using ISO/IEC 25010:2023 across 6 quality dimensions, administered to 45 purposively-sampled respondents targeting a weighted mean of ≥4.00.',
  },
  {
    id: 's14', section: '03', sectionTitle: 'Objectives & Framework', type: 'content', title: 'Conceptual Framework — IPO',
    notes: 'The IPO Model frames how SEN-GEN transforms institutional data inputs into measurable outputs. Input: institutional data (student profiles, faculty, subjects, rooms, academic calendar) and user interactions from 6 roles. Process: the Agile FDD methodology with 5 phases — 3 sequential and 2 iterative — driving all system feature development, plus the Generative Scheduling Engine (CSP algorithm). Output: digitized enrollment records, optimized class schedules, faculty load summaries, room utilization reports, audit logs, and 5 key institutional benefits. A Feedback Loop connects outputs back to inputs for continuous improvement. ISO/IEC 25010 evaluation closes the loop with a quality assurance mechanism.',
  },
  {
    id: 's15', section: '03', sectionTitle: 'Objectives & Framework', type: 'content', title: 'Scope & Limitations',
    notes: 'Within Scope: STI Alaminos campus only; 6 user roles with RBAC; ETL XLSX import for pre-enrollment authorization; CSP Generative Scheduling Engine; student portal with real-time slots (max 40/section); enrollment requirements checklist; document submission tracking for new students; faculty assignment with manual override; semester-aware dashboard; automated email notifications; grid views (Faculty, Classroom, Section); ISO 25010 evaluation with 45 respondents. Deliberate Limitations: No multi-campus integration (purpose-built for STI Alaminos). No financial/payment processing (tuition payment is the final enrollment step but outside system scope). No AI/ML predictive scheduling (insufficient historical data; CSP is the correct foundational step per literature). No TESDA Registry System interface. Findings not generalizable without contextual replication.',
  },

  // ── SECTION 04 ──────────────────────────────────────────────
  {
    id: 's16', section: '04', sectionTitle: 'Review of Related Literature', type: 'divider', title: 'Review of Related Literature',
    notes: 'Section 4 reviews 30+ verified sources organized around the 3 specific study objectives. Sources span 2001–2025, covering international and Philippine literature, peer-reviewed journals, institutional publications, and technical documentation. Each SEN-GEN feature is directly validated by at least one peer-reviewed source.',
  },
  {
    id: 's17', section: '04', sectionTitle: 'Review of Related Literature', type: 'content', title: 'Literature Overview',
    notes: '30+ verified sources organized by objective. Objective 1 (Procedures): Sources documenting manual enrollment and scheduling challenges in Philippine HEIs. Objective 2 (Features): Sources validating each of the 6 SEN-GEN modules — ETL (Mansoor et al., 2022), CSP scheduling (Diallo et al., 2024; Bui et al., 2022), RBAC (Kim & Park, 2022), Dashboard (Leite, 2025), Notifications (Martinez & Chen, 2023). Objective 3 (Usability): Sources providing ISO 25010 benchmark scores from comparable scheduling and enrollment systems (Bellio et al., 2022; Gozali et al., 2022; Diallo et al., 2024; Kim & Park, 2022).',
  },
  {
    id: 's18', section: '04', sectionTitle: 'Review of Related Literature', type: 'content', title: 'Manual vs Algorithmic Scheduling',
    notes: 'Key statistics from literature: 62% of universities still use manual or semi-automated scheduling (Chen et al., 2021). Average scheduling cycle: 18–22 working days manual vs 2–4 days algorithmic — an 86% reduction (Bui et al., 2022). Manual conflict density: 8–12% (Veenstra & Vis, 2023). CSP-based engines achieve 100% hard-constraint satisfaction in all tested deployments (Diallo et al., 2024), with 78% soft-constraint fulfillment alongside perfect hard-constraint compliance. These statistics directly justify SEN-GEN\'s CSP-based scheduling engine as the appropriate technical solution.',
  },
  {
    id: 's19', section: '04', sectionTitle: 'Review of Related Literature', type: 'content', title: 'Philippine HEI Evidence',
    notes: 'Philippine-specific evidence: Leite (2025) surveyed 8 Southeast Asian HEIs — digital enrollment platforms show measurable efficiency gains across all institutions studied. Mansoor et al. (2022) identified automated data import as among the highest-impact enrollment features in terms of administrative time savings. Martinez & Chen (2023) found that 84% of systems combining real-time slots, automated notifications, and 24/7 access score above 4.0 on usability scales. Gkrimpizi et al. (2024) specifically noted that small-to-medium HEIs are most severely impacted by the absence of integrated digital enlistment tools — precisely the context of STI Alaminos.',
  },
  {
    id: 's20', section: '04', sectionTitle: 'Review of Related Literature', type: 'content', title: 'CSP & Scheduling Engine',
    notes: 'Constraint Satisfaction Problem (CSP) definition: A mathematical formulation where variables are the items to be scheduled (class sections), domains are the valid assignment values (time slots, room-faculty pairings), and constraints are the rules that must be satisfied. Hard constraints cannot be violated — any solution violating them is rejected. Soft constraints are optimized where possible. The CSP backtracking algorithm selects an unassigned variable, tries domain values, propagates constraints to reduce search space, and backtracks when a dead end is reached. Diallo et al. (2024) achieved 100% hard-constraint satisfaction with 78% soft-constraint fulfillment. Bui et al. (2022) reduced scheduling cycle time from 21 days to 3 days with 100% hard-constraint compliance.',
  },
  {
    id: 's21', section: '04', sectionTitle: 'Review of Related Literature', type: 'content', title: 'ETL, RBAC, Dashboard & Notifications',
    notes: 'Feature-level literature validation: ETL (Extract-Transform-Load) — Mansoor et al. (2022): automated XLSX import reduces data entry errors and accelerates pre-enlistment authorization. RBAC (Role-Based Access Control) — Kim & Park (2022): tiered role structures significantly reduce unauthorized access risks in institutional information systems. Dashboard — Leite (2025): semester-filtered views are used 3.4× more frequently than aggregate views; real-time metrics drive evidence-based decisions. Notifications — Martinez & Chen (2023): platforms with 5 or more automated notification events achieve 41% higher student satisfaction scores compared to platforms without automated notifications.',
  },
  {
    id: 's22', section: '04', sectionTitle: 'Review of Related Literature', type: 'content', title: 'ISO 25010 Benchmarks',
    notes: 'ISO/IEC 25010 benchmark scores from comparable systems: Bellio et al. (2022) — European scheduling system: Faculty 4.52, Admin 4.45. Gozali et al. (2022) — Genetic algorithm system: Faculty 4.28, Admin 4.11. Diallo et al. (2024) — CSP optimization system: Faculty/Admin/Student all 4.44. Kim & Park (2022) — RBAC institutional IS: Admin 4.30+. The SEN-GEN target of ≥4.00 is therefore empirically grounded and conservative relative to peer systems. Leite (2025) provides additional justification: systems scoring ≥4.00 show a 78% probability of continued institutional adoption beyond the first academic year.',
  },
  {
    id: 's23', section: '04', sectionTitle: 'Review of Related Literature', type: 'content', title: 'Literature Synthesis & Gap',
    notes: 'Literature Synthesis: The literature numerically quantifies the costs of manual scheduling (18–22 days, 8–12% conflict density, 62% manual prevalence) and validates every SEN-GEN feature with peer-reviewed evidence. The benchmark range of 4.11–4.55 provides an empirically grounded performance standard. Research Gap: No study has built a purpose-built, fully integrated enlistment AND scheduling system for small-to-medium Philippine private technical-vocational institutions. Existing studies either address enrollment or scheduling — not both simultaneously in the Philippine context. SEN-GEN fills this gap by combining ETL-based enrollment authorization, CSP-based generative scheduling, RBAC, dashboards, notifications, and grid views into a single cohesive platform for STI Alaminos.',
  },

  // ── SECTION 05 ──────────────────────────────────────────────
  {
    id: 's24', section: '05', sectionTitle: 'Methodology', type: 'divider', title: 'Methodology',
    notes: 'Section 5 covers the research design (Descriptive-Developmental), the SDLC (Agile Feature-Driven Development), data collection sources, analytical tools, and respondent sampling strategy. Each methodological choice is anchored in academic literature.',
  },
  {
    id: 's25', section: '05', sectionTitle: 'Methodology', type: 'content', title: 'Research Design',
    notes: 'Descriptive Dimension (McCombes, 2023): systematically describes the existing enrollment and scheduling situation at STI Alaminos without manipulating variables. Applied through: structured interviews with Registrar, Academic Head, Admission Officer, Faculty, and Students; non-participatory observation of workflows; and document analysis of paper forms, spreadsheets, and faculty load logs. This produces the operational baseline for SEN-GEN requirements. Developmental Dimension (Siedlecki, 2020): systematic iterative process of designing, building, and refining a product. Applied through Agile FDD — 5 phases where each feature is independently designed, built, and validated with stakeholder acceptance criteria before moving to the next.',
  },
  {
    id: 's26', section: '05', sectionTitle: 'Methodology', type: 'content', title: 'Agile Feature-Driven Development',
    notes: 'Agile FDD was selected over Scrum or Waterfall for three reasons: (1) SEN-GEN has 6 clearly bounded functional domains (ETL, Scheduling Engine, Student Portal, Dashboard, Notifications, RBAC) — exactly the structure FDD is designed for. (2) Unlike Scrum, FDD allows each feature to be independently designed, built, and validated, reducing integration risk between modules. (3) FDD\'s explicit feature-centric planning maps directly to the stakeholder-driven requirements gathered in the Descriptive phase. Palmer & Felsing (2002) define FDD as a model-driven, short-iteration process that produces working software in every iteration. Beck et al. (2001) Agile principles of iterative cycles, continuous collaboration, and adaptive planning underpin the overall approach.',
  },
  {
    id: 's26b', section: '05', sectionTitle: 'Methodology', type: 'content', title: 'Agile FDD — Process Diagram',
    notes: 'The FDD process has 5 phases: Phases 1–3 are sequential (develop once per project): Phase 1 — Develop Overall Model: domain knowledge is gathered and the overall architecture established. Phase 2 — Build Feature List: all system features are identified and grouped into feature sets. Phase 3 — Plan by Feature: development sequence is planned based on technical dependencies. Phases 4–5 form an Iterative Cycle (repeated per feature): Phase 4 — Design by Feature: detailed design artifacts are produced for each feature. Phase 5 — Build by Feature: feature is implemented, unit-tested, and integrated. After each feature is built: Test & Validate → Feedback & Review → loop back to Phase 4 for next feature until all features are accepted.',
  },
  {
    id: 's27', section: '05', sectionTitle: 'Methodology', type: 'content', title: 'FDD Phases 1–3',
    notes: 'Phase 1 — Develop Overall Model: The researcher conducted structured interviews with all 5 stakeholder groups and performed non-participatory observation sessions. Documents analyzed included paper SIS forms, faculty load spreadsheets, and scheduling records. Output: Entity-Relationship Diagram (ERD) with 10 core entities and the Three-Tier Architecture Blueprint (React JS client / ASP.NET Core API / SQL Server data layer). Phase 2 — Build Feature List: Interviews revealed 6 functional modules grouped into 3 feature sets. Feature Set 1 (Enrollment Mgmt): ETL Import, Enrollment Requirements Checklist, Student Portal. Feature Set 2 (Scheduling Mgmt): CSP Engine, Grid Schedule Views, Faculty Loading Report. Feature Set 3 (Admin Mgmt): RBAC, Dashboard Analytics, Automated Notifications, Audit Logs. Phase 3 — Plan by Feature: Development sequenced by technical dependency. Infrastructure first (DB schema, API scaffold, JWT/RBAC) since all features depend on it. CSP Engine second (core business logic). Student Portal third (depends on ETL and scheduling). Dashboard, Notifications, and Reports last (depend on all prior modules).',
  },
  {
    id: 's28', section: '05', sectionTitle: 'Methodology', type: 'content', title: 'FDD Phases 4–5',
    notes: 'Phase 4 — Design by Feature: For each feature, the researcher produced: (a) Detailed ERD refinements specific to the feature; (b) REST API specification documenting all endpoints, request/response schemas, and HTTP status codes; (c) CSP pseudocode for the scheduling engine; (d) React component hierarchy diagrams; (e) As-is/to-be process flowcharts showing how the feature replaces or improves existing workflows. All design artifacts were reviewed by the study site stakeholders before implementation. Phase 5 — Build by Feature: Each feature was implemented following the design artifacts. Unit tests were written for business logic (constraint checks, ETL validation). Integration tests verified API-to-database interactions. UAT sessions were conducted with actual stakeholders from STI Alaminos. ISO 25010 questionnaire was administered after UAT completion. Weighted mean analysis was computed per dimension and per respondent group. The iterative cycle (Design → Build → Test → Feedback) was repeated for each of the 6 modules before final acceptance.',
  },
  {
    id: 's29', section: '05', sectionTitle: 'Methodology', type: 'content', title: 'Data Collection',
    notes: 'Primary Sources: Structured interviews with 5 stakeholder groups (Registrar, Academic Head, Admission Officer, Faculty Members, Students) using semi-structured interview guides developed from the research objectives. Non-participatory observation of live enrollment and scheduling processes during the data collection period. Secondary Sources: Institutional documents — paper SIS enrollment forms, faculty load spreadsheets, manual class scheduling files, and room assignment records from STI Alaminos. Tertiary Sources: Internet-accessed peer-reviewed academic journals, institutional publications from Philippine HEIs, ISO standards documentation, and technical documentation for the chosen technology stack.',
  },
  {
    id: 's30', section: '05', sectionTitle: 'Methodology', type: 'content', title: 'Tools for Data Analysis',
    notes: 'Use Case Diagrams: Define functional boundaries for each of the 6 user roles, showing what each role can do within SEN-GEN. Essential for requirements validation with stakeholders. Flowcharts: As-is (manual) vs to-be (SEN-GEN) process flowcharts for enrollment and scheduling — visually demonstrates the transformation SEN-GEN achieves. Entity-Relationship Diagram (ERD): Documents all 10 system entities, their attributes, and relationships. Foundation for the SQL Server database schema. Database Schema: Physical schema derived from the ERD — defines tables, columns, data types, primary keys, foreign keys, and constraints enforced at the database level for referential integrity. Likert Scale (5-point) + Weighted Mean: ISO 25010 usability instrument. Scale: 1=Strongly Disagree, 2=Disagree, 3=Neutral, 4=Agree, 5=Strongly Agree. Interpreted as: ≥4.50=Excellent, 3.50–4.49=Very Good, 2.50–3.49=Good, 1.50–2.49=Fair, 1.00–1.49=Poor. Cronbach alpha ≥ 0.70 required for instrument reliability.',
  },
  {
    id: 's31', section: '05', sectionTitle: 'Methodology', type: 'content', title: 'Respondents & Sampling',
    notes: 'Purposive Sampling (Bisht, 2023): deliberate selection of participants based on direct relevance to research objectives — only users who actually interacted with SEN-GEN in their designated roles during UAT. 45 Total Respondents: 30 Students (IT and allied program students who used the enrollment portal), 10 Faculty Members (faculty who accessed SEN-GEN schedule views and load summaries), 5 Administrative Staff (Registrar, Academic Head, Admission Officer, and School Admin representatives). Instrument validation: 3 IT expert validators reviewed the questionnaire for content validity → pilot test (n=5) → Cronbach alpha computed → ≥0.70 threshold → full administration to 45 respondents → weighted mean computed per ISO 25010 dimension and per respondent group.',
  },

  // ── SECTION 06 ──────────────────────────────────────────────
  {
    id: 's32', section: '06', sectionTitle: 'System Features & Architecture', type: 'divider', title: 'System Features & Architecture',
    notes: 'Section 6 presents the technical heart of SEN-GEN: the three-tier architecture, technology stack, and all 6 functional modules. Each feature is described with its technical implementation, the operational problem it solves, and the literature that validates the approach.',
  },
  {
    id: 's33', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Three-Tier Architecture',
    notes: 'Tier 1 — Client Layer (React JS): 6 role-differentiated interfaces ensure each user sees only what their role requires. Role-differentiated UIs are a usability best practice that reduces cognitive load and prevents unauthorized action exposure. Tier 2 — Application Layer (ASP.NET Core Web API + EF Core): Houses all business logic — the CSP Generative Scheduling Engine, Role-Based Access Control (JWT middleware), ETL Pipeline execution, automated email notification dispatch, slot request and approval workflows, and business rule validation. Hosted on IIS Web Server for SSL/TLS compliance. Tier 3 — Data Layer (SQL Server): Referential integrity constraints enforced at the database level prevent orphaned records. Transactional consistency ensures slot capacity is enforced even under concurrent requests. Separation of concerns across tiers supports the Maintainability and Portability quality dimensions of ISO 25010.',
  },
  {
    id: 's34', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Technology Stack',
    notes: 'React JS: Chosen for component-based architecture enabling 6 role-differentiated interfaces with reusable components. React\'s virtual DOM ensures performant rendering even with real-time slot updates during peak enlistment. ASP.NET Core Web API: Built-in dependency injection, JWT middleware, and cross-platform support. High maintainability score in ISO 25010 benchmarks (Kim & Park, 2022). Entity Framework Core: Code-first migrations ensure schema consistency across environments. Optimized raw SQL queries used for the CSP engine to avoid ORM overhead during constraint evaluation. Microsoft SQL Server: Referential integrity constraints, transactional consistency, and slot capacity enforcement at the database level prevent race conditions during concurrent enlistment. IIS: HTTP routing and SSL/TLS provide Data Privacy Act (RA 10173) compliance. All communications encrypted in transit.',
  },
  {
    id: 's35', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Feature 1: ETL Import',
    notes: 'ETL = Extract, Transform, Load. The Registrar uploads an XLSX file containing the pre-enrollment student list. Extract: server-side parser reads all rows into memory. Transform: field completeness validation (student ID, name, program, year level); malformed or duplicate rows are flagged and returned to the Registrar with error details; valid rows are mapped to curriculum records and pre-enrollment tokens are generated. Load: validated records are inserted into SQL Server, activating online enlistment eligibility per semester for each student. This replaces the manual per-student registration process and eliminates the data entry errors associated with paper SIS forms. Literature: Mansoor et al. (2022) identifies automated XLSX import as among the highest-impact enrollment features for administrative efficiency.',
  },
  {
    id: 's36', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Feature 2: Scheduling Engine',
    notes: 'The CSP-Based Generative Scheduling Engine is the algorithmic core of SEN-GEN. The Academic Head initiates schedule generation for a semester. The CSP engine: (1) Defines variables — each class section to be scheduled. (2) Defines domains — all valid (time slot, room, faculty) combinations per section. (3) Evaluates constraints — hard constraints are checked first; any violation causes immediate rejection. Soft constraints are optimized using weighted scoring. (4) Constraint propagation reduces the search space before backtracking begins. (5) Backtracking finds the first fully satisfying assignment. Hard constraints enforced: no room double-booking, no faculty double-assignment, room capacity ≥ section enrollment, faculty load ≤ STI Policy limits, faculty qualified for assigned subject. Soft constraints: faculty time preferences, minimized idle gaps, equitable load distribution. Manual override with real-time conflict detection available for the Academic Head. Press the "View CSP Engine Detail" button to see the full technical breakdown.',
  },
  // ── HIDDEN: CSP Detail slide — press button on s36 to open ──
  {
    id: 's36b', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'CSP Engine — Technical Detail', hidden: true,
    notes: 'CSP (Constraint Satisfaction Problem) formal definition: a tuple (X, D, C) where X = finite set of variables (class sections to schedule), D = domains (valid assignments for each variable), C = constraints (rules that any solution must satisfy). SEN-GEN implements backtracking search with forward checking and arc consistency (AC-3) for constraint propagation. The Minimum Remaining Values (MRV) heuristic selects the variable with the fewest legal domain values first — this significantly reduces the search tree. Degree heuristic as tie-breaker — selects the variable involved in the most constraints. Least Constraining Value (LCV) orders domain values to maximize flexibility for remaining variables. Literature results: Diallo et al. (2024) — 100% hard-constraint satisfaction + 78% soft-constraint fulfillment. Bui et al. (2022) — scheduling cycle reduced from 21 days to 3 days. Zhou (2025) — ~12% of assignments require manual override in real-world deployments, validating SEN-GEN\'s manual override feature.',
  },
  {
    id: 's37', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Feature 3: Student Enrollment Portal',
    notes: 'The Student Enrollment Portal digitizes the Enlistment step of the 4-step enrollment process. Pre-condition: student must have been ETL-authorized for the current semester. 24/7 online access from any device eliminates the requirement for a physical registrar visit — directly addressing the access inequity documented for working students. Portal workflow: Student browses published class sections with real-time slot availability, room, time, faculty, and remaining capacity displayed. Student submits a slot request for desired sections. Request enters a Registrar approval queue. Upon approval, student receives automated email confirmation. Slot capacity (max 40/section) is enforced at both the application and database levels to prevent race conditions during simultaneous requests. Martinez & Chen (2023): 84% of systems with real-time slots + notifications + 24/7 access score above 4.0 on usability instruments.',
  },
  {
    id: 's38', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Feature 4: Dashboard',
    notes: 'The semester-aware admin dashboard provides real-time institutional analytics. Semester-aware filtering: all metrics automatically filter to the active semester — Leite (2025) found semester-filtered views are used 3.4× more than aggregate views. Live enrollment statistics per subject, section, and program. Room utilization: automated percentage computation and peak usage identification, eliminating manual tallying. Faculty load distribution: visual comparison of assigned units versus STI Policy limits — the system immediately flags any faculty member approaching or exceeding the policy maximum, eliminating manual compliance tracking. Exportable reports for STI institutional documentation. Audit trail for all administrative actions. The dashboard directly resolves the "no real-time data" problem identified for School Admin and the "no load compliance monitoring" problem for Faculty Members.',
  },
  {
    id: 's39', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Features 5 & 6: Notifications + RBAC',
    notes: 'Feature 5 — Automated Email Notifications: 6 automated lifecycle events trigger email notifications: enrollment requirements checklist submitted, pre-enrollment confirmation, slot request received, slot approved/declined, schedule published, faculty assignment confirmed. Martinez & Chen (2023): platforms with 5+ automated notification events achieve 41% higher student satisfaction versus platforms without. Eliminates word-of-mouth communication and repeat registrar visits for status checks. Feature 6 — Role-Based Access Control (RBAC): 6 distinct roles (School Admin, Academic Head, Registrar, Admission Officer, Faculty Member, Student) each with a role-differentiated interface and enforced permission boundaries. JWT (JSON Web Token) middleware validates every API request. IIS SSL/TLS encrypts all data in transit. Kim & Park (2022): RBAC significantly reduces unauthorized access risks in institutional IS. Compliance with RA 10173 (Data Privacy Act of 2012) is enforced at both application and transport layers.',
  },
  {
    id: 's39b', section: '06', sectionTitle: 'System Features & Architecture', type: 'content', title: 'Additional System Features',
    notes: 'Digital Enrollment Requirements Checklist: Admission Officer manages a digital checklist for new student document submissions (Form 137, birth certificate, good moral certificate, etc.). Eliminates missed documents and the late-discovery problem identified in interviews. Student-Driven Enrollment Portal: Students independently complete Registration and Enlistment steps digitally — self-service without a registrar visit. Grid Schedule Views (PDF/XLSX Export): Faculty View, Classroom View, and Class Section View — exportable for offline review and institutional compliance documentation. Automated Room Utilization Report: auto-computes room usage percentage per semester, identifies peak periods, generates downloadable reports — replaces the manual tallying currently required of the Registrar. Automated Schedule Change Notifications: stakeholders receive instant email alerts when schedule revisions occur, eliminating word-of-mouth propagation. Automated Faculty Loading Report (PDF/XLSX): consolidated workload report generated automatically each semester with STI Policy compliance flags.',
  },

  // ── SECTION 07 ──────────────────────────────────────────────
  {
    id: 's40', section: '07', sectionTitle: 'Evaluation Framework', type: 'divider', title: 'Evaluation Framework',
    notes: 'Section 7 presents the ISO/IEC 25010:2023 quality evaluation framework used to assess SEN-GEN. ISO 25010 is the international standard for software product quality, defining 8 quality characteristics. SEN-GEN is evaluated on 6 of these characteristics using a validated 5-point Likert questionnaire administered to 45 purposively-sampled respondents.',
  },
  {
    id: 's41', section: '07', sectionTitle: 'Evaluation Framework', type: 'content', title: 'ISO 25010 — Six Dimensions',
    notes: 'The 6 ISO 25010 quality dimensions evaluated for SEN-GEN: (1) Functional Suitability — does SEN-GEN accurately perform all functions? This is the highest priority dimension; a schedule with errors fails at its core purpose. (2) Performance Efficiency — does the system respond fast under concurrent peak load? Critical during enlistment windows when multiple students submit requests simultaneously. (3) Usability — is the system easy for all 6 user roles to learn and use? A strong predictor of sustained adoption — role-differentiated UIs directly address this. (4) Reliability — is the system stable under peak load and able to recover gracefully from errors? Downtime during enlistment prevents students from meeting deadlines. (5) Maintainability — can the system be modified as STI policies evolve? Long-term institutional sustainability requires modular, extensible code. (6) Portability — does the system work across devices, browsers, and environments? Students and faculty use diverse devices; React + ASP.NET Core are cross-platform by design.',
  },
  {
    id: 's42', section: '07', sectionTitle: 'Evaluation Framework', type: 'content', title: 'Evaluation Instrument',
    notes: 'Instrument design: 5-point Likert questionnaire adapted from ISO/IEC 25010:2023 and validated by Suryadi & Sulistiyani (2022). Item examples: "The system accurately performs enrollment and scheduling functions" (Functional Suitability); "The system responds quickly even during peak enrollment periods" (Performance Efficiency); "I can navigate the system without extensive training" (Usability). Validation process: (1) Expert panel review — 3 IT experts assessed content validity; items were revised based on feedback. (2) Pilot test — administered to n=5 users. (3) Cronbach alpha — computed to verify internal consistency ≥ 0.70 threshold. (4) Full administration — 45 respondents evaluated SEN-GEN after UAT sessions. (5) Weighted mean computed per dimension and per respondent group. Interpretation scale: ≥4.50=Excellent, 3.50–4.49=Very Good, 2.50–3.49=Good, 1.50–2.49=Fair, 1.00–1.49=Poor.',
  },
  {
    id: 's43', section: '07', sectionTitle: 'Evaluation Framework', type: 'content', title: 'Usability Benchmarks',
    notes: 'SEN-GEN target: ≥4.00 weighted mean across all 6 ISO 25010 dimensions. Comparable system benchmarks: Bellio et al. (2022) European scheduling system — Faculty 4.52, Admin 4.45. Gozali et al. (2022) genetic algorithm scheduling — Faculty 4.28, Admin 4.11. Diallo et al. (2024) CSP optimization system — all groups 4.44. Kim & Park (2022) RBAC institutional IS — Admin 4.30+. The overall literature benchmark range is 4.11–4.55. SEN-GEN\'s target of ≥4.00 is therefore conservative — below the floor of comparable systems. Additional justification: Leite (2025) found that systems scoring ≥4.00 on ISO 25010 instruments show a 78% probability of continued institutional adoption beyond the first academic year, directly linking evaluation performance to institutional sustainability.',
  },

  // ── SECTION 08 ──────────────────────────────────────────────
  {
    id: 's44', section: '08', sectionTitle: 'Significance & Summary', type: 'divider', title: 'Significance & Summary',
    notes: 'Final section — regulatory alignment, beneficiaries, and research summary. SEN-GEN is not merely a technical solution; it is aligned with national legislation, international development goals, and STI\'s own institutional direction toward technology-driven education.',
  },
  {
    id: 's45', section: '08', sectionTitle: 'Significance & Summary', type: 'content', title: 'Regulatory & Policy Alignment',
    notes: 'STI Institutional Direction: SEN-GEN supports STI\'s own technology-driven education commitment, including the One STI Student Portal and other digital academic services. The system extends this direction to STI Alaminos by automating enrollment, faculty loading, room utilization, and schedule generation. RA 10844 (DICT Act of 2015): mandates ICT use to improve institutional service delivery — SEN-GEN directly digitalizes the full STI Alaminos enrollment and scheduling process. RA 10173 (Data Privacy Act of 2012): governs student and faculty data handling — SEN-GEN implements JWT authentication, RBAC, IIS/SSL, and comprehensive audit logging for full compliance. UN SDG 4 (Quality Education): 24/7 student portal eliminates the in-person access requirement, directly serving equitable and inclusive education mandates. UN SDG 9 (Innovation & Infrastructure): replacing fragmented manual processes with integrated digital infrastructure operationalizes SDG 9 for the institution.',
  },
  {
    id: 's46', section: '08', sectionTitle: 'Significance & Summary', type: 'content', title: 'Significance & Beneficiaries',
    notes: 'Direct beneficiaries: STI Alaminos — gains an integrated digital platform, real-time reporting, and data-driven planning capability. School Admin — real-time visibility into all institutional operations through the semester-aware dashboard. Registrar — ETL import, digital approvals, and automated notifications drastically reduce manual transaction volume. Academic Head — CSP engine eliminates the 18–22 day manual scheduling cycle; load compliance is enforced automatically. Admission Officer — digital enrollment requirements checklist replaces paper-based document verification. Faculty Members — system-enforced load management and digital schedule view replace manual tracking. Students (most direct beneficiary) — 24/7 online access eliminates the inequitable in-person enlistment requirement. Future Researchers — SEN-GEN provides a documented, replicable reference architecture for integrated enrollment and scheduling systems for small-to-medium Philippine private HEIs.',
  },
  {
    id: 's47', section: '08', sectionTitle: 'Significance & Summary', type: 'content', title: 'Research Summary',
    notes: 'SEN-GEN addresses 8 operational gaps at STI Alaminos through a Descriptive-Developmental research design executed via Agile Feature-Driven Development. The system digitizes all 4 enrollment steps (Document Submission, Registration, Enlistment — with Tuition Payment deliberatelyscoped out). The CSP-based scheduling engine eliminates the 18–22 day manual scheduling cycle. Six role-differentiated React JS interfaces serve all stakeholder groups. ISO/IEC 25010:2023 evaluation targets a ≥4.00 weighted mean across 6 quality dimensions. SEN-GEN is aligned with STI\'s institutional technology direction, RA 10844, RA 10173, UN SDG 4, and UN SDG 9.',
  },
  {
    id: 's48', section: '08', sectionTitle: 'Significance & Summary', type: 'closing', title: 'Thank You',
    notes: 'SEN-GEN is not merely a technological upgrade — it is an instrument of academic quality, institutional efficiency, and student-centered service delivery. Thank you, distinguished panel. I am ready for your questions. Press E to view the Interview Evidence documentation.',
  },

  // ── HIDDEN SLIDES ────────────────────────────────────────────
  // Press E to open the evidence slide
  {
    id: 's_evidence', section: '08', sectionTitle: 'Significance & Summary', type: 'content', title: 'Interview Evidence', hidden: true,
    notes: 'Photo documentation of structured interviews conducted with STI Alaminos stakeholders as part of the Descriptive phase of the research. Interviews were conducted with: Admission Officer — documented enrollment requirements verification procedures and apply.sti.edu usability problems. Registrar — documented enlistment workflow, slot management, and scheduling coordination. Academic Head — documented manual scheduling cycle, faculty load management, and curriculum requirements. Faculty Members — documented load monitoring practices and schedule access issues. Students — documented in-person enlistment experience, access barriers, and preferences for a digital portal. These interviews established the operational baseline from which SEN-GEN requirements were derived. Press Escape to return to the presentation.',
  },
]
