# SEN-GEN — Speaker Notes
> All slides in order · Hidden slides marked with `[HIDDEN]`

---

## Section 01 — Opening & Context

### Slide 1 · SEN-GEN

Good morning, distinguished panel members. I am Kenneth Rey Rallustian Tablang, an MIT student at Universidad de Dagupan, under the guidance of Prof. Rochelle Sotelo Lanto.

I am here to propose SEN-GEN — a web-based system for STI Alaminos that will handle student enrollment and automatic class scheduling in one digital platform.

Over the next hour, I will walk you through the problem we found, the research that supports our approach, our plan for building the system, and how we will measure its success. Let us begin.

---

### Slide 2 · Presentation Outline

This presentation follows eight sections. Let me briefly walk you through each one.

We start with the problems at STI Alaminos. Then the objectives — what SEN-GEN will do and why. Then over 30 published studies that support our approach. Then our research and development plan.

After that, we cover what the system will actually do, how we will test if it works, and who will benefit. We end with a full summary.

---

### Slide 3 · About the Researcher

Let me briefly introduce myself so the panel knows who is proposing and who will build this system.

I have three years of experience building web applications, two and a half years of teaching experience, and one year of web management work overseas. This combination of tech and education backgrounds helped me understand both sides of this problem — the institutional needs and the technical solution.

I will be the sole developer of SEN-GEN, meaning I will design, code, and test the entire system myself.

---

### Slide 4 · Institutional Context

SEN-GEN is designed specifically for STI Alaminos — a technical-vocational school in Alaminos City, Pangasinan, offering IT and related programs under TESDA and CHED.

Two things stood out during our investigation. First, the school has guidelines on how many classes each teacher should handle per semester, but there is currently no tool to check if those guidelines are being followed. Second, the school has an online registration tool — apply.sti.edu — but the Admissions staff stopped using it because it has several documented problems.

SEN-GEN is proposed to fix both of these issues, along with six others.

---

## Section 02 — Background of the Study

### Slide 5 · Background of the Study *(Section Divider)*

Section Two is about the Background of the Study — the "why" behind SEN-GEN.

This section documents eight specific problems we found at STI Alaminos through interviews, observation, and research. These problems affect all six groups of people involved in enrollment and scheduling.

Every claim here is based on direct evidence from the institution or from published academic studies.

---

### Slide 6 · The Core Problem

The main problem is simple: STI Alaminos has no single digital platform that connects all parts of the enrollment process.

Instead, everything is done manually or across disconnected tools. We identified eight specific gaps: no unified digital enrollment platform, an unused and problematic registration portal, no digital document checklist, no automated teacher workload monitoring, an 18-to-22 working day manual scheduling cycle, no automated faculty loading report, no digital schedule views, and no audit trail or automated notifications.

SEN-GEN is proposed to close every one of these eight gaps.

---

### Slide 7 · Philippine HEI Context

To understand how behind this is, consider what leading Philippine universities already have.

ADMU has had a digital enlistment system since 2005. UP Diliman, DLSU, FEU, and UST all have online enrollment and subject selection platforms that students can use anytime, from anywhere. Students at these universities do not need to visit the school just to pick their subjects.

STI Alaminos students currently do. A dedicated online enlistment platform is not a luxury at this level — it is an institutional standard. SEN-GEN aims to bring STI Alaminos into alignment with that standard.

---

### Slide 8 · Enrollment Process — 4 Steps (As-Is)

Let me walk through how enrollment currently works at STI Alaminos — step by step.

Step 1: Students physically go to the admissions office to submit documents like Form 137 and a birth certificate. These are manually checked against a spreadsheet. Step 2: Students fill out a paper SIS form to register. The online version exists but is not being used. Step 3: Students physically visit the registrar to pick their class sections. The registrar checks a spreadsheet by hand and records everything on paper. Step 4: Students pay at the cashier.

SEN-GEN will digitize Steps 1 to 3. Step 4, payment, is intentionally excluded — it involves separate financial controls.

---

### Slide 9 · Manual Scheduling Flow

Building the class schedule is currently one of the most time-consuming tasks at STI Alaminos.

