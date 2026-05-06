<template>
    <div class="concept">
        <p class="concept__text">
            Un seul fichier de données.
            <em>Quatre façons de le lire, de le structurer, de le rendre.</em>
            Le même résultat visuel — des philosophies techniques radicalement différentes.
        </p>
        <div class="concept__stats">
            <div v-for="stat in stats" :key="stat.label" class="concept__stat">
                <span class="concept__stat-num">{{ stat.num }}</span>
                <span class="concept__stat-label">{{ stat.label }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
// Display key metrics: 4 technologies, 1 design system, 1 JSON source
const stats = [
    { num: '4', label: 'Technologies' },
    { num: '1', label: 'Design' },
    { num: '1', label: 'JSON' }
]
</script>

<style scoped>
.concept {
    background: var(--accent);
    padding: 40px clamp(var(--space-md), 8vw, var(--space-2xl));
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    flex-wrap: wrap;
}

.concept__text {
    font-family: var(--font-display);
    font-size: clamp(16px, 2vw, 22px);
    font-weight: 600;
    color: white;
    line-height: 1.4;
    flex: 1;
    min-width: 260px;
}

.concept__text em {
    font-style: italic;
    font-weight: 400;
    opacity: 0.75;
}

.concept__stats {
    display: flex;
    gap: var(--space-lg);
    flex-shrink: 0;
}

.concept__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.concept__stat-num {
    font-family: var(--font-display);
    font-size: 36px;
    font-weight: 800;
    color: white;
    line-height: 1;
}

.concept__stat-label {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

@media (max-width: 600px) {
    .concept__stats {
        gap: var(--space-md);
    }
}
</style>