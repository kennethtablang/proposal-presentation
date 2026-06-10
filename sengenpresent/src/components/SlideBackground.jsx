export default function SlideBackground() {
  return (
    <div className="slide-bg" aria-hidden="true">
      {/* Drifting gradient blobs */}
      <div className="sb-orb sb-orb-1" />
      <div className="sb-orb sb-orb-2" />
      <div className="sb-orb sb-orb-3" />

      {/* Pulsing concentric rings */}
      <div className="sb-ring sb-ring-1" />
      <div className="sb-ring sb-ring-2" />
      <div className="sb-ring sb-ring-3" />

      {/* Slowly spinning dashed arc */}
      <div className="sb-ring sb-ring-spin" />

      {/* Orbiting glowing dots */}
      <div className="sb-orbit sb-orbit-1"><span className="sb-dot" /></div>
      <div className="sb-orbit sb-orbit-2"><span className="sb-dot sb-dot-warm" /></div>
    </div>
  )
}