A coordinator opens a spreadsheet and checks room availability one row at a time. Emails are sent to teachers asking for preferred time slots, and responses come in at different times. A draft schedule is made, shared, then corrected when a room conflict is found — then corrected again when a teacher is accidentally overloaded. This back-and-forth takes 18 to 22 working days every semester.

Research shows that schools using automated scheduling tools complete this same task in 2 to 4 days — an 86% reduction. That is what SEN-GEN's scheduling engine is designed to achieve.

---

### Slide 10 · Stakeholder Impact

Six groups of people are affected by these problems, each in different ways.

The School Admin has no real-time view of operations. The Academic Head must cross-reference multiple spreadsheets to check if teacher workloads are balanced. The Registrar manually processes every single enrollment request while also handling walk-in students. The Admissions Officer tracks document requirements on paper with no digital record. Teachers have no digital way to see or check their assigned workloads.

And students — especially those who work, live far, or have no transportation — must physically show up at the school for each step of enrollment. SEN-GEN is designed to give each of these six groups a better experience.

---

### Slide 11 · Consequences of Inaction

If SEN-GEN is not built, these problems will keep getting worse.

In the short term: staff time continues to be spent fixing scheduling errors and processing paper requests. Students who cannot visit the school face ongoing barriers. In the medium term: TESDA — the government body overseeing STI Alaminos — expects schools to have efficient digital systems as part of quality audits. In the long term: the school will fall further behind compared to institutions that already have these systems.

Research by Leite in 2025 shows that schools investing in digital academic tools see measurable improvements in efficiency and satisfaction. Every semester without SEN-GEN is a preventable, compounding cost.

---

## Section 03 — Objectives & Framework

### Slide 12 · Objectives & Framework *(Section Divider)*

Section Three presents the objectives of this study and the overall framework.

These objectives directly respond to the eight problems identified in Section Two. They guide everything in the study — what we investigated, what we plan to build, and how we will measure success.

---

### Slide 13 · Statement of Objectives

The main goal of this study is to design, develop, and implement SEN-GEN for STI Alaminos.

This breaks down into three specific objectives. First — Describe: identify and document the current enrollment and scheduling procedures at STI Alaminos. This has already been completed through interviews and observation. Second — Build: determine and develop the features of SEN-GEN using a structured development approach, where each of the six modules is built and tested independently. Third — Evaluate: assess how usable and effective the proposed system is, using the ISO 25010 international quality standard, with 45 actual users from STI Alaminos.

These three objectives correspond to the three phases of the study: Describe, Build, and Evaluate.

---

### Slide 14 · Conceptual Framework — IPO

The IPO Model — Input, Process, Output — shows the big picture of how SEN-GEN will work.

Inputs are everything the system receives: student records, subject listings, teacher profiles, room availability, and the school calendar. Users also provide input — students enrolling, the registrar approving requests, teachers checking their loads, and admins reviewing reports.

The Process is where the system does its work — automatically generating schedules, importing student lists, tracking document submissions, and managing approvals. The Output is the result: conflict-free schedules, enrollment records, load reports, room usage summaries, and real-time dashboards. ISO 25010 evaluation closes the loop — results inform continuous improvement.

---

### Slide 15 · Scope & Limitations

SEN-GEN covers several specific functions — and intentionally leaves out others.

What is included: digital document checklist, online student registration, student subject enlistment portal, automatic schedule generation, role-based access for six user types, real-time dashboard, automated email notifications, downloadable schedule views, and ISO 25010 evaluation with 45 respondents.

What is not included: other campuses (STI Alaminos only), tuition payment (a separate financial process), AI-based predictions (not enough historical data yet), and results that apply to all schools in general. Each exclusion is deliberate and has a clear justification.

---

## Section 04 — Review of Related Literature

### Slide 16 · Review of Related Literature *(Section Divider)*

Section Four is the Review of Related Literature.

This section presents over 30 published studies that support every major decision in SEN-GEN. The literature is organized around our three objectives: studies that prove the cost of manual enrollment and scheduling, studies that validate each of the six planned features, and studies that give us a benchmark score to aim for in our evaluation.

---

### Slide 17 · Literature Overview

The literature review has three parts, each linked to one objective.

