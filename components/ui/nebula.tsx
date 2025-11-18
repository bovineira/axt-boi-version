'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, useSpring, useTransform, SpringOptions, MotionValue } from 'framer-motion'
import { cn } from '@/lib/utils'

type NebulaProps = {
  className?: string
  intensity?: number
  springOptions?: SpringOptions
}

// Componente separado para o anel de accretion com rotação
function AnimatedAccretionRing({ 
  blackHoleX, 
  blackHoleY, 
  isHovered 
}: { 
  blackHoleX: MotionValue<number>
  blackHoleY: MotionValue<number>
  isHovered: boolean
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: 250,
        height: 250,
        left: blackHoleX,
        top: blackHoleY,
        transform: 'translate(-50%, -50%)',
        background: 'conic-gradient(from 0deg, transparent, #00f0ff, #00ff88, #0066ff, #00f0ff, transparent)',
        filter: 'blur(15px)',
        opacity: isHovered ? 0.6 : 0.3,
      }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}

export function Nebula({
  className,
  intensity = 1,
  springOptions = { stiffness: 150, damping: 15 },
}: NebulaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const mouseX = useSpring(0, springOptions)
  const mouseY = useSpring(0, springOptions)

  const blackHoleX = useTransform(mouseX, (x) => x)
  const blackHoleY = useTransform(mouseY, (y) => y)

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      mouseX.set(x)
      mouseY.set(y)
      setMousePosition({ x, y })
    },
    [mouseX, mouseY]
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseenter', () => setIsHovered(true))
    container.addEventListener('mouseleave', () => setIsHovered(false))

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseenter', () => setIsHovered(true))
      container.removeEventListener('mouseleave', () => setIsHovered(false))
    }
  }, [handleMouseMove])

  return (
    <div
      ref={containerRef}
      className={cn('absolute inset-0 overflow-hidden', className)}
    >
      {/* Buraco Negro Central */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 200,
          height: 200,
          left: blackHoleX,
          top: blackHoleY,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 40%, transparent 70%)',
          filter: 'blur(20px)',
          opacity: isHovered ? 0.8 : 0.4,
        }}
      />

      {/* Anel de Accretion */}
      <AnimatedAccretionRing
        blackHoleX={blackHoleX}
        blackHoleY={blackHoleY}
        isHovered={isHovered}
      />

      {/* Nebulosa Base - Camada 1 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 30%, rgba(0, 240, 255, 0.3) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 70%, rgba(0, 255, 136, 0.3) 0%, transparent 50%)',
            'radial-gradient(ellipse at 50% 50%, rgba(0, 102, 255, 0.3) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 30%, rgba(0, 240, 255, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          filter: 'blur(60px)',
        }}
      />

      {/* Nebulosa Base - Camada 2 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(ellipse at 70% 20%, rgba(0, 255, 136, 0.25) 0%, transparent 45%)',
            'radial-gradient(ellipse at 30% 80%, rgba(0, 102, 255, 0.25) 0%, transparent 45%)',
            'radial-gradient(ellipse at 60% 40%, rgba(0, 240, 255, 0.25) 0%, transparent 45%)',
            'radial-gradient(ellipse at 70% 20%, rgba(0, 255, 136, 0.25) 0%, transparent 45%)',
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          filter: 'blur(80px)',
        }}
      />

      {/* Partículas de Luz */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#00ff88' : '#0066ff',
            boxShadow: `0 0 ${Math.random() * 10 + 5}px ${i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#00ff88' : '#0066ff'}`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Efeito de Distorção ao redor do buraco negro */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 300,
          height: 300,
          left: blackHoleX,
          top: blackHoleY,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, transparent 0%, rgba(0, 240, 255, 0.1) 50%, transparent 100%)',
          filter: 'blur(30px)',
          opacity: isHovered ? 0.5 : 0.2,
        }}
      />
    </div>
  )
}
