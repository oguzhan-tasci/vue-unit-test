<template>
  <nav>
    <a id="home">Home</a>
    <a v-if="isLoggedIn" id="profile">My Profile</a>
  </nav>
</template>

<script>
export default {
data() {
    return {
        isLoggedIn : false,
    }
}
}
</script>

<style>

</style>