For the first objective: research shows that manual scheduling is slow, error-prone, and costly — matching exactly what we found at STI Alaminos. For the second objective: every feature of SEN-GEN is backed by at least one published study — the scheduling engine, the data import, the dashboard, the notifications, and the security system all have literature support. For the third objective: four comparable systems were rated by their users, scoring between 4.11 and 4.55 out of 5.

SEN-GEN will target a score of at least 4.00 — a conservative goal below every comparable system in the literature.

---

### Slide 18 · Manual vs Algorithmic Scheduling

Research clearly shows how much more efficient automated scheduling is compared to doing it by hand.

Chen et al. in 2021 found that 62% of schools still rely on manual scheduling — and these schools consistently report more errors and lower satisfaction. Bui et al. in 2022 found that switching to automated scheduling reduced the planning cycle from 21 days to just 3 days — an 86% time reduction. Research also shows that manual schedules have an 8 to 12% conflict rate, meaning roughly 1 in every 10 schedule entries has a problem requiring manual correction.

Diallo et al. in 2024 showed that the automated approach SEN-GEN will use — called CSP — can eliminate all hard schedule conflicts entirely. These numbers make the proposed scheduling engine not just useful, but necessary.

---

### Slide 19 · Philippine HEI Evidence

Research specific to the Philippine and Southeast Asian context also supports our approach.

Leite in 2025 studied eight universities in Southeast Asia and found that systems scoring 4.00 or above in user testing had a 78% chance of still being actively used a year later. Gkrimpizi et al. in 2024 found that small-to-medium schools like STI Alaminos are the most affected by the absence of digital enrollment tools. Mansoor et al. in 2022 confirmed that automated data import — one of SEN-GEN's planned features — is one of the highest-impact improvements a school can make.

Martinez and Chen in 2023 found that 84% of systems with real-time slot availability, automated notifications, and 24/7 access score above 4.0 in user testing. SEN-GEN includes all three of these features.

---

### Slide 20 · CSP & Scheduling Engine

Class scheduling is one of the hardest types of problems in computer science. It involves assigning teachers, rooms, and time slots to many class sections all at once, while following many rules simultaneously.

SEN-GEN will use an approach called Constraint Satisfaction Problem solving — CSP. Think of it as a very smart puzzle solver. It knows all the rules: no room can be double-booked, no teacher can teach two classes at the same time, class sizes must fit the room. It automatically finds a schedule that satisfies all of them. Rules that must always be followed are called "hard rules." Rules that are preferred but flexible are called "soft rules," like giving teachers their preferred time slots when possible.

Studies show this works: Diallo et al. achieved 100% hard rule satisfaction, and Bui et al. reduced scheduling time from 21 days to 3.

---

### Slide 21 · ETL, RBAC, Dashboard & Notifications

Each of SEN-GEN's other proposed features is also backed by published research.

The data import feature (ETL) — where the Registrar uploads a spreadsheet to authorize students for enrollment — is supported by Mansoor et al. in 2022, who found it to be one of the highest-impact enrollment improvements. The security system (RBAC) — where each user only sees what their role allows — is validated by Liu et al. in 2017 and Kim and Park in 2022, who showed it significantly reduces security risks.

The dashboard is supported by Leite in 2025, who found administrators use live filtered dashboards 3.4 times more than general reports. The notification system is supported by Martinez and Chen in 2023, who found 41% higher student satisfaction in systems with five or more automated notifications.

---

### Slide 22 · ISO 25010 Benchmarks

To know if SEN-GEN is good enough, we compare it against similar systems already published in research.

Four comparable systems were found. Bellio et al. in 2022 reported 4.52 for teachers and 4.45 for admin staff. Gozali et al. in 2022 reported 4.28 for teachers and 4.11 for admin staff. Diallo et al. in 2024 — who used the same scheduling method as SEN-GEN — reported 4.44 across all user groups. Kim and Park in 2022 reported 4.30 or above for admin users.

All of these are "Very Good" to "Excellent" ratings. SEN-GEN will target at least 4.00 — which is below all of them. This makes our goal realistic while still meaningful. Leite in 2025 showed that systems scoring 4.00 or above are likely to be adopted long-term by their institutions.

