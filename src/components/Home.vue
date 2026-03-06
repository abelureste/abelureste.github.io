<script setup>
</script>

<template>
  <div class="box">
    <div class="center" style="margin-bottom: 12px;">
      <img src='../assets/chewy_pink_ovular.gif' style="max-width: 400px;">
    </div>

    <h2>ABOUT</h2>
    <hr>
    <p>Hello and welcome to my slice of the internet. I'm a programmer both professionally and personally. Here are a few facts about me:</p>
    <ul>
      <li>I have the best dog ever - he's named Chewy after Chewbacca</li>
      <li>I love to build / create things</li>
      <li>I want to see as much of the world as possible</li>
    </ul>
    <p>On this site you can find posts about anything that intrigues me.</p>
  </div>

  <div class="box">
    <h2>CONNECT</h2>
    <div class="contact">
      <a class="button" href="https://github.com/abelureste" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /> Github</a>
      <a class="button" href="https://www.linkedin.com/in/abelureste" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /> Linkedin</a>
      <a class="button" href="mailto:aureste03@gmail.com"><font-awesome-icon icon="fa-solid fa-envelope" /> Email</a>
    </div>
  </div>

  <img src='../assets/black_white_matrix.gif' style="height: 80px; width: 100%; margin-bottom: 16px; object-fit: cover;">

  <div class="box">
    <h2>POSTS</h2>
    <hr>
    <p class="post"><b>05 MAR 2026 > </b><RouterLink to="/post-002">#002 - Random Dogs </RouterLink></p>
    <p class="post"><b>04 MAR 2026 > </b><RouterLink to="/post-001">#001 - Hello World! </RouterLink></p>
  </div>

</template>
