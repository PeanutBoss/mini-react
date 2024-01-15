import ReactDom from './core/ReactDom.js'

const TEXT_NODE = 'react_text_node'

const textVNode = createNode(TEXT_NODE, { nodeValue: 'app' })
// 构建虚拟dom
const vDom = createNode('div', { id: 'app' }, textVNode)

// render(vDom, document.querySelector('#root'))
ReactDom.createRoot(document.querySelector('#root')).render(vDom)

function createElement(type) {
  return type === TEXT_NODE
    ? document.createTextNode("")
    : document.createElement(type)
}

function createNode(type, props, ...children) {
  return {
    type,
    props,
    children
  }
}

function render({ type, props, children }, container) {
  const el = createElement(type)
  for (const key in props) {
    if (key === 'children') continue
    el[key] = props[key]
  }
  container.appendChild(el)
  if (children.length) children.forEach(child => {
    render(child, el)
  })
}