---

### Slide 23 · Literature Synthesis & Gap

The over 30 sources reviewed collectively do three things for this study.

First, they prove the problem is real — research numbers match the problems we found at STI Alaminos. Second, they validate every feature SEN-GEN plans to include — there is published evidence for the scheduling engine, the data import, the notification system, the dashboard, and the security system. Third, they give us a clear, grounded performance target — a score of at least 4.00.

One gap the literature also reveals: no study has built a fully integrated enrollment AND scheduling system for a small Filipino private technical-vocational school like STI Alaminos, where commercial enterprise platforms are neither affordable nor suitable. That is exactly what SEN-GEN is proposing to address.

---

## Section 05 — Methodology

### Slide 24 · Methodology *(Section Divider)*

Section Five is the Methodology — our plan for how this research will be done.

This covers the research design, the development approach we will follow, where our data comes from, the tools we will use for analysis, and who will evaluate the system once it is built.

---

### Slide 25 · Research Design

This study uses a Descriptive-Developmental research design — two approaches combined into one.

The descriptive part means we first carefully described what is currently happening at STI Alaminos, without changing anything or running experiments. We did this through interviews, observation, and document review. This gave us a clear, evidence-based picture of the existing problems. This part has already been completed.

The developmental part means we will design, build, and test SEN-GEN as a working software product. These two parts connect naturally: the descriptive findings tell us exactly what to build, and the developmental phase produces the solution. Together they ensure SEN-GEN addresses real institutional problems — not assumed ones.

---

### Slide 26 · Agile Feature-Driven Development

For building SEN-GEN, we will follow Agile Feature-Driven Development — FDD for short.

FDD is a software development method where each major feature of the system is planned, built, and tested separately before moving to the next. This reduces risk because a problem in one feature does not affect the others. It also allows real users from STI Alaminos to review each feature before the next is built — keeping the system aligned with actual institutional needs.

FDD was chosen because SEN-GEN has six distinct features — each with its own requirements, users, and validation criteria — which is exactly the structure FDD is designed for. It is more suitable here than Scrum or Waterfall for this specific project.

---

### Slide 27 · Agile FDD — Process Diagram

FDD has five phases. The first three happen once at the start. The last two repeat for each feature.

Phase 1 — Build the overall plan: Gather all institutional information, map the data, and decide the technical structure. Phase 2 — List the features: Identify everything the system needs to do and group them into logical sets. Phase 3 — Plan the build order: Decide which features to build first based on dependencies — the security system and database must come first because all other features depend on them.

Phase 4 — Design each feature: Before building anything, create detailed plans reviewed by actual stakeholders. Phase 5 — Build each feature: Code it, test it, get feedback. Then repeat Phases 4 and 5 for the next feature until all six are built and approved.

---

### Slide 28 · FDD Phases 1–3

Let me detail what each of the three planning phases will produce for SEN-GEN.

Phase 1 builds on the interviews and observations already completed. It will produce a data map — called an Entity-Relationship Diagram — showing all information the system will store and how it connects, plus a blueprint for the three-tier technical structure. Phase 2 organizes the six features into three groups: Enrollment Management (data import, document checklist, student portal), Scheduling Management (automatic engine, schedule views, faculty report), and Administrative Management (security, dashboard, notifications, audit logs).

Phase 3 sets the build order. Infrastructure and security come first. The scheduling engine comes second — it is the most complex. The student portal comes third. Dashboard, notifications, and reports come last.

---

### Slide 29 · FDD Phases 4–5

For each of the six features, we will follow the same two-step cycle: design first, then build.

In the Design phase, before writing any code, we will produce: updated data maps, a full list of all system functions and what data they expect and return, diagrams showing how the screens will be structured, and side-by-side comparisons of the current manual process versus the proposed digital version. These will all be reviewed and approved by STI Alaminos stakeholders before building begins.

In the Build phase, we code the feature following those approved designs, write tests to verify correctness, and conduct User Acceptance Testing with real STI Alaminos staff and students. After all six features are approved, the ISO 25010 questionnaire will be administered to 45 respondents and the results computed.

---

### Slide 30 · Data Collection

