export const myMixin = {
  data () {
    return {
      testData: 'from mixin',
      message: 'message-mixin'
    }
  },
  methods: {
    hello () {
      // console.log('hello from mixin')
    }
  },
  created () {
    this.hello()
  }
}
