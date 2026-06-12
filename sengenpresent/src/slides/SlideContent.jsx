// ─────────────────────────────────────────────────────────────
//  SLIDE CONTENT COMPONENTS
// ─────────────────────────────────────────────────────────────
import {
  Building2, MapPin, BookOpen, Landmark, ClipboardList, Calendar, Layers, UserPlus, GraduationCap,
  FileImage,
} from 'lucide-react'
import proctorLogo  from '../assets/proctor (4).png'
import kennethPhoto from '../assets/kenneth pogi.png'

// ── S01 TITLE ────────────────────────────────────────────────
export function S01_Title() {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', padding:'40px', textAlign:'center', position:'relative', zIndex:1 }}>
      <div className="title-badge anim-scale-in">
        <img src={proctorLogo} alt="SEN-GEN Logo" style={{ width:'100%', height:'100%', objectFit:'contain', borderRadius:16, padding:8 }} />
      </div>

      <div className="anim-fade-up delay-1">
        <div style={{ fontSize:22, fontWeight:700, letterSpacing:2.5, color:'rgba(228,183,149,0.8)', marginBottom:14, textTransform:'uppercase' }}>
          Master in Information Technology · Thesis Defense
        </div>
        <h1 style={{ fontSize:80, fontWeight:800, color:'#fff', lineHeight:1.1, marginBottom:10, letterSpacing:-2 }}>
          SEN-GEN
        </h1>
        <p style={{ fontSize:38, fontWeight:600, background:'linear-gradient(135deg, #e4b795, #699acd)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', marginBottom:4  }}>
          Student Enrollment with
        </p>
        <p style={{ fontSize:38, fontWeight:600, background:'linear-gradient(135deg, #e4b795, #699acd)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', marginBottom:4 }}>
          Generative Scheduling System
        </p>
        <p style={{ fontSize:38, fontWeight:600, background:'linear-gradient(135deg, #e4b795, #699acd)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', marginBottom:4  }}>for STI Alaminos</p>
      </div>

      <div className="anim-fade-up delay-2" style={{ borderTop:'1px solid rgba(255,255,255,0.12)', paddingTop:24, marginTop:10, width:'100%', maxWidth:560 }}>
        <p style={{ fontSize:20, color:'rgba(255,255,255,0.45)', marginBottom:6 }}>Researcher / Developer</p>
        <p style={{ fontSize:26, fontWeight:600, color:'rgba(255,255,255,0.85)' }}>Kenneth Rey Rallustian Tablang</p>
        <p style={{ fontSize:20, color:'rgba(255,255,255,0.4)', marginTop:6 }}>
          Adviser: Rochelle Sotelo Lanto, MIT &nbsp;·&nbsp; June 2026
        </p>
      </div>
    </div>
  )
}

