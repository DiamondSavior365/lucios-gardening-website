import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
// import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import ButtonLink from "../ButtonLink";

function ContactCTASection() {
  return (
    <section className="bg-[#13291f] px-6 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 rounded-[2rem] border border-white/10 bg-white/8 p-8 backdrop-blur md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Start the Conversation"
            title="Ready to improve your outdoor space?"
            description="Whether you need lawn care, tree care, landscaping, irrigation, or a full outdoor refresh, Lucio's Gardening is here to help keep your property clean, healthy, and beautiful."
            theme="dark"
          />

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink to="/contact" variant="gold" icon={ArrowRight}>
                Request a Free Estimate
              </ButtonLink>

              <ButtonLink to="/services" variant="outlineLight">
                Explore Services
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-[#f7f3ea] p-7 text-[#13291f]">
          <h3 className="text-2xl font-bold">Contact Details</h3>

          <div className="mt-7 flex flex-col gap-5">
            <div className="flex gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#13291f] text-white">
                <Phone size={19} />
              </div>
              <div>
                <p className="font-bold">Phone</p>
                <p className="mt-1 text-[#43594d]">Phone number coming soon</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#13291f] text-white">
                <Mail size={19} />
              </div>
              <div>
                <p className="font-bold">Email</p>
                <p className="mt-1 text-[#43594d]">Email coming soon</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#13291f] text-white">
                <MapPin size={19} />
              </div>
              <div>
                <p className="font-bold">Service Area</p>
                <p className="mt-1 text-[#43594d]">
                  Southern California residential, commercial, and outdoor
                  property services
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-[#e2d8c3] bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9c7a32]">
              Future Feature
            </p>
            <p className="mt-3 leading-7 text-[#43594d]">
              This area will later connect to an estimate request form, customer
              lead tracking, and a Supabase-powered admin dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTASection;
