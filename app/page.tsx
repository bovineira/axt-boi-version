'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { InteractiveNebulaShader } from '@/components/ui/liquid-shader'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock'
import { Facebook, Music2, Instagram } from 'lucide-react'

// Componente wrapper para animações elegantes no scroll
const ScrollAnimation = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] // easing suave e elegante
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Componente de Background com efeitos de luz
const BackgroundLights = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-blue-950" />
      
      {/* Pontos de luz grandes */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-60 right-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Partículas menores */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full blur-sm" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-400 rounded-full blur-sm" />
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-cyan-300 rounded-full blur-sm" />
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-emerald-300 rounded-full blur-sm" />
      
      {/* Linhas de gradiente */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </div>
  )
}

// Componente Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 glass transition-all duration-300 ${
        scrolled ? 'bg-black/60' : 'bg-black/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/LOGO.png" 
              alt="Nebula Contingency Ads" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Links Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#produtos" className="text-gray-300 hover:text-cyan-400 transition-colors">Produtos</a>
            <a href="#contas" className="text-gray-300 hover:text-cyan-400 transition-colors">Contas de Ads</a>
            <a href="#instagram" className="text-gray-300 hover:text-cyan-400 transition-colors">Turbinar Instagram</a>
            <a href="#comunidade" className="text-gray-300 hover:text-cyan-400 transition-colors">Comunidade</a>
            <a href="#como-funciona" className="text-gray-300 hover:text-cyan-400 transition-colors">Como funciona</a>
            <a href="#faq" className="text-gray-300 hover:text-cyan-400 transition-colors">FAQ</a>
          </div>

          {/* Botão CTA Desktop */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg glow-cyan transition-all"
            >
              Falar com o time
            </motion.button>
          </div>

          {/* Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile Overlay */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-6 space-y-4"
          >
            <a href="#produtos" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>Produtos</a>
            <a href="#contas" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>Contas de Ads</a>
            <a href="#instagram" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>Turbinar Instagram</a>
            <a href="#comunidade" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>Comunidade</a>
            <a href="#como-funciona" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>Como funciona</a>
            <a href="#faq" className="block text-gray-300 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>FAQ</a>
            <button className="w-full px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg glow-cyan">
              Falar com o time
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

// Componente Hero
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Nebulosa Shader - Cores escuras com pouca luminosidade azul */}
      <InteractiveNebulaShader className="z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-glow">Contas blindadas</span> para sua mídia paga nunca parar.
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Contas de Google Ads, Meta Ads e TikTok Ads para contingência, com proxies residenciais inclusos, suporte de especialistas e entrega rápida.
            </p>
            
            <ul className="space-y-4">
              {[
                { text: 'Contas prontas para rodar em alto volume', icon: '🚀' },
                { text: 'Proxies residenciais já configurados', icon: '🌐' },
                { text: 'Menos risco de ban, mais estabilidade', icon: '🛡️' },
                { text: 'Onboarding guiado pelo nosso time', icon: '👥' }
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1, type: 'spring', stiffness: 200 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-md animate-pulse" />
                    <div className="relative w-6 h-6 flex items-center justify-center text-lg filter drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
                      {item.icon}
                    </div>
                  </motion.div>
                  <span className="text-gray-300">{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold rounded-lg glow-cyan text-lg"
              >
                Quero contas de contingência
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all"
              >
                Ver todos os produtos
              </motion.button>
            </div>
          </motion.div>

          {/* Coluna Direita - Visual Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 glow-cyan neon-border neon-border-glow relative overflow-hidden">
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { 
                    name: 'Google Ads', 
                    icon: (
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Meta Ads', 
                    icon: (
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'TikTok Ads', 
                    icon: (
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    )
                  }
                ].map((platform, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-sm font-medium text-cyan-300 flex items-center space-x-2"
                  >
                    <span className="text-white filter drop-shadow-[0_0_4px_rgba(0,240,255,0.8)]">{platform.icon}</span>
                    <span>{platform.name}</span>
                  </span>
                ))}
              </div>
              
              <div className="space-y-4">
                {[
                  { 
                    name: 'Google Ads', 
                    status: 'Ativa', 
                    color: 'emerald', 
                    icon: (
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Meta Ads', 
                    status: 'Pronta para usar', 
                    color: 'cyan', 
                    icon: (
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'TikTok Ads', 
                    status: 'Ativa', 
                    color: 'emerald', 
                    icon: (
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    )
                  }
                ].map((account, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-cyan-500/20">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        account.color === 'emerald' ? 'bg-emerald-400 glow-emerald' : 'bg-cyan-400 glow-cyan'
                      }`} />
                      <span className="text-white filter drop-shadow-[0_0_4px_rgba(0,240,255,0.6)]">{account.icon}</span>
                      <span className="text-white font-medium">{account.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{account.status}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-lg border border-cyan-500/30">
                <p className="text-sm text-gray-300">
                  <span className="text-cyan-400 font-semibold">Status:</span> Todas as contas verificadas e operacionais
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Seção Escolha de Plataforma
const PlatformSelector = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/10">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-glow">
            Escolha sua plataforma
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Selecione a conta de contingência que você precisa
          </p>
        </ScrollAnimation>

        <div className="flex justify-center">
          <Dock className="items-end pb-3">
            {[
              {
                title: 'Google Ads',
                icon: (
                  <svg className="h-full w-full text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                ),
                gradient: 'from-blue-500/20 via-cyan-500/20 to-blue-500/20',
                borderColor: 'border-blue-500/50',
                onClick: () => {
                  const element = document.getElementById('produtos')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }
              },
              {
                title: 'Meta Ads',
                icon: (
                  <svg className="h-full w-full text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ),
                gradient: 'from-blue-500/20 via-cyan-500/20 to-emerald-500/20',
                borderColor: 'border-cyan-500/50',
                onClick: () => {
                  const element = document.getElementById('produtos')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }
              },
              {
                title: 'TikTok Ads',
                icon: (
                  <svg className="h-full w-full text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                ),
                gradient: 'from-cyan-500/20 via-emerald-500/20 to-cyan-500/20',
                borderColor: 'border-emerald-500/50',
                onClick: () => {
                  const element = document.getElementById('produtos')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }
              },
              {
                title: 'Instagram',
                icon: <Instagram className="h-full w-full text-white" />,
                gradient: 'from-purple-500/20 via-pink-500/20 to-orange-500/20',
                borderColor: 'border-pink-500/50',
                onClick: () => {
                  const element = document.getElementById('produtos')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }
              }
            ].map((item, idx) => (
              <DockItem
                key={idx}
                onClick={() => {
                  item.onClick()
                }}
                className={`aspect-square rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-xl border ${item.borderColor} glass relative overflow-hidden touch-none`}
              >
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            ))}
          </Dock>
        </div>
      </div>
    </section>
  )
}

// Faixa de Credibilidade
const CredibilityBar = () => {
  const items = [
    { icon: '🔒', text: 'Proxies residenciais inclusos' },
    { icon: '✅', text: 'Contas verificadas e testadas' },
    { icon: '👥', text: 'Suporte humano e onboarding' },
    { icon: '💬', text: 'Comunidade privada para clientes' }
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-cyan-500/20 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center space-y-2 transition-all duration-300"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                  className="text-3xl mb-2 inline-block"
                >
                  {item.icon}
                </motion.div>
                <p className="text-sm text-gray-300">{item.text}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

// Seção de Produtos
const Products = () => {
  const products = [
    {
      title: 'Contas Google Ads para Contingência',
      badge: 'Proxies residenciais inclusos',
      tag: 'Mais vendido',
      description: 'Contas preparadas para contingência, ideais para quem escala campanhas em alto volume.',
      features: [
        'Contas verificadas e aquecidas',
        'Proxies residenciais já configurados',
        'Suporte na configuração inicial'
      ],
      cta: 'Solicitar Google Ads',
      glow: 'cyan'
    },
    {
      title: 'Contas Meta Ads para Contingência',
      badge: 'Facebook / Instagram Ads',
      description: 'Contas estáveis para Facebook e Instagram Ads, com aquecimento prévio e alta taxa de aprovação.',
      features: [
        'Contas aquecidas e testadas',
        'Foco em estabilidade e longevidade',
        'Onboarding completo incluído'
      ],
      cta: 'Solicitar Meta Ads',
      glow: 'blue'
    },
    {
      title: 'Contas TikTok Ads',
      badge: 'Tráfego pago no TikTok',
      description: 'Contas configuradas para tráfego pago no TikTok, prontas para escala e ideais para criadores e dropshipping.',
      features: [
        'Otimizadas para criadores',
        'Ideal para dropshipping',
        'Alta performance em conversão'
      ],
      cta: 'Solicitar TikTok Ads',
      glow: 'emerald'
    },
    {
      title: 'Turbinar Instagram',
      badge: 'Seguidores para credibilidade',
      description: 'Impulsione a percepção de autoridade do seu perfil com crescimento de seguidores e métricas sociais.',
      features: [
        'Melhora de prova social',
        'Aumento de credibilidade',
        'Ideal para lançamentos'
      ],
      cta: 'Quero turbinar meu Instagram',
      glow: 'cyan'
    }
  ]

  return (
    <section id="produtos" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-glow">Nossos principais produtos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tudo que você precisa para manter suas campanhas rodando sem parar.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.15}>
              <motion.div
                whileHover={{ scale: 1.02, y: -8, rotateY: 2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`glass rounded-2xl p-8 relative overflow-hidden transition-all duration-500 ${
                  product.glow === 'cyan' 
                    ? 'border border-cyan-500/30 glow-cyan' 
                    : product.glow === 'blue'
                    ? 'border border-blue-500/30 glow-blue'
                    : 'border border-emerald-500/30 glow-emerald'
                }`}
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
              {product.tag && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/30 border border-emerald-500/50 rounded-full text-xs font-semibold text-emerald-300">
                  {product.tag}
                </div>
              )}
              
              <div className="mb-4">
                <span className="text-sm text-cyan-400 font-medium">{product.badge}</span>
                <h3 className="text-2xl font-bold mt-2 mb-3">{product.title}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center space-x-2 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg transition-all ${
                  product.glow === 'cyan' 
                    ? 'glow-cyan' 
                    : product.glow === 'blue'
                    ? 'glow-blue'
                    : 'glow-emerald'
                }`}
              >
                {product.cta}
              </motion.button>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

// Seção Como Funciona
const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Você escolhe o tipo de conta que precisa',
      description: 'Selecione entre Google Ads, Meta Ads ou TikTok Ads conforme sua necessidade de contingência.'
    },
    {
      number: '02',
      title: 'Fazemos uma validação rápida do seu cenário',
      description: 'Nossa equipe analisa seu caso e garante que a solução seja a ideal para você.'
    },
    {
      number: '03',
      title: 'Entregamos a conta com proxies e instruções',
      description: 'Receba tudo pronto: conta configurada, proxies residenciais e guia completo de uso.'
    },
    {
      number: '04',
      title: 'Você entra na comunidade e recebe suporte contínuo',
      description: 'Acesso imediato ao grupo privado e suporte contínuo da nossa equipe de especialistas.'
    }
  ]

  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-glow">Como funciona na prática</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Um processo simples e rápido para você ter suas contas de contingência funcionando.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.15} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" style={{ width: 'calc(100% - 4rem)' }} />
              )}
              <div className="glass rounded-2xl p-6 border border-cyan-500/30 h-full relative">
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="text-5xl font-bold text-cyan-400/30 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

// Seção Comunidade
const Community = () => {
  return (
    <section id="comunidade" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-glow">Comunidade Nebula</h2>
            <p className="text-xl text-gray-300">
              Entre em um grupo de operadores de mídia que vivem contingência todos os dias.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Como cliente, você tem acesso exclusivo a:
            </p>
            <ul className="space-y-4">
              {[
                'Grupo privado no Discord com operadores experientes',
                'Atualizações em tempo real sobre estratégias de contingência',
                'Alertas sobre novos riscos e bloqueios de plataformas',
                'Materiais exclusivos e guias avançados',
                'Networking com outros profissionais do setor'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full glow-emerald mt-2 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2} className="glass rounded-2xl p-8 border border-cyan-500/30 glow-cyan">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <div>
                  <p className="font-semibold">Nebula Community</p>
                  <p className="text-sm text-gray-400">Grupo privado • 1.2k membros</p>
                </div>
              </div>

              {[
                { name: 'Maria Silva', message: 'Acabei de receber minha conta Google Ads. Processo super rápido!', time: '2h' },
                { name: 'João Santos', message: 'Os proxies residenciais estão funcionando perfeitamente. Valeu muito a pena!', time: '5h' },
                { name: 'Ana Costa', message: 'Alguém já testou com TikTok Ads? Quero saber a experiência.', time: '1d' }
              ].map((msg, idx) => (
                <div key={idx} className="p-4 bg-black/30 rounded-lg border border-cyan-500/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-cyan-500/30 rounded-full" />
                    <span className="text-sm font-medium text-cyan-300">{msg.name}</span>
                    <span className="text-xs text-gray-500">• {msg.time}</span>
                  </div>
                  <p className="text-sm text-gray-300">{msg.message}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

// Seção Turbinar Instagram
const InstagramBoost = () => {
  return (
    <section id="instagram" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-slate-950 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyan-500/5" />
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-glow">Turbine o Instagram do seu negócio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Impulsione a percepção de autoridade do seu perfil com crescimento de seguidores e métricas sociais. 
            Ideal para lançadores, infoprodutores, e-commerces e negócios locais que precisam parecer mais sólidos desde o primeiro contato.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { title: 'Prova social mais forte', description: 'Perfis com mais seguidores geram mais confiança instantaneamente.' },
            { title: 'Perfil mais atrativo', description: 'Aumente a atratividade do seu perfil para novos visitantes.' },
            { title: 'Maior confiança de novos visitantes', description: 'Primeira impressão é fundamental no mundo digital.' }
          ].map((benefit, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.15}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 border border-cyan-500/30 text-center transition-all duration-300"
              >
              <h3 className="text-xl font-bold mb-3 text-cyan-400">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.3} className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold rounded-lg glow-cyan text-lg"
          >
            Quero impulsionar meu perfil agora
          </motion.button>
        </ScrollAnimation>
      </div>
    </section>
  )
}

// Seção Diferenciais
const Differentiators = () => {
  const items = [
    {
      icon: '🚀',
      title: 'Especialistas em contingência',
      description: 'Nossa equipe vive e respira mídia paga há anos, entendendo profundamente os desafios de escala.'
    },
    {
      icon: '🌐',
      title: 'Infra com proxies residenciais',
      description: 'Não trabalhamos com proxies datacenter. Apenas proxies residenciais de alta qualidade, inclusos em todas as contas.'
    },
    {
      icon: '⚡',
      title: 'Foco em long-term, não em gambiarras',
      description: 'Nossas soluções são pensadas para durar. Não vendemos contas que vão quebrar em semanas.'
    },
    {
      icon: '💬',
      title: 'Suporte humano e comunidade ativa',
      description: 'Você não está sozinho. Suporte direto da equipe e acesso a uma comunidade de operadores experientes.'
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-glow">Por que escolher a Nebula</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Diferenciais que fazem a diferença na hora de proteger suas campanhas.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.15}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5, rotateY: 2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass rounded-2xl p-6 border border-cyan-500/30 text-center transition-all duration-300 relative"
              >
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

// Seção FAQ
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Por quanto tempo a conta fica garantida?',
      answer: 'Nossas contas são preparadas para uso de longo prazo. Oferecemos garantia de estabilidade e suporte contínuo enquanto você for cliente. Caso ocorra algum problema relacionado à qualidade da conta, trabalhamos para resolver rapidamente.'
    },
    {
      question: 'Como funcionam os proxies residenciais?',
      answer: 'Os proxies residenciais são incluídos e já configurados nas contas. Eles simulam conexões residenciais reais, reduzindo significativamente o risco de detecção pelas plataformas. Todos os proxies são de alta qualidade e rotacionados automaticamente.'
    },
    {
      question: 'Preciso ter experiência com mídia paga?',
      answer: 'Não é obrigatório, mas recomendamos conhecimento básico. Oferecemos onboarding completo e suporte da nossa equipe para ajudar na configuração inicial. Além disso, nossa comunidade é um ótimo lugar para aprender com outros operadores.'
    },
    {
      question: 'Vocês oferecem suporte na configuração inicial?',
      answer: 'Sim! Todo cliente recebe um onboarding guiado pela nossa equipe. Ajudamos na configuração inicial, explicamos como usar os proxies e damos todas as orientações necessárias para você começar a rodar suas campanhas com segurança.'
    },
    {
      question: 'É possível usar as contas em qualquer nicho?',
      answer: 'Sim, nossas contas são versáteis e podem ser usadas em diversos nichos. No entanto, recomendamos sempre seguir as políticas das plataformas e usar boas práticas de anúncios. Nossa equipe pode ajudar a avaliar se seu nicho específico tem algum risco adicional.'
    }
  ]

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-glow">Perguntas frequentes</h2>
          <p className="text-xl text-gray-300">
            Tire suas dúvidas sobre nossas contas de contingência.
          </p>
        </ScrollAnimation>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01, x: 5 }}
                className="glass rounded-xl border border-cyan-500/30 overflow-hidden transition-all duration-300"
              >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-cyan-500/5 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-cyan-400 transition-transform flex-shrink-0 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-4 text-gray-300 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Final
const FinalCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-emerald-500/20 to-blue-500/20 blur-3xl" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <ScrollAnimation className="space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-glow">
            Pronto para blindar suas campanhas?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fale com nosso time e descubra a melhor solução de contingência para o seu negócio.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold rounded-lg glow-cyan text-xl"
          >
            Falar com o time agora
          </motion.button>
        </ScrollAnimation>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full glow-cyan" />
              <span className="text-xl font-bold">Nebula Contingency Ads</span>
            </div>
            <p className="text-sm text-gray-400">
              Contas e infraestrutura para sua mídia paga não parar.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#produtos" className="hover:text-cyan-400 transition-colors">Produtos</a></li>
              <li><a href="#comunidade" className="hover:text-cyan-400 transition-colors">Comunidade</a></li>
              <li><a href="#como-funciona" className="hover:text-cyan-400 transition-colors">Como funciona</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Termos de uso</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Política de privacidade</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-cyan-500/20 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Nebula Contingency Ads. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// Componente Principal
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundLights />
      <Navbar />
      <Hero />
      <PlatformSelector />
      <CredibilityBar />
      <Products />
      <HowItWorks />
      <Community />
      <InstagramBoost />
      <Differentiators />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

