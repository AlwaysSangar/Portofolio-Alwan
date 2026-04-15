export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* blobs */}
      <div className="absolute -top-24 left-[-6rem] h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl animate-blob" />
      <div className="absolute top-24 right-[-7rem] h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob2" />
      <div className="absolute bottom-[-7rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl animate-blob3" />

      {/* spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_60%)]" />
      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/60" />
    </div>
  );
}