The data for this study comes from three types of sources.

Primary sources are the people at STI Alaminos. We conducted structured interviews with the Registrar, Academic Head, Admissions Officer, faculty members, and students. We also observed live enrollment and scheduling sessions to see how things actually work — not just how people say they work.

Secondary sources are the institution's own documents: paper enrollment forms, faculty load spreadsheets, manual scheduling files, and room assignment records. These helped us understand what data the system needs to manage. Tertiary sources are published academic studies and technical documentation — the research that validates our design choices and the ISO 25010 standards we will use for evaluation.

---

### Slide 31 · Tools for Data Analysis

Six analysis tools will be used in this study, each with a specific purpose.

Use Case Diagrams map out what each of the six user roles can do inside SEN-GEN. Flowcharts compare the current manual process against the proposed digital process — side by side. The Entity-Relationship Diagram defines all the data the system will store and how different pieces of information connect to each other. The Database Schema translates that diagram into the actual technical structure of the database.

For evaluation, we use a Likert Scale — a five-point rating where 5 is "Strongly Agree" and 1 is "Strongly Disagree." Weighted Mean calculates the average score per quality dimension. A reliability check called Cronbach's Alpha must score at least 0.70 before the full questionnaire is distributed to all 45 respondents.

---

### Slide 32 · Respondents & Sampling

The system will be evaluated by 45 people from STI Alaminos after they have actually used it.

This study uses Purposive Sampling — and here is why that is the correct choice.

Purposive Sampling means we intentionally select participants based on specific criteria relevant to the study. In our case, the criteria is straightforward: participants must be people who actually use SEN-GEN in their real role — students enrolling, faculty managing loads, and staff processing requests.

We chose this over Random Sampling for three reasons. First, SEN-GEN is a context-specific system built for one institution — STI Alaminos — so random selection from a general population would not produce meaningful feedback. Second, this is developmental research, meaning the goal is to evaluate whether the system works for its intended users, not to produce findings generalizable to all schools. Third, ISO/IEC 25010, the international standard we are using to evaluate the system, requires that quality assessments come from people who actually interact with the system — not from people who have no stake in it.

In short: random sampling would give us noise. Purposive sampling gives us signal from the right people.

The 45 respondents are: 30 students from IT and allied programs, 10 faculty members, and 5 administrative staff (Registrar, Academic Head, Admissions Officer, and School Admin). Before full distribution, the questionnaire will be reviewed by 3 IT experts, tested with 5 pilot users, and verified to meet the 0.70 reliability threshold.

---

## Section 06 — System Features & Architecture

### Slide 33 · System Features & Architecture *(Section Divider)*

Section Six covers the proposed system features and architecture.

This is the technical heart of the presentation — what SEN-GEN will actually look like and how it will work. I will describe the overall structure, the technologies chosen and why, and each of the six proposed features with the specific problem each one addresses.

---

### Slide 34 · Three-Tier Architecture

SEN-GEN will be built on a three-tier architecture — a standard approach that separates the system into three layers, each with a clear responsibility.

Tier 1 is what users see and interact with — the web interface. It will be different for each of the six user roles, so each person only sees what is relevant to their job. This reduces confusion and improves usability. Tier 2 is where all the work happens behind the scenes — the automatic scheduling engine, the approval workflows, the email notifications, and all the business logic. Tier 3 is the database — where all data is securely stored, with built-in rules that prevent duplicate or invalid records, even when many users are using the system at the same time.

This separation makes the system easier to maintain, more secure, and simpler to update.

---

### Slide 35 · Technology Stack

Each technology in SEN-GEN's proposed stack was chosen for a specific reason.

React JS — for the user interface. It allows us to build six different role-based views efficiently, with fast performance even during busy enrollment periods when many students are using the system at once. ASP.NET Core Web API — for the backend logic. It is secure, fast, and well-tested in institutional settings. Entity Framework Core — for managing the database structure consistently across development and production. Microsoft SQL Server — for storing data. It enforces data integrity and handles many simultaneous requests without conflicts.

IIS — the web server. It provides encrypted connections, protecting all data in transit in compliance with the Data Privacy Act of 2012. React JS and ASP.NET Core are also cross-platform, meaning the system will work on different devices and browsers.

