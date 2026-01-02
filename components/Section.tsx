import { ReactNode } from "react";

type SectionProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, intro, children }: SectionProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-sand/80">{eyebrow}</p>
        <h2 className="text-3xl font-display text-white md:text-4xl">{title}</h2>
        {intro ? <p className="max-w-3xl text-base text-gray-300">{intro}</p> : null}
      </div>
      <div className="gradient-border">
        <div className="p-6 md:p-8">{children}</div>
      </div>
    </section>
  );
}
