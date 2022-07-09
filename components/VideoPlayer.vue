<template>
  <youtube
    :video-id="videoId"
    player-width="100%"
    :player-vars="{ autoplay: 1, controls: 0, showinfo: 0, loop: 1, host: 'https://www.youtube.com', }"
    :mute="true"
    ref="youtube"
    class="h-full aspect-auto"
    @ended="ended"
  ></youtube>
</template>

<script>
export default {
  data() {
    return {
      videoId: "K2bNsCSmuXE",
    };
  },
  methods: {
    ended() {
      this.$refs.youtube.player.seekTo(0)
    }
  }
};
</script>

<style>
</style>