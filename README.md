links{
    #life cycle => https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


}

"We write code first for human then for machines"
<h1>React</h1> 
react
    -core of reacr library
    -for creating react components, handling component lifecycle and state management
reactDOM 
    -for working with DOM
    -rendering react components into DOM

react element - Dom element

React.createElement("elementName",{id/class},"content"/can be anthoter reactELement / can be an array of reactELement)
    -it creates an object
    -when we renders it into the DOM it becomes an Element

ReactRoot = for creating a root to inject the reactElement
    - ReactDOM.createRoot(document.getElmentById("root))

React Component
    -component
        2-types
            -class based components (oldest method)
            -functional components (new method)
    -just a js function which returns a jsx element
    -starts with capital letter
    -easy defenition => a fnction which returns a jsx element

COMPONENT COMPOSITION
    -Inserting component in another component 

package.json = configuration for npm and tracks the version of the npm

package-lock.json = keeps all the records of the versions that are used while the developement of the application.

node_modules = like a database that need to function for the npm packages

transitive dependecny = a chain of interlinked components dependent on each other.
    in npm it is the chain of dependency which are not installed direct but by the direct dependency or trasitive dependency

bundler = used to package the application to be ready for served in browser

tilde(~) and caret(^) in package.json
    ~ means all future updates without incerementing the minor version. eg. 1.2.3 to 1.3.0
    ^ means all future updates without incrementing the major version. eg. 1.2.3 to < 2.0.0

npx = used to execute the npm package

<h3>Parcel</h3> 
    -refer this [https://medium.com/@nikhildhariwal2004/parcel-is-a-beast-an-all-in-one-bundle-for-powerful-web-development-e79f8a70cbd6]
    -refer docs => https://parceljs.org/
    - development build
    -Creates a local server
    - HMR - hot module replacement - like nodemon
        -> how? it uses a File Watching Algorith writtent in c++
    -Faster builds
        -> how? It caches our code in a space called .parcel-cache so it enables faster builds
    -Image Optimization
        - using image transformer
        -also includes lossless image optimization
    -Minification of our file when in production mode
    -Bundling
    -Compressing
    -consistent Hashing - generating unique names for cache. to ensure that browser fetches latest files
    -Differential bundling - bndling differently for each browsers
    -Diagnostic of errors in terminal
    -Error Handling = displaying the errors in browsers
    -HTTPS = can be hosted in https
    - different dev and prod bundles
    -Tree Shaking - avaoiding unwanted functions
    prod build cmd = npx parcel build index.html 
    -dist folder keeps all the bundeled files
    

<h3>JSX</h3> 
    - developed by facebook devlopers
    -a javascript syntax which is easier to create react 
    -jsx is different than react
        -y? jsx is a syntax, jsx makes implementing the react easy
    -event without jsx we can write react
    -NOT A HTML IN JS
    -IT IS HTML LIKE SYNTAX
    -JSX also creates a object like the React.createElement()
    -jsx is not a valid js / pure js
    -js engine not understasnd jsx but parcel transpile code with the help of **Babel** before the code goes to js engine and make it understatndable for the js engine
    -prevents cross site scripting attacks by sanitizing data
    -

jsx example
    const heading = React.createElement("h1", { id: "head" }, "React Master Class")
    above is the react elemet using react
    below is react element uing the jsx
    const jsxHeading = <h1>Namaste REact using JSX</h1>
    wrap it inside parenthesis for multiple lines

<h3>Babel</h3> 
    -Babel is a JS compiler 
    -Transpiles the code before it reaches the JS Engine and makes it understatndable by the JS engine. By the help of the Babel(JSX to JS).
    -It Converts the JSX to React.createElement - a JS Obj => then to HTMLElement(render)
        * without jsx  => React.createElement - a JS Obj => then to HTMLElement(render)
    -


// const elem = <span>REac span element</span>
// const HeadingComponent = () => (
//     <div>
//         <h1 className='myHeading'>Namaste React</h1>
//     </div>
// )
// const jsxHeading = (
//     <div>
//         <h1>Namaste REact using JSX</h1>
//         <HeadingComponent />
//         <h1 className='myHeading'>Namaste React</h1>
//     </div>
// )


// const TitleComponent = () => {
//     return <h1>Title</h1>
// }


// // root.render(<HeadingComponent />)
// root.render(jsxHeading)

2 types of Export/Import
    Default Export
    -export default Component
    -import Compnent from 'path'

    Named Export 
    -export const Component
    -import {Component} from 'path'

<h3>PROPS</h3>
    -properties
    -passing a argument in to function/ components
    -are normal arguments of function
    -prop is an object
    -when we want to add dynamic data. We will use props to pass data to component.
    -when passing the data using loop we have to pass a unique key
        -why? for preventing re-renter all the components
        -by using unique id we can prevent the full re-rendering.
        -for optimization
        -**Do not use the index as the keys**
        -**no keys < index < unique keys**

***CONFLICT_DRIVEN-UI***
    -website driven by data
    -eg=> based on the location we can present different ui
    -
<h3>SUPER POWERS OF REACT</h3>
    -super fast in DOM Manipulation
    -holds the ui layer and data layer consistently each other
    -When ever state variable updates, react re-renders the component in a very optimized way
    -Uses Reconciliation Algorithm (aka React Fiber) (React 16)
        -new way of finding the Diff and updating / re-render the DOM
        -
        -Virtual Dom
             => is a object representation of actual DOM
             => normal js Object
             => 
        -Diff Algorithm
            => 
    -react has faster rendering mechanism
    - Load app => render => API_call => populate
    -Whenever state variable update react triggers a reconciliation cycle(re-renders the component)

<h1>React Hooks</h1>
        -normal js functions
        -it is a utilites functions in the react
        -call it iniside the component
        -top of the function
        -does not create state inside the if condition and inside the function and in the loops
        -
        -
        -2 important Hooks
            -useState()
                -uses when we want to create a dynamic variable
                -
                -generate super powerful react variables
                -to create state variable
                -keeps track on the variables and when ever there is a changes in the variable, react trigger the diff algo and automatically updates the UI
                -keeps the UI in sync with the data variable
                -usage
                    -import from react
                    -like a named import 
                    -const [variableName, setVariableName] = useState(defaultData)
                        -when using useState() it will give us a state variable and we recive it inside an array
                    -setVariableName used for triggering the diff algorithm for finding the difference and re-rendering/updating

            -useEffect()
                -2 parameters
                    1.Callback function*
                        1.1 called after the component rendered
                    2.dependency
                -useEffect will be called after every time the component rendered
                -dependency array changes the behaviour of the render
                    -if no dependency array useEffect will be called in every render
                    -if there is an dependency empty array => useEffect will be called on initial render  and once.
                    -if dependency array is not empty. iT will be called when the dependecy is changed
                -> useEffect function returns a function which will be called when unmounting the component.
                ->React's useEffect hook expects a cleanup function to be returned from it when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called.

<h3>Routing</h3> 
    -using React Router npm package.
    -have to create routing configuration in app level
    -we import the *createBrowserRouter to config our paths
    -configuration is a list of Objects
    -*RouterProvider component gives the routing configration to our App
    -with useRouterError hook by the react-router-dom we can access more details about the error occured
    -*Outlet component will render the child route according to the path ie, the outlet will be filled with the component A2 path.
    -*Link for navigating
    -link is a wrapper around the anchor tag. 
        -Link will keep a track on the anchor tag and prevents from the page refresh
        -
    -*useParam hook used to read the params from the route
    -2 Types of Routing 
        -client-side Routing
            -components are loaded 
            -not feetching new pages
            -just a one page. the components are changed.
        -Server-side Routing
            -reloads the webpage

microservices
    -seperation of concern
    -single responsibility principle
    -ability of usage of diff languages for each services

<h3>Class based Components</h3>
    => A classclass extends React.Component and has a render method, which returns a jsx
    => we pass the props and recieve it in the constructor
    => we have to give the super(props) in the constructor
        ->to inherit the properties of the parent
        ->
    =>Loading a component == creating a instance of class
    =>we create state variable in the constructor
        ->it is an object
        ->we can create multiple state variables by increasing the properties
        ->
    => react gives this.setState => for updating the state variable
        ->we pass the object containing the to be update data.
        ->we can batch mltiple state variables
        ->
    =>mounting / work flow of class based component
        -> parent constructor => parent render => child constructor => child render
    =>componentDidMount(){} => will be called after the component is mounted.
        =>to make api calls
        =>similar to useEffect = because we call the api after the component is loaded.
        =>we dont want component to render till api returns data
        =>So react quickly render the component and renders the data from the api.
        =>
    =>when the parent and child have the componentDidMount() then
        -> parent constructor() => parent render=> child constructor=> child render => child componentDidMount => parent componentDidMount.
    => when there is multiple child then react optimises the rendering and barches the rendering for the child

<h1>React life Cycle</h1>
    -React has 2 phases
        -->Render Phase
            ->has Constructor and Render
            ->no sideeffects
            ->in case of the multiple childs, react will batches the rendering phase of the child.
                ->why react is doing like this?
                    => **because DOM manipulation is very expensive and time consuming so react tries to  batches the dom rendering ie, why react is fast**
        -->Commit Phase
            -><**React Updates the DOM in a single batch**>
            ->runs api calls ie, componentDidMount is called
            ->render data
    => This lide cycle works for every parent and child in react
    << MOUNTING >>
        =>Parent constructor
        =>Parent Render
            ->First child Constructor
            ->FIrst Child render
            -SEcond child Constructor
            ->Second Child render
        <DOM UPDATED - IN SINGLE BATCH>
            -> first child componentDidMount()()
            ->Second Child componentDidMount()()
        ->Parent componentDidMount()
    << UPDATION >>
    render the api(Data)
    updating the component HTML is called with data
    then componentDidUpdate is called

    => ComponentDidUpdate
        => called after the updation completed
    => ComponentWillUnmount will be called when the component is unloaded from the web page
        eg-> when we goes to another page

#DeepDiveIntoLifeCycleMethods
***Dont compare the React Life Cycle Methods with Funcitonal Components**
**Dont compare the useEffect with componentDidMount()**

<< Mount Update Unmount >>
**The Mounting Phase begins when a component is first created and inserted into the DOM**.
**The Updating Phase occurs when a component's state or props change.**
**And the Unmounting Phase occurs when a component is removed from the DOM**

**LCM that will be called after every update => componentDidUpdate()**

like in the fncitonal component
    useEffect(cb(),[count]) = will be rendered everytime conunt changes
in the class component
    componentDidUpdate(prevProps, prevState){
        have to check using the if condition
    }
    So painful and more code. New React now simplified it.

<h1> Optimizing React App </h1>
<ul>
    <li>Single Responsibility Principle</li>
    <li>Creating Custom hooks</li>
        <p>makes code more readble and modular</p>
    <li>Code Splitting / Chunking / Lazy Loading / Dynamic bundling / demand loading </li>
        <p>*Break our app into smaller pieces/ js files</p>
        <p>Smaller bundels of the files</p>
        <p>logically divinding app into smaller bundle</p>
        <p>should have enough code for a feature</p>
        <p>While using Lazy loading in react we have to use the Suspense
            . Because react is very fast and when we access the lazyily loaded component it will take some time to load the component. So at that point of time react will stop the rendering. In order to prevent that we use the suspense and fallback (like a placeholder to show till we load the component.)
        </p>
</ul>

<h3>Styling</h3>
<ul>
    <li>Taiwind</li>
    <li>Ant design</li>
    <li>Chakra ui</li>
    <li>material ui</li>
    <li>Styled components</li>
</ul>