---

### Slide 36 · Feature 1: ETL Import

The first proposed feature is the ETL Import — which stands for Extract, Transform, Load.

Currently, there is no digital way for the Registrar to authorize which students are eligible to enroll for a given semester. This feature solves that. The Registrar uploads a spreadsheet containing the list of eligible students. The system checks each row: are all required fields filled in? Are there duplicates? Invalid entries are flagged and returned with specific error details for correction. Valid entries are automatically loaded into the database, and those students gain access to the enrollment portal for that semester.

This replaces a manual, error-prone, per-student process. Research by Mansoor et al. in 2022 found that automated spreadsheet import is one of the highest-impact improvements a school can make to its enrollment process.

---

### Slide 37 · Feature 2: Scheduling Engine

The second proposed feature is the CSP-Based Generative Scheduling Engine — the most complex part of SEN-GEN.

The Academic Head starts the process with one click. The system then automatically builds a complete class schedule for the semester. It follows strict rules: no two classes can share the same room at the same time, no teacher can teach two sections simultaneously, rooms must fit the class size, and teacher workloads must stay within STI's policy limits. These are the hard rules — they cannot be broken. There are also soft rules, like assigning teachers to their preferred time slots when possible.

If the automated result needs adjustment, the Academic Head can manually override any assignment, and the system will immediately alert them if the change creates a conflict. Press the View CSP Engine Detail button for the full technical breakdown.

---

### Slide 38 · CSP Engine — Technical Detail `[HIDDEN]`

The scheduling engine uses Constraint Satisfaction Problem solving — CSP. Think of it as a smart puzzle solver that works through three main steps. This function may be called as AI-Assisted Scheduling using Constraint Satisfaction Problem or CSP-Based Generative Scheduling Engine.

First — Assign: The engine tries to assign a time slot, room, and teacher to each class section. Second — Propagate: Whenever it makes an assignment, it immediately checks whether that choice eliminates options for other sections. If it does, it updates the remaining possibilities across the whole schedule. This step — called constraint propagation — dramatically reduces the number of options that need to be checked. Third — Backtrack: When the engine reaches a dead end — no valid assignment exists — it backs up and tries a different option.

To make this faster, the engine tackles the hardest scheduling decisions first (sections with the fewest valid options), and when choosing between options, it picks the one that leaves the most flexibility for the rest. Diallo et al. in 2024 showed this achieves 100% satisfaction of all hard rules, while Bui et al. in 2022 reduced scheduling time from 21 days to 3. Zhou in 2025 found that about 12% of assignments still need manual override in real-world use — which is exactly why SEN-GEN includes an override feature.

---

### Slide 39 · Feature 3: Student Enrollment Portal

The third proposed feature is the Student Enrollment Portal — which replaces the required in-person registrar visit.

Currently, students must physically go to the registrar to pick their subjects. This feature replaces that with a 24/7 online portal accessible from any device. Only students who were authorized through the ETL import can access the portal — so eligibility is already verified automatically. Students can browse all available class sections, see real-time slot availability and remaining capacity, and submit requests for their preferred sections.

Each request goes to the Registrar for approval. Once approved, the student receives an automatic email confirmation. The system enforces a maximum of 40 students per section — at both the software and database level simultaneously — to prevent two students from accidentally getting the same last slot. This directly helps students who cannot easily visit campus.

---

### Slide 40 · Feature 4: Dashboard

The fourth proposed feature is the Semester-Aware Administrative Dashboard.

This gives the School Admin and Academic Head a real-time view of everything happening in the current semester. The key design principle is that all data automatically filters to the active enrollment period — research by Leite in 2025 shows this is what administrators actually prefer to see.

The dashboard will show live enrollment counts per subject and section, room usage percentages, and a visual comparison of each teacher's assigned workload versus STI's policy limits. If any teacher is approaching or exceeding the limit, the system flags it automatically — replacing the manual cross-referencing currently required. All reports can be exported for TESDA documentation, and a full audit trail records every action taken in the system.

---

### Slide 41 · Features 5 & 6: Notifications + RBAC

