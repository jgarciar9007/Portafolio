// path: src/components/Contact.tsx
// Sección de contacto con 3 columnas: Teléfonos, Correos y Redes sociales.
// Añadido botón/enlace de WhatsApp con ícono verde.
// Requiere: npm i lucide-react

import { Section } from "./Section";
import {
  Phone,
  Mail,
  Globe,
  Linkedin,
  Youtube,
  Facebook,
  MessageCircle,
} from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" title="Datos de Contacto">
      <div className="rounded-2xl border bg-linear-to-br from-white to-slate-50 shadow-md p-6 sm:p-8">
        {/* Primera fila: teléfonos, correos y redes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Teléfonos */}
          <div>
            <h3 className="flex items-center gap-2 text-emerald-700 font-semibold mb-3">
              <Phone size={18} /> Teléfonos
            </h3>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>📱 +240 222 726 749</li>
              <li>📞 +240 555 660 776</li>
              <li>📲 +53 5860 1967</li>
            </ul>

            {/* Enlace a WhatsApp */}
            <div className="mt-3">
              <a
                href="https://wa.me/240222726749"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-green-700 hover:bg-green-100 hover:border-green-300 transition text-sm font-medium"
              >
                <MessageCircle size={16} /> Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* Correos */}
          <div>
            <h3 className="flex items-center gap-2 text-emerald-700 font-semibold mb-3">
              <Mail size={18} /> Correo electrónico
            </h3>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>
                <a
                  href="mailto:jgarcia9007@outlook.com"
                  className="hover:text-emerald-700 transition"
                >
                  jgarcia9007@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:jgrdguez9007@gmail.com"
                  className="hover:text-emerald-700 transition"
                >
                  jgrdguez9007@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="flex items-center gap-2 text-emerald-700 font-semibold mb-3">
              Conecta conmigo
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
              >
                <Linkedin size={18} /> LinkedIn
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-slate-700 hover:bg-red-50 hover:text-red-600 transition"
              >
                <Youtube size={18} /> YouTube
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                <Facebook size={18} /> Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Segunda fila: sitio web */}
        <div className="mt-8 border-t pt-4">
          <h3 className="flex items-center gap-2 text-emerald-700 font-semibold mb-2">
            <Globe size={18} /> Sitio web
          </h3>
          <a
            href="https://jorge-garcia-rodriguez.netlify.app/"
            target="_blank"
            className="text-slate-700 hover:text-emerald-700 text-sm transition break-all"
          >
            https://jorge-garcia-rodriguez.netlify.app/
          </a>
        </div>
      </div>
    </Section>
  );
}
