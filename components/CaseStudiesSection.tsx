"use client"
import SlideUp from "./SlideUp"

const cases = [
  {
    industry: "Real Estate",
    client: "Lagos Property Agent",
    before: {
      label: "Before",
      points: [
        "Random DMs with no follow-up",
        "Leads went cold after 2 days",
        "No way to track interested buyers",
        "Spent hours chasing unresponsive prospects",
      ],
    },
    after: {
      label: "After",
      points: [
        "WhatsApp opt-in form on every listing",
        "Automated 5-day follow-up sequence",
        "CRM showing 40+ active leads",
        "3× more site visits booked monthly",
      ],
    },
    metric: "3× More Viewings",
    color: "text-[#0d9488]",
    border: "border-[#0d9488]",
  },
  {
    industry: "Private School",
    client: "Secondary School, Ogun State",
    before: {
      label: "Before",
      points: [
        "Parents called and never got follow-up",
        "Enrollment season was chaotic",
        "No record of enquiries",
        "Admissions officer overwhelmed",
      ],
    },
    after: {
      label: "After",
      points: [
        "Automated admissions enquiry form",
        "WhatsApp bot answers FAQs 24/7",
        "CRM tracks every prospective family",
        "40% increase in enrollment conversion",
      ],
    },
    metric: "40% More Enrollments",
    color: "text-blue-400",
    border: "border-blue-400",
  },
  {
    industry: "Clinic / Healthcare",
    client: "Private Medical Clinic, Ibadan",
    before: {
      label: "Before",
      points: [
        "Appointment bookings only by phone",
        "Patients forgot appointments, no reminders",
        "No way to capture repeat patient data",
        "Empty slots costing money every week",
      ],
    },
    after: {
      label: "After",
      points: [
        "WhatsApp booking link on all promo posts",
        "Automated appointment reminders sent",
        "Patient database built in 60 days",
        "Empty slots reduced by 60%",
      ],
    },
    metric: "60% Fewer Empty Slots",
    color: "text-purple-400",
    border: "border-purple-400",
  },
]

const CaseStudiesSection = () => {
  return (
    <section id="cases" className="bg-[#0a0a0a] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mb-16">
            <span className="inline-block px-3 py-1 bg-[#0d9488]/10 border border-[#0d9488]/30 text-[#0d9488] text-xs font-black uppercase tracking-widest rounded-full mb-4">
              Transformations
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Real Results from{" "}
              <span className="text-[#0d9488]">Real Businesses</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl">
              Here&apos;s what happens when you replace guesswork with a proper customer acquisition system.
            </p>
          </div>
        </SlideUp>

        <div className="space-y-8">
          {cases.map((c, i) => (
            <SlideUp key={i} offset="-80px 0px -80px 0px">
              <div className={`bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all`}>
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 px-8 py-5 border-b border-white/10">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-500">{c.industry}</p>
                    <p className="text-base font-black text-white">{c.client}</p>
                  </div>
                  <div className={`px-5 py-2 bg-white/5 border ${c.border} border-opacity-50 rounded-2xl`}>
                    <p className={`text-sm font-black ${c.color}`}>{c.metric}</p>
                  </div>
                </div>

                {/* Before / After */}
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Before */}
                  <div className="px-8 py-7 border-b sm:border-b-0 sm:border-r border-white/10">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 text-xs font-black">✕</span>
                      <p className="text-xs font-black uppercase tracking-widest text-red-400">Before</p>
                    </div>
                    <ul className="space-y-3">
                      {c.before.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/60 flex-shrink-0" />
                          <p className="text-sm text-gray-400">{pt}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* After */}
                  <div className="px-8 py-7">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="w-6 h-6 rounded-full bg-[#0d9488]/20 border border-[#0d9488]/40 flex items-center justify-center text-[#0d9488] text-xs font-black">✓</span>
                      <p className="text-xs font-black uppercase tracking-widest text-[#0d9488]">After</p>
                    </div>
                    <ul className="space-y-3">
                      {c.after.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0d9488] flex-shrink-0" />
                          <p className="text-sm text-gray-300">{pt}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
