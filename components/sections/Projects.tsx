import { Icon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects, sections } from "@/config/site";

/** Full width section with the featured repositories. */
export function Projects({ className = "" }: { className?: string }) {
  return (
    <section id="proyectos" className={`panel p-5 sm:p-7 ${className}`}>
      <SectionTitle className="mb-4">{sections.projects}</SectionTitle>

      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass group flex flex-col rounded-2xl p-4 transition hover:border-[#34E0A1]/45 hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-garesin text-xl tracking-wide text-white">{project.name}</h4>
              <span className="shrink-0 rounded-full border border-[#34E0A1]/40 bg-[#34E0A1]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#34E0A1]">
                {project.language}
              </span>
            </div>

            <p className="mt-0.5 text-xs font-semibold text-[#E6224D]">{project.tagline}</p>
            <p className="mt-2 text-[11px] leading-relaxed text-white/75 sm:text-xs">{project.body}</p>

            <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55 transition group-hover:text-[#34E0A1]">
              Ver en GitHub
              <Icon name="arrow" className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