Feature Five is the Automated Email Notification System.

Instead of students learning about their enrollment status by word of mouth or by visiting the school repeatedly, the system will send automatic emails at six key moments: documents submitted, pre-enrollment confirmed, slot request received, request approved or declined, schedule published, and faculty assignment confirmed. Research by Martinez and Chen in 2023 found that systems with five or more automated notifications have 41% higher student satisfaction.

Feature Six is the Role-Based Access Control — the security system. Each of the six user roles has their own login and their own set of allowed actions. Every request to the system is verified before anything happens. All data is transmitted through an encrypted connection, ensuring full compliance with the Data Privacy Act of 2012.

---

### Slide 42 · Additional System Features

Beyond the six core modules, SEN-GEN is designed to include several additional capabilities.

A digital document checklist for the Admissions Officer — replacing paper-based verification that currently causes missing documents to go undetected. A digital SIS registration form — with required terms acceptance, proper name formatting, and input validation, fixing all the problems that made apply.sti.edu unusable. Downloadable schedule grid views for faculty, classroom, and class section. An automated room utilization report — so the Registrar no longer tallies room usage manually. Automatic notifications when schedules change — so no one relies on word of mouth.

And an automated faculty loading report — giving the Academic Head a documented, exportable record of each teacher's workload every semester, something the institution currently has no tool to produce.

---

## Section 07 — Evaluation Framework

### Slide 43 · Evaluation Framework *(Section Divider)*

Section Seven is the Evaluation Framework.

This explains how we will measure whether SEN-GEN is actually good — not just functional, but truly usable and reliable for all six user groups. We use the ISO 25010 international standard for measuring software quality, which ensures our evaluation is credible, comparable to published research, and suitable for institutional quality audits.

---

### Slide 44 · ISO 25010 — Six Dimensions

ISO 25010 defines eight qualities of good software. We will measure SEN-GEN on six of them.

Functional Suitability — Does it do what it is supposed to do, correctly? This is the most critical dimension. A schedule with errors defeats the entire purpose. Performance Efficiency — Does it respond fast even when many users are online at the same time? Usability — Is it easy to use without extensive training? Reliability — Does it stay working during the busiest enrollment periods?

Maintainability — Can it be updated when STI Alaminos's policies change? Portability — Does it work on different devices and browsers? Research by Rojas in 2025 found that Functional Suitability and Usability are consistently the most important dimensions for school system users — which directly shapes how SEN-GEN will be designed.

---

### Slide 45 · Evaluation Instrument

The evaluation tool is a questionnaire adapted from ISO 25010 and validated following the method of Suryadi and Sulistiyani in 2022.

Each question is a statement like "The system responds quickly during peak enrollment" — users rate it from 1 (Strongly Disagree) to 5 (Strongly Agree). There are questions covering each of the six quality dimensions.

Before giving the questionnaire to all 45 respondents, it goes through a four-step validation process: three IT experts review the questions, a pilot test is run with five people, a reliability check must score 0.70 or above, and only then is the full questionnaire distributed. Results are interpreted as: 4.50–5.00 Excellent, 3.50–4.49 Very Good, 2.50–3.49 Good, and lower scores as Fair or Poor.

---

### Slide 46 · Usability Benchmarks

SEN-GEN will aim for a weighted mean score of at least 4.00 — which falls in the "Very Good" range.

This target is grounded in what similar systems have actually achieved in published research. Bellio et al. in 2022 reported 4.52 for teachers and 4.45 for admin staff. Gozali et al. in 2022 reported 4.28 and 4.11. Diallo et al. in 2024 — who used the same scheduling method as SEN-GEN — reported 4.44 across all user groups. Kim and Park in 2022 reported 4.30 or above. All of these are "Very Good" to "Excellent."

SEN-GEN's target of 4.00 is deliberately lower than all of them — making it achievable while still meaningful. And Leite in 2025 found that systems scoring 4.00 or above have a 78% chance of still being actively used by the institution a year later, directly linking our score target to long-term adoption.

---

## Section 08 — Significance & Summary

### Slide 47 · Significance & Summary *(Section Divider)*

The final section covers why SEN-GEN matters — beyond the technical solution itself.

