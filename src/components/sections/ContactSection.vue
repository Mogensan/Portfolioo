<script setup>
import { reactive, ref } from 'vue'
import { useReveal } from '@/composables/useReveal'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const { el, visible } = useReveal()

const form = reactive({ name: '', email: '', message: '' })
const status = ref('') // 'sending' | 'sent' | 'error' | ''

/**
 * Contact form submission.
 *
 * ─── SETUP ───────────────────────────────────────────────────────────────────
 * 1. Replace YOUR_EMAIL below with your actual email address.
 * 2. For a working form submission, sign up at https://formspree.io (free),
 *    create a form, copy the endpoint ID, and uncomment Option A below.
 *    The mailto fallback (Option B) is active by default and requires no signup.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ← Replace with your actual email address
const CONTACT_EMAIL = 'your@email.com'
async function handleSubmit() {
  status.value = 'sending'

  // --- Option A: Formspree ---
  // try {
  //   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  //     body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
  //   })
  //   if (res.ok) {
  //     status.value = 'sent'
  //     Object.assign(form, { name: '', email: '', message: '' })
  //   } else {
  //     status.value = 'error'
  //   }
  // } catch {
  //   status.value = 'error'
  // }

  // --- Option B: mailto fallback (active by default) ---
  const subject = encodeURIComponent(`Portfolio Contact: ${form.name}`)
  const body = encodeURIComponent(
    `From: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
  )
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  status.value = 'sent'
  Object.assign(form, { name: '', email: '', message: '' })
}

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Mogensan',
    path: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z',
    viewBox: '0 0 24 24',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/andersmogensen',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    viewBox: '0 0 24 24',
  },
]
</script>

<template>
  <section id="contact" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <SectionTitle
        title="Get In Touch"
        subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
      />

      <div
        ref="el"
        class="grid grid-cols-1 lg:grid-cols-2 gap-16 transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <!-- Left: info + social -->
        <div>
          <p class="text-charcoal/80 leading-relaxed mb-6">
            I'm currently open to new opportunities and collaborations. Whether you have a question,
            a project proposal, or just want to connect — my inbox is always open.
          </p>

          <a
            :href="`mailto:${CONTACT_EMAIL}`"
            class="inline-block text-brand font-medium hover:underline mb-8"
          >
            <!-- ← Replace with your actual email address (also update CONTACT_EMAIL above) -->
            {{ CONTACT_EMAIL }}
          </a>

          <div class="flex items-center gap-5 mt-6">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="link.label"
              class="flex items-center gap-2 text-charcoal/60 hover:text-brand transition-colors"
            >
              <svg :viewBox="link.viewBox" fill="currentColor" class="w-5 h-5" aria-hidden="true">
                <path :d="link.path" />
              </svg>
              <span class="text-sm font-medium">{{ link.label }}</span>
            </a>
          </div>
        </div>

        <!-- Right: form -->
        <form
          class="bg-surface rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-l-4 border-gold p-8 space-y-5"
          @submit.prevent="handleSubmit"
          novalidate
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-medium text-charcoal mb-1" for="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                placeholder="Your name"
                required
                class="w-full px-4 py-2.5 bg-white border border-charcoal/15 rounded text-charcoal placeholder-muted focus:outline-none focus:border-brand transition-colors"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-charcoal mb-1" for="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                required
                class="w-full px-4 py-2.5 bg-white border border-charcoal/15 rounded text-charcoal placeholder-muted focus:outline-none focus:border-brand transition-colors"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-charcoal mb-1" for="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              v-model="form.message"
              rows="5"
              placeholder="Tell me about your project or say hello..."
              required
              class="w-full px-4 py-2.5 bg-white border border-charcoal/15 rounded text-charcoal placeholder-muted focus:outline-none focus:border-brand transition-colors resize-none"
            ></textarea>
          </div>

          <!-- Status messages -->
          <p v-if="status === 'sent'" class="text-sm font-medium" style="color: #2d7a2d">
            Message sent! I'll get back to you soon.
          </p>
          <p v-else-if="status === 'error'" class="text-sm font-medium text-brand">
            Something went wrong. Please try again or email me directly.
          </p>

          <button
            type="submit"
            :disabled="status === 'sending'"
            class="w-full py-3 bg-brand text-surface font-semibold rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#8f0015] transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
          >
            {{ status === 'sending' ? 'Sending…' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
