// Componente de título animado letra a letra usando Framer Motion.
// Efecto: cada letra “cae” y se asienta con resorte. Al pasar el mouse, sube 2px.
import { motion } from "framer-motion";

export function AnimatedTitle({ text }: { text: string }) {
  // Convertimos el texto en un array de caracteres para animarlos de forma independiente
  const letters = Array.from(text);

  // Variantes del contenedor: controla el escalonamiento entre hijos
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.035 } },
  };

  // Variantes de cada letra: posición inicial arriba y leve rotación, cae con efecto resorte
  const child = {
    hidden: { opacity: 0, y: -20, rotate: -5 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 600, damping: 20 },
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="text-4xl font-extrabold tracking-tight text-slate-900 flex flex-wrap"
    >
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          variants={child}
          whileHover={{ y: -2, rotate: 2 }}
          className="inline-block"
        >
          {/* Sustituimos espacios por &nbsp; para que no colapsen */}
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.h1>
  );
}
