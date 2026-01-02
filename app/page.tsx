import {
  animationBeats,
  audioPlan,
  colorPalette,
  scriptBeats,
  scriptHindi,
  technicalSpecs,
  typography,
  workflowSteps
} from "@/lib/data";
import { Section } from "@/components/Section";

function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-16 md:py-20">
      <div className="space-y-10">
        <Pill>Motion Design Blueprint</Pill>
        <div className="space-y-6">
          <h1 className="max-w-3xl text-4xl font-display text-white md:text-6xl">
            Confirmation Bias Reel — Production Plan for Alight Motion
          </h1>
          <p className="max-w-3xl text-lg text-gray-300 md:text-xl">
            A modular, loop-ready motion graphics treatment guiding investors from emotional bias to disciplined process.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-gray-400 shadow-focus md:max-w-xl">
            <p className="font-semibold text-gray-200">Original Script (Hindi)</p>
            <pre className="mt-3 whitespace-pre-wrap font-copy leading-relaxed text-gray-300">
              {scriptHindi}
            </pre>
          </div>
        </div>
      </div>

      <Section
        eyebrow="Narrative Breakdown"
        title="Story Beats & Emotional Arc"
        intro="Mapping the voiceover into distinct motion segments ensures pacing stays sharp while reinforcing the narrative tension."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {scriptBeats.map((beat) => (
            <div
              key={beat.label}
              className="rounded-2xl border border-white/5 bg-white/5 p-5 transition hover:border-accent/60 hover:bg-accent/10"
            >
              <h3 className="text-lg font-semibold text-white">{beat.label}</h3>
              <p className="mt-2 text-sm text-gray-300">{beat.focus}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">
                Pacing: {beat.pacing}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Visual Direction"
        title="Lookframe Palette & Typography System"
        intro="Leverage contrast between warning signals and rational clarity to visualize biased vs process-driven thinking."
      >
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {colorPalette.map((color) => (
              <div
                key={color.name}
                className="flex flex-col justify-between rounded-2xl border border-white/5 bg-white/5 p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">{color.name}</div>
                  <span className="text-xs text-gray-400">{color.value}</span>
                </div>
                <div
                  className="mt-4 h-16 w-full rounded-xl shadow-lg"
                  style={{ background: color.value }}
                />
                <p className="mt-4 text-xs text-gray-300">{color.usage}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/5 p-6">
            <h3 className="text-base font-semibold text-white">Typography Hierarchy</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {typography.map((type) => (
                <li key={type.family}>
                  <p className="font-semibold text-white">{type.family}</p>
                  <p className="text-xs text-gray-400">{type.role}</p>
                </li>
              ))}
            </ul>
            <div className="rounded-xl border border-dashed border-white/10 bg-white/5 p-4 text-xs text-gray-400">
              Tip: Keep Hindi overlays in vector for crisp scaling; pre-compose mixed-language titles for easier easing.
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Motion Strategy"
        title="Scene-by-Scene Animation Playbook"
        intro="Each block is timed to the voiceover waveform markers with deliberate transitions to sustain engagement and deliver clarity."
      >
        <div className="space-y-5">
          {animationBeats.map((beat) => (
            <div
              key={beat.stage}
              className="rounded-2xl border border-white/5 bg-white/[0.04] p-5 md:flex md:items-start md:gap-6"
            >
              <div className="md:w-64">
                <p className="text-xs uppercase tracking-[0.2em] text-accent/80">{beat.duration}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{beat.stage}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-300 md:mt-0 md:flex-1">
                {beat.actions.map((action) => (
                  <li key={action} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Sound Design"
        title="Audio Bed, Voice, and Sync"
        intro="Audio direction emphasises clarity of message while adding cinematic cues aligned with visual momentum."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {audioPlan.map((item) => (
            <div key={item.element} className="rounded-2xl border border-white/5 bg-white/5 p-5">
              <h3 className="text-base font-semibold text-white">{item.element}</h3>
              <p className="mt-3 text-sm text-gray-300">{item.notes}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Specs"
        title="Delivery Requirements"
        intro="Set project parameters upfront to avoid redraws and maintain consistency across exports."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {technicalSpecs.map((spec) => (
            <div
              key={spec.spec}
              className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-white/[0.04] p-4"
            >
              <p className="text-sm font-semibold text-white">{spec.spec}</p>
              <p className="text-sm text-gray-300">{spec.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Production Workflow"
        title="Efficient Alight Motion Pipeline"
        intro="Structured phases keep revisions tight and make client feedback loops fast."
      >
        <div className="space-y-4">
          {workflowSteps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dusk/40 font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <footer className="pb-12 text-xs uppercase tracking-[0.3em] text-gray-500">
        Crafted for agile delivery in Alight Motion — ready for Vercel deployment.
      </footer>
    </main>
  );
}
