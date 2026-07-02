import { supabase } from "../lib/supabaseClient";

export async function submitQuoteRequest(formData) {
  const { data, error } = await supabase.functions.invoke(
    "submit-quote-request",
    {
      body: {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email || null,
        city: formData.city,
        serviceNeeded: formData.serviceNeeded,
        contactMethod: formData.contactMethod || null,
        projectDescription: formData.projectDescription,
      },
    }
  );

  if (error) {
    throw new Error(error.message);
  }

  if (data?.success === false) {
    throw new Error(data.error || "Something went wrong.");
  }

  return data;
}
