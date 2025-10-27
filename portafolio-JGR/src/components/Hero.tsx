// Sección principal (Hero).
// - Fondo decorativo con blobs verde esmeralda.
// - Título animado con AnimatedTitle.
// - Párrafo justificado, margen interno extra y CTA con descarga de CV.
// - Avatar circular con halo sutil.
// Requiere: colocar /public/Avatar-1.png y /public/CV.pdf

import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { AnimatedTitle } from "./AnimatedTitle";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden py-6 sm:py-10 px-4 sm:px-8">
      {/* Fondo decorativo: blobs con máscara radial para un degradado suave */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 mask-[radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute -top-24 -left-24 size-112 rounded-full bg-emerald-200 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 size-112 rounded-full bg-emerald-300 blur-3xl" />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Columna de texto */}
        <div>
          {/* Título animado: nombre completo */}
          <AnimatedTitle text={profile.name} />

          {/* Subtítulo */}
          <p className="mt-2 text-lg text-slate-700">
            Ingeniero Informático · Integraciones · Automatización · Desarrollo Web
          </p>

          {/* Descripción justificada con más separación del borde */}
          <p className="mt-5 text-slate-700 leading-relaxed text-justify">
            Ingeniero Informático especializado en integración de sistemas, automatización
            de procesos y desarrollo de soluciones empresariales y web. Experiencia en CNDES,
            AIM/ATX y proyectos de migración ERP, con foco en eficiencia operativa,
            infraestructura sólida y transformación digital.
          </p>

          {/* Llamadas a la acción: descarga directa del CV y navegación a secciones */}
          <div className="mt-8 flex flex-wrap gap-3">
            {/* El atributo download fuerza la descarga de /public/CV.pdf */}
            <a
              href="/CV.pdf"
              download
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow-md transition"
            >
              Descargar CV
            </a>
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-xl border border-slate-200 hover:border-emerald-300"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl border border-slate-200 hover:border-emerald-300"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Columna de avatar con halo animado sutil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:justify-self-end"
        >
          <div className="relative">
            {/* Halo suave detrás del avatar */}
            <div className="absolute -inset-3 -z-10 rounded-full bg-linear-to-tr from-emerald-400 to-emerald-600 opacity-20 blur-2xl" />
            <img
              src="/Avatar-1.png"
              alt="Jorge García Rodríguez"
              className="size-48 sm:size-56 rounded-full ring-4 ring-white shadow-lg object-cover"
            />
          </div>

          {/* Enlaces rápidos (GitHub, LinkedIn, etc) */}
          <ul className="mt-6 text-sm text-slate-700 space-y-2">
            {profile.links.map((l) => (
              <li key={l.label}>
                <a className="text-emerald-700 hover:underline" href={l.url} target="_blank">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
