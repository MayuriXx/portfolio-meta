<template>
    <header class="header">
        <div class="header__logo">Evan Martho</div>
        <nav class="header__nav">
            <a href="#versions" class="header__link">Versions</a>
            <a href="#philosophy" class="header__link">Philosophie</a>
            <a href="mailto:martho.evan@gmail.com" class="header__link header__link--primary">Contact</a>
        </nav>
    </header>
</template>

<script setup>
// Pas de logique pour l'instant — stateless
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 60px;
    padding: 0 clamp(var(--space-md), 6vw, var(--space-xl));
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(246, 255, 248, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
}

.header__logo {
    font-family: var(--font-display);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--ink);
}

.header__nav {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
}

.header__link {
    font-size: 12px;
    font-weight: 500;
    color: var(--ink-mid);
    text-decoration: none;
    padding: 6px 14px;
    border-radius: var(--radius-full);
    border: 1px solid transparent;
    transition: all 0.2s;
    letter-spacing: 0.02em;
}

.header__link:hover {
    border-color: var(--border);
    background: var(--accent-pale);
    color: var(--ink);
}

.header__link--primary {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
}

.header__link--primary:hover {
    background: #5a7a6d;
    border-color: #5a7a6d;
    color: white;
}

@media (max-width: 600px) {
    .header__nav {
        display: none;
    }
}
</style>