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
      // Formspree endpoint
      const response = await fetch("https://formspree.io/f/xwvvqbkw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (response.ok && !data.error) {
        setStatus("success");
        setMessage("Thank you. Your message has been sent.");
        e.currentTarget.reset();
      } else {
        // Formspree sometimes returns 200 with errors in the body
        const errorMessage = data.error || data.errors?.[0]?.message || "Something went wrong";
        setStatus("error");
        setMessage(`Sorry, there was an error: ${errorMessage}. Please try again or call 0413 851 171.`);
      }
    } catch (error) {
      // Network error or JSON parsing error
      setStatus("error");
      setMessage(
        "Sorry, there was an error sending your message. Please try again or call 0413 851 171."
      );
      console.error("Form submission error:", error);
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

    </div>
  );
}
