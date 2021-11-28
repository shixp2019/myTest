<script>
export default {
  name: 'ChildDemo',
  props: ['level'],
  render (h) {
    return h('ul',
      Array.from({ length: 2 }).map(() => {
        return h('li', 'hi')
      })
    )
  }
}
</script>

<style>

</style>
