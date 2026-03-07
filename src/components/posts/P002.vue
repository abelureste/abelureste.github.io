<script setup>
  import { ref } from 'vue'

  let loading = ref(true)
  let dogURL = ref(null) 
  let breed = null

  async function getDog () {
   try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random")
      if (!response.ok) {
        throw new Error(`Error, response status: ${response.status}`)
      }
      const result = await response.json()
      console.log(result)
      loading.value = false
      dogURL.value = result.message

      breed = dogURL.value.split('/')
      breed = breed[4]

      if (breed.includes('-')) {
        breed = breed.split('-')
        breed = (`${breed[1].charAt(0).toUpperCase() + breed[1].slice(1)} ${breed[0].charAt(0).toUpperCase() + breed[0].slice(1)}`)
      } else {
        breed = breed.charAt(0).toUpperCase() + breed.slice(1)
      }

    } catch(error) {
      console.error(error.message)
    }
  } 

  getDog()

  function handleClick () {
    loading.value = true
    getDog()
  }

</script>

<template>
  <div class="box">

    <h2>Random Dogs</h2>
    <div class="twoRow">
      <h3>#002</h3>
      <h3 style="text-align: right;">/ 05 MAR 2026</h3>
    </div>
    <hr>
    <p class="margin12bottom">Most people love dogs right? Why not request a random dog picture. Maybe you'll fall in love with a breed you've never heard of, or maybe a dog being silly will brighten your day. This page simply requests a random dog breed from an API located at <a href="https://dog.ceo/dog-api/breeds-list" class="textLink" target="#_blank">dog.ceo</a>.</p>

    <div class="center">
      <div v-if="loading === true"> Loading... </div>
      <div v-else>
        <img :src="dogURL" style="width: 400px;" class="margin12y">
        <p style="text-align: center;" class="margin12bottom">Wow that's a cute {{ breed }}!</p>
        <button @click="handleClick" class="button" style="font-size: 16px;">Another one!</button>
      </div>      
    </div>

  </div>
</template>