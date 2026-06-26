"use server";

export async function submitContactForm(formData: FormData) {
  try {
    const res = await fetch("https://formsubmit.co/ajax/indraagency.dev@gmail.com", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to submit form to external API" };
    }
  } catch (error) {
    return { success: false, error: "Network or server error occurred" };
  }
}
