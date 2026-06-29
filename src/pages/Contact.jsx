import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <main className="bg-[#f7f3ea] text-[#13291f]">
      <section className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#9c7a32]">
            Contact
          </p>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              Request a free estimate for your outdoor space
            </h1>

            <p className="max-w-xl text-lg leading-8 text-[#43594d]">
              Tell us what your property needs, and Lucio&apos;s Gardening will
              help with lawn care, tree care, landscaping, irrigation, or
              outdoor maintenance services.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-[2rem] bg-[#13291f] p-8 text-white md:p-10">
            <h2 className="text-3xl font-bold">Contact Details</h2>

            <p className="mt-4 leading-7 text-white/70">
              Reach out to discuss routine maintenance, one-time service,
              landscaping improvements, tree care, or irrigation support.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#d8b65a] text-[#13291f]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="mt-1 text-white/70">Phone number coming soon</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#d8b65a] text-[#13291f]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="mt-1 text-white/70">Email coming soon</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#d8b65a] text-[#13291f]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold">Service Area</p>
                  <p className="mt-1 text-white/70">
                    Southern California residential, commercial, hotel, and
                    outdoor property services
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/8 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d8b65a]">
                Coming Soon
              </p>
              <p className="mt-3 leading-7 text-white/70">
                This form will later connect to Supabase so quote requests can
                be saved, reviewed, and managed from an admin dashboard.
              </p>
            </div>
          </aside>

          <form className="rounded-[2rem] border border-[#e2d8c3] bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="text-sm font-bold uppercase tracking-[0.2em] text-[#9c7a32]"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-2xl border border-[#e2d8c3] bg-[#f7f3ea] px-5 py-4 outline-none transition focus:border-[#13291f]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-bold uppercase tracking-[0.2em] text-[#9c7a32]"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="mt-3 w-full rounded-2xl border border-[#e2d8c3] bg-[#f7f3ea] px-5 py-4 outline-none transition focus:border-[#13291f]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-bold uppercase tracking-[0.2em] text-[#9c7a32]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="mt-3 w-full rounded-2xl border border-[#e2d8c3] bg-[#f7f3ea] px-5 py-4 outline-none transition focus:border-[#13291f]"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="text-sm font-bold uppercase tracking-[0.2em] text-[#9c7a32]"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Property city"
                  className="mt-3 w-full rounded-2xl border border-[#e2d8c3] bg-[#f7f3ea] px-5 py-4 outline-none transition focus:border-[#13291f]"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="text-sm font-bold uppercase tracking-[0.2em] text-[#9c7a32]"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  className="mt-3 w-full rounded-2xl border border-[#e2d8c3] bg-[#f7f3ea] px-5 py-4 outline-none transition focus:border-[#13291f]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="lawn-care">Lawn Care</option>
                  <option value="tree-care">Tree Care</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="irrigation">Irrigation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contactMethod"
                  className="text-sm font-bold uppercase tracking-[0.2em] text-[#9c7a32]"
                >
                  Preferred Contact
                </label>
                <select
                  id="contactMethod"
                  className="mt-3 w-full rounded-2xl border border-[#e2d8c3] bg-[#f7f3ea] px-5 py-4 outline-none transition focus:border-[#13291f]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select preference
                  </option>
                  <option value="phone">Phone Call</option>
                  <option value="text">Text Message</option>
                  <option value="email">Email</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="projectDescription"
                className="text-sm font-bold uppercase tracking-[0.2em] text-[#9c7a32]"
              >
                Project Description
              </label>
              <textarea
                id="projectDescription"
                rows="6"
                placeholder="Tell us about the property, service needed, and any details that may help..."
                className="mt-3 w-full resize-none rounded-2xl border border-[#e2d8c3] bg-[#f7f3ea] px-5 py-4 outline-none transition focus:border-[#13291f]"
              />
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-[#13291f] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#224735] md:w-auto"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
