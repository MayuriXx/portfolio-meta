<template>
    <section class="contact">
        <div class="contact__left">
            <h2 class="contact__title">On discute ?</h2>
            <p class="contact__sub">Disponible pour de nouvelles opportunités · Lille & remote</p>
        </div>
        <div class="contact__actions">

            <a href="mailto:martho.evan@gmail.com" class="btn btn--dark">
                martho.evan@gmail.com
            </a>

            <a href="https://www.linkedin.com/in/evan-martho/" target="_blank" class="btn btn--outline">
                LinkedIn →
            </a>
        </div>
    </section>
</template>

<script setup>
// stateless
</script>

<style scoped>
.contact {
    padding: clamp(var(--space-lg), 6vw, var(--space-xl)) clamp(var(--space-md), 8vw, var(--space-2xl));
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-lg);
}

.contact__title {
    font-family: var(--font-display);
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--ink);
    margin-bottom: var(--space-xs);
}

.contact__sub {
    font-size: 15px;
    color: var(--ink-mid);
}

.contact__actions {
    display: flex;
    gap: var(--space-sm);
    flex-wrap: wrap;
}

/* Boutons — dupliqués depuis HeroSection en attendant de les déplacer dans tokens.css */
.btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    padding: 13px 26px;
    border-radius: var(--radius-full);
    transition: all 0.2s;
    white-space: nowrap;
}

.btn--dark {
    background: var(--ink);
    color: white;
}

.btn--dark:hover {
    background: #2e3d38;
    transform: translateY(-2px);
}

.btn--outline {
    border: 1.5px solid var(--border);
    color: var(--ink-mid);
    background: white;
}

.btn--outline:hover {
    border-color: var(--accent-mid);
    color: var(--ink);
    transform: translateY(-2px);
}

@media (max-width: 600px) {
    .contact {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>