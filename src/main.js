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
const dom = document.createElement('div')
dom.id = 'app'
document.querySelector('#root').appendChild(dom)

const textNode = document.createTextNode("")
textNode.nodeValue = 'app'
dom.appendChild(textNode)
