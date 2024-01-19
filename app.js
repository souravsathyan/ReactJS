import React from 'react'
import ReactDOM from 'react-dom/client'


const elem = <span>REac span element</span>
const HeadingComponent = () => (
    <div>
        <h1 className='myHeading'>Namaste React</h1>
    </div>
)
const jsxHeading = (
    <div>
        <h1>Namaste REact using JSX</h1>
        <HeadingComponent />
        <h1 className='myHeading'>Namaste React</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

const TitleComponent = () => {
    return <h1>Title</h1>
}


// root.render(<HeadingComponent />)
root.render(jsxHeading)