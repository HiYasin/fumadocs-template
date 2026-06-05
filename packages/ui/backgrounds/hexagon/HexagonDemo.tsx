import Hexagons from "./Hexagons";

export default function HexagonsDemo() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Hexagon Background */}
      <Hexagons
        hexColor="transparent"              // cell fill (rgba or hex)
        hexBorderColor="rgba(50, 50, 50, 1)"
        hexSize={40}                        // circumradius in px
        borderWidth={1}

        hoverEffect={false}                  // hover is tracked at document level —
                                            // works even through z-stacked overlays
        hoverColor="rgba(0,243,255,0.15)"   // fill color on hover
        hoverBorderColor="#00f3ff"          // border color on hover ("" = no change)

        borderGlowEffect={false}             // neon glow shadow on ALL borders
        borderGlowColor="#00f3ff"           // glow color (independent of border color)
        borderGlowRadius={10}               // glow blur radius in px

        beamEffect={true}                   // beams flowing along hex edges
        beamColor="#00f3ff"                 // hex or rgba — both fully supported
        beamGlowColor="#00f3ff"
        maxBeams={20}
        beamSpeed={2}
        beamLength={80}
        beamSpawnProbability={0.08}

        overlay={false}                      // dark vignette overlay
      />

      {/* Foreground content — hover detection works through this */}
      <div className="relative z-10 flex flex-col gap-4 items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white">HEX <span className="text-[#00f3ff]">GRID</span></h1>
        <p className="text-cyan-100/80 max-w-sm mx-auto text-sm">Hover a cell. Watch the beams flow along the edges.</p>
      </div>
    </div>
  );
}