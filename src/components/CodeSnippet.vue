<template>
  <iframe height='265' scrolling='no' :title='codePenId' :src='`//codepen.io/nicholaslee119/embed/${codePenId}/?height=265&theme-id=dark&default-tab=result&embed-version=2`' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
    See the Pen <a :href='`https://codepen.io/nicholaslee119/pen/${codePenId}/`'>{{codePenId}}</a> by Nicholas Lee (<a href='https://codepen.io/nicholaslee119'>@nicholaslee119</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>
</template>

<script>
export default {
  name: "codeSnippet",
  props: {
    codePenId: {
      type: String,
      default: "xJKRjY"
    }
  }
};
</script>
