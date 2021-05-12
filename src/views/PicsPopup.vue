<template>
  <div class="modal">
    <img
      id="popupImg"
      :src="require(`@/assets/${filePath}`)"
      alt=""
      @click="close"
    />
  </div>
</template>

<script>
export default {
  props: ["filePath"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss">
.modal {
  position: absolute;
  padding: 200px;
  overflow: hidden;
}

#popupImg {
  width: 100%;
  height: 100%;
}
</style>
