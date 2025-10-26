// path: src/components/Hero.tsx
import { motion } from 'framer-motion'
import { profile } from '../data/profile'


export function Hero(){
return (
<section className="relative isolate overflow-hidden py-16 sm:py-20">
{/* fondo decorativo */}
<div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
<div className="absolute -top-24 -left-24 size-[28rem] rounded-full bg-emerald-200 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 size-[28rem] rounded-full bg-emerald-300 blur-3xl"></div>
</div>


<div className="grid md:grid-cols-2 gap-10 items-center">
{/* Texto */}
<div>
<motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.4}}
className="text-4xl font-extrabold tracking-tight text-slate-900">
{profile.name}
</motion.h1>
<p className="mt-2 text-lg text-slate-700">Ingeniero Informático · Integraciones · Automatización · Desarrollo Web</p>
<p className="mt-4 text-slate-700 leading-relaxed">
Ingeniero Informático especializado en integración de sistemas, automatización de procesos y desarrollo de
soluciones empresariales y web. Experiencia en CNDES, AIM/ATX y proyectos de migración ERP, con foco en
eficiencia operativa, infraestructura sólida y transformación digital.
</p>
<div className="mt-6 flex flex-wrap gap-3">
<a href="/CV.pdf" className="px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">Descargar CV</a>
<a href="#projects" className="px-4 py-2 rounded-xl border border-slate-200 hover:border-emerald-300">Ver proyectos</a>
<a href="#contact" className="px-4 py-2 rounded-xl border border-slate-200 hover:border-emerald-300">Contacto</a>
</div>
</div>


{/* Avatar */}
<motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className="md:justify-self-end">
<div className="relative">
<div className="absolute -inset-3 -z-10 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-600 opacity-20 blur-2xl"></div>
<img src="/Avatar-1.png" alt="Jorge García" className="size-48 sm:size-56 rounded-full ring-4 ring-white shadow-lg object-cover" />
</div>
<ul className="mt-6 text-sm text-slate-700 space-y-2">
{profile.links.map((l)=> (
<li key={l.label}>
<a className="text-emerald-700 hover:underline" href={l.url} target="_blank">{l.label}</a>
</li>
))}
</ul>
</motion.div>
</div>
</section>
)
}