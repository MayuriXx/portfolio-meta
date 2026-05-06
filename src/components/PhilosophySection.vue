<template>
    <section class="philosophy" id="philosophy">
        <div class="philosophy__left">
            <h2 class="philosophy__title">
                One Architecture,<br>Four Times.
            </h2>
            <p class="philosophy__sub">
                The technical choices behind this project reflect how I approach
                every mission: rigor, readability, and separation of concerns.
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
    '<strong>Single source of truth</strong> — all versions read the same <code>cv.json</code>. One update, four synchronized sites.',
    '<strong>Shared design tokens</strong> — colors, typography, and spacing defined once, translated into each technology.',
    '<strong>Independent deployment</strong> — each version on its own subdomain. Zero coupling between implementations.',
    '<strong>Open source code</strong> — every version has its documented GitHub repo. <strong>The code speaks as much as the CV.</strong>'
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