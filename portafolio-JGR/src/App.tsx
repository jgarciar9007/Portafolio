// path: src/App.tsx
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


export default function App(){
return (
<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
<Header />
<main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<Hero />
<Experience />
<Projects />
<Skills />
<Contact />
</main>
<Footer />
</div>
)
}