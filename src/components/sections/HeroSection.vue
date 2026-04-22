<script setup>
function scrollToProjects() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen bg-charcoal flex flex-col items-center justify-center text-center px-6 overflow-hidden"
  >
    <!-- Subtle red glow accent in top-right -->
    <div
      class="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
      style="background: radial-gradient(circle, #B3001B 0%, transparent 70%)"
    ></div>
    <!-- Subtle gold accent bottom-left -->
    <div
      class="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10"
      style="background: radial-gradient(circle, #D4AF37 0%, transparent 70%)"
    ></div>

    <div class="relative z-10 max-w-3xl mx-auto">
      <!-- Greeting -->
      <p class="text-muted text-sm md:text-base font-medium tracking-widest uppercase mb-4">
        Hi, I'm
      </p>

      <!-- Name -->
      <h1
        class="text-5xl md:text-7xl font-heading font-bold text-surface leading-tight mb-4"
        style="color: #F7F7F7"
      >
        Anders Mogensen
      </h1>

      <!-- Title -->
      <p class="text-gold text-xl md:text-2xl font-heading font-semibold mb-6">
        Full Stack Developer
      </p>

      <!-- Tagline -->
      <p class="text-surface/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
        I build clean, performant web applications with a focus on great user experience and
        maintainable code.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          class="w-full sm:w-auto px-8 py-3 bg-brand text-surface font-semibold rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#8f0015] transition-colors focus:outline-none"
          @click="scrollToProjects"
        >
          View My Work
        </button>
        <a
          href="/resume.pdf"
          download
          class="w-full sm:w-auto px-8 py-3 bg-gold text-charcoal font-semibold rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#c09b2a] transition-colors text-center"
        >
          <!-- Place your CV at public/resume.pdf to enable this download -->
          Download CV
        </a>
      </div>

      <!-- Social links -->
      <div class="mt-10 flex items-center justify-center gap-6">
        <a
          href="https://github.com/Mogensan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="text-surface/40 hover:text-gold transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" aria-hidden="true">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/andersmogensen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="text-surface/40 hover:text-gold transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-surface/30">
      <span class="text-xs tracking-widest uppercase">Scroll</span>
      <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>
