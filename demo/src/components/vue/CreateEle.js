export default {
  functional: true,
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  render: (createElement, context) => {
    return createElement('div', {
      class: 'header',
      attrs: {
        contenteditable: true
      },
    }, context.props.list.join())
  }
}
