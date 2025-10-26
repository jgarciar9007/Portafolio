// path: src/components/Skills.tsx
import { Section } from './Section'
import { skills } from '../data/skills'


export function Skills(){
return (
<Section id="skills" title="Skills">
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
{skills.map(s => (
<div key={s.category} className="rounded-2xl border bg-white p-5">
<h3 className="font-semibold mb-2">{s.category}</h3>
<div className="flex flex-wrap gap-2">
{s.items.map((i)=> (
<span key={i} className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-slate-700 bg-slate-50">
{i}
</span>
))}
</div>
</div>
))}
</div>
</Section>
)
}