export const TEXT_NODE = 'react_text_node'

export function createNode(type, props, ...children) {
  return {
    type,
    props,
    children
  }
}

export function render({ type, props, children }, container) {
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

function createElement(type) {
  return type === TEXT_NODE
    ? document.createTextNode("")
    : document.createElement(type)
}