// ── S02 OUTLINE ──────────────────────────────────────────────
export function S02_Outline() {
  const secs = [
    { n:'01', t:'Opening & Context' },
    { n:'02', t:'Background of the Study' },
    { n:'03', t:'Objectives & Framework' },
    { n:'04', t:'Review of Related Literature' },
    { n:'05', t:'Methodology' },
    { n:'06', t:'System Features & Architecture' },
    { n:'07', t:'Evaluation Framework' },
    { n:'08', t:'Significance & Summary' },
  ]
  return (
    <div className="slide-inner">
      <div className="slide-heading anim-fade-up">Presentation Outline</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Roadmap</h2>
      <div className="grid-2 slide-body anim-fade-up delay-2 card-stagger" style={{ gap:10, overflow:'hidden' }}>
        {secs.map((s) => (
          <div key={s.n} className="card" style={{ padding:'14px 18px', display:'flex', alignItems:'center', gap:14 }}>
            <div style={{ width:48, height:48, borderRadius:10, background:'var(--brand-gradient)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:800, color:'#fff', flexShrink:0 }}>{s.n}</div>
            <div style={{ fontSize:24, fontWeight:600, color:'var(--text-primary)', lineHeight:1.3 }}>{s.t}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S03 RESEARCHER ───────────────────────────────────────────
export function S03_Researcher() {
  const details = [
    { label:'Date of Birth',  val:'June 12, 2001' },
    { label:'Age',            val:'25 yrs old' },
    { label:'Address',        val:'Brgy. Bolaney, Alaminos City, Pangasinan' },
    { label:"Bachelor's",     val:'Pangasinan State University — Alaminos City Campus (Batch 2023)' },
    { label:'Teaching Exp.',  val:'2.5 years' },
    { label:'Web Content Mgmt. Exp. (Overseas)', val:'1 year' },
    { label:'Dev. Exp. (Freelance)', val:'3 years' },
    { label:'Stack',          val:'React JS · ASP.NET Core · SQL · EF Core' },
  ]
  return (
    <div className="slide-inner">
      <div className="slide-heading anim-fade-up">Section 01 — Opening</div>
      <h2 className="slide-title-h anim-fade-up delay-1">About the Researcher/Developer</h2>
      <div className="slide-body anim-fade-up delay-2" style={{ display:'flex', gap:24 }}>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10, flexShrink:0 }}>
          <img
            src={kennethPhoto}
            alt="Kenneth Rey Rallustian Tablang"
            style={{ width:160, height:160, borderRadius:24, objectFit:'cover', boxShadow:'var(--shadow-lg)', border:'3px solid var(--g2)' }}
          />
          <div style={{ fontSize:20, fontWeight:600, color:'var(--text-muted)', textAlign:'center', lineHeight:1.4 }}>Kenneth Rey<br/>Rallustian Tablang</div>
          <div style={{ fontSize:18, color:'var(--text-muted)', textAlign:'center' }}>Researcher / Developer</div>
        </div>
        <div style={{ flex:1, display:'flex', flexDirection:'column', gap:0 }}>
          {details.map((d,i) => (
            <div key={i} style={{ display:'flex', gap:16, padding:'12px 0', borderBottom:'1px solid var(--border)' }}>
              <div style={{ fontSize:20, fontWeight:600, color:'var(--text-muted)', width:120, flexShrink:0 }}>{d.label}</div>
              <div style={{ fontSize:22, color:'var(--text-secondary)', lineHeight:1.5 }}>{d.val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── S04 INSTITUTIONAL CONTEXT ────────────────────────────────
export function S04_Context() {
  const facts = [
    { Icon: Building2,    label:'Type',               val:'Private Technical-Vocational Institution (TESDA Education Center)' },
    { Icon: MapPin,       label:'Location',            val:'Alaminos City, Pangasinan, Philippines' },
    { Icon: BookOpen,     label:'Programs',            val:'Information Technology and allied programs' },
    { Icon: Landmark,     label:'Regulatory Bodies',   val:'TESDA (primary accreditor) — but still conforms to CHED standards since most STI campuses are CHED-accredited' },
    { Icon: ClipboardList,label:'Enrollment Method',   val:'Manual SIS paper forms & spreadsheets; apply.sti.edu exists but not actively used — Admission Officer prefers not to use it due to usability problems' },
    { Icon: Calendar,     label:'Scheduling Method',   val:'Spreadsheet-based, manually built; STI Policy governs faculty loading without accounting for TESDA subject loading rules' },
  ]
  return (
    <div className="slide-inner">
      <div className="slide-heading anim-fade-up">Section 01 — Opening</div>
      <h2 className="slide-title-h anim-fade-up delay-1">STI Alaminos — Study Locale</h2>
      <div className="quote-box anim-fade-up delay-2" style={{ flexShrink:0 }}>
        A TESDA-accredited Education Center serving IT and allied programs in Pangasinan — currently operating with fragmented manual enrollment processes (Document Submission, Registration, Enlistment, Tuition Payment) and no integrated digital platform to support them.
      </div>
      <div className="grid-2 slide-body anim-fade-up delay-3 card-stagger" style={{ gap:8, overflow:'auto' }}>
        {facts.map((f,i) => (
          <div key={i} className="card" style={{ padding:'10px 14px', display:'flex', gap:12, alignItems:'flex-start' }}>
            <f.Icon size={28} strokeWidth={1.5} style={{ flexShrink:0, color:'var(--g2)', marginTop:2 }} />
            <div>
              <div style={{ fontSize:16, fontWeight:700, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:0.5, marginBottom:3 }}>{f.label}</div>
              <div style={{ fontSize:19, color:'var(--text-secondary)', lineHeight:1.4 }}>{f.val}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S06 CORE PROBLEM ─────────────────────────────────────────
export function S06_CoreProblem() {
  const problems = [
    { n:1, head:'No Integrated Digital Enrollment Platform',               color:'var(--chip-red-t)',    bg:'var(--chip-red)',    body:'All four enrollment steps — Document Submission, Registration, Enlistment, and Tuition Payment — are handled manually with paper forms and spreadsheets. No unified digital flow exists.' },
    { n:2, head:'Problematic Online Registration Portal (apply.sti.edu)',  color:'var(--chip-amber-t)',  bg:'var(--chip-amber)',  body:'Portal exists but Admission Officer opts not to use it: no terms & conditions on submission, student names forced to lowercase, no document checklist, no upload capability, no confirmation email, no save-progress feature, and no enrollment term selection.' },
    { n:3, head:'No Document Submission Checklist',                        color:'var(--chip-orange-t)', bg:'var(--chip-orange)', body:'Admission Officer manually verifies required papers (Form 137, birth certificate, good moral certificate, etc.) with no digital checklist — missing documents discovered late, incomplete records risk.' },
    { n:4, head:'Faculty Load Policy Conflict (TESDA vs STI Policy)',      color:'var(--chip-green-t)',  bg:'var(--chip-green)',  body:'STI Alaminos relies on STI corporate policy for faculty loading but does not factor in TESDA subject loading rules. No automated enforcement of either standard — compliance risk on both fronts.' },
    { n:5, head:'Manual Class Schedule Construction',                      color:'var(--chip-purple-t)', bg:'var(--chip-purple)', body:'Spreadsheet-based scheduling with no conflict detection. Double-bookings surface only after student distribution. 18–22 working days per semester scheduling cycle.' },
    { n:6, head:'No Automated Faculty Loading Report',                     color:'var(--chip-teal-t)',   bg:'var(--chip-teal)',   body:'Consolidated faculty loads tallied manually. No automated generation — undetected overloading, TESDA and STI Policy non-compliance risk.' },
    { n:7, head:'No Grid Schedule Views',                                  color:'var(--chip-navy-t)',   bg:'var(--chip-navy)',   body:'No digital grid for Faculty View, Classroom View, or Class Section View. Coordinators read raw spreadsheet rows — no visual conflict detection.' },
    { n:8, head:'Compounding Data Silos & No Notifications',               color:'var(--chip-red-t)',    bg:'var(--chip-red)',    body:'Enrollment, scheduling, faculty load, and room data exist as disconnected files. No audit trail, no automated schedule change notifications — stakeholders rely on word-of-mouth.' },
  ]
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 02 — Background</div>
      <h2 className="slide-title-h anim-fade-up delay-1" style={{ fontSize:44 }}>The Core Problem — 8 Operational Gaps</h2>
      <div className="slide-body anim-fade-up delay-2 card-stagger" style={{ overflow:'auto', display:'flex', flexDirection:'column', gap:7 }}>
        {problems.map((p,i) => (
          <div key={i} className="problem-card" style={{ borderLeftColor: p.color, borderLeftWidth:3 }}>
            <div className="prob-num" style={{ background: p.bg, color: p.color, width:30, height:30, fontSize:16 }}>{p.n}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:19, fontWeight:600, color:'var(--text-primary)', marginBottom:2 }}>{p.head}</div>
              <div style={{ fontSize:17, color:'var(--text-secondary)', lineHeight:1.45 }}>{p.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S07 PH HEI CONTEXT ──────────────────────────────────────
export function S07_PhHEI() {
  const unis = [
    { name:'Ateneo de Manila University',           sys:'AISIS',               yr:'2005',    feat:'Browse sections, enlist, manage load independently online. Multiple revamps since launch. (The Guidon, 2022; Ateneo, 2023)' },
    { name:'University of the Philippines Diliman', sys:'CRS',                 yr:'Ongoing', feat:'Pre-enlistment mid-semester; batched slot allocation by academic standing; Form 5A. (UP, 2024)' },
    { name:'De La Salle University',                sys:'Animo.sys',           yr:'2013',    feat:'Online enlistment cart; real-time capacity management; separate from tuition assessment. (DLSU, 2022)' },
    { name:'Far Eastern University',                sys:'Student Central NEO', yr:'Recent',   feat:'Online pre-enlistment; real-time fee updates based on chosen subjects; recently upgraded. (FEU Advocate, 2025)' },
    { name:'University of Santo Tomas',             sys:'myUSTe Portal',       yr:'Active',  feat:'All-in-one: schedule view, academic records, subject load management, enlistment. (UST, 2023)' },
  ]
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 02 — Background</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Philippine HEI Context</h2>
      <div className="quote-box anim-fade-up delay-2" style={{ flexShrink:0 }}>
        Leading PH universities have operated mature digital enlistment for over a decade — a standard STI Alaminos has yet to achieve.
      </div>
      <div className="slide-body anim-fade-up delay-3 card-stagger" style={{ overflow:'auto', display:'flex', flexDirection:'column', gap:7 }}>
        {unis.map((u,i) => (
          <div key={i} className="card" style={{ padding:'12px 16px', display:'flex', alignItems:'center', gap:14 }}>
            <div style={{ flex:'0 0 220px' }}>
              <div style={{ fontSize:22, fontWeight:700, color:'var(--text-primary)', lineHeight:1.3 }}>{u.name}</div>
              <div style={{ fontSize:19, color:'var(--text-muted)', marginTop:2 }}>{u.sys} · {u.yr}</div>
            </div>
            <div style={{ width:1, alignSelf:'stretch', background:'var(--border)', flexShrink:0 }} />
            <div style={{ fontSize:21, color:'var(--text-secondary)', lineHeight:1.5, flex:1 }}>{u.feat}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S08 ENROLLMENT PROCESS FLOW ──────────────────────────────
export function S08_WalkIn() {
  const steps = [
    { n:1, act:'Document Submission — Student compiles and submits required papers: Form 137, birth certificate, good moral certificate, and other enrollment requirements to the Admission Officer', issue:'Admission Officer manually verifies each document against no standardized digital checklist — missing papers often discovered late, no tracking record' },
    { n:2, act:'Registration — Student fills out the Student Information Sheet (SIS) paper form with personal and academic details to be entered into the school database', issue:'apply.sti.edu digital alternative exists but abandoned: no T&C acceptance, forced lowercase inputs, no document upload, no status tracking, no enrollment term specified' },
    { n:3, act:'Enlistment — Student visits registrar in person to choose specific classes, sections, and schedules for the upcoming term', issue:'No online self-service — requires physical campus visit; registrar manually checks spreadsheet for slot availability, creating bottlenecks during peak periods' },
    { n:4, act:'Tuition Payment — Student proceeds to cashier to pay required fees or down payment to finalize and secure their enrollment slot for the term', issue:'Payment is disconnected from the enrollment system — no automated confirmation of finalized enrollment; slot security is manually tracked' },
  ]
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 02 — Background</div>
      <h2 className="slide-title-h anim-fade-up delay-1" style={{ fontSize:44 }}>Enrollment Process — 4 Steps (As-Is)</h2>
      <div className="slide-body anim-fade-up delay-2 card-stagger" style={{ overflow:'auto', display:'flex', flexDirection:'column', gap:7 }}>
        {steps.map((s,i) => (
          <div key={i} className="glass-row" style={{ display:'flex', gap:12, padding:'10px 12px', alignItems:'flex-start' }}>
            <div style={{ width:28, height:28, borderRadius:8, background:'var(--brand-gradient)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, fontWeight:700, color:'#fff', flexShrink:0, marginTop:2 }}>{s.n}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:19, fontWeight:500, color:'var(--text-primary)', lineHeight:1.4 }}>{s.act}</div>
            </div>
            <div style={{ fontSize:16, color:'var(--chip-red-t)', background:'var(--chip-red)', borderRadius:6, padding:'4px 9px', lineHeight:1.4, maxWidth:260, textAlign:'right', flexShrink:0 }}>⚠ {s.issue}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S09 MANUAL SCHEDULING ────────────────────────────────────
export function S09_ManualSched() {
  const steps = [
    { n:1, act:'Coordinator opens spreadsheet, checks room availability row by row',      issue:'No automation — entirely manual cross-referencing' },
    { n:2, act:'Emails sent to faculty for preferred time slots; replies arrive unsynchronized', issue:'No standardized preference system; informal coordination' },
    { n:3, act:'Draft schedule assembled manually and shared for review',                issue:'18–22 working days avg. scheduling cycle (Chen et al., 2021)' },
    { n:4, act:'Room double-booking discovered → revise. Faculty overload found → revise again', issue:'8–12% conflict density in manual schedules (Veenstra & Vis, 2023)' },
    { n:5, act:'Revisions communicated to all affected parties across disconnected files', issue:'Each conflict round: new notifications, calls, file corrections' },
    { n:6, act:'Workable but rarely optimal schedule finally published',                 issue:'No TESDA load compliance guarantee; no real-time conflict detection' },
  ]
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 02 — Background</div>
      <h2 className="slide-title-h anim-fade-up delay-1" style={{ fontSize:44 }}>Manual Schedule Construction (As-Is)</h2>
      <div className="slide-body anim-fade-up delay-2 card-stagger" style={{ overflow:'auto', display:'flex', flexDirection:'column', gap:7 }}>
        {steps.map((s,i) => (
          <div key={i} className="glass-row" style={{ display:'flex', gap:14, padding:'11px 14px', alignItems:'flex-start' }}>
            <div style={{ width:32, height:32, borderRadius:8, background:'linear-gradient(135deg,#e4b795,#d97706)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, fontWeight:700, color:'#fff', flexShrink:0, marginTop:2 }}>{s.n}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:22, fontWeight:500, color:'var(--text-primary)', lineHeight:1.4 }}>{s.act}</div>
            </div>
            <div style={{ fontSize:19, color:'var(--chip-amber-t)', background:'var(--chip-amber)', borderRadius:6, padding:'4px 10px', lineHeight:1.4, maxWidth:280, textAlign:'right', flexShrink:0 }}>⚠ {s.issue}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S10 STAKEHOLDER IMPACT ───────────────────────────────────
export function S10_Stakeholder() {
  const roles = [
    { Icon: Building2,    role:'School Admin',      impact:'Cannot access real-time data — relies on outdated manually compiled reports, blocking informed decisions.' },
    { Icon: Layers,       role:'Academic Head',     impact:'Must manually cross-reference curriculum, faculty preferences, and room availability every semester.' },
    { Icon: ClipboardList,role:'Registrar',         impact:'Processes every enlistment request manually — receiving forms, verifying capacities, recording approvals, updating counts.' },
    { Icon: UserPlus,     role:'Admission Officer', impact:'Manually verifies enrollment requirements (Form 137, birth cert, good moral cert) against no digital checklist. Uses spreadsheets and paper forms for student registration — no pre-authorization workflow or document tracking system.' },
    { Icon: GraduationCap,role:'Faculty Members',   impact:'No digital schedule view, no system-enforced load compliance monitoring.' },
    { Icon: BookOpen,     role:'Students',          impact:'Cannot enlist without in-person visit. Students with jobs or constraints face recurring structural disadvantage.', highlight:true },
  ]
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 02 — Background</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Stakeholder Impact Analysis</h2>
      <div className="grid-2 slide-body anim-fade-up delay-2 card-stagger" style={{ gap:8, overflow:'auto' }}>
        {roles.map((r,i) => (
          <div key={i} className="role-card" style={{ border: r.highlight ? '1px solid var(--chip-red-t)' : '1px solid var(--border)' }}>
            <div style={{ display:'flex', gap:10, alignItems:'center', marginBottom:6 }}>
              <r.Icon size={26} strokeWidth={1.5} style={{ color: r.highlight ? 'var(--chip-red-t)' : 'var(--g2)', flexShrink:0 }} />
              <div style={{ fontSize:21, fontWeight:700, color:'var(--text-primary)' }}>{r.role}</div>
            </div>
            <div style={{ fontSize:18, color:'var(--text-secondary)', lineHeight:1.5 }}>{r.impact}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S11 CONSEQUENCES ─────────────────────────────────────────
export function S11_Consequences() {
  const cols = [
    { label:'Short-Term',  color:'var(--chip-amber-t)', bg:'var(--chip-amber)', items:['Hidden costs from scheduling conflicts consuming staff time each cycle','Enlistment queues degrade student experience','TESDA load guideline violations — compliance risk','Registrar capacity exceeded at peak periods'] },
    { label:'Medium-Term', color:'var(--chip-red-t)',   bg:'var(--chip-red)',   items:['Risk of falling behind TESDA institutional quality audit standards','Students face sustained inequitable access','Faculty dissatisfaction and potential attrition','Growing populations exceed sustainable admin capacity'] },
    { label:'Long-Term',   color:'var(--chip-navy-t)',  bg:'var(--chip-navy)', items:['Compounding institutional credibility gap vs peers','No historical data for evidence-based planning','Persistent gap from CHED quality benchmarks','Missed opportunity to serve UN SDG 4 mandate'] },
  ]
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 02 — Background</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Consequences of Inaction</h2>
      <div className="row slide-body anim-fade-up delay-2 card-stagger" style={{ overflow:'hidden' }}>
        {cols.map((c,i) => (
          <div key={i} className="card" style={{ display:'flex', flexDirection:'column', gap:0, padding:0, overflow:'hidden' }}>
            <div style={{ background: c.bg, color: c.color, padding:'12px 16px', fontSize:24, fontWeight:700, letterSpacing:0.5 }}>{c.label}</div>
            <div style={{ padding:'14px 16px', display:'flex', flexDirection:'column', gap:10 }}>
              {c.items.map((item,j) => (
                <div key={j} style={{ fontSize:21, color:'var(--text-secondary)', lineHeight:1.5, paddingLeft:16, position:'relative' }}>
                  <span style={{ position:'absolute', left:0, color: c.color }}>·</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S13 OBJECTIVES ───────────────────────────────────────────
export function S13_Objectives() {
  const objs = [
    { n:'01', dim:'Descriptive',  head:'Identify Current Procedures', body:'Document existing enlistment workflows, class schedule management, and slot allocation at STI Alaminos through structured interviews, observation, and document analysis.', color:'var(--g2)' },
    { n:'02', dim:'Developmental',head:'Determine Features of SEN-GEN', body:'Design and build all system features through Feature-Driven Development — iterative design-build-validate cycles for each of the 6 functional modules.', color:'var(--g1)' },
    { n:'03', dim:'Evaluation',   head:'Evaluate Usability via ISO 25010', body:'Assess system quality using ISO 25010 across 6 dimensions. Administer validated 5-point Likert questionnaire to 45 purposively-sampled respondents. Target: ≥4.00 weighted mean.', color:'var(--g3)' },
  ]
  const mainObj = 'To design, develop, and implement SEN-GEN — a web-based Student Enrollment with Generative Scheduling System — for STI Alaminos.'
  return (
    <div className="slide-inner" style={{ gap:12 }}>
      <div className="slide-heading anim-fade-up">Section 03 — Objectives & Framework</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Statement of Objectives</h2>
      <div className="quote-box anim-fade-up delay-2" style={{ flexShrink:0 }}>
        <strong style={{ fontStyle:'normal' }}>Main Objective:</strong> {mainObj}
      </div>
      <div className="slide-body anim-fade-up delay-3 card-stagger" style={{ display:'flex', flexDirection:'column', gap:10, overflow:'auto' }}>
        {objs.map((o,i) => (
          <div key={i} className="card" style={{ display:'flex', gap:16, padding:'14px 18px', borderLeft:`3px solid ${o.color}` }}>
            <div style={{ flexShrink:0 }}>
              <div style={{ width:48, height:48, borderRadius:12, background:`linear-gradient(135deg,${o.color},${o.color}88)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:800, color:'#fff' }}>{o.n}</div>
            </div>
            <div>
              <div style={{ fontSize:18, fontWeight:700, color:`${o.color}`, textTransform:'uppercase', letterSpacing:1, marginBottom:3 }}>{o.dim}</div>
              <div style={{ fontSize:26, fontWeight:600, color:'var(--text-primary)', marginBottom:4 }}>{o.head}</div>
              <div style={{ fontSize:22, color:'var(--text-secondary)', lineHeight:1.5 }}>{o.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S14 IPO FRAMEWORK ────────────────────────────────────────
// To use your own framework image:
//   1. Add the file to src/assets/ (e.g. framework.png)
//   2. Import it: import frameworkImg from '../assets/framework.png'
//   3. Replace the placeholder <div> below with:
//      <img src={frameworkImg} alt="Conceptual Framework" className="framework-img" />
export function S14_IPO() {
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 03 — Objectives &amp; Framework</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Conceptual Framework — IPO Model</h2>
      <div className="slide-body anim-fade-up delay-2" style={{ display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>

        {/* ── REPLACE THIS BLOCK WITH YOUR FRAMEWORK IMAGE ────────── */}
        <div className="framework-placeholder">
          <FileImage size={48} style={{ color:'var(--text-muted)', marginBottom:16, flexShrink:0 }} />
          <div style={{ fontSize:24, fontWeight:600, color:'var(--text-secondary)', marginBottom:8 }}>
            Conceptual Framework Image
          </div>
          <div style={{ fontSize:18, color:'var(--text-muted)', lineHeight:1.6, textAlign:'center' }}>
            Add your image to <code style={{ background:'var(--bg-card-alt)', padding:'2px 6px', borderRadius:4, fontSize:16 }}>src/assets/framework.png</code>
            <br />then import and replace this block with an &lt;img&gt; tag.
          </div>
        </div>
        {/* ─────────────────────────────────────────────────────────── */}

      </div>
      <div className="anim-fade-up delay-3" style={{ fontSize:18, color:'var(--text-muted)', textAlign:'center', flexShrink:0 }}>
        ↻ Continuous Evaluation Loop — ISO 25010: Functional Suitability · Performance · Usability · Reliability · Maintainability · Portability
      </div>
    </div>
  )
}

// ── S15 SCOPE ────────────────────────────────────────────────
export function S15_Scope() {
  const inScope = ['Exclusive to STI Alaminos campus','6 user roles with RBAC architecture','ETL import via .xlsx (pre-enrollment authorization)','CSP Generative Scheduling Engine','Student portal — real-time slots (max 40/section)','Enrollment requirements checklist for Admission Officer','Document submission tracking for new student enrollment','Faculty assignment with manual override','Semester-aware admin dashboard','Automated email notifications','Grid views: Faculty, Classroom, Section','ISO 25010 evaluation — 45 respondents']
  const outScope = [
    { t:'No multi-campus integration', d:'Purpose-built for STI Alaminos only' },
    { t:'No financial/payment processing', d:'Tuition payment is the final enrollment step but handled outside the system scope' },
    { t:'No AI/ML predictive scheduling', d:'Deliberate — insufficient historical data; CSP is the correct foundational step' },
    { t:'No TESDA Registry System interface', d:'External government portal excluded' },
    { t:'Findings not generalizable', d:'Contextual replication required for other institutions' },
  ]
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 03 — Objectives & Framework</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Scope & Limitations</h2>
      <div className="row slide-body anim-fade-up delay-2 card-stagger" style={{ gap:12, overflow:'auto' }}>
        <div className="card" style={{ padding:0, overflow:'auto' }}>
          <div style={{ background:'var(--chip-green)', color:'var(--chip-green-t)', padding:'10px 14px', fontSize:20, fontWeight:700 }}>✓ Within Scope</div>
          <div style={{ padding:'12px 14px', display:'flex', flexDirection:'column', gap:5 }}>
            {inScope.map((t,i) => <div key={i} style={{ fontSize:18, color:'var(--text-secondary)', paddingLeft:16, position:'relative' }}><span style={{ position:'absolute', left:0, color:'var(--chip-green-t)' }}>✓</span>{t}</div>)}
          </div>
        </div>
        <div className="card" style={{ padding:0, overflow:'auto' }}>
          <div style={{ background:'var(--glass-card-alt)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', color:'var(--text-muted)', padding:'10px 14px', fontSize:20, fontWeight:700 }}>○ Deliberate Limitations</div>
          <div style={{ padding:'12px 14px', display:'flex', flexDirection:'column', gap:10 }}>
            {outScope.map((t,i) => (
              <div key={i}>
                <div style={{ fontSize:20, fontWeight:600, color:'var(--text-primary)' }}>{t.t}</div>
                <div style={{ fontSize:17, color:'var(--text-muted)', marginTop:2, lineHeight:1.5 }}>{t.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── S18 LIT STATS ────────────────────────────────────────────
export function S18_LitStats() {
  const stats = [
    { num:'62%',   label:'of universities still use manual or semi-automated scheduling', src:'Chen et al. (2021)' },
    { num:'18–22', label:'working days per semester on manual scheduling vs 2–4 algorithmic', src:'Chen et al. (2021)' },
    { num:'86%',   label:'reduction in scheduling cycle time with algorithmic tools', src:'Bui et al. (2022)' },
    { num:'8–12%', label:'conflict density in manually-constructed schedules', src:'Veenstra & Vis (2023)' },
    { num:'100%',  label:'hard-constraint satisfaction by CSP-based engines in all tests', src:'Diallo et al. (2024)' },
    { num:'78%',   label:'of soft constraints fulfilled alongside perfect hard-constraint satisfaction', src:'Diallo et al. (2024)' },
  ]
  return (
    <div className="slide-inner" style={{ gap:12 }}>
      <div className="slide-heading anim-fade-up">Section 04 — Literature</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Manual vs Algorithmic Scheduling — The Numbers</h2>
      <div className="grid-3 slide-body anim-fade-up delay-2 card-stagger" style={{ overflow:'hidden' }}>
        {stats.map((s,i) => (
          <div key={i} className="stat-card">
            <div className="stat-num grad-text">{s.num}</div>
            <div className="stat-label" style={{ marginBottom:6 }}>{s.label}</div>
            <div style={{ fontSize:18, color:'var(--text-muted)', fontStyle:'italic' }}>{s.src}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S20 CSP ENGINE ───────────────────────────────────────────
export function S20_CSP() {
  const hard = ['No room double-booking at same time slot','No faculty double-assignment simultaneously','Room capacity ≥ section enrollment','Faculty load ≤ TESDA maximum AND STI Policy limits per semester','Faculty assigned only to qualified subjects']
  const soft = ['Faculty preferred time slots honored where possible','Minimized idle gaps between consecutive sections','Equitable distribution of load across faculty']
  const evidence = [
    { src:'Diallo et al. (2024)', f:'100% hard-constraint satisfaction + 78% soft fulfillment in real-world deployments' },
    { src:'Bui et al. (2022)',    f:'Scheduling cycle: 21 days → 3 days. 100% hard-constraint compliance.' },
    { src:'Zhou (2025)',          f:'Manual overrides needed ~12% of assignments → validates SEN-GEN override feature' },
  ]
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 04 — Literature</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Constraint Satisfaction Algorithm</h2>
      <div className="row anim-fade-up delay-2" style={{ flexShrink:0, gap:12 }}>
        <div className="card" style={{ borderColor:'var(--chip-red-t)', padding:'12px 16px' }}>
          <div style={{ fontSize:18, fontWeight:700, color:'var(--chip-red-t)', textTransform:'uppercase', letterSpacing:1, marginBottom:8 }}>Hard Constraints — Must Not Violate</div>
          {hard.map((t,i) => <div key={i} style={{ fontSize:22, color:'var(--text-secondary)', paddingLeft:16, position:'relative', marginBottom:4 }}><span style={{ position:'absolute', left:0, color:'var(--chip-red-t)' }}>·</span>{t}</div>)}
        </div>
        <div className="card" style={{ borderColor:'var(--chip-teal-t)', padding:'12px 16px' }}>
          <div style={{ fontSize:18, fontWeight:700, color:'var(--chip-teal-t)', textTransform:'uppercase', letterSpacing:1, marginBottom:8 }}>Soft Constraints — Optimized</div>
          {soft.map((t,i) => <div key={i} style={{ fontSize:22, color:'var(--text-secondary)', paddingLeft:16, position:'relative', marginBottom:4 }}><span style={{ position:'absolute', left:0, color:'var(--chip-teal-t)' }}>·</span>{t}</div>)}
        </div>
      </div>
      <div className="slide-body anim-fade-up delay-3" style={{ overflow:'hidden', display:'flex', flexDirection:'column', gap:8 }}>
        {evidence.map((e,i) => (
          <div key={i} className="glass-row" style={{ display:'flex', gap:12, padding:'10px 14px', alignItems:'center' }}>
            <div style={{ fontSize:20, fontWeight:700, color:'var(--text-muted)', width:200, flexShrink:0 }}>{e.src}</div>
            <div style={{ fontSize:22, color:'var(--text-secondary)' }}>{e.f}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S22 ISO BENCHMARKS ───────────────────────────────────────
export function S22_ISOBenchmarks() {
  const rows = [
    { src:'Bellio et al. (2022)', sys:'European scheduling system', fac:'4.52', adm:'4.45', stu:'N/A' },
    { src:'Gozali et al. (2022)', sys:'Genetic algorithm system',   fac:'4.28', adm:'4.11', stu:'N/A' },
    { src:'Diallo et al. (2024)', sys:'CSP optimization system',    fac:'4.44', adm:'4.44', stu:'4.44' },
    { src:'Kim & Park (2022)',    sys:'RBAC institutional IS',       fac:'N/A',  adm:'4.30+',stu:'N/A' },
  ]
  return (
    <div className="slide-inner" style={{ gap:12 }}>
      <div className="slide-heading anim-fade-up">Section 04 — Literature</div>
      <h2 className="slide-title-h anim-fade-up delay-1">ISO 25010 Usability Benchmarks</h2>
      <div className="anim-fade-up delay-2" style={{ overflow:'auto', flexShrink:0 }}>
        <table className="data-table">
          <thead><tr><th>Source</th><th>System Type</th><th>Faculty</th><th>Admin</th><th>Student</th></tr></thead>
          <tbody>
            {rows.map((r,i) => (
              <tr key={i}>
                <td style={{ fontWeight:600, color:'var(--text-primary)', fontSize:22 }}>{r.src}</td>
                <td>{r.sys}</td>
                <td style={{ textAlign:'center', fontWeight:600, color:'var(--g2)' }}>{r.fac}</td>
                <td style={{ textAlign:'center', fontWeight:600, color:'var(--g2)' }}>{r.adm}</td>
                <td style={{ textAlign:'center', fontWeight:600, color:'var(--g2)' }}>{r.stu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="slide-body anim-fade-up delay-3" style={{ display:'flex', flexDirection:'column', gap:10 }}>
        <div className="glass-dark" style={{ padding:'18px 22px', display:'flex', alignItems:'center', gap:18 }}>
          <div>
            <div style={{ fontSize:20, fontWeight:700, color:'rgba(255,255,255,0.5)', textTransform:'uppercase', letterSpacing:1, marginBottom:4 }}>SEN-GEN Target</div>
            <div style={{ fontSize:60, fontWeight:800, background:'var(--brand-gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>≥ 4.00</div>
            <div style={{ fontSize:19, color:'rgba(255,255,255,0.5)', marginTop:2 }}>Weighted Mean — Very Good threshold</div>
          </div>
          <div style={{ width:1, alignSelf:'stretch', background:'rgba(255,255,255,0.1)' }} />
          <div style={{ fontSize:22, color:'rgba(255,255,255,0.6)', lineHeight:1.6 }}>
            Leite (2025): Systems scoring ≥4.00 show a <strong style={{ color:'rgba(255,255,255,0.85)' }}>78% probability</strong> of continued institutional adoption beyond the first academic year.
          </div>
        </div>
      </div>
    </div>
  )
}

// ── S25 RESEARCH DESIGN ──────────────────────────────────────
export function S25_ResearchDesign() {
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 05 — Methodology</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Research Design: Descriptive-Developmental</h2>
      <div className="quote-box anim-fade-up delay-2" style={{ flexShrink:0, fontSize:18 }}>
        This combination moves the research from a data-grounded understanding of institutional problems to the systematic creation of a solution — ensuring SEN-GEN is institutionally relevant, not merely technically functional.
      </div>
      <div className="row slide-body anim-fade-up delay-3 card-stagger" style={{ gap:12, overflow:'auto' }}>
        <div className="card" style={{ borderTop:'3px solid var(--g2)' }}>
          <div style={{ fontSize:18, fontWeight:700, color:'var(--g2)', textTransform:'uppercase', letterSpacing:1, marginBottom:8 }}>Descriptive Dimension</div>
          <div style={{ fontSize:22, fontWeight:600, color:'var(--text-primary)', marginBottom:8 }}>Document existing procedures</div>
          <div style={{ fontSize:19, color:'var(--text-secondary)', lineHeight:1.6, marginBottom:10 }}>
            McCombes (2023): descriptive research systematically describes a situation without manipulating variables.
          </div>
          <div style={{ fontSize:18, color:'var(--text-muted)', lineHeight:1.6 }}>
            Applied: structured interviews with Registrar, Academic Head, faculty, students + non-participatory observation + document analysis → operational baseline for SEN-GEN requirements.
          </div>
        </div>
        <div className="card" style={{ borderTop:'3px solid var(--g1)' }}>
          <div style={{ fontSize:18, fontWeight:700, color:'var(--g1)', textTransform:'uppercase', letterSpacing:1, marginBottom:8 }}>Developmental Dimension</div>
          <div style={{ fontSize:22, fontWeight:600, color:'var(--text-primary)', marginBottom:8 }}>Build SEN-GEN iteratively</div>
          <div style={{ fontSize:19, color:'var(--text-secondary)', lineHeight:1.6, marginBottom:10 }}>
            Siedlecki (2020): developmental research is a systematic, iterative process of designing, building, and refining a product over time.
          </div>
          <div style={{ fontSize:18, color:'var(--text-muted)', lineHeight:1.6 }}>
            Applied: Agile FDD — 5 phases, each feature independently designed, built, and validated with stakeholder acceptance criteria before moving forward.
          </div>
        </div>
      </div>
    </div>
  )
}

// ── S31 RESPONDENTS ──────────────────────────────────────────
export function S31_Respondents() {
  const groups = [
    { n:30, label:'Students',             desc:"IT and allied program students who used SEN-GEN's enlistment portal during UAT", color:'var(--g2)' },
    { n:10, label:'Faculty Members',      desc:'Faculty assigned teaching loads and schedule views through SEN-GEN during evaluation', color:'var(--g1)' },
    { n:5,  label:'Administrative Staff', desc:'Registrar, Academic Head, Admission Officer, and School Admin representatives', color:'var(--g3)' },
  ]
  return (
    <div className="slide-inner" style={{ gap:12 }}>
      <div className="slide-heading anim-fade-up">Section 05 — Methodology</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Respondents & Sampling</h2>
      <div className="quote-box anim-fade-up delay-2" style={{ flexShrink:0 }}>
        <strong style={{ fontStyle:'normal' }}>Purposive Sampling</strong> — Bisht (2023): deliberate selection of participants based on direct relevance to research objectives. Only users who actually interacted with SEN-GEN in their designated roles.
      </div>
      <div className="row anim-fade-up delay-3" style={{ gap:14, flexShrink:0 }}>
        {groups.map((g,i) => (
          <div key={i} className="stat-card" style={{ borderTop:`3px solid ${g.color}` }}>
            <div className="stat-num" style={{ color: g.color }}>{g.n}</div>
            <div style={{ fontSize:26, fontWeight:700, color:'var(--text-primary)', marginBottom:6 }}>{g.label}</div>
            <div className="stat-label">{g.desc}</div>
          </div>
        ))}
      </div>
      <div className="slide-body glass-dark anim-fade-up delay-4" style={{ padding:'16px 20px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ fontSize:28, fontWeight:700, color:'rgba(255,255,255,0.9)' }}>Total Respondents: <span style={{ fontSize:52, background:'var(--brand-gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>45</span></div>
        <div style={{ fontSize:21, color:'rgba(255,255,255,0.5)', maxWidth:420, lineHeight:1.6 }}>Instrument validated: 3 IT experts → pilot test (n=5) → Cronbach's alpha ≥ 0.70 → full administration</div>
      </div>
    </div>
  )
}

// ── S33 3-TIER ARCHITECTURE ──────────────────────────────────
export function S33_Architecture() {
  const tiers = [
    { n:'Tier 1', label:'Client Layer',       tech:'React JS',                        color:'var(--g2)', items:['6 Role-Differentiated Interfaces','School Admin — system config, users','Academic Head — schedule gen, analytics','Registrar — ETL, approvals, reports','Admission Officer — enrollment checklist, pre-authorization','Faculty — schedule view, notifications','Student — enrollment portal'] },
    { n:'Tier 2', label:'Application Layer',  tech:'ASP.NET Core Web API + EF Core',   color:'var(--g1)', items:['CSP Generative Scheduling Engine','Role-Based Access Control (JWT)','ETL Pipeline Execution (XLSX → DB)','Automated Email Notification Dispatch','Slot Request & Approval Workflow','Business Rules & Validation','Hosted on IIS Web Server'] },
    { n:'Tier 3', label:'Data Layer',         tech:'Microsoft SQL Server',             color:'var(--g3)', items:['Student & Faculty Records','Subject & Section Config','Room Specifications','Schedule Assignments','Slot Request Transactions','Notification & Audit Logs','Referential Integrity Constraints'] },
  ]
  return (
    <div className="slide-inner" style={{ gap:12 }}>
      <div className="slide-heading anim-fade-up">Section 06 — System</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Three-Tier Web Architecture</h2>
      <div className="row slide-body anim-fade-up delay-2 card-stagger" style={{ gap:12, overflow:'auto' }}>
        {tiers.map((t,i) => (
          <div key={i} className="card" style={{ padding:0, overflow:'auto', borderTop:`3px solid ${t.color}` }}>
            <div style={{ padding:'10px 14px', borderBottom:'1px solid var(--border)' }}>
              <div style={{ fontSize:16, fontWeight:700, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:1 }}>{t.n}</div>
              <div style={{ fontSize:22, fontWeight:700, color:'var(--text-primary)' }}>{t.label}</div>
              <div className="chip" style={{ background:`${t.color}22`, color: t.color, marginTop:4, fontSize:14 }}>{t.tech}</div>
            </div>
            <div style={{ padding:'10px 14px', display:'flex', flexDirection:'column', gap:5 }}>
              {t.items.map((item,j) => (
                <div key={j} style={{ fontSize:18, color:'var(--text-secondary)', paddingLeft:14, position:'relative', lineHeight:1.4 }}>
                  <span style={{ position:'absolute', left:0, color: t.color, fontSize:13, top:3 }}>▸</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S36 SCHEDULING ENGINE ────────────────────────────────────
export function S36_Engine() {
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 06 — System</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Feature 2: Generative Scheduling Engine</h2>
      <div className="quote-box anim-fade-up delay-2" style={{ flexShrink:0 }}>
        The Academic Head initiates generation → CSP evaluates all constraints simultaneously → constraint propagation reduces search space → backtracking finds first fully satisfying assignment.
      </div>
      <div className="row slide-body anim-fade-up delay-3 card-stagger" style={{ gap:12, overflow:'auto' }}>
        <div className="card" style={{ borderColor:'var(--chip-red-t)' }}>
          <div style={{ fontSize:19, fontWeight:700, color:'var(--chip-red-t)', textTransform:'uppercase', letterSpacing:1, marginBottom:10 }}>Hard Constraints</div>
          {['No room double-booking','No faculty double-assignment','Room capacity ≥ enrollment','Load ≤ TESDA maximum AND STI Policy limits','Subject-qualified faculty only'].map((t,i) => <div key={i} style={{ fontSize:22, color:'var(--text-secondary)', paddingLeft:16, position:'relative', marginBottom:5 }}><span style={{ position:'absolute', left:0, color:'var(--chip-red-t)' }}>✗</span>{t}</div>)}
        </div>
        <div className="card" style={{ borderColor:'var(--chip-teal-t)' }}>
          <div style={{ fontSize:19, fontWeight:700, color:'var(--chip-teal-t)', textTransform:'uppercase', letterSpacing:1, marginBottom:10 }}>Soft Constraints</div>
          {['Faculty time preferences honored','Minimized idle gaps between classes','Equitable load distribution'].map((t,i) => <div key={i} style={{ fontSize:22, color:'var(--text-secondary)', paddingLeft:16, position:'relative', marginBottom:5 }}><span style={{ position:'absolute', left:0, color:'var(--chip-teal-t)' }}>◎</span>{t}</div>)}
          <div style={{ marginTop:14, fontSize:16, fontWeight:600, color:'var(--chip-amber-t)', background:'var(--chip-amber)', borderRadius:8, padding:'10px 12px', backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)', border:'1px solid rgba(217,119,6,0.25)', lineHeight:1.5 }}>
            Manual Override — Academic Head can override any assignment. Real-time conflict detection active. Validated: Zhou (2025) — ~12% overrides needed in real-world deployments.
          </div>
        </div>
        <div className="card glass-dark" style={{ border:'none' }}>
          <div style={{ fontSize:19, fontWeight:700, color:'rgba(255,255,255,0.5)', textTransform:'uppercase', letterSpacing:1, marginBottom:10 }}>Results (Literature)</div>
          <div style={{ fontSize:52, fontWeight:800, background:'var(--brand-gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', marginBottom:4 }}>100%</div>
          <div style={{ fontSize:19, color:'rgba(255,255,255,0.5)', marginBottom:14 }}>Hard constraints satisfied</div>
          <div style={{ fontSize:52, fontWeight:800, background:'var(--brand-gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', marginBottom:4 }}>78%</div>
          <div style={{ fontSize:19, color:'rgba(255,255,255,0.5)', marginBottom:14 }}>Soft constraints fulfilled</div>
          <div style={{ fontSize:52, fontWeight:800, background:'var(--brand-gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', marginBottom:4 }}>86%</div>
          <div style={{ fontSize:19, color:'rgba(255,255,255,0.5)' }}>Scheduling time reduction</div>
        </div>
      </div>
    </div>
  )
}

// ── S39 NOTIFICATIONS + RBAC ─────────────────────────────────
export function S39_NotifRBAC() {
  const roles  = ['School Admin','Academic Head','Registrar','Admission Officer','Faculty Member','Student']
  const events = ['Enrollment requirements checklist submitted','Pre-enrollment confirmation','Slot request received','Slot approved / declined','Schedule published','Faculty assignment confirmed']
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 06 — System</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Features 5 & 6 — Notifications + RBAC</h2>
      <div className="row slide-body anim-fade-up delay-2 card-stagger" style={{ gap:14, overflow:'hidden' }}>
        <div className="card">
          <div style={{ fontSize:19, fontWeight:700, color:'var(--g2)', textTransform:'uppercase', letterSpacing:1, marginBottom:12 }}>Automated Email Notifications</div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {events.map((e,i) => (
              <div key={i} className="glass-item" style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 12px' }}>
                <div style={{ width:10, height:10, borderRadius:'50%', background:'var(--brand-gradient)', flexShrink:0 }} />
                <div style={{ fontSize:22, color:'var(--text-secondary)' }}>{e}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:12, fontSize:20, color:'var(--text-muted)', lineHeight:1.5, fontStyle:'italic' }}>
            Martinez & Chen (2023): platforms with 5+ automated events achieved 41% higher student satisfaction.
          </div>
        </div>
        <div className="card">
          <div style={{ fontSize:19, fontWeight:700, color:'var(--g3)', textTransform:'uppercase', letterSpacing:1, marginBottom:12 }}>Role-Based Access Control</div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {roles.map((r,i) => (
              <div key={i} className="glass-item" style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 12px' }}>
                <div style={{ width:32, height:32, borderRadius:8, background:'var(--brand-gradient)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, fontWeight:700, color:'#fff', flexShrink:0 }}>{i+1}</div>
                <div style={{ fontSize:22, color:'var(--text-secondary)', fontWeight:500 }}>{r}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:12, fontSize:20, color:'var(--text-muted)', lineHeight:1.5, fontStyle:'italic' }}>
            JWT Middleware + IIS SSL. Kim & Park (2022): RBAC significantly reduces unauthorized access risks.
          </div>
        </div>
      </div>
    </div>
  )
}

// ── S41 ISO 6 DIMENSIONS ─────────────────────────────────────
export function S41_ISO() {
  const dims = [
    { n:1, dim:'Functional Suitability', q:'Does SEN-GEN accurately perform all functions?',     why:'Highest priority — a schedule with errors fails at its core purpose.',                              color:'var(--g2)' },
    { n:2, dim:'Performance Efficiency', q:'Does it respond fast under concurrent peak load?',    why:'Critical during enlistment windows with simultaneous users.',                                      color:'var(--g1)' },
    { n:3, dim:'Usability',              q:'Is it easy for all 6 roles to learn and use?',        why:'Strong predictor of sustained adoption — role-differentiated UIs address this.',                   color:'var(--g3)' },
    { n:4, dim:'Reliability',            q:'Stable under peak load, recovers gracefully?',        why:'Downtime during enlistment prevents students from meeting deadlines.',                              color:'var(--g2)' },
    { n:5, dim:'Maintainability',        q:'Can it be modified as CHED policies evolve?',         why:'Long-term institutional sustainability requires modular, extensible code.',                         color:'var(--g1)' },
    { n:6, dim:'Portability',            q:'Works across devices, browsers, environments?',       why:'Students and faculty use diverse devices — React + ASP.NET Core are cross-platform.',              color:'var(--g3)' },
  ]
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 07 — Evaluation</div>
      <h2 className="slide-title-h anim-fade-up delay-1">ISO/IEC 25010:2023 — Six Quality Dimensions</h2>
      <div className="grid-2 slide-body anim-fade-up delay-2" style={{ gap:10, overflow:'hidden' }}>
        {dims.map((d,i) => (
          <div key={i} className="card" style={{ display:'flex', gap:12, padding:'12px 16px', borderLeft:`3px solid ${d.color}` }}>
            <div style={{ width:34, height:34, borderRadius:8, background:`${d.color}22`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:700, color:d.color, flexShrink:0 }}>{d.n}</div>
            <div>
              <div style={{ fontSize:24, fontWeight:700, color:'var(--text-primary)', marginBottom:3 }}>{d.dim}</div>
              <div style={{ fontSize:20, color:'var(--text-secondary)', marginBottom:3, lineHeight:1.4 }}>{d.q}</div>
              <div style={{ fontSize:19, color:'var(--text-muted)', fontStyle:'italic', lineHeight:1.4 }}>{d.why}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S45 REGULATORY ───────────────────────────────────────────
export function S45_Regulatory() {
  const laws = [
    { law:'TESDA',             short:'Primary Regulatory Mandate',    body:'As the primary regulatory body for STI Alaminos, TESDA mandates compliance with technical-vocational standards. SEN-GEN resolves the TESDA vs STI Policy faculty load conflict by enforcing both standards automatically.',  color:'var(--g2)' },
    { law:'RA 10844',          short:'DICT Act of 2015',              body:'Mandates ICT use to improve institutional service delivery. SEN-GEN directly digitalizes the full STI Alaminos enrollment process and generative scheduling services.',     color:'var(--g1)' },
    { law:'CHED MO 46, s.2012',short:'Quality Assurance in PH HE',   body:'Broadly encourages the technical-vocational sector to maintain efficient academic administrative systems. SEN-GEN supports these quality improvement objectives.',                                                      color:'var(--g3)' },
    { law:'RA 10173',          short:'Data Privacy Act of 2012',      body:'Governs student/faculty data handling. SEN-GEN implements JWT, RBAC, IIS/SSL, and comprehensive audit logging for full compliance.',             color:'var(--g2)' },
    { law:'UN SDG 4',          short:'Quality Education',             body:'24/7 student portal eliminates the in-person access requirement — directly serving equitable, inclusive education mandates (United Nations, 2022).', color:'var(--g1)' },
    { law:'UN SDG 9',          short:'Innovation & Infrastructure',   body:'Replacing fragmented manual processes with integrated digital infrastructure directly operationalizes SDG 9 for the institution (United Nations, 2022).', color:'var(--g3)' },
  ]
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 08 — Significance</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Regulatory & Policy Alignment</h2>
      <div className="slide-body anim-fade-up delay-2 card-stagger" style={{ overflow:'auto', display:'flex', flexDirection:'column', gap:8 }}>
        {laws.map((l,i) => (
          <div key={i} className="card" style={{ display:'flex', gap:14, padding:'13px 16px', borderLeft:`3px solid ${l.color}` }}>
            <div style={{ flexShrink:0, width:150 }}>
              <div style={{ fontSize:24, fontWeight:700, color:'var(--text-primary)' }}>{l.law}</div>
              <div style={{ fontSize:19, color:'var(--text-muted)', lineHeight:1.4 }}>{l.short}</div>
            </div>
            <div style={{ width:1, alignSelf:'stretch', background:'var(--border)', flexShrink:0 }} />
            <div style={{ fontSize:22, color:'var(--text-secondary)', lineHeight:1.5, flex:1 }}>{l.body}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── GENERIC CONTENT PLACEHOLDER ──────────────────────────────
export function GenericContent({ slide }) {
  const bulletData = {
    's17': ['30+ verified sources — international and Philippine, 2001–2025','Organized around the 3 specific study objectives','Sources span peer-reviewed journals, institutional publications, and technical documentation','Literature validates: CSP scheduling engines, ETL pipelines, RBAC, dashboards, notifications'],
    's19': ['Leite (2025): 8 SE Asian HEIs — digital platforms show measurable efficiency gains','Mansoor et al. (2022): automated data import is among the highest-impact enrollment features','Martinez & Chen (2023): 84% of systems with real-time slots + notifications + 24/7 access score >4.0','Gkrimpizi et al. (2024): small-to-medium HEIs are most impacted by absence of digital enlistment tools'],
    's21': ['ETL (Mansoor, 2022): automated import reduces entry errors, accelerates pre-enlistment','RBAC (Kim & Park, 2022): tiered role structure reduces unauthorized access risks','Dashboard (Leite, 2025): semester-filtered views used 3.4× more than aggregate views','Notifications (Martinez & Chen, 2023): 5+ events → 41% higher student satisfaction'],
    's23': ['Literature quantifies STI Alaminos costs numerically: 18–22 days, 8–12% conflicts, 62% manual prevalence','Every SEN-GEN feature is validated by peer-reviewed evidence','Benchmark range 4.11–4.55 provides empirically grounded performance standard','RESEARCH GAP: No study has built a purpose-built integrated enlistment AND scheduling system for small-to-medium Philippine private HEIs'],
    's26': ['Agile: iterative cycles, continuous stakeholder collaboration, adaptive planning (Beck et al., 2001)','FDD chosen: SEN-GEN has 6 clearly bounded functional domains — ETL, Scheduling, Portal, Dashboard, Notifications, RBAC (Palmer & Felsing, 2002)','Unlike Scrum: FDD allows each feature to be independently designed, built, and validated — reducing integration risk','Each feature documented with acceptance criteria from stakeholder interviews + ISO 25010 dimensions'],
    's27': ['Phase 1 — Domain Model: interviews + observation → ERD + architecture blueprint','Phase 2 — Features List: 3 feature sets (Enlistment Mgmt, Scheduling, Admin Mgmt)','Phase 3 — Plan by Feature: sequence by technical dependency — Infrastructure → Engine → Portal → Admin'],
    's28': ['Phase 4 — Design: ERD, REST API spec, CSP pseudocode, React component hierarchy, as-is/to-be flowcharts','Phase 5 — Build: unit tests → integration → UAT deployment → ISO 25010 questionnaire → weighted mean analysis','All design artifacts validated with STI Alaminos stakeholders before implementation'],
    's29': ['Primary: structured interviews + non-participatory observation (Registrar, Dept Head, faculty, students)','Secondary: institutional documents — enrollment forms, scheduling spreadsheets, faculty load logs','Tertiary: internet-accessed academic literature, technical documentation, benchmarking data'],
    's30': ['Use Case Diagrams — functional boundaries for each of 6 roles','Flowcharts — as-is manual vs to-be SEN-GEN digital workflows','ERD — all entities: Students, Faculty, Subjects, Sections, Rooms, Schedules, EnlistmentRequests, Notifications, Users','Likert Scale (5-point) + Weighted Mean — ISO 25010 instrument (1=Strongly Disagree → 5=Strongly Agree)'],
    's34': ['React JS — component-based, 6 role-differentiated interfaces, reusable components','ASP.NET Core Web API — built-in DI, JWT middleware, cross-platform; high maintainability (ISO 25010)','Entity Framework Core — code-first migrations, schema consistency, optimized raw queries for CSP','SQL Server — referential integrity, transactional consistency, slot capacity enforcement at DB level','IIS — HTTP routing, SSL/TLS (RA 10173 Data Privacy Act compliance)'],
    's35': ['Extract: Registrar uploads .xlsx → server-side parser reads rows into memory (Mansoor et al., 2022)','Validate: field completeness check (student ID, name, program, year); malformed rows returned with errors','Transform: map program codes to curriculum, generate pre-enlistment tokens, duplicate detection','Load: validated records inserted to SQL Server — activates online enlistment eligibility per semester'],
    's37': ['Covers the Enlistment step of enrollment — student self-selects classes, sections, and schedules online without a registrar visit','24/7 online access — any device, any time, no in-person visit required (Martinez & Chen, 2023)','Browse published sections — room, time, faculty, remaining capacity displayed','Real-time slot availability — max 40 students/section, enforced at both app and database level (Diallo et al., 2024)','Slot request submission → Registrar approval workflow → automated email notification at each stage'],
    's38': ['Semester-aware filtering — all metrics auto-filter to active semester (Leite, 2025: used 3.4× more)','Live enrollment statistics per subject, section, program','Room utilization — automated % computation, peak usage identification','Faculty load distribution — visual vs TESDA AND STI Policy limits, flags overloading on both standards immediately','Exportable reports for TESDA and STI compliance with complete audit trail'],
    's42': ['5-point Likert questionnaire adapted from ISO 25010 (ISO/IEC 25010:2023; Suryadi & Sulistiyani, 2022)','Expert panel validation (3 IT experts) → pilot test (n=5) → Cronbach alpha ≥ 0.70 → full administration','45 respondents: 30 students, 10 faculty, 5 admin','Scores interpreted: ≥4.50=Excellent, 3.50–4.49=Very Good, 2.50–3.49=Good, 1.50–2.49=Fair'],
    's43': ['Comparable systems: 4.11–4.55 on ISO 25010 scale — all Very Good to Excellent','SEN-GEN target: ≥4.00 weighted mean','Leite (2025): systems ≥4.00 → 78% sustained adoption probability beyond first academic year','Scale: ≥4.50=Excellent · 3.50–4.49=Very Good · 2.50–3.49=Good · 1.50–2.49=Fair · 1.00–1.49=Poor'],
    's46': ['STI Alaminos — integrated digital platform, real-time reporting, data-driven planning','School Admin — real-time visibility into all institutional operations','Registrar — ETL, digital approvals, notifications drastically reduce manual transaction volume','Faculty — system-enforced load management, digital schedule view','Students (most direct) — 24/7 online access eliminates inequitable in-person requirement','Future Researchers — documented, replicable reference for PH private HEI enlistment system research'],
  }
  const items = bulletData[slide.id] || ['Content for this slide is detailed in the speaker notes.']
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section {slide.section} — {slide.sectionTitle}</div>
      <h2 className="slide-title-h anim-fade-up delay-1">{slide.title}</h2>
      <div className="slide-body anim-fade-up delay-2 card-stagger" style={{ overflow:'auto', display:'flex', flexDirection:'column', gap:8 }}>
        {items.map((item,i) => (
          <div key={i} className="card" style={{ padding:'13px 18px', display:'flex', gap:12, alignItems:'flex-start' }}>
            <div style={{ width:9, height:9, borderRadius:'50%', background:'var(--brand-gradient)', flexShrink:0, marginTop:8 }} />
            <div style={{ fontSize:24, color:'var(--text-secondary)', lineHeight:1.6 }}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S26b AGILE FDD IMAGE PLACEHOLDER ────────────────────────
export function S26b_AgileImage() {
  return (
    <div className="slide-inner" style={{ gap:12 }}>
      <div className="slide-heading anim-fade-up">Section 05 — Methodology</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Agile Feature-Driven Development — Process Model</h2>
      <div className="slide-body anim-fade-up delay-2" style={{ display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
        <div className="framework-placeholder">
          <FileImage size={48} style={{ color:'var(--text-muted)', marginBottom:16, flexShrink:0 }} />
          <div style={{ fontSize:24, fontWeight:600, color:'var(--text-secondary)', marginBottom:8 }}>
            Agile FDD Process Diagram
          </div>
          <div style={{ fontSize:18, color:'var(--text-muted)', lineHeight:1.6, textAlign:'center' }}>
            Add your image to <code style={{ background:'var(--bg-card-alt)', padding:'2px 6px', borderRadius:4, fontSize:16 }}>src/assets/agile-fdd.png</code>
            <br />then import and replace this block with an &lt;img&gt; tag.
          </div>
        </div>
      </div>
    </div>
  )
}

// ── S27 FDD PHASES 1–3 ───────────────────────────────────────
export function S27_FDD13() {
  const items = [
    'Phase 1 — Domain Model: structured interviews + observation → ERD + architecture blueprint',
    'Phase 2 — Features List: 3 feature sets (Enlistment Management, Scheduling, Admin Management)',
    'Phase 3 — Plan by Feature: sequence by technical dependency — Infrastructure → Engine → Portal → Admin',
  ]
  return (
    <div className="slide-inner" style={{ gap:12 }}>
      <div className="slide-heading anim-fade-up">Section 05 — Methodology</div>
      <h2 className="slide-title-h anim-fade-up delay-1">FDD Phases 1–3</h2>
      <div className="anim-fade-up delay-2 card-stagger" style={{ display:'flex', flexDirection:'column', gap:10, flexShrink:0 }}>
        {items.map((item, i) => (
          <div key={i} className="card" style={{ padding:'13px 18px', display:'flex', gap:12, alignItems:'flex-start' }}>
            <div style={{ width:32, height:32, borderRadius:8, background:'var(--brand-gradient)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, fontWeight:800, color:'#fff', flexShrink:0 }}>{i+1}</div>
            <div style={{ fontSize:23, color:'var(--text-secondary)', lineHeight:1.6 }}>{item}</div>
          </div>
        ))}
      </div>
      <div className="slide-body anim-fade-up delay-3" style={{ display:'flex', alignItems:'center', justifyContent:'center', border:'2px dashed rgba(255,255,255,0.15)', borderRadius:12, background:'rgba(255,255,255,0.03)' }}>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10, padding:24 }}>
          <FileImage size={42} style={{ color:'var(--text-muted)' }} />
          <div style={{ fontSize:22, fontWeight:600, color:'var(--text-secondary)' }}>FDD Phases 1–3 Diagram</div>
          <div style={{ fontSize:17, color:'var(--text-muted)', textAlign:'center' }}>
            Add your image to <code style={{ background:'var(--bg-card-alt)', padding:'2px 5px', borderRadius:4 }}>src/assets/fdd-phases-1-3.png</code>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── S28 FDD PHASES 4–5 ───────────────────────────────────────
export function S28_FDD45() {
  const items = [
    'Phase 4 — Design: ERD, REST API spec, CSP pseudocode, React component hierarchy, as-is/to-be flowcharts',
    'Phase 5 — Build: unit tests → integration → UAT deployment → ISO 25010 questionnaire → weighted mean analysis',
    'All design artifacts validated with STI Alaminos stakeholders before implementation',
  ]
  return (
    <div className="slide-inner" style={{ gap:12 }}>
      <div className="slide-heading anim-fade-up">Section 05 — Methodology</div>
      <h2 className="slide-title-h anim-fade-up delay-1">FDD Phases 4–5</h2>
      <div className="anim-fade-up delay-2 card-stagger" style={{ display:'flex', flexDirection:'column', gap:10, flexShrink:0 }}>
        {items.map((item, i) => (
          <div key={i} className="card" style={{ padding:'13px 18px', display:'flex', gap:12, alignItems:'flex-start' }}>
            <div style={{ width:32, height:32, borderRadius:8, background:'linear-gradient(135deg,#e4b795,#d97706)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, fontWeight:800, color:'#fff', flexShrink:0 }}>{i+4}</div>
            <div style={{ fontSize:23, color:'var(--text-secondary)', lineHeight:1.6 }}>{item}</div>
          </div>
        ))}
      </div>
      <div className="slide-body anim-fade-up delay-3" style={{ display:'flex', alignItems:'center', justifyContent:'center', border:'2px dashed rgba(255,255,255,0.15)', borderRadius:12, background:'rgba(255,255,255,0.03)' }}>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10, padding:24 }}>
          <FileImage size={42} style={{ color:'var(--text-muted)' }} />
          <div style={{ fontSize:22, fontWeight:600, color:'var(--text-secondary)' }}>FDD Phases 4–5 Diagram</div>
          <div style={{ fontSize:17, color:'var(--text-muted)', textAlign:'center' }}>
            Add your image to <code style={{ background:'var(--bg-card-alt)', padding:'2px 5px', borderRadius:4 }}>src/assets/fdd-phases-4-5.png</code>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── S34 TECHNOLOGY STACK ─────────────────────────────────────
export function S34_TechStack() {
  const techs = [
    { name:'React JS',              desc:'Component-based, 6 role-differentiated interfaces, reusable components', color:'var(--g2)' },
    { name:'ASP.NET Core Web API',  desc:'Built-in DI, JWT middleware, cross-platform; high maintainability (ISO 25010)', color:'var(--g1)' },
    { name:'Entity Framework Core', desc:'Code-first migrations, schema consistency, optimized raw queries for CSP engine', color:'var(--g3)' },
    { name:'Microsoft SQL Server',  desc:'Referential integrity, transactional consistency, slot capacity enforcement at DB level', color:'var(--g2)' },
    { name:'IIS',                   desc:'HTTP routing, SSL/TLS — Data Privacy Act (RA 10173) compliance', color:'var(--g1)' },
  ]
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 06 — System</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Technology Stack</h2>
      <div className="slide-body anim-fade-up delay-2 card-stagger" style={{ display:'flex', flexDirection:'column', gap:9, overflow:'auto' }}>
        {techs.map((t, i) => (
          <div key={i} className="card" style={{ display:'flex', gap:14, padding:'10px 14px', borderLeft:`3px solid ${t.color}`, alignItems:'center' }}>
            <div style={{ width:76, height:54, borderRadius:8, background:'rgba(255,255,255,0.04)', border:'1.5px dashed rgba(255,255,255,0.18)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <FileImage size={22} style={{ color:'var(--text-muted)' }} />
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:23, fontWeight:700, color:'var(--text-primary)', marginBottom:3 }}>{t.name}</div>
              <div style={{ fontSize:20, color:'var(--text-secondary)', lineHeight:1.4 }}>{t.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S39b ADDITIONAL SYSTEM FEATURES ──────────────────────────
export function S39b_AdditionalFeatures() {
  const features = [
    { head:'Digital Enrollment Requirements Checklist',     body:'Admission Officer manages a digital checklist for new student document submissions (Form 137, birth certificate, good moral certificate, etc.) — eliminates manual verification, missed documents, and incomplete record risk.',                                                                               color:'var(--chip-red-t)' },
    { head:'Student-Driven Enrollment Portal',             body:'Students independently complete the Registration and Enlistment steps digitally — browse published sections, check real-time slot availability, and submit requests without a physical registrar visit.',    color:'var(--g2)' },
    { head:'Grid Schedule Views (PDF / XLSX Export)',       body:'Visual grid schedule for Faculty View, Classroom View, and Class Section View — exportable as PDF or Excel for offline review and TESDA/STI Policy compliance documentation.',                              color:'var(--g1)' },
    { head:'Automated Room Utilization Report',             body:'System auto-computes room usage percentage per semester, identifies peak periods, and generates downloadable reports — no manual tallying required.',                                                        color:'var(--g3)' },
    { head:'Automated Schedule Change Notifications',       body:'Stakeholders receive instant email alerts when schedule revisions occur — eliminating word-of-mouth propagation and repeat registrar visits.',                                                              color:'var(--chip-amber-t)' },
    { head:'Automated Faculty Loading Report (PDF / XLSX)', body:'Consolidated faculty workload report generated automatically each semester — downloadable with both TESDA load-limit and STI Policy compliance flags.',                                                    color:'var(--chip-teal-t)' },
  ]
  return (
    <div className="slide-inner" style={{ gap:10 }}>
      <div className="slide-heading anim-fade-up">Section 06 — System</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Additional System Features</h2>
      <div className="slide-body anim-fade-up delay-2 card-stagger" style={{ overflow:'auto', display:'flex', flexDirection:'column', gap:9 }}>
        {features.map((f, i) => (
          <div key={i} className="card" style={{ padding:'10px 14px', borderLeft:`3px solid ${f.color}` }}>
            <div style={{ fontSize:20, fontWeight:700, color:'var(--text-primary)', marginBottom:3 }}>{f.head}</div>
            <div style={{ fontSize:18, color:'var(--text-secondary)', lineHeight:1.5 }}>{f.body}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── S47 RESEARCH SUMMARY ─────────────────────────────────────
export function S47_Summary() {
  const summary = [
    'Descriptive-Developmental + Agile Feature-Driven Development (FDD)',
    'Digitizes all 4 enrollment steps: Document Submission, Registration, Enlistment, Tuition Payment',
    'Digital enrollment requirements checklist replaces manual Admission Officer document verification',
    'CSP Algorithm — conflict-free schedules enforcing both STI Policy load limits',
    'ETL XLSX import pre-authorizes students for 24/7 online enrollment portal',
    '6 role-differentiated React JS interfaces — ASP.NET Core + SQL Server',
    'Grid schedule views: Faculty, Classroom, Class Section (PDF/XLSX)',
    'ISO/IEC 25010:2023 evaluation — target ≥4.00 weighted mean',
  ]
  return (
    <div className="slide-inner" style={{ gap:12 }}>
      <div className="slide-heading anim-fade-up">Section 08 — Significance & Summary</div>
      <h2 className="slide-title-h anim-fade-up delay-1">Research Summary</h2>
      <div className="grid-2 slide-body anim-fade-up delay-2 card-stagger" style={{ gap:10, overflow:'hidden' }}>
        {summary.map((s, i) => (
          <div key={i} className="card" style={{ display:'flex', gap:10, alignItems:'flex-start', padding:'12px 14px' }}>
            <div style={{ width:14, height:14, borderRadius:4, background:'var(--brand-gradient)', flexShrink:0, marginTop:5 }} />
            <div style={{ fontSize:21, color:'var(--text-secondary)', lineHeight:1.5 }}>{s}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
