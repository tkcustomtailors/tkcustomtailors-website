import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "lucide-react";
import { staffMembers } from "@/data/staff";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import GetInTouchButton from "@/components/ui/GetInTouchButton";

export const metadata: Metadata = {
  title: "Our Staff",
  description:
    "Meet the talented team behind T.K. Custom Tailors — master tailors and specialists with decades of combined experience in bespoke tailoring.",
};

export default function StaffPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24" style={{ backgroundColor: "var(--hero-bg)" }}>
        <div className="container-max text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">The People Behind the Art</p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight">Our Team</h1>
            <div className="w-16 h-0.5 bg-white/30 mx-auto mt-5" />
            <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Every great garment begins with a great tailor. Meet the skilled artisans who bring your vision to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership Cards */}
      <section className="section-padding" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-max">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Leadership"
              title="Meet Our Leaders"
              subtitle="The visionaries who guide T.K. Custom Tailors with passion, expertise, and a deep respect for the craft."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                id: "ceo",
                name: "CEO Name",
                role: "Chief Executive Officer",
                experience: "00+ Years",
                description: "A short description about the CEO goes here. Their legacy, vision, and contribution to the craft.",
                image: "/generations/owner.jpg",
              },
              {
                id: "owner",
                name: "CEO Name",
                role: "Chief Executive Officer",
                experience: "00+ Years",
                description: "A short description about the CEO goes here. Their leadership style, passion, and goals for the future.",
                image: "/generations/owner.jpg",
              },
              {
                id: "manager",
                name: "Manager Name",
                role: "Manager",
                experience: "00+ Years",
                description: "A short description about the manager goes here. Their expertise and day-to-day role in the business.",
                image: "/Staff/Manager.jpg",
              },
            ].map((leader, index) => (
              <AnimatedSection key={leader.id} delay={index * 0.12}>
                <div className="card group overflow-hidden flex flex-col h-full">
                  {/* Portrait image */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                    {/* Role badge */}
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                      style={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
                    >
                      {leader.role}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Experience */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)] inline-block" />
                      <span
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: "var(--muted)" }}
                      >
                        {leader.experience} Experience
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[var(--foreground)] mb-2">
                      {leader.name}
                    </h3>
                    <div className="elegant-divider mb-3" />
                    <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="section-padding" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="container-max">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Meet Our Team"
              title="Master Craftspeople"
              subtitle="Each member of our team is hand-picked for their skill, passion, and dedication to the art of tailoring."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {staffMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <div className="card group overflow-hidden text-center h-full flex flex-col">
                  {/* Photo */}
                  <div className="relative mx-auto mt-8 w-28 h-28 rounded-full overflow-hidden border-4"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="112px"
                      unoptimized
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Experience badge */}
                    <div className="flex justify-center mb-4">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: "var(--muted-bg)", color: "var(--foreground)" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)] inline-block" />
                        {member.yearsOfExperience} Years Experience
                      </span>
                    </div>

                    <div className="flex flex-col justify-start min-h-[120px]">
                      <h3 className="font-serif text-xl font-bold text-[var(--foreground)] mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-[var(--muted)] mb-1">{member.position}</p>
                      <p className="text-xs text-[var(--muted)] italic mb-4">{member.specialization}</p>
                    </div>

                    <div className="elegant-divider mb-4" style={{ margin: "0 auto 1rem" }} />

                    {/* <p className="text-xs text-[var(--muted)] leading-relaxed flex-1">{member.bio}</p> */}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      {/* <section className="section-padding" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="container-max">
          <AnimatedSection>
            <div className="card p-12 text-center max-w-2xl mx-auto">
              <div className="w-14 h-14 rounded-full bg-[var(--foreground)] flex items-center justify-center mx-auto mb-6">
                <Badge className="w-6 h-6 text-[var(--background)]" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-[var(--foreground)] mb-4">
                Join Our Team
              </h2>
              <p className="text-[var(--muted)] mb-8 leading-relaxed">
                Are you a skilled tailor with a passion for craftsmanship? We&apos;re always looking for talented individuals to join the T.K. Custom Tailors family.
              </p>
              <GetInTouchButton />
            </div>
          </AnimatedSection>
        </div>
      </section> */}
    </>
  );
}
