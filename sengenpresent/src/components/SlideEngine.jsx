import { AnimatePresence, motion } from 'framer-motion'
import { slides } from '../slides/index.js'
import SlideBackground from './SlideBackground.jsx'
import {
  S01_Title, S02_Outline, S03_Researcher, S04_Context,
  S06_CoreProblem, S07_PhHEI, S08_WalkIn, S09_ManualSched,
  S10_Stakeholder, S11_Consequences, S13_Objectives, S14_IPO,
  S15_Scope, S18_LitStats, S20_CSP, S22_ISOBenchmarks,
  S25_ResearchDesign, S26b_AgileImage, S27_FDD13, S28_FDD45,
  S30_DataTools, S31_Respondents, S33_Architecture, S34_TechStack,
  S36_Engine, S36b_CSP, S39_NotifRBAC, S39b_AdditionalFeatures,
  S41_ISO, S45_Regulatory, S47_Summary, S_Evidence, GenericContent
} from '../slides/SlideContent.jsx'

const CONTENT_MAP = {
  s01: S01_Title, s02: S02_Outline, s03: S03_Researcher, s04: S04_Context,
  s06: S06_CoreProblem, s07: S07_PhHEI, s08: S08_WalkIn, s09: S09_ManualSched,
  s10: S10_Stakeholder, s11: S11_Consequences, s13: S13_Objectives, s14: S14_IPO,
  s15: S15_Scope, s18: S18_LitStats, s20: S20_CSP, s22: S22_ISOBenchmarks,
  s25: S25_ResearchDesign, s26b: S26b_AgileImage, s27: S27_FDD13, s28: S28_FDD45,
  s30: S30_DataTools, s31: S31_Respondents, s33: S33_Architecture, s34: S34_TechStack,
  s36: S36_Engine, s36b: S36b_CSP, s39: S39_NotifRBAC, s39b: S39b_AdditionalFeatures,
  s41: S41_ISO, s45: S45_Regulatory, s47: S47_Summary, s_evidence: S_Evidence,
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
  return (
    <div className="slide slide-title">
      <SlideBackground />
      <div className="slide-accent-bar" />
      <div style={{ zIndex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', padding:'40px', textAlign:'center' }}>
        <div className="anim-scale-in" style={{ width:100, height:100, borderRadius:24, background:'var(--brand-gradient)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:38, fontWeight:800, color:'#fff', marginBottom:24, boxShadow:'0 12px 40px rgba(105,154,205,0.35)', letterSpacing:-1 }}>
          SG
        </div>
        <div className="anim-fade-up delay-1" style={{ fontSize:20, fontWeight:700, letterSpacing:2.5, color:'rgba(228,183,149,0.7)', textTransform:'uppercase', marginBottom:16 }}>
          SEN-GEN · Thesis Defense · June 2026
        </div>
        <h1 className="anim-fade-up delay-2" style={{ fontSize:88, fontWeight:800, color:'#fff', lineHeight:1.05, marginBottom:14, letterSpacing:-2 }}>
          Thank You
        </h1>
        <div className="anim-fade-up delay-3" style={{ fontSize:21, color:'rgba(255,255,255,0.5)', marginBottom:28, lineHeight:1.7, maxWidth:580, fontStyle:'italic' }}>
          "SEN-GEN is not merely a technological upgrade — it is an instrument of academic quality, institutional efficiency, and student-centered service delivery."
        </div>
        <div className="anim-fade-up delay-4" style={{ padding:'14px 36px', background:'var(--brand-gradient)', borderRadius:12, fontSize:22, fontWeight:700, color:'#fff', boxShadow:'0 8px 28px rgba(105,154,205,0.3)', marginBottom:20 }}>
          I am ready for your questions.
        </div>
        <div className="anim-fade-up delay-4" style={{ fontSize:19, color:'rgba(255,255,255,0.3)' }}>
          Kenneth Rey Rallustian Tablang · Universidad de Dagupan
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
