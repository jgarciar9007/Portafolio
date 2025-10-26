// path: src/components/Contact.tsx
import { Section } from './Section'


export function Contact(){
return (
<Section id="contact" title="Contacto">
<form name="contact" method="POST" data-netlify="true" className="max-w-xl grid gap-3 rounded-2xl border bg-white p-5 shadow-sm">
<input type="hidden" name="form-name" value="contact" />
<label className="text-sm">Nombre
<input name="name" placeholder="Tu nombre" required className="mt-1 w-full border rounded-xl p-3" />
</label>
<label className="text-sm">Email
<input name="email" type="email" placeholder="tu@email.com" required className="mt-1 w-full border rounded-xl p-3" />
</label>
<label className="text-sm">Mensaje
<textarea name="message" placeholder="Cuéntame sobre tu proyecto" required className="mt-1 w-full border rounded-xl p-3 h-32" />
</label>
<button className="justify-self-start px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">Enviar</button>
</form>
</Section>
)
}