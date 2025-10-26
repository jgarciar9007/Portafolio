// path: src/components/Section.tsx
import { PropsWithChildren } from 'react'
export function Section({id, title, children}:{id:string, title:string} & PropsWithChildren){
return (
<section id={id} className="py-12 sm:py-16">
<h2 className="text-2xl font-bold tracking-tight mb-6 text-slate-900">{title}</h2>
{children}
</section>
)
}