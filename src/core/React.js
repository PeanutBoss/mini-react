export const TEXT_NODE = 'react_text_node'

export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => typeof child === 'string' ? createTextNode(child) : child)
    }
  }
}
function createTextNode(text) {
  return {
    type: TEXT_NODE,
    props: {
      nodeValue: text,
      children: []
    }
  }
}

export function render({ type, props }, container) {
  const el = type === TEXT_NODE
    ? document.createTextNode("")
    : document.createElement(type)
  for (const key in props) {
    if (key === 'children') continue
    el[key] = props[key]
  }
  container.appendChild(el)
  if (props.children.length) props.children.forEach(child => {
    render(child, el)
  })
}
