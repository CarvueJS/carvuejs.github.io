<template>
  
  <div>

    <testContent />

  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import testContent from "../../content/test.md";

export default {
  name: "Content",
  components: {
    VueMarkdown,
    testContent
  }
};
</script>
