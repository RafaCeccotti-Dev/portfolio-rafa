import { useEffect, useState } from "react"
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaPaperPlane,
  FaJava,
  FaDatabase,
  FaExternalLinkAlt,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import {
  SiC,
  SiCss,
  SiDotnet,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si"

import imgCeresito from "./assets/projects/ceresito.png"
import imgDashboard from "./assets/projects/dashboard.png"
import imgCeresenred from "./assets/projects/ceresenred.png"
import imgTorneo from "./assets/projects/torneo.png"

const CAPABILITIES = [
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "C#", icon: SiDotnet, color: "#512BD4" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "SQL Server", icon: FaDatabase, color: "#CC2927" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
]

const TORNEO_URL = "https://torneo-ardillitas.vercel.app"

const PROJECTS = [
  {
    id: "stock",
    title: "Sistema de Stock y Ventas",
    status: "Proyecto final",
    statusTone: "green",
    category: "Producto propio",
    highlight: "Inventario, clientes y ventas en una sola app desktop",
    description:
      "Aplicación de escritorio en Java + MySQL con arquitectura MVC. Administra productos, clientes, ventas y stock con actualización automática. Proyecto propio de punta a punta.",
    tags: ["Java", "MVC", "MySQL", "JDBC"],
    link: null,
    image: null,
    detail: null,
  },
  {
    id: "torneo",
    title: "Torneo Ardillitas",
    status: "En producción",
    statusTone: "green",
    category: "Producto propio · Deportes",
    highlight: "Web completa para organizar y consultar el torneo en vivo",
    description:
      "Diseñé y desarrollé el sitio del torneo infantil de fútbol: fixture, tablas por categoría, cruces, mapa del club, auspiciantes, preinscripción y panel administrativo para coordinadores. Publicado y en uso.",
    tags: ["Next.js", "React", "Supabase", "Tailwind", "Vercel"],
    link: TORNEO_URL,
    image: imgTorneo,
    detail: {
      role: "Autor · Full Stack Developer",
      period: "2026",
      focusTitle: "Qué incluye",
      summary:
        "El torneo necesitaba una web clara para familias, jugadores y organizadores: ver partidos del día, tablas y resultados sin depender de Excel ni grupos de WhatsApp. Construí el producto completo — front público, panel de carga y backend — para que la información del campeonato esté siempre disponible desde el celular o la PC.",
      focus: [
        "Vista pública con partidos del día, tablas por categoría y cruces de playoff",
        "Panel de coordinadores para cargar equipos, resultados y gestionar la preinscripción",
        "Mapa del club, sección de auspiciantes y diseño pensado para usarse en la cancha",
      ],
      note: null,
      liveUrl: TORNEO_URL,
    },
  },
  {
    id: "ceresito",
    title: "Ceresito",
    status: "Contribuciones",
    statusTone: "slate",
    category: "Municipal · Asistente ciudadano",
    highlight: "Asistente conversacional oficial del municipio",
    description:
      "Contribuciones al asistente conversacional municipal en producción: evolución de flujos, soporte operativo y mejoras continuas sobre el canal digital que usan los vecinos.",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    link: null,
    image: imgCeresito,
    detail: {
      role: "Full Stack Developer · Contribuciones",
      period: "Junio 2026 — Actualidad",
      focusTitle: "Contribuciones",
      summary:
        "Ceresito es el canal conversacional del municipio para atención ciudadana: trámites, reclamos, información de servicios y campañas. El problema de fondo era la saturación de la atención presencial y la falta de un canal digital accesible, sin apps ni registros complejos. La solución es un asistente por mensajería con flujos estructurados y panel de gestión interna. Mi trabajo se centra en mantener y evolucionar ese producto en producción: flujos, contenidos y continuidad operativa.",
      focus: [
        "Ajustes y evolución de flujos conversacionales según necesidades de cada área",
        "Soporte operativo ante cambios de contenido, campañas y eventos",
        "Mejoras de experiencia y mantenimiento continuo del servicio en producción",
      ],
      note: null,
      liveUrl: null,
    },
  },
  {
    id: "dashboard",
    title: "Dashboard Ceres",
    status: "Contribuciones",
    statusTone: "slate",
    category: "Municipal · Panel interno",
    highlight: "Panel de gestión para la operación diaria del municipio",
    description:
      "Contribuciones al panel interno municipal: nuevos módulos operativos, mejoras de interfaz y soporte a la gestión diaria de las áreas.",
    tags: ["React", "Next.js", "TypeScript"],
    link: null,
    image: imgDashboard,
    detail: {
      role: "Full Stack Developer · Contribuciones",
      period: "Junio 2026 — Actualidad",
      focusTitle: "Contribuciones",
      summary:
        "El Dashboard es la herramienta interna con la que las áreas municipales gestionan reclamos, métricas y operación diaria. El desafío es sostener un panel en uso real, con usuarios internos que necesitan flujos claros y módulos concretos. Trabajo sobre mejoras persistentes, usabilidad y desarrollo de funcionalidades nuevas dentro de ese entorno.",
      focus: [
        "Módulo de planilla de vehículos de Policía Municipal: digitaliza la entrega y recepción en cada cambio de turno (kilómetros, estado del vehículo, equipamiento, observaciones e inspector a cargo), con historial consultable para reemplazar la planilla en papel",
        "Mejoras de interfaz y flujos de trabajo orientadas a la operación diaria",
        "Mantenimiento y evolución continua de módulos ya desplegados",
      ],
      note: "Uso interno del Gobierno de la Ciudad de Ceres. Sin acceso público.",
      liveUrl: null,
    },
  },
  {
    id: "ceresenred",
    title: "Ceres en Red",
    status: "Contribuciones",
    statusTone: "slate",
    category: "Municipal · Marketplace local",
    highlight: "Plataforma que conecta vecinos con profesionales verificados",
    description:
      "Mantenimiento y mejoras persistentes sobre la plataforma municipal de servicios locales ya en producción.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://ceresenred.ceres.gob.ar",
    image: imgCeresenred,
    detail: {
      role: "Full Stack Developer · Contribuciones",
      period: "Junio 2026 — Actualidad",
      focusTitle: "Contribuciones",
      summary:
        "Ceres en Red conecta vecinos con profesionales verificados de la ciudad. Es un producto en producción que requiere mejoras constantes para que la experiencia sea confiable: búsqueda, perfiles, carga de información y visualización de contenido. Me encargo del mantenimiento y de las mejoras persistentes que pide el día a día del sistema.",
      focus: [
        "Mejoras persistentes según requerimientos operativos del municipio",
        "Corrección de visualización de imágenes en los perfiles de cada profesión",
        "Mantenimiento continuo de flujos de usuario e interfaz",
      ],
      note: null,
      liveUrl: "https://ceresenred.ceres.gob.ar",
    },
  },
]

const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "Gobierno de la Ciudad de Ceres",
    period: "Junio 2026 — Actualidad",
    description:
      "Desarrollo y evolución de productos digitales ciudadanos en producción: chatbots, plataformas web, paneles internos, backends e integraciones. Participo en la implementación de funcionalidades, mejoras de experiencia y soporte operativo sobre varios sistemas en paralelo, con foco en claridad, mantenimiento y entregas continuas.",
  },
]

