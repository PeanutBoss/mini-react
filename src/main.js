const TEXT_NODE = 'react_text_node'

const textVNode = {
  type: TEXT_NODE,
  props: {
    nodeValue: 'app'
  }
}
// 构建虚拟dom
const vDom = {
  type: 'div',
  props: {
    id: 'app'
  },
  children: [textVNode]
}


// 硬编码
const dom = document.createElement(vDom.type)
dom.id = vDom.props.id
document.querySelector('#root').appendChild(dom)

const textNode = createElement(textVNode.type)
textNode.nodeValue = textVNode.props.nodeValue
dom.appendChild(textNode)

function createElement(type) {
  return type === TEXT_NODE
    ? document.createTextNode("")
    : document.createElement(type)
}
