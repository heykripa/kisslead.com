"use client"

import { useEffect, useRef, useState } from "react"

interface SquircleWrapperProps {
  children: React.ReactNode
  corner: "tl" | "tr"
  radius?: number
  className?: string
  smoothness?: number // 0 to 1 (0 = circle, 1 = max smoothness/squircle)
}

export function SquircleWrapper({
  children,
  corner,
  radius = 80,
  className = "",
  smoothness = 1,
}: SquircleWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [path, setPath] = useState("")

  useEffect(() => {
    const updatePath = () => {
      const el = containerRef.current
      if (!el) return

      const w = el.offsetWidth
      const h = el.offsetHeight
      const r = Math.min(radius, Math.min(w, h) / 2)
      
      // Control point offset for smoothness
      // Standard circle approx k = 0.55228475
      // For "squircle" feel, we want the curve to hug the corner more or less?
      // Apple's continuous corner uses a complex shape.
      // A simple approximation for a smoother corner is to extend the curve anchors.
      // Let's use a slightly modified bezier.
      // If smoothness is high, we want the curve to start further away but be sharper? 
      // No, smoother means the curvature change is gradual.
      // Let's stick to a standard nice squircle approximation.
      // One common way is using a larger "k" but constraining the start/end points.
      // Or simply using the "Squircle" path: M 0 R C 0 0, 0 0, R 0
      // That's a sharp corner.
      
      // Let's use a dual-curve approximation for better smoothness if needed, 
      // but for this task, a tuned single bezier is likely sufficient and faster.
      // A K value of ~0.6-0.7 gives a "superellipse" feel.
      const k = 0.55228475 + (smoothness * 0.1) // Adjust k slightly for "squarer" look if needed, or stick to circle?
      
      // Wait, user said "squircle smoothness" -> "reduce the roundness".
      // Usually squircle corners look "softer".
      // Let's generate the path string based on corner.
      
      // We will construct the path clockwise starting from Top-Left (or appropriate start).
      
      // TL Corner: (0,0)
      // Path: M 0 h L w h L w 0 (TR) L r 0 (Start of curve) C ... (Curve) ... L 0 r L 0 h (Close)
      
      let d = ""
      
      if (corner === "tl") {
        d = `
          M 0 ${h} 
          L ${w} ${h} 
          L ${w} 0 
          L ${r} 0 
          C 0 0, 0 0, 0 ${r}
          L 0 ${h} 
          Z
        `
        // Wait, C 0 0, 0 0, 0 r is a SHARP corner with 0 radius effectively if control points are at corner.
        // Standard Circle Corner at TL:
        // Start: (r, 0)
        // Control 1: (r - k*r, 0)
        // Control 2: (0, r - k*r) -> No, for TL (0,0), it's relative to corner?
        // Corner is at (0,0).
        // Start point on top edge: (r, 0).
        // End point on left edge: (0, r).
        // Control 1: (r - r*k, 0)
        // Control 2: (0, r - r*k)
        
        // Squircle "smoothness" often means using k approx 1 for the control points but keeping the start/end at r?
        // Actually, Apple's squircle is effectively a superellipse.
        // A nice approximation is just using a higher K?
        // If K=1, the curve goes via (0,0)? No.
        // Let's use the standard circle K but maybe the user just wants the "shape".
        
        // Actually, "svg based squircle" often refers to using a superellipse equation or a specific path.
        // Let's use the Figma-like smoothing logic approximation.
        // For simplicity and performance, I will use a standard rounded corner but implemented via path, 
        // effectively giving us the "SVG based" control.
        // If the user thinks "rounded-tl-[80px]" (CSS) was "too large" or "not smooth", 
        // maybe they want the corner to look *visually* smaller but smooth?
        // Or they want the "Squircle" shape which is visually *different*.
        
        // Let's implement the standard circle bezier for now, but editable.
        const cp = r * (1 - 0.55228) // Control point distance from corner?
        // Correct logic for TL corner (0,0):
        // Start: (r, 0)
        // C (r*0.4477) 0, 0 (r*0.4477), 0 r  (using 1-k)
        
        // To make it "squircle-like" (smoother transition), we can extend the handle.
        // Let's try k = 0.55 (Circle) vs k = 0.8 (Squircle-ish?). 
        // No, higher k makes it sharper (closer to corner).
        // Lower k makes it flatter (diamond).
        // Wait, C cp1x cp1y, cp2x cp2y, x y
        // Control 1 is (r-d, 0). Control 2 is (0, r-d).
        // If d is small (handle long), the curve stays close to the edge longer -> sharper corner?
        // No, longer handle = curve bulges *out* towards the corner.
        // So for "squircle" (which fills more of the corner than a circle), we need LONGER handles.
        // So `1 - k` should be SMALLER?
        // Circle k ~= 0.55.
        // Squircle k ~= ? 
        // Let's use a "smooth" factor.
        
        const handleLen = r * 0.65 // 0.55 is circle. 0.65 is squarer/squircle.
        
        d = `M 0 ${h} L ${w} ${h} L ${w} 0 L ${r} 0 C ${r - handleLen} 0, 0 ${r - handleLen}, 0 ${r} L 0 ${h} Z`
      } else if (corner === "tr") {
        // TR Corner: (w, 0)
        const handleLen = r * 0.65
        
        d = `M 0 0 L ${w - r} 0 C ${w - r + handleLen} 0, ${w} ${r - handleLen}, ${w} ${r} L ${w} ${h} L 0 ${h} Z`
      }

      setPath(d.replace(/\s+/g, " ").trim())
    }

    updatePath()
    
    const observer = new ResizeObserver(updatePath)
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [corner, radius, smoothness])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        clipPath: path ? `path('${path}')` : undefined,
        WebkitClipPath: path ? `path('${path}')` : undefined, // Safari support
      }}
    >
      {children}
    </div>
  )
}
