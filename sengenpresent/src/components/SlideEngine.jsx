import { AnimatePresence, motion } from 'framer-motion'
import { slides } from '../slides/index.js'
import SlideBackground from './SlideBackground.jsx'
import {
  S01_Title, S02_Outline, S03_Researcher, S04_Context,
  S06_CoreProblem, S07_PhHEI, S08_WalkIn, S09_ManualSched,
  S10_Stakeholder, S11_Consequences, S13_Objectives, S14_IPO,
  S15_Scope, S18_LitStats, S20_CSP, S22_ISOBenchmarks,
  S25_ResearchDesign, S31_Respondents, S33_Architecture,
  S36_Engine, S39_NotifRBAC, S41_ISO, S45_Regulatory, GenericContent
} from '../slides/SlideContent.jsx'

const CONTENT_MAP = {
  s01: S01_Title, s02: S02_Outline, s03: S03_Researcher, s04: S04_Context,
  s06: S06_CoreProblem, s07: S07_PhHEI, s08: S08_WalkIn, s09: S09_ManualSched,
  s10: S10_Stakeholder, s11: S11_Consequences, s13: S13_Objectives, s14: S14_IPO,
  s15: S15_Scope, s18: S18_LitStats, s20: S20_CSP, s22: S22_ISOBenchmarks,
  s25: S25_ResearchDesign, s31: S31_Respondents, s33: S33_Architecture,
  s36: S36_Engine, s39: S39_NotifRBAC, s41: S41_ISO, s45: S45_Regulatory,
}

const variants = {
  enter: (dir) => ({ opacity: 0, scale: 0.93, y: dir > 0 ? 24 : -24, filter: 'blur(5px)' }),
  center: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' },
  exit:  (dir) => ({ opacity: 0, scale: 1.05, y: dir > 0 ? -24 : 24, filter: 'blur(5px)' }),
}
const transition = { duration: 0.48, ease: [0.4, 0, 0.2, 1] }

function TitleSlide({ slide }) {
  const Content = CONTENT_MAP[slide.id]
  return (
    <div className="slide slide-title">
      <SlideBackground />
      <div className="slide-accent-bar" />
      {Content ? <Content /> : <GenericContent slide={slide} />}
    </div>
  )
}

function DividerSlide({ slide }) {
  const nums = { '01':'01','02':'02','03':'03','04':'04','05':'05','06':'06','07':'07','08':'08' }
  return (
    <div className="slide slide-divider">
      <SlideBackground />
      <div style={{ zIndex:1, padding:40, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%' }}>
        <div className="anim-scale-in" style={{ width:110, height:110, borderRadius:28, background:'var(--brand-gradient)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:52, fontWeight:800, color:'#fff', marginBottom:28, boxShadow:'0 12px 40px rgba(105,154,205,0.35)' }}>
          {nums[slide.section]}
        </div>
        <div className="anim-fade-up delay-1" style={{ fontSize:22, fontWeight:700, letterSpacing:2, color:'rgba(228,183,149,0.7)', textTransform:'uppercase', marginBottom:12 }}>
          Section {slide.section}
        </div>
        <div className="anim-fade-up delay-2" style={{ fontSize:54, fontWeight:800, color:'#fff', marginBottom:8, textAlign:'center', lineHeight:1.2 }}>
          {slide.title}
        </div>
      </div>
    </div>
  )
}

function ContentSlide({ slide }) {
  const Content = CONTENT_MAP[slide.id] || (() => <GenericContent slide={slide} />)
  return (
    <div className="slide">
      <SlideBackground />
      <div className="slide-accent-bar" />
      <Content />
    </div>
  )
}

function ClosingSlide() {
  const summary = [
    'Descriptive-Developmental + Agile Feature-Driven Development (FDD)',
    'CSP Algorithm — conflict-free schedules replacing 18–22 day manual cycle',
    'ETL XLSX import pre-authorizes students for 24/7 online enlistment',
    '6 role-differentiated React JS interfaces — ASP.NET Core + SQL Server',
    'Grid schedule views: Faculty, Classroom, Class Section',
    'Automated notifications for all 6 enlistment lifecycle events',
    'ISO/IEC 25010:2023 evaluation — target ≥4.00 weighted mean',
    'Aligned with RA 10844, CHED MO 46, RA 10173, UN SDG 4 & SDG 9',
  ]
  return (
    <div className="slide slide-title" style={{ justifyContent:'flex-start' }}>
      <SlideBackground />
      <div className="slide-accent-bar" />
      <div style={{ zIndex:1, display:'flex', flexDirection:'column', height:'100%', padding:'28px 36px' }}>
        <div className="anim-fade-up" style={{ fontSize:20, fontWeight:700, letterSpacing:2, color:'rgba(228,183,149,0.7)', textTransform:'uppercase', marginBottom:8 }}>Research Summary</div>
        <div className="anim-fade-up delay-1" style={{ fontSize:52, fontWeight:800, color:'#fff', marginBottom:4 }}>SEN-GEN</div>
        <div className="anim-fade-up delay-2" style={{ fontSize:24, color:'rgba(255,255,255,0.5)', marginBottom:20 }}>Student Enlistment with Generative Scheduling System for STI Alaminos</div>
        <div className="anim-fade-up delay-2" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, flex:1, overflow:'hidden' }}>
          {summary.map((s,i) => (
            <div key={i} style={{ display:'flex', gap:10, alignItems:'flex-start', padding:'10px 12px', background:'rgba(255,255,255,0.04)', borderRadius:8, border:'1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ width:16, height:16, borderRadius:4, background:'var(--brand-gradient)', flexShrink:0, marginTop:4 }} />
              <div style={{ fontSize:20, color:'rgba(255,255,255,0.7)', lineHeight:1.5 }}>{s}</div>
            </div>
          ))}
        </div>
        <div className="anim-fade-up delay-3" style={{ marginTop:16, padding:'16px 22px', background:'rgba(255,255,255,0.05)', borderRadius:10, border:'1px solid rgba(105,154,205,0.2)' }}>
          <div style={{ fontSize:22, fontStyle:'italic', color:'rgba(255,255,255,0.6)', lineHeight:1.7, marginBottom:10 }}>
            "SEN-GEN is not merely a technological upgrade — it is an instrument of academic quality, institutional efficiency, and student-centered service delivery."
          </div>
          <div style={{ fontSize:30, fontWeight:700, background:'var(--brand-gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', textAlign:'center' }}>
            Thank you. I am ready for your questions.
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SlideEngine({ current, direction }) {
  const slide = slides[current]

  const renderSlide = () => {
    if (slide.type === 'title')   return <TitleSlide   key={slide.id} slide={slide} />
    if (slide.type === 'divider') return <DividerSlide key={slide.id} slide={slide} />
    if (slide.type === 'closing') return <ClosingSlide key={slide.id} />
    return <ContentSlide key={slide.id} slide={slide} />
  }

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={slide.id}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={transition}
        style={{ width:'100%', height:'100%' }}
      >
        {renderSlide()}
      </motion.div>
    </AnimatePresence>
  )
}
