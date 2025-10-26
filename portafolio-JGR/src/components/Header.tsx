// path: src/components/Header.tsx
import { useEffect, useState } from 'react'


export function Header(){
const [scrolled, setScrolled] = useState(false)
useEffect(()=>{
const onScroll = () => setScrolled(window.scrollY > 8)
onScroll();
window.addEventListener('scroll', onScroll)
return () => window.removeEventListener('scroll', onScroll)
},[])
return (
<header className={`sticky top-0 z-50 backdrop-blur bg-white/70 border-b transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
<div className="mx-auto max-w-6xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
<a href="#" className="font-extrabold tracking-tight text-emerald-600 text-lg">Jorge García</a>
<nav className="hidden md:flex gap-6 text-sm">
<a href="#experience" className="hover:text-emerald-600">Experiencia</a>
<a href="#projects" className="hover:text-emerald-600">Proyectos</a>
<a href="#skills" className="hover:text-emerald-600">Skills</a>
<a href="#contact" className="hover:text-emerald-600">Contacto</a>
</nav>
<a href="#contact" className="hidden sm:inline-flex px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-sm hover:bg-emerald-700">Hablemos</a>
</div>
</header>
)
}