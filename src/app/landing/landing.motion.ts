// export function initParallaxGlows(root: HTMLElement) {
//   const glows = Array.from(root.querySelectorAll('[data-glow]')) as HTMLElement[]
//   if (glows.length === 0) return () => {}
//   let raf = 0
//   let tx = 0, ty = 0
//   let x = 0, y = 0
//   const speed = 0.06
//   const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY }
//   const loop = () => {
//     x += (tx - x) * speed
//     y += (ty - y) * speed
//     const w = window.innerWidth
//     const h = window.innerHeight
//     const nx = (x / w - 0.5) * 2
//     const ny = (y / h - 0.5) * 2
//     glows.forEach((el) => {
//       const depth = el.dataset.glow === 'sky' ? 14 : el.dataset.glow === 'teal' ? 10 : 12
//       el.style.transform = `translate(${nx * depth}px, ${ny * depth}px)`
//     })
//     raf = requestAnimationFrame(loop)
//   }
//   window.addEventListener('mousemove', onMove)
//   raf = requestAnimationFrame(loop)
//   return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
// }

// export function initTilt(root: HTMLElement) {
//   const tiltEls = Array.from(root.querySelectorAll('[data-tilt]')) as HTMLElement[]
//   if (tiltEls.length === 0) return () => {}
//   const handlers: Array<() => void> = []
//   tiltEls.forEach((el) => {
//     const max = Number(el.getAttribute('data-tilt-max') || 8)
//     let raf = 0
//     const onMouseMove = (e: MouseEvent) => {
//       const rect = el.getBoundingClientRect()
//       const cx = rect.left + rect.width / 2
//       const cy = rect.top + rect.height / 2
//       const dx = (e.clientX - cx) / (rect.width / 2)
//       const dy = (e.clientY - cy) / (rect.height / 2)
//       cancelAnimationFrame(raf)
//       raf = requestAnimationFrame(() => {
//         el.style.transform = `rotateX(${-dy * max}deg) rotateY(${dx * max}deg)`
//       })
//     }
//     const onMouseLeave = () => { el.style.transform = 'rotateX(0deg) rotateY(0deg)' }
//     el.addEventListener('mousemove', onMouseMove)
//     el.addEventListener('mouseleave', onMouseLeave)
//     handlers.push(() => { el.removeEventListener('mousemove', onMouseMove); el.removeEventListener('mouseleave', onMouseLeave); cancelAnimationFrame(raf) })
//   })
//   return () => handlers.forEach(fn => fn())
// }

// export function initParallaxCards(root: HTMLElement) {
//   const containers = Array.from(root.querySelectorAll('[data-parallax-container]')) as HTMLElement[]
//   if (containers.length === 0) return () => {}
//   const disposers: Array<() => void> = []
//   containers.forEach((container) => {
//     const cards = Array.from(container.querySelectorAll('[data-parallax-card]')) as HTMLElement[]
//     if (cards.length === 0) return
//     let raf = 0
//     const onMouseMove = (e: MouseEvent) => {
//       const rect = container.getBoundingClientRect()
//       const nx = (e.clientX - rect.left) / rect.width - 0.5
//       const ny = (e.clientY - rect.top) / rect.height - 0.5
//       cancelAnimationFrame(raf)
//       raf = requestAnimationFrame(() => {
//         cards.forEach((el) => {
//           const depth = Number(el.getAttribute('data-depth') || 8)
//           el.style.transform = `translate3d(${nx * depth}px, ${ny * depth}px, 0)`
//         })
//       })
//     }
//     const onMouseLeave = () => {
//       cancelAnimationFrame(raf)
//       cards.forEach((el) => { el.style.transform = 'translate3d(0,0,0)' })
//     }
//     container.addEventListener('mousemove', onMouseMove)
//     container.addEventListener('mouseleave', onMouseLeave)
//     disposers.push(() => {
//       container.removeEventListener('mousemove', onMouseMove)
//       container.removeEventListener('mouseleave', onMouseLeave)
//       cancelAnimationFrame(raf)
//     })
//   })
//   return () => disposers.forEach(fn => fn())
// }

export function initParallaxGlows(root: HTMLElement) {
  const glows = Array.from(root.querySelectorAll('[data-glow]')) as HTMLElement[]
  if (glows.length === 0) return () => {}
  
  let raf = 0
  let tx = 0, ty = 0
  let x = 0, y = 0
  const speed = 0.08 // Slightly slower for smoother effect
  
  const onMove = (e: MouseEvent) => {
    tx = e.clientX
    ty = e.clientY
  }
  
  const loop = () => {
    x += (tx - x) * speed
    y += (ty - y) * speed
    const w = window.innerWidth
    const h = window.innerHeight
    const nx = (x / w - 0.5) * 2
    const ny = (y / h - 0.5) * 2
    
    glows.forEach((el) => {
      const glowType = el.dataset.glow
      let depth = 12
      
      // Adjust depth based on glow type for better visual hierarchy
      switch (glowType) {
        case 'cyan':
          depth = 16
          break
        case 'teal': 
          depth = 12
          break
        case 'green':
          depth = 8
          break
        default:
          depth = 10
      }
      
      // Add subtle rotation for more dynamic effect
      const rotation = (nx * ny) * 2
      el.style.transform = `translate(${nx * depth}px, ${ny * depth}px) rotate(${rotation}deg)`
    })
    
    raf = requestAnimationFrame(loop)
  }
  
  window.addEventListener('mousemove', onMove)
  raf = requestAnimationFrame(loop)
  
  return () => {
    window.removeEventListener('mousemove', onMove)
    cancelAnimationFrame(raf)
  }
}

