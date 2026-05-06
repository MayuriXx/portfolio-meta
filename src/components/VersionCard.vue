<template>
    <div class="card" :class="`card--${version.id}`" :style="{ '--card-accent': version.color }">
        <div class="card__head">
            <div class="card__icon">{{ version.icon }}</div>
            <span class="card__badge" :class="version.status === 'live' ? 'card__badge--live' : 'card__badge--soon'">
                {{ version.status === 'live' ? 'Live' : 'En cours' }}
            </span>
        </div>

        <div class="card__name">{{ version.name }}</div>

        <p class="card__desc">{{ version.description }}</p>

        <div class="card__tags">
            <span v-for="tag in version.tags" :key="tag" class="card__tag">
                {{ tag }}
            </span>
        </div>

        <div class="card__footer">

            <a v-if="version.status === 'live' && version.url" :href="version.url" target="_blank" class="card__link">
                Voir la démo →
            </a>

            <a v-if="version.status === 'live' && version.github" :href="version.github" target="_blank"
                class="card__link card__link--ghost">
                GitHub →
            </a>
            <span v-if="version.status === 'soon'" class="card__soon">
                Bientôt disponible
            </span>
        </div>
    </div>
</template>

<script setup>
// Individual version card component
// Displays technology details, status, and links
defineProps({
    version: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.card {
    background: white;
    border: 1.5px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 36px;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    position: relative;
    overflow: hidden;
    transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
    cursor: default;
}

/* Barre colorée en bas au hover */
.card::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--card-accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(107, 144, 128, 0.12);
    border-color: var(--card-accent);
}

.card:hover::after {
    transform: scaleX(1);
}

/* Head */
.card__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card__icon {
    width: 52px;
    height: 52px;
    border-radius: var(--radius-md);
    background: var(--c4);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    transition: background 0.2s;
}

.card:hover .card__icon {
    background: var(--accent-soft);
}

/* Badge */
.card__badge {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: var(--radius-full);
    border: 1px solid;
}

.card__badge--live {
    color: #2D9E6B;
    background: rgba(45, 158, 107, 0.08);
    border-color: rgba(45, 158, 107, 0.25);
}

.card__badge--soon {
    color: var(--ink-light);
    background: var(--accent-pale);
    border-color: var(--border);
}

/* Nom */
.card__name {
    font-family: var(--font-display);
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--ink);
}

/* Description */
.card__desc {
    font-size: 14px;
    color: var(--ink-mid);
    line-height: 1.7;
    flex-grow: 1;
}

/* Tags */
.card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.card__tag {
    font-size: 11px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: var(--radius-sm);
    background: var(--c4);
    color: var(--ink-mid);
    border: 1px solid var(--border);
}

/* Footer */
.card__footer {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-top: auto;
    min-height: 24px;
}

.card__link {
    font-size: 13px;
    font-weight: 500;
    color: var(--card-accent);
    text-decoration: none;
    transition: opacity 0.2s;
}

.card__link:hover {
    opacity: 0.7;
}

.card__link--ghost {
    color: var(--ink-light);
}

.card__soon {
    font-size: 12px;
    color: var(--ink-light);
    font-style: italic;
}
</style>