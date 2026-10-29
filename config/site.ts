/**
 * SITE CONFIGURATION
 *
 * This is the only file you need to edit for day to day content changes.
 * Every string, link, image path and list rendered on the page comes from here.
 * No component contains hardcoded copy.
 */

import type { NavLink, Social, Stat, Card, Tech, Project } from "@/types";

/** Core identity: name, roles and the paragraph in the About section. */
export const profile = {
  name: "JustItsSora",
  /** Shown directly under the name inside the hero panel. */
  title: "Desarrollador de software",
  /** Shown under the page heading. */
  tagline: "LINUX · C# · PYTHON · RUST",
  /** Large heading at the top of the page. */
  heading: "Portafolio",
  about:
    "Programo sobre Linux y me gusta que las herramientas sean ligeras, nativas y sin capas de más. La mayor parte de lo que construyo son aplicaciones de escritorio y utilidades que resuelven algo concreto del día a día: controlar ventanas, cambiar el fondo de pantalla o darle manos y ojos a un asistente. Trabajo principalmente en C# con .NET y en Python, con Rust para lo que necesita ser rápido y GTK3 para la interfaz. Me interesan los binarios de un solo archivo, la integración real con X11 y Wayland, y el software que no pide un navegador embebido para existir. Cuando algo del software libre no encaja en Linux, lo adapto y lo publico.",
} as const;

/** Browser tab title, meta description and social share card. */
export const meta = {
  url: "https://justitssora.vercel.app",
  title: "JustItsSora · Portafolio",
  description:
    "Desarrollador de software en Linux. Aplicaciones de escritorio y utilidades en C#, Python y Rust.",
  /** Image used as the link preview thumbnail on Discord, X, WhatsApp etc. */
  thumbnail: "/banner.gif",
  thumbnailSize: { width: 498, height: 281 },
} as const;

/** Image paths, all relative to the public folder. */
export const assets = {
  background: "/bg.jpg",
  /** Main artwork inside the hero panel. */
  avatar: "/avatar.png",
} as const;

/**
 * Navbar tabs. Empty by default.
 * Add entries like { label: "Work", href: "#work", showOnMobile: true } to bring
 * the tab row back. showOnMobile controls whether it also appears in the mobile menu.
 */
export const navLinks: NavLink[] = [
  { label: "Proyectos", href: "#proyectos", showOnMobile: true },
  { label: "Stack", href: "#stack", showOnMobile: true },
];

/** Social profiles. Rendered in the navbar and in the mobile menu. */
export const socials: Social[] = [
  { name: "Github", href: "https://github.com/JustItsSora", handle: "github.com/JustItsSora" },
];

/** Main call to action, used by the hero button and the mobile menu button. */
export const callToAction = {
  label: "Ver proyectos",
  mobileLabel: "Ver proyectos",
  href: "#proyectos",
} as const;

/** Four small cards sitting above the About section. */
export const stats: Stat[] = [
  { label: "Proyectos", value: "2" },
  { label: "Lenguajes", value: "6" },
  { label: "Commits", value: "81" },
  { label: "SO", value: "Linux" },
];

/** Tech Stack grid. The icon key must exist in components/ui/Icon.tsx. */
export const techStack: Tech[] = [
  { name: "C#", icon: "csharp" },
  { name: ".NET", icon: "dotnet" },
  { name: "Python", icon: "python" },
  { name: "Rust", icon: "rust" },
  { name: "GTK3", icon: "gtk" },
  { name: "Linux", icon: "linux" },
];

/** Right column, top section. Cards expand on click. */
export const skills: Card[] = [
  {
    title: "Apps de escritorio",
    body: "Aplicaciones nativas para Linux con C# y .NET: control de ventanas X11, integración con el escritorio, binarios de un solo archivo y cero dependencias raras. Interfaces en GTK3 y, cuando el proyecto lo pide, en Avalonia.",
    icon: "code",
  },
  {
    title: "Automatización y utilidades",
    body: "Scripts y herramientas en Python y Bash para automatizar tareas, procesar datos, empaquetar releases y quitar trabajo repetitivo del medio. Cuando algo tiene que ir rápido, Rust.",
    icon: "server",
  },
];

/** Right column, bottom section. */
export const tooling: Card[] = [
  {
    title: "Linux, X11 y Wayland",
    body: "Integración real con el escritorio: xdotool para teclado y ratón, xclip para el portapapeles, notificaciones, energía y atajos. Probado en Debian, MX Linux y XFCE, con X11 y Wayland.",
    icon: "linux",
  },
  {
    title: "SQLite y datos locales",
    body: "Índices locales con SQLite FTS5, búsqueda tolerante a errores de tipeo y tokens, y todo funcionando sin servidor ni conexión. Los datos del usuario se quedan en su máquina.",
    icon: "server",
  },
  {
    title: "Audio y vídeo",
    body: "Captura y recorte con ffmpeg, grabación de pantalla bajo demanda, sonido del sistema y reproducción de música vía D-Bus. Herramientas que se integran sin pedir permisos de más.",
    icon: "motion",
  },
];

/** Featured projects. Rendered in the full width Projects section. */
export const projects: Project[] = [
  {
    name: "Capri Desktop",
    tagline: "Asistente de escritorio con IA para Linux",
    body: "Fork comunitario de Capri, la mascota de escritorio con IA. Control de ventanas en X11, manos para teclado, ratón, portapapeles, recordatorios y energía, cerebros en la nube y binarios de un solo archivo.",
    language: "C#",
    href: "https://github.com/JustItsSora/capri-desktop-linux",
  },
  {
    name: "Kabe",
    tagline: "Fondos de pantalla en alta resolución",
    body: "Descubridor y aplicador de fondos de pantalla para Linux. Indexa repositorios de GitHub sin clonarlos, busca con tolerancia a errores de tipeo sobre SQLite FTS5 y aplica el fondo con vista previa por monitor.",
    language: "Python",
    href: "https://github.com/JustItsSora/kabe",
  },
];

/** Section headings, kept together so wording stays consistent. */
export const sections = {
  about: "Sobre mí",
  techStack: "Stack",
  skills: "Qué hago",
  tooling: "Herramientas",
  projects: "Proyectos",
  connect: "Conecta",
} as const;

export const footer = {
  copyright: `© ${profile.name} 2026`,
} as const;
