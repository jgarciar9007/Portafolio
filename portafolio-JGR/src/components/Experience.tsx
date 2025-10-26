// path: src/components/Experience.tsx
import { Section } from './Section'
import { experience } from '../data/experience'
import { motion } from 'framer-motion'


export function Experience(){
return (
<Section id="experience" title="Experiencia profesional">
<div className="relative pl-6">
{/* línea del timeline */}
<div className="absolute left-2 top-0 bottom-0 w-px bg-slate-200" />
<ul className="grid gap-6">
{experience.map((e, idx) => (
<motion.li
key={e.org+e.period}
initial={{opacity:0, y:8}}
whileInView={{opacity:1, y:0}}
viewport={{once:true, amount:0.6}}
transition={{duration:0.35, delay: idx*0.05}}
className="relative">
{/* nodo */}
<div className="absolute -left-[11px] top-2 size-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />


<article className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
<header className="flex flex-wrap items-baseline justify-between gap-2">
<h3 className="font-semibold text-slate-900">{e.role} · {e.org}</h3>
<span className="text-sm text-slate-500">{e.period}</span>
</header>
<ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
{e.bullets.map((b,i)=> <li key={i}>{b}</li>)}
</ul>
</article>
</motion.li>
))}
</ul>
</div>
</Section>
)
}