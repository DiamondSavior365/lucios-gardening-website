import { supabase } from "../lib/supabaseClient";

export async function submitQuoteRequest(formData) {
  const { error } = await supabase.from("quote_requests").insert([
    {
      full_name: formData.fullName,
      phone: formData.phone,
      email: formData.email || null,
      city: formData.city,
      service_needed: formData.serviceNeeded,
      preferred_contact_method: formData.contactMethod || null,
      project_description: formData.projectDescription,
    },
  ]);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}
