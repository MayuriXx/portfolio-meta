<template>
  <AppHeader />
  <main>
    <HeroSection />
    <ConceptBand />
    <VersionsGrid />
    <PhilosophySection />
    <ContactStrip />
  </main>
  <AppFooter />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ConceptBand from './components/ConceptBand.vue'
import VersionsGrid from './components/VersionsGrid.vue'
import PhilosophySection from './components/PhilosophySection.vue'
import ContactStrip from './components/ContactStrip.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
/**
 * Global styles - component-specific styles are scoped in their files
 * Main layout uses flexbox for vertical stacking of sections
 */
main {
  display: flex;
  flex-direction: column;
}
</style>