export function initTilt(root: HTMLElement) {
  const tiltEls = Array.from(root.querySelectorAll('[data-tilt]')) as HTMLElement[]
  if (tiltEls.length === 0) return () => {}
  
  const handlers: Array<() => void> = []
  
  tiltEls.forEach((el) => {
    const max = Number(el.getAttribute('data-tilt-max') || 6)
    let raf = 0
    let isHovering = false
    
    const onMouseEnter = () => {
      isHovering = true
      el.style.transformStyle = 'preserve-3d'
    }
    
    const onMouseMove = (e: MouseEvent) => {
      if (!isHovering) return
      
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rotateY = dx * max
        const rotateX = -dy * max
        const scale = 1 + Math.abs(dx * dy) * 0.02 // Subtle scale effect
        
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
        
        // Add glow effect on hover
        el.style.boxShadow = `0 ${Math.abs(rotateX)}px ${Math.abs(rotateX) * 2}px rgba(13, 211, 176, ${Math.abs(dx * dy) * 0.2})`
      })
    }
    
    const onMouseLeave = () => {
      isHovering = false
      cancelAnimationFrame(raf)
      
      // Smooth return to original position
      el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease'
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
      el.style.boxShadow = '0 0 0 rgba(13, 211, 176, 0)'
      
      setTimeout(() => {
        el.style.transition = ''
      }, 500)
    }
    
    el.addEventListener('mouseenter', onMouseEnter)
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)
    
    handlers.push(() => {
      el.removeEventListener('mouseenter', onMouseEnter)
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(raf)
    })
  })
  
  return () => handlers.forEach(fn => fn())
}

export function initParallaxCards(root: HTMLElement) {
  const containers = Array.from(root.querySelectorAll('[data-parallax-container]')) as HTMLElement[]
  if (containers.length === 0) return () => {}
  
  const disposers: Array<() => void> = []
  
  containers.forEach((container) => {
    const cards = Array.from(container.querySelectorAll('[data-parallax-card]')) as HTMLElement[]
    if (cards.length === 0) return
    
    let raf = 0
    let isHovering = false
    
    const onMouseEnter = () => {
      isHovering = true
      container.style.perspective = '1000px'
    }
    
    const onMouseMove = (e: MouseEvent) => {
      if (!isHovering) return
      
      const rect = container.getBoundingClientRect()
      const nx = (e.clientX - rect.left) / rect.width - 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5
      
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        cards.forEach((el, index) => {
          const depth = Number(el.getAttribute('data-depth') || 8)
          const delay = index * 0.1 // Staggered movement
          const adjustedNx = nx * (1 + delay)
          const adjustedNy = ny * (1 + delay)
          
          // Add subtle rotation and scale
          const rotation = (adjustedNx * adjustedNy) * 5
          const scale = 1 + Math.abs(adjustedNx * adjustedNy) * 0.05
          
          el.style.transform = `
            translate3d(${adjustedNx * depth}px, ${adjustedNy * depth}px, 0) 
            rotateZ(${rotation}deg) 
            scale(${scale})
          `
          
          // Dynamic glow based on position
          const glowIntensity = Math.abs(adjustedNx * adjustedNy) * 0.3
          el.style.boxShadow = `0 0 ${glowIntensity * 20}px rgba(13, 211, 176, ${glowIntensity})`
        })
      })
    }
    
    const onMouseLeave = () => {
      isHovering = false
      cancelAnimationFrame(raf)
      
      cards.forEach((el, index) => {
        const delay = index * 50 // Staggered return animation
        
        setTimeout(() => {
          el.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s ease'
          el.style.transform = 'translate3d(0,0,0) rotateZ(0deg) scale(1)'
          el.style.boxShadow = '0 0 0 rgba(13, 211, 176, 0)'
          
          setTimeout(() => {
            el.style.transition = ''
          }, 600)
        }, delay)
      })
    }
    
    container.addEventListener('mouseenter', onMouseEnter)
    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mouseleave', onMouseLeave)
    
    disposers.push(() => {
      container.removeEventListener('mouseenter', onMouseEnter)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(raf)
    })
  })
  
  return () => disposers.forEach(fn => fn())
}

// Additional utility function for card hover effects
export function initCardHoverEffects(root: HTMLElement) {
  const cards = Array.from(root.querySelectorAll('.card-hover')) as HTMLElement[]
  if (cards.length === 0) return () => {}
  
  const handlers: Array<() => void> = []
  
  cards.forEach((card) => {
    const onMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      
      card.style.setProperty('--mouse-x', `${x}%`)
      card.style.setProperty('--mouse-y', `${y}%`)
    }
    
    card.addEventListener('mousemove', onMouseMove)
    handlers.push(() => {
      card.removeEventListener('mousemove', onMouseMove)
    })
  })
  
  return () => handlers.forEach(fn => fn())
}

// Smooth scroll utility
export function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]')
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const href = link.getAttribute('href')
      if (!href) return
      
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
}
