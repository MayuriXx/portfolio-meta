<template>
    <section class="philosophy" id="philosophy">
        <div class="philosophy__left">
            <h2 class="philosophy__title">
                Une archi,<br>quatre fois.
            </h2>
            <p class="philosophy__sub">
                Les choix techniques derrière ce projet reflètent la façon dont
                j'aborde chaque mission : rigueur, lisibilité et séparation des
                responsabilités.
            </p>
        </div>

        <div class="philosophy__points">
            <div v-for="(point, index) in points" :key="index" class="philosophy__point">
                <span class="philosophy__num">{{ String(index + 1).padStart(2, '0') }}</span>
                <p class="philosophy__text" v-html="point"></p>
            </div>
        </div>
    </section>
</template>

<script setup>
/**
 * Core principles of the portfolio project:
 * 1. Single source of truth - one cv.json file
 * 2. Shared design tokens - consistent across all implementations
 * 3. Independent deployment - no coupling between versions
 * 4. Open source - transparent, documented code
 */
const points = [
    '<strong>Source unique de vérité</strong> — toutes les versions lisent le même <code>cv.json</code>. Une mise à jour, quatre sites synchronisés.',
    '<strong>Design token partagé</strong> — couleurs, typographies et espacements définis une fois, traduits dans chaque techno.',
    '<strong>Déploiement indépendant</strong> — chaque version sur son propre sous-domaine. Zéro couplage entre les implémentations.',
    '<strong>Code source ouvert</strong> — chaque version a son repo GitHub documenté. <strong>Le code parle autant que le CV.</strong>'
]
</script>

<style scoped>
.philosophy {
    background: var(--accent-pale);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: clamp(var(--space-lg), 8vw, var(--space-2xl)) clamp(var(--space-md), 8vw, var(--space-2xl));
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
    align-items: start;
}

.philosophy__title {
    font-family: var(--font-display);
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.05;
    color: var(--ink);
    margin-bottom: var(--space-md);
}

.philosophy__sub {
    font-size: 16px;
    color: var(--ink-mid);
    line-height: 1.7;
}

.philosophy__points {
    display: flex;
    flex-direction: column;
}

.philosophy__point {
    padding: var(--space-md) 0;
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 28px 1fr;
    gap: var(--space-sm);
}

.philosophy__point:first-child {
    border-top: 1px solid var(--border);
}

.philosophy__num {
    font-family: var(--font-display);
    font-size: 11px;
    font-weight: 700;
    color: var(--accent-mid);
    padding-top: 3px;
}

.philosophy__text {
    font-size: 15px;
    color: var(--ink);
    line-height: 1.65;
}

.philosophy__text :deep(strong) {
    font-weight: 600;
    color: var(--accent);
}

.philosophy__text :deep(code) {
    font-size: 13px;
    background: white;
    color: var(--accent);
    padding: 2px 6px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border);
}

@media (max-width: 768px) {
    .philosophy {
        grid-template-columns: 1fr;
        gap: var(--space-lg);
    }
}
</style>