SEN-GEN is aligned with national laws, international goals, and STI's own institutional direction. This section shows that the proposed system is not just useful for STI Alaminos — it is the right thing to build, for the right reasons.

---

### Slide 48 · Regulatory & Policy Alignment

SEN-GEN's proposed development is aligned with four regulatory and policy frameworks.

STI's own institutional direction: STI as a network promotes digital platforms for academic management. SEN-GEN extends that to the Alaminos campus. Republic Act 10844: This law mandates the use of technology to improve institutional service delivery — SEN-GEN directly digitalizes enrollment and scheduling. Republic Act 10173 — the Data Privacy Act: Governs secure handling of student and faculty data. SEN-GEN will implement encrypted connections, strict role-based access control, and full audit logs for compliance.

UN SDG 4 — Quality Education: SEN-GEN's 24/7 portal removes access barriers for students who cannot easily visit campus, supporting inclusive education. UN SDG 9 — Innovation and Infrastructure: SEN-GEN replaces disconnected manual processes with a reliable integrated digital platform.

---

### Slide 49 · Significance & Beneficiaries

Every stakeholder at STI Alaminos stands to benefit from SEN-GEN.

STI Alaminos as an institution gains a digital platform that supports TESDA quality audits. The School Admin gets real-time data instead of waiting for manually compiled reports. The Registrar gets automated tools that reduce the flood of paper-based manual transactions. The Academic Head gets an automatic scheduler and a dashboard that flags workload violations before they become a problem. The Admissions Officer gets a digital document checklist that prevents incomplete student records.

Teachers get a system that monitors their workloads and delivers schedule information digitally. Students get 24/7 online enrollment — no more required in-person visits just to pick their subjects. Future researchers also benefit: SEN-GEN will serve as a documented reference for building similar systems in other small Philippine private schools.

---

### Slide 50 · Research Summary

To summarize everything presented today.

SEN-GEN is proposed in direct response to eight documented operational gaps at STI Alaminos. The Descriptive phase — already completed through interviews, observation, and document analysis — confirmed that the institution has no integrated digital enrollment platform, no automated scheduling tool, and no systematic faculty workload monitor. The Developmental phase will produce SEN-GEN: a proposed web-based system with six functional modules, built using Agile Feature-Driven Development on a three-tier architecture.

The Evaluation phase will use ISO 25010 with 45 respondents, targeting a score of at least 4.00 — a conservative but meaningful threshold linked by Leite in 2025 to a 78% chance of long-term institutional adoption. SEN-GEN is aligned with STI's direction, RA 10844, RA 10173, SDG 4, and SDG 9. It is not just a software project — it is a proposed instrument of academic quality, institutional efficiency, and student-centered service.

---

### Slide 51 · Thank You *(Closing)*

Thank you, distinguished panel members, for your time and attention.

SEN-GEN is a research proposal grounded in real institutional problems, supported by over 30 published studies, and designed to deliver a practical and lasting solution for STI Alaminos. Every feature traces back to a documented need. Every design choice is backed by evidence. Every evaluation target is anchored in real-world data from comparable systems.

I am fully ready for your questions — on the scheduling engine, the methodology, the evaluation design, the technology choices, the scope boundaries, or any other aspect of the study. Press E to view the interview evidence from the STI Alaminos stakeholder interviews.

---

### Slide 52 · Interview Evidence `[HIDDEN]`

These photos document the structured interviews we conducted with STI Alaminos staff and students during the Descriptive phase of this research.

We interviewed the Admissions Officer, the Registrar, the Academic Head, faculty members, and students. Each interview used specific questions developed from the research objectives. The interviews gave us firsthand accounts — not just what we read about, but what the actual people experiencing these problems told us directly.

The Admissions Officer described why apply.sti.edu was abandoned. The Registrar described the manual enlistment workload. The Academic Head described the scheduling cycle. Teachers described how they receive and track their assignments. Students described the barriers they face just to pick their subjects. These testimonies are the empirical foundation of SEN-GEN's proposed design. Press Escape to return to the presentation.

---

*52 slides total · 2 hidden (Slide 38: CSP Technical Detail, Slide 52: Interview Evidence)*
