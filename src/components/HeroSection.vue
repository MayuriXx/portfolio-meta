<template>
    <section class="hero">
        <div class="hero__blob hero__blob--top" />
        <div class="hero__blob hero__blob--bottom" />

        <div class="hero__inner">
            <div class="hero__eyebrow">
                <span class="hero__eyebrow-line" />
                Même CV · 4 technologies
            </div>

            <h1 class="hero__title">
                Evan<br>
                <span class="hero__title--outline">Martho</span>
            </h1>

            <div class="hero__bottom">
                <p class="hero__desc">
                    Développeur Full Stack Mobile. Ce site est lui-même un projet —
                    le même CV, construit en Flutter, Vue.js, React et Angular pour
                    démontrer l'adaptabilité technique.
                </p>
                <div class="hero__actions">
                    <a href="#versions" class="btn btn--dark">Voir les versions</a>
                    <a href="mailto:martho.evan@gmail.com" class="btn btn--outline">Me contacter</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// stateless
</script>

<style scoped>
.hero {
    min-height: 100vh;
    padding: clamp(100px, 12vw, 160px) clamp(var(--space-md), 8vw, var(--space-2xl)) clamp(60px, 8vw, 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    border-bottom: 1px solid var(--border);
    overflow: hidden;
}

/* Blobs décoratifs */
.hero__blob {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
}

.hero__blob--top {
    top: -100px;
    right: -100px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--c3) 0%, transparent 70%);
    opacity: 0.6;
}

.hero__blob--bottom {
    bottom: -80px;
    left: 20%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--c4) 0%, transparent 70%);
    opacity: 0.8;
}

.hero__inner {
    position: relative;
    z-index: 1;
    max-width: 960px;
}

/* Eyebrow */
.hero__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: var(--space-lg);
}

.hero__eyebrow-line {
    display: block;
    width: 32px;
    height: 1px;
    background: var(--accent);
    flex-shrink: 0;
}

/* Titre */
.hero__title {
    font-family: var(--font-display);
    font-size: clamp(56px, 10vw, 140px);
    font-weight: 800;
    line-height: 0.9;
    letter-spacing: -0.04em;
    color: var(--ink);
    margin-bottom: var(--space-lg);
}

.hero__title--outline {
    display: block;
    -webkit-text-stroke: 2px var(--c2);
    color: transparent;
}

/* Bottom */
.hero__bottom {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--space-lg);
    align-items: end;
}

.hero__desc {
    font-size: 17px;
    color: var(--ink-mid);
    line-height: 1.7;
    max-width: 480px;
}

.hero__actions {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    align-items: flex-end;
}

/* Boutons — globaux car réutilisés dans d'autres composants */
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

/* Animations entrée */
.hero__inner>* {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.7s ease forwards;
}

.hero__inner>*:nth-child(1) {
    animation-delay: 0.1s;
}

.hero__inner>*:nth-child(2) {
    animation-delay: 0.22s;
}

.hero__inner>*:nth-child(3) {
    animation-delay: 0.34s;
}

@keyframes fadeUp {
    to {
        opacity: 1;
        transform: none;
    }
}

@media (max-width: 768px) {
    .hero__bottom {
        grid-template-columns: 1fr;
    }

    .hero__actions {
        align-items: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
    }
}
</style>