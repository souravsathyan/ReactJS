links{
    #life cycle => https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


}

"We write code first for human then for machines"
#React
    -core of reacr library
    -for creating react components, handling component lifecycle and state management
#reactDOM 
    -for working with DOM
    -rendering react components into DOM

#react element - Dom element

<p>
    React.createElement("elementName",{id/class},"content"/can be another reactElement / can be an array of reactElement)
    -it creates an object
    -when we render it into the DOM it becomes an Element
</p>

<p>
    ReactRoot = for creating a root to inject the reactElement
    - ReactDOM.createRoot(document.getElementById("root))
</p>

<p>
    React Component
    -component
        2-types
            -class based components (oldest method)
            -functional components (new method)
    -just a js function which returns a JSX element
    -starts with capital letter
    -easy definition => a function which returns a JSX element
</p>

<p>
    COMPONENT COMPOSITION
    -Inserting component in another component
</p>

<p>
    package.json = configuration for npm and tracks the version of the npm
</p>

<p>
    package-lock.json = keeps all the records of the versions that are used while the development of the application.
</p>

<p>
    node_modules = like a database that is needed to function for the npm packages
</p>

<p>
    transitive dependency = a chain of interlinked components dependent on each other. In npm, it is the chain of dependencies which are not installed directly but by the direct dependency or transitive dependency
</p>

<p>
    bundler = used to package the application to be ready for serving in the browser
</p>

<p>
    tilde(~) and caret(^) in package.json
    ~ means all future updates without incrementing the minor version. eg. 1.2.3 to 1.3.0
    ^ means all future updates without incrementing the major version. eg. 1.2.3 to < 2.0.0
</p>

<p>
    npx = used to execute the npm package
</p>

**Parcel**
- refer this [https://medium.com/@nikhildhariwal2004/parcel-is-a-beast-an-all-in-one-bundle-for-powerful-web-development-e79f8a70cbd6]
- refer docs => https://parceljs.org/
- Development Build
- Creates a local server
- HMR - hot module replacement - like nodemon
  - how? it uses a File Watching Algorithm written in C++
- Faster builds
  - how? It caches our code in a space called .parcel-cache so it enables faster builds
- Image Optimization
  - using image transformer
  - also includes lossless image optimization
- Minification of our file when in production mode
- Bundling
- Compressing
- Consistent Hashing - generating unique names for cache. to ensure that browser fetches latest files
- Differential bundling - bundling differently for each browser
- Diagnostic of errors in terminal
- Error Handling = displaying the errors in browsers
- HTTPS = can be hosted in https
- different dev and prod bundles
- Tree Shaking - avoiding unwanted functions
- prod build cmd = npx parcel build index.html 
- dist folder keeps all the bundled files
    
**JSX**
   - Developed by Facebook developers.
   - A JavaScript syntax which is easier to create React.
   - JSX is different from React because it is a syntax; JSX makes implementing React easy.
   - Even without JSX, we can write React.
   - NOT HTML IN JS.
   - IT IS HTML-LIKE SYNTAX.
   - JSX also creates an object like the React.createElement().
   - JSX is not valid JavaScript / pure JavaScript.
   - JavaScript engines do not understand JSX, but Parcel transpiles code with the help of **Babel** before the code goes to the JavaScript engine and makes it understandable for the JavaScript engine.
   - Prevents cross-site scripting attacks by sanitizing data.
    
<p>
jsx example
    const heading = React.createElement("h1", { id: "head" }, "React Master Class")
    above is the react elemet using react
    below is react element uing the jsx
    const jsxHeading = <h1>Namaste REact using JSX</h1>
    wrap it inside parenthesis for multiple lines
</p>

**Babel**
   - Babel is a JS compiler 
   - Transpiles the code before it reaches the JS Engine and makes it understatndable by the JS engine. By the help of the Babel(JSX to JS).
   - It Converts the JSX to React.createElement - a JS Obj => then to HTMLElement(render)
        * without jsx  => React.createElement - a JS Obj => then to HTMLElement(render)

```
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
```

<p>
2 types of Export/Import
    Default Export
    -export default Component
    -import Compnent from 'path'

    Named Export 
    -export const Component
    -import {Component} from 'path'
    </p>

**PROPS**
   - properties
   - passing a argument in to function/ components
   - are normal arguments of function
   - prop is an object
   - when we want to add dynamic data. We will use props to pass data to component.
   - when passing the data using loop we have to pass a unique key
   - why? for preventing re-renter all the components
   - by using unique id we can prevent the full re-rendering.
   - for optimization
   - **Do not use the index as the keys**
   - **no keys < index < unique keys**

**CONFLICT_DRIVEN-UI**
   - website driven by data
   - eg=> based on the location we can present different ui
   -
## SUPER POWERS OF REACT
- Super fast in DOM Manipulation
- Holds the UI layer and data layer consistently with each other
- Whenever a state variable updates, React re-renders the component in a very optimized way
- Uses Reconciliation Algorithm (aka React Fiber) (React 16)
  - New way of finding the Diff and updating / re-rendering the DOM
  - Virtual DOM
    - Object representation of the actual DOM
    - Normal JavaScript Object
  - Diff Algorithm
- React has a faster rendering mechanism
- Load app => render => API_call => populate
- Whenever a state variable updates, React triggers a reconciliation cycle (re-renders the component)


## React Hooks
- Normal JavaScript functions
- Utility functions in React
- Call inside the component, at the top of the function
- Does not create state inside if conditions, functions, or loops

### 2 important Hooks:
1. `useState()`
    - Used when we want to create a dynamic variable
    - Generates super powerful React variables
    - Creates state variable
    - Keeps track of the variables, and whenever there is a change, React triggers the diff algorithm and automatically updates the UI
    - Keeps the UI in sync with the data variable
    - Usage:
        - Import from React
        - Like a named import
        - `const [variableName, setVariableName] = useState(defaultData)`
        - `setVariableName` is used for triggering the diff algorithm for finding the difference and re-rendering/updating

2. `useEffect()`
    - Takes 2 parameters:
        1. Callback function
            - Called after the component is rendered
        2. Dependency array
    - `useEffect()` will be called after every time the component is rendered
    - Dependency array changes the behavior of the render:
        - If no dependency array, `useEffect()` will be called in every render
        - If there is an empty dependency array, `useEffect()` will be called on initial render and once
        - If dependency array is not empty, it will be called when the dependency is changed
    - `useEffect()` function returns a function which will be called when unmounting the component
    - React's `useEffect()` hook expects a cleanup function to be returned from it when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called.


**Routing** 
- using React Router npm package.
- have to create routing configuration in app level
- we import the *createBrowserRouter to config our paths
- configuration is a list of Objects
- *RouterProvider component gives the routing configration to our App
 - ```root.render(<RouterProvider router={appRouter} />)```
- with useRouterError hook by the react-router-dom we can access more details about the error occured
- *Outlet component will render the child route according to the path ie, the outlet will be filled with the component A2 path.
- *Link for navigating
- link is a wrapper around the anchor tag. 
  - Link will keep a track on the anchor tag and prevents from the page refresh
        -
- *useParam hook used to read the params from the route
  - 2 Types of Routing 
    - client-side Routing
      - components are loaded 
      - not feetching new pages
      - just a one page. the components are changed.
    - Server-side Routing
      - reloads the webpage

<p>
microservices
    -seperation of concern
    -single responsibility principle
    -ability of usage of diff languages for each services
</p>

## Class based Components
- A classclass extends React.Component and has a render method, which returns a jsx
- we pass the props and recieve it in the constructor
- we have to give the super(props) in the constructor
    - to inherit the properties of the parent
        
- Loading a component == creating a instance of class
- we create state variable in the constructor
    - it is an object
    - we can create multiple state variables by increasing the properties
        
- react gives this.setState => for updating the state variable
    - we pass the object containing the to be update data.
    - we can batch mltiple state variables
        
- mounting / work flow of class based component
    - parent constructor => parent render => child constructor => child render
- componentDidMount(){} => will be called after the component is mounted.
- to make api calls
- similar to useEffect = because we call the api after the component is loaded.
- we dont want component to render till api returns data
- So react quickly render the component and renders the data from the api.
        =>
- when the parent and child have the componentDidMount() then
        - parent constructor() => parent render=> child constructor=> child render => child componentDidMount => parent componentDidMount.
- when there is multiple child then react optimises the rendering and barches the rendering for the child

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
    <p>Tail wind is light weight because it will only import requierd or used css class in the app. for eg. if we use the m-4 class mltiple times :: tailwind only import it once</p>
    <li>Ant design</li>
    <li>Chakra ui</li>
    <li>material ui</li>
    <li>Styled components</li>
</ul>

<h2>Higher Order Components</h2>
<p>Its a function that takes a component and returns a component. It takes a  component and enhance the component and returns it back.
</p>
<p>HO Component is Pure function, which does not change the behaviour and code of the component </p>
<p></p>

<h5>All React application has 2 layer. One is UI layer and another is data layer</h5><br>
<h5>UI layer is powered by data</h5>

Controlled and uncontrolled components
    if the component is cnotrolling itself ie, its state then it is a uncontrolled component.
    if the component is controlled by the its parent component the it is a controlled component.

LIFTING STATE UP
    when we want the state of the two components to always change together. We will will remove the state from children to the parent and pass down the state to the childrens via props.   

PROPS DRILLING
    passing the data via props to the deeper children.
    To bypass this we use the reactContext.
    context is like a global place where we place data that can accessed by every component.

React Context

    import createContext from react
    we pass a default value
    we can access the value anywhere in app using a hook called useContext.
    in the hook useContext(createdContex) we pass the context we created
    this is the created context const userContext = createContext({loggedInUser:'default user'})
    we only keep those data, that are required across the components
    this is how we access the data const {loggedInUser,setUserName} = useContext(userContext)
    we can over ride the value of the context by using the useContext.Provider value={}
        in the value we can pass the changed value that is a state variable as well as state setfunction
    Also we can use the context on specific component only
    
#REDUX toolkit

    -install @reduxjs/toolkit and react-redux
    -state management
    -easy debugging
    -seperate libraru than react
    -heavily used with react

Redux store 

    is like a object which is placed in a global central place
    in the store there is slice of datas 
        eg. there can be a slice for cart, user
    workflow
        click action => dispatches action => calls reducer function => modifies the slice of redux store => using selector we can select the data in store (subscribing to the store)

Setup

    -create store
        -using configureStore from redux/toolkit helps to create store
        -we have to setup the store in app level
        -import provider from react-redux lib.
        -wrap app component in the <Provider store={appStore}> and pass the store as props

    -create slices
        -will be created by a function known as createSlice from RTK
        -give the details in the fnction name, initial state,reducer functions correspoding to each action.
        -actions can be anything add item, remove, etc.
        -in reducer we give functions to each actions
            reducer:{addItem:(), removeItem:()}
        -these functions have access to the state and action.payload
        -then export the slice.action and slice.redcer from the slice file
        -the reduces are mutating the state
        -the reducer function updates the slice
        -reducers are the combination of the reducers in the slice And in the slice reducers the reducers have the reducer functions which take the crrent state and action and mutate the store. 
    -then add the slice to the appStore
        -in app store have a reducer it is a big reducer app level.
        -in this redcer contains the reducers of the slice
        -
        -
    
    -read the data from the store
        - we have to subscribe to the store using a selector
        -Selectore is a hook in react
            => useSelector hook from react-redux lib
            => gives access to the store

    =>Dispatching Action
        => we get dispatch action from hook useDispatch from react-redux
        => we have to import the action from the slice
    <h1>Very Important</h1>
        <p>while subscribing to the store we have to be careful while using the selector we have to subscribe to only those we need it in the store.</p>

    (older version) redux => never mutate state. so we have to make a copy and return it
    (new version) RTK => we have to mutate the state or return a new state. Rest will be taken care of the Redux
        how? In the Back redux uses a Immer library which finds the difference between new & old state and gives back new state which is immutated state. 

##Testing
- Types of testing
 - Manual testing
 - Test cases
 #Types of test cases(developer)
 - Unit Testing(dev)
  - testing react components in Isolation
  - 
 - Integration Testing(dev)
  - Testing the integration of components
   - eg -> when many components interact with each other
   -
 - End to End Testing aka e2e testing
  - as soon as user lands the app and leaves the app
  - how user flow across the app

#Test Cases
- libraries: 
 - react testing library
  - built on top of DOM Testing library
  - when we use the create react app, it included
  - uses jest: a js testing library

#Unit Test
- setup
 - i react -testing library
 - i jest
 - i babel dependencies
 - configure Babel
 - config parcerc file to default babel transpilatoin of parcel

 ##Note
 - parcel by default has babel configuration
 - so if we use jest, esLint than we can disable babel transpilation in parcel
 - for that we have to modify the .parcelrc file

 e013 - testing 
 41.34
 