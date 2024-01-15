import { render } from './React.js'

const ReactDom = {
  createRoot(root) {
    return {
      render(vNode) {
        render(vNode, root)
      }
    }
  }
}

export default ReactDom
