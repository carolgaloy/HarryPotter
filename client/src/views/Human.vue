<template>
  <div class="content">
    <h1>Sorry, you have no power here.</h1>
    <div>
      <iframe
        src="https://giphy.com/embed/PcfozPlZSzARO"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Human",
  created() {
    setTimeout(() => this.$router.push({ path: "/" }), 3000);
  }
};
</script>

<style scoped>
.giphy-embed {
  margin-top: 20px;
  width: 100%;
}
.human > div {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
