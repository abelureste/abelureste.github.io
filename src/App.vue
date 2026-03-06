<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const currentTimeEST = ref(new Date().toLocaleTimeString('en-US', {
    timeZone: 'America/New_York',
    timeZoneName: 'short',
  }).toUpperCase().split('.').join(''))

  let timerInterval = null;

  const updateTime = () => {
      currentTimeEST.value = new Date().toLocaleTimeString('en-US', {
      timeZone: 'America/New_York',
      timeZoneName: 'short'
    }).toUpperCase().split('.').join('')
  }

  onMounted(() => {
    timerInterval = setInterval(updateTime, 1000)
  })

  onUnmounted(() => {
    clearInterval(timerInterval)
  })
</script>

<template>
  <div class="box">
    <div class="twoRow">
      <RouterLink to="/">abelureste.com</RouterLink>
      <p style="text-align: right;">{{ currentTimeEST }}</p>
    </div>
  </div>

  <router-view/>

  <div class="center">
    <img src="./assets/button331.gif" class="margin4x">
    <img src="./assets/button484.gif" class="margin4x">  
  </div>

</template>
