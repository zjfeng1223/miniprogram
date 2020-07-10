<template>
  <div>
    <div class="handle">
      <h1 class="text">{{text}}</h1>
      <span class="icon-handle">图标</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: 'String',
      default: '标题'
    }
  }
}
</script>

<style scoped>
.handle {
  padding: 15px;
  font-size: 34px;
}
.text,
.icon-handle {
  display: inline-block;
  vertical-align: middle;
  width: 50%;
}
.text {
  font-weight: bold;
}
.icon-handle {
  text-align: right;
}
</style>
