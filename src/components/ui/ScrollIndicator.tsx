'use client'

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="text-text-secondary text-sm">Scroll to explore</span>
      <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2 animate-pulse">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
      </div>
    </div>
  )
}
