import { Icon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { sections, techStack } from "@/config/site";

/** Icon grid: three columns on phones, six from the small breakpoint up. */
export function TechStack({ className = "" }: { className?: string }) {
  return (
    <section id="stack" className={`panel flex flex-col p-5 sm:p-6 ${className}`}>
      <SectionTitle className="mb-4">{sections.techStack}</SectionTitle>

      <div className="grid flex-1 grid-cols-3 content-center gap-3">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            title={tech.name}
            className="glass group flex flex-col items-center justify-center gap-2 rounded-2xl p-3 transition hover:bg-white/10 sm:p-4"
          >
            <span className="text-[#34E0A1] transition group-hover:scale-110">
              <Icon name={tech.icon} className="h-9 w-9" />
            </span>
            <span className="text-center text-[11px] font-semibold leading-tight text-white/75">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
