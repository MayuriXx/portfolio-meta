<template>
  <AppHeader />
  <main>
    <HeroSection />
    <ConceptBand />
    <VersionsGrid />
    <PhilosophySection />
    <ContactStrip />
  </main>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ConceptBand from './components/ConceptBand.vue'
import VersionsGrid from './components/VersionsGrid.vue'
import PhilosophySection from './components/PhilosophySection.vue'
import ContactStrip from './components/ContactStrip.vue'
</script>

<style>
/* styles globaux uniquement ici, le reste dans les composants */
main {
  display: flex;
  flex-direction: column;
}
</style>