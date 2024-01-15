import { createNode, TEXT_NODE } from './core/React.js'

const textVNode = createNode(TEXT_NODE, { nodeValue: 'app' })

const App = createNode('div', { id: 'app' }, textVNode)

export default App