const EDUCATION = [
  {
    title: "Técnico Universitario en Programación",
    institution: "Universidad Tecnológica Nacional — FRRA",
    period: "Febrero 2022 — Mayo 2025",
  },
]

const CONTACT_EMAIL = "cecrafa4@gmail.com"
const LINKS = {
  linkedin: "https://www.linkedin.com/in/rafaelceccotti101109",
  github: "https://github.com/RafaCeccotti-Dev",
}

const nav = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
]

function StatusBadge({ status, tone }) {
  const tones = {
    green: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
    mint: "bg-accent/15 text-accent border-accent/30",
    slate: "bg-white/5 text-mute border-line",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${tones[tone]}`}
    >
      {status}
    </span>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined
    document.body.classList.add("modal-open")
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.classList.remove("modal-open")
      window.removeEventListener("keydown", onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project?.detail ? (
        <motion.div
          key={project.id}
          className="fixed inset-0 z-[80] flex items-stretch justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Cerrar"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={`Proyecto: ${project.title}`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="relative z-10 flex h-full w-full max-w-xl flex-col overflow-y-auto border-l border-line bg-ink shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-ink/95 px-5 py-3.5 backdrop-blur md:px-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">Proyecto</p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-mute transition hover:border-accent hover:text-white"
                aria-label="Cerrar proyecto"
              >
                <FaTimes />
              </button>
            </div>

            {project.image ? (
              <div className="border-b border-line bg-panel">
                <img
                  src={project.image}
                  alt={`Captura de ${project.title}`}
                  className="max-h-[36vh] w-full object-cover object-top"
                />
              </div>
            ) : null}

            <div className="space-y-6 px-5 py-6 md:px-6">
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <StatusBadge status={project.status} tone={project.statusTone} />
                  <span className="self-center text-xs uppercase tracking-[0.12em] text-mute">
                    {project.category}
                  </span>
                </div>
                <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-mute">
                  {project.detail.role} · {project.detail.period}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Resumen
                </h3>
                <p className="mt-2.5 leading-relaxed text-mute">{project.detail.summary}</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {project.detail.focusTitle}
                </h3>
                <ul className="mt-2.5 space-y-2.5">
                  {project.detail.focus.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-mute">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {project.detail.note ? (
                <p className="rounded-xl border border-line bg-panel px-3.5 py-2.5 text-sm leading-relaxed text-mute">
                  {project.detail.note}
                </p>
              ) : null}

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-line bg-panel px-2.5 py-1 text-sm text-mute"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.detail.liveUrl ? (
                <a
                  href={project.detail.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-accent-dim"
                >
                  Abrir sitio
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              ) : null}
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("idle")

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus("sending")

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio — mensaje de ${form.name}`,
          _template: "table",
        }),
      })

      if (!response.ok) throw new Error("Error al enviar")
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const fieldClass =
    "w-full rounded-lg border border-line bg-ink px-3.5 py-2.5 text-sm text-white placeholder:text-mute/60 outline-none transition focus:border-accent"

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col space-y-4 rounded-2xl border border-line bg-panel p-6">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-mute">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={fieldClass}
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-mute">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={fieldClass}
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-mute">
          Mensaje
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${fieldClass} resize-none`}
          placeholder="Contame sobre tu proyecto o consulta..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-accent-dim disabled:opacity-60"
      >
        <FaPaperPlane />
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-300">Mensaje enviado. Te respondo a la brevedad.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-rose-300">
          No se pudo enviar. Escribime a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      )}
    </form>
  )
}

function App() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 8% -5%, rgba(110,231,183,0.14), transparent 55%),
            radial-gradient(ellipse 70% 50% at 95% 5%, rgba(96,165,250,0.08), transparent 50%),
            radial-gradient(ellipse 60% 40% at 50% 100%, rgba(52,211,153,0.06), transparent 55%),
            linear-gradient(165deg, #10141c 0%, #0c1018 42%, #151a24 100%)
          `,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)",
        }}
      />

      <nav className="sticky top-0 z-50 border-b border-line/70 bg-[#0c1018]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5 md:px-8">
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">Rafael Ceccotti</p>
            <p className="text-xs text-accent">Full Stack Developer</p>
          </div>
          <div className="hidden gap-6 text-sm text-mute md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative">
        <section id="sobre-mi" className="mx-auto max-w-5xl px-5 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Sobre mí
            </p>
            <h1 className="font-display text-4xl leading-[1.12] text-white md:text-[2.75rem]">
              Rafael Ceccotti
            </h1>
            <p className="mt-2.5 text-base font-medium text-accent md:text-lg">
              Full Stack Developer
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-mute">
              Desarrollo software para problemas concretos: sitios, paneles, backends y sistemas con
              base de datos. Tengo productos propios en producción y contribuyo a plataformas
              municipales que ya están en uso.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <a
                                                href={`${import.meta.env.BASE_URL}Rafael_Ceccotti_CV.pdf?v=20260804f`}
                download="Rafael_Ceccotti_CV.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-accent-dim"
              >
                <FaDownload />
                Descargar CV
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm transition hover:border-accent hover:text-accent"
              >
                <FaLinkedin />
                LinkedIn
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm transition hover:border-accent hover:text-accent"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm transition hover:border-accent hover:text-accent"
              >
                Ver proyectos
              </a>
            </div>
          </motion.div>
        </section>

        <section id="proyectos" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-16">
            <div className="mb-8 max-w-2xl">
              <h2 className="font-display text-3xl text-white md:text-[2.35rem]">Proyectos</h2>
              <p className="mt-3 text-mute">
                Productos propios y contribuciones a sistemas municipales. En los proyectos con
                captura podés abrir el detalle.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {PROJECTS.map((project, index) => {
                const openable = Boolean(project.detail)
                const CardTag = openable ? "button" : "article"
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: index * 0.04, duration: 0.4 }}
                  >
                    <CardTag
                      type={openable ? "button" : undefined}
                      onClick={openable ? () => setActiveProject(project) : undefined}
                      className={`group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-panel text-left transition hover:border-accent/40 ${
                        openable ? "cursor-pointer" : ""
                      }`}
                    >
                      {project.image ? (
                        <div className="relative overflow-hidden border-b border-line">
                          <img
                            src={project.image}
                            alt={`Vista de ${project.title}`}
                            className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel/70 via-transparent to-transparent" />
                        </div>
                      ) : (
                        <div className="flex aspect-[16/10] items-center justify-center border-b border-line bg-ink/50 px-6 text-center">
                          <p className="text-sm text-mute">Capturas del sistema — próximas a sumarse</p>
                        </div>
                      )}

                      <div className="flex flex-1 flex-col p-5 md:p-6">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <StatusBadge status={project.status} tone={project.statusTone} />
                          <span className="text-[11px] uppercase tracking-[0.12em] text-mute">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-1.5 text-sm font-medium text-accent">{project.highlight}</p>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-line bg-ink px-2.5 py-1 text-xs text-mute"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          {openable ? (
                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                              Ver detalle
                              <FaArrowRight className="text-xs transition group-hover:translate-x-0.5" />
                            </span>
                          ) : null}
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 text-sm font-semibold text-mute transition hover:text-white"
                            >
                              Ver sitio
                              <FaExternalLinkAlt className="text-xs" />
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </CardTag>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="capacidades" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-5 py-14 md:px-8">
            <h2 className="font-display text-3xl text-white md:text-4xl">Skills</h2>
            <div className="mt-6 flex max-w-4xl flex-wrap gap-2">
              {CAPABILITIES.map(({ name, icon: Icon, color }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-3 py-2 text-sm text-white transition hover:border-accent/45"
                >
                  <Icon size={16} style={{ color }} aria-hidden />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-5 py-14 md:px-8">
            <h2 className="font-display text-3xl text-white md:text-4xl">Experiencia</h2>
            <div className="mt-8 max-w-2xl space-y-6">
              {EXPERIENCE.map((item) => (
                <div key={`${item.role}-${item.company}`} className="border-l-2 border-accent/40 pl-5">
                  <h3 className="text-lg font-semibold text-white">
                    {item.role}
                    <span className="text-mute"> · </span>
                    {item.company}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{item.period}</p>
                  <p className="mt-2.5 leading-relaxed text-mute">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="educacion" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-5 py-14 md:px-8">
            <h2 className="font-display text-3xl text-white md:text-4xl">Educación</h2>
            <div className="mt-6 max-w-2xl">
              {EDUCATION.map((item) => (
                <div key={item.title} className="rounded-2xl border border-line bg-panel/80 p-5 backdrop-blur-sm md:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    {item.period ? (
                      <p className="shrink-0 text-sm text-accent">{item.period}</p>
                    ) : null}
                  </div>
                  <p className="mt-1.5 text-sm text-mute">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl text-white md:text-[2.35rem]">Contacto</h2>
              <p className="mt-3 leading-relaxed text-mute">
                Abierto a proyectos, consultas y oportunidades Full Stack, Frontend o Backend.
                Escribime por el formulario o a{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:text-white">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-stretch">
              <ContactForm />
              <aside className="flex flex-col justify-between rounded-2xl border border-line bg-panel/80 p-6">
                <div>
                  <p className="text-sm font-medium text-white">También en</p>
                  <p className="mt-1 text-sm leading-relaxed text-mute">
                    Podés escribirme por acá o seguirme en estas redes.
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-2.5">
                  <a
                    href={LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm transition hover:border-accent hover:text-accent"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>
                  <a
                    href={LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm transition hover:border-accent hover:text-accent"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-6 text-center text-sm text-mute">
        © {new Date().getFullYear()} Rafael Ceccotti · Full Stack Developer
      </footer>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  )
}

export default App
