<template>
    <footer class="footer">
        <span class="footer__name">Evan Martho · 2025</span>
        <div class="footer__links">
            <a href="mailto:martho.evan@gmail.com" class="footer__link">Email</a>

            <a href="https://www.linkedin.com/in/evan-martho/" target="_blank" class="footer__link">
                LinkedIn
            </a>

            <a href="https://github.com/MayuriXx" target="_blank" class="footer__link">
                GitHub
            </a>
        </div>
    </footer>
</template>

<script setup>
// Footer component with contact information and social links
// Stateless - displays copyright and navigation links
</script>

<style scoped>
.footer {
    background: var(--ink);
    padding: 28px clamp(var(--space-md), 8vw, var(--space-2xl));
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-sm);
}

.footer__name {
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.4);
}

.footer__links {
    display: flex;
    gap: var(--space-md);
}

.footer__link {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.3);
    text-decoration: none;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    transition: color 0.2s;
}

.footer__link:hover {
    color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 600px) {
    .footer {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>