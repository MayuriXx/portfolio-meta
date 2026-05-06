<template>
    <section class="grid-section" id="versions">
        <div class="grid-section__header">
            <h2 class="grid-section__title">Four<br>Implementations</h2>
            <p class="grid-section__intro">
                Each implementation respects the same design tokens and reads the same
                <code>cv.json</code> — only the internal architecture changes.
                Every repository is open source and documented.
            </p>
        </div>

        <div class="grid-section__grid">
            <VersionCard v-for="version in versions" :key="version.id" :version="version" />
        </div>
    </section>
</template>

<script setup>
// Grid display of all portfolio implementations
// Imports version data and renders a card for each technology
import { versions } from '../data/versions.js'
import VersionCard from './VersionCard.vue'
</script>

<style scoped>
.grid-section {
    padding: clamp(var(--space-lg), 8vw, var(--space-2xl)) clamp(var(--space-md), 8vw, var(--space-2xl));
}

.grid-section__header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
    align-items: end;
    margin-bottom: clamp(var(--space-lg), 5vw, 56px);
}

.grid-section__title {
    font-family: var(--font-display);
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.05;
    color: var(--ink);
}

.grid-section__intro {
    font-size: 15px;
    color: var(--ink-mid);
    line-height: 1.7;
}

.grid-section__intro code {
    font-size: 13px;
    background: var(--accent-pale);
    color: var(--accent);
    padding: 2px 6px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border);
}

.grid-section__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-sm);
}

@media (max-width: 900px) {
    .grid-section__header {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 700px) {
    .grid-section__grid {
        grid-template-columns: 1fr;
    }
}
</style>