import { createElement, TEXT_NODE } from './core/React.js'

const textVNode = createElement(TEXT_NODE, { nodeValue: 'app' })
const App = createElement('div', { id: 'app' }, textVNode)

console.log(App, 'App')

export default App
