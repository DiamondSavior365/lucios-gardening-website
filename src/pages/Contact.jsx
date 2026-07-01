import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import { submitQuoteRequest } from "../services/quoteRequestService.js";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    serviceNeeded: "",
    contactMethod: "",
    projectDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      await submitQuoteRequest(formData);

      setSubmitStatus("success");
      setSubmitMessage(
        "Thank you! Your request has been submitted. We will contact you soon."
      );

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        city: "",
        serviceNeeded: "",
        contactMethod: "",
        projectDescription: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="bg-[#f7f3ea] text-[#13291f]">
      <PageHero
        eyebrow="Contact"
        title="Request a free estimate for your outdoor space"
        description="Tell us what your property needs, and Lucio's Gardening will help with lawn care, tree care, landscaping, irrigation, or outdoor maintenance services."
      />

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

          {/* <form className="rounded-[2rem] border border-[#e2d8c3] bg-white p-8 shadow-sm md:p-10"> */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-[#e2d8c3] bg-white p-8 shadow-sm md:p-10"
          >
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
                  value={formData.fullName}
                  onChange={handleChange}
                  required
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
                  value={formData.phone}
                  onChange={handleChange}
                  required
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full rounded-2xl border border-[#e2d8c3] bg-[#f7f3ea] px-5 py-4 outline-none transition focus:border-[#13291f]"
                />
              </div>

              <div>
                <label
                  htmlFor="serviceNeeded"
                  className="text-sm font-bold uppercase tracking-[0.2em] text-[#9c7a32]"
                >
                  Service Needed
                </label>
                {/* <select
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
                </select> */}
                <select
                  id="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full rounded-2xl border border-[#e2d8c3] bg-[#f7f3ea] px-5 py-4 outline-none transition focus:border-[#13291f]"
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
                {/* <select
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
                </select> */}
                <select
                  id="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-2xl border border-[#e2d8c3] bg-[#f7f3ea] px-5 py-4 outline-none transition focus:border-[#13291f]"
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
              {/* <textarea
                id="projectDescription"
                rows="6"
                placeholder="Tell us about the property, service needed, and any details that may help..."
                className="mt-3 w-full resize-none rounded-2xl border border-[#e2d8c3] bg-[#f7f3ea] px-5 py-4 outline-none transition focus:border-[#13291f]"
              /> */}
              <textarea
                id="projectDescription"
                rows="6"
                placeholder="Tell us about the property, service needed, and any details that may help..."
                value={formData.projectDescription}
                onChange={handleChange}
                required
                className="mt-3 w-full resize-none rounded-2xl border border-[#e2d8c3] bg-[#f7f3ea] px-5 py-4 outline-none transition focus:border-[#13291f]"
              />
            </div>

            {/* <button
              type="button"
              className="mt-8 w-full rounded-full bg-[#13291f] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#224735] md:w-auto"
            >
              Submit Request
            </button> */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full rounded-full bg-[#13291f] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#224735] disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
            {submitMessage && (
              <p
                className={`mt-5 rounded-2xl px-5 py-4 font-semibold ${
                  submitStatus === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
