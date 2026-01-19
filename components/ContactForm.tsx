"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      // Formspree endpoint - replace with actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you. Your message has been sent.");
        e.currentTarget.reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        "Sorry, there was an error sending your message. Please try again or email directly."
      );
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium tracking-wide uppercase mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-background border border-primary/20 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium tracking-wide uppercase mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-background border border-primary/20 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="event-type"
            className="block text-sm font-medium tracking-wide uppercase mb-2"
          >
            Event Type *
          </label>
          <select
            id="event-type"
            name="event-type"
            required
            className="w-full px-4 py-3 bg-background border border-primary/20 focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">Select event type</option>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate</option>
            <option value="private">Private Event</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="guest-count"
            className="block text-sm font-medium tracking-wide uppercase mb-2"
          >
            Estimated Guest Count
          </label>
          <input
            type="number"
            id="guest-count"
            name="guest-count"
            min="1"
            className="w-full px-4 py-3 bg-background border border-primary/20 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium tracking-wide uppercase mb-2"
          >
            Event Date (Optional)
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full px-4 py-3 bg-background border border-primary/20 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium tracking-wide uppercase mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 bg-background border border-primary/20 focus:border-primary focus:outline-none transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="px-8 py-4 bg-primary text-background text-sm tracking-wide uppercase hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {message && (
        <div
          className={`p-4 border ${
            status === "success"
              ? "border-primary/20 bg-primary/5 text-primary"
              : "border-red-500/20 bg-red-500/5 text-red-700"
          }`}
        >
          <p className="text-sm">{message}</p>
        </div>
      )}

      <div className="pt-8 border-t border-primary/10 text-sm text-primary/60">
        <p>
          <strong className="text-primary">Note:</strong> Replace{" "}
          <code className="bg-primary/5 px-1">YOUR_FORM_ID</code> in{" "}
          <code className="bg-primary/5 px-1">components/ContactForm.tsx</code>{" "}
          with your actual Formspree form ID. Or email directly at{" "}
          <a
            href="mailto:nicole@ballerina.com.au"
            className="text-primary underline hover:opacity-70"
          >
            nicole@ballerina.com.au
          </a>
        </p>
      </div>
    </div>
  );
}
