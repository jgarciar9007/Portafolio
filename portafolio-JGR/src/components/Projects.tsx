// path: src/components/Projects.tsx
import { Section } from './Section'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'


export function Projects(){
return (
<Section id="projects" title="Proyectos seleccionados">
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
{projects.map((p, idx) => (
<motion.a
key={p.name}
href={p.url}
target={p.url?.startsWith('#') ? undefined : '_blank'}
initial={{opacity:0, y:8}}
whileInView={{opacity:1, y:0}}
viewport={{once:true, amount:0.4}}
transition={{duration:0.35, delay: idx*0.05}}
className="group rounded-2xl border bg-white p-5 hover:shadow-lg transition">
<div className="aspect-video w-full rounded-xl bg-linear-to-br from-slate-100 to-slate-50 mb-3 grid place-items-center text-slate-400 text-sm">
preview
</div>
<h3 className="font-semibold text-slate-900 group-hover:text-emerald-700">{p.name}</h3>
<p className="mt-1 text-sm text-slate-600">{p.desc}</p>
<p className="mt-2 text-xs text-slate-500">{p.stack.join(' · ')}</p>
</motion.a>
))}
</div>
</Section>
)
}