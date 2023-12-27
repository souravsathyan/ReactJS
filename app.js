import React from 'react'
import ReactDOM from 'react-dom/client'

const parent = React.createElement(
    "div", { id: 'parent' },
    [React.createElement('div', { id: 'child1' },
        [React.createElement('h1', {}, "I'm a H1 Tag in nested div"), React.createElement('h2', {}, "I'm a H2 Tag in nested div")]
    ), React.createElement('div', { id: 'child2' },
        [React.createElement('h1', {}, "I'm a H1 Tag in nested div"), React.createElement('h2', {}, "I'm a H2 Tag in nested div")]
    )]
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
