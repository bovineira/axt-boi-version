'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type NebulaProps = {
  className?: string
}

export function Nebula({
  className,
}: NebulaProps) {
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden', className)}
    >
      {/* Fundo estrelado */}
      {Array.from({ length: 80 }).map((_, i) => {
        const size = Math.random() * 2 + 0.5
        const x = Math.random() * 100
        const y = Math.random() * 100
        const delay = Math.random() * 3
        const duration = Math.random() * 4 + 2
        
        return (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: size,
              height: size,
              left: `${x}%`,
              top: `${y}%`,
              background: Math.random() > 0.7 ? '#00f0ff' : '#ffffff',
              boxShadow: `0 0 ${size * 2}px ${Math.random() > 0.7 ? '#00f0ff' : '#ffffff'}`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
          />
        )
      })}

      {/* Camada externa da nebulosa - Azul escuro/luminoso */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 102, 255, 0.2) 30%, rgba(0, 150, 255, 0.25) 50%, rgba(0, 200, 255, 0.2) 70%, transparent 100%)',
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Camada média da nebulosa - Transição azul/ciano */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 150, 255, 0.15) 40%, rgba(0, 240, 255, 0.2) 60%, rgba(0, 255, 255, 0.15) 80%, transparent 100%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Anel interno brilhante - Azul/Ciano intenso */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '60%',
          height: '60%',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.5) 0%, rgba(0, 255, 255, 0.4) 30%, rgba(0, 200, 255, 0.3) 50%, rgba(0, 150, 255, 0.2) 70%, transparent 100%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Anel de gás brilhante interno - Mais intenso azul/ciano */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '40%',
          height: '40%',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.7) 0%, rgba(0, 255, 255, 0.6) 20%, rgba(0, 255, 136, 0.5) 40%, rgba(0, 200, 255, 0.4) 60%, transparent 90%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Buraco Negro Central - Fixo no centro */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 200,
          height: 200,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 70%, transparent 100%)',
          filter: 'blur(15px)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.85, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Estrela central no buraco negro (ponto de luz) */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 4,
          height: 4,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#00f0ff',
          boxShadow: '0 0 20px #00f0ff, 0 0 40px rgba(0, 240, 255, 0.5)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Anel de Accretion 1 - Interno */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 220,
          height: 220,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'conic-gradient(from 0deg, transparent 0%, rgba(0, 240, 255, 0.5) 15%, rgba(0, 255, 255, 0.6) 30%, rgba(0, 240, 255, 0.5) 45%, transparent 60%, rgba(0, 200, 255, 0.4) 75%, rgba(0, 150, 255, 0.5) 90%, transparent 100%)',
          filter: 'blur(8px)',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Anel de Accretion 2 - Médio */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 280,
          height: 280,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'conic-gradient(from 180deg, transparent 0%, rgba(0, 240, 255, 0.4) 20%, rgba(0, 255, 255, 0.5) 40%, rgba(0, 200, 255, 0.4) 60%, rgba(0, 150, 255, 0.45) 80%, transparent 100%)',
          filter: 'blur(10px)',
        }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Anel de Accretion 3 - Externo */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 350,
          height: 350,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'conic-gradient(from 180deg, transparent 0%, rgba(0, 150, 255, 0.3) 20%, rgba(0, 200, 255, 0.4) 40%, rgba(0, 240, 255, 0.3) 60%, rgba(0, 255, 255, 0.35) 80%, transparent 100%)',
          filter: 'blur(12px)',
        }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Efeito de distorção/gravidade ao redor do buraco negro */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, transparent 0%, rgba(0, 240, 255, 0.1) 30%, rgba(0, 255, 255, 0.08) 50%, rgba(0, 200, 255, 0.06) 70%, transparent 100%)',
          filter: 'blur(50px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Filamentos de gás - Estruturas detalhadas */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8
        const radius = 200 + Math.random() * 100
        
        return (
          <motion.div
            key={`filament-${i}`}
            className="absolute pointer-events-none"
            style={{
              width: 3,
              height: radius,
              left: '50%',
              top: '50%',
              transformOrigin: 'top center',
              background: `linear-gradient(to bottom, rgba(0, 240, 255, 0.5), rgba(0, 255, 255, 0.4), rgba(0, 200, 255, 0.3), transparent)`,
              filter: 'blur(2px)',
            }}
            animate={{
              rotate: [angle, angle + 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )
      })}

      {/* Partículas de poeira cósmica */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#00ffff' : '#0096ff',
            boxShadow: `0 0 ${Math.random() * 8 + 4}px ${i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#00ffff' : '#0096ff'}`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
            x: [0, (Math.random() - 0.5) * 50],
            y: [0, (Math.random() - 0.5) * 50],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
