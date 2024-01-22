githb:https://github.com/acdlite/react-fiber-architecture?tab=readme-ov-file

How DOM is updated in React
    -Virtual DOM => js representation of Actual DOM
    -when changes are detected => REact create whole Virtual DOM from scratch
    -a copy of V.DOM is created and compared with the updated V.DOM
    -once the React finds which part changed it then only updates that part only (Diffing)
    -

Reconciliation
    -optimized rendering of the app while maintaining the performance
    -Algo behind the Virtual DOM
    -when react application is rendered
        -A tree of Nodes is generated and saved in the memory
        -tree then is flushed into the rendering environment
        -when the app is updated the a new tree is generated and diffed with the previous teee to compute which parts are needed to update the app
    -the algorithm used by react to diff one tree from another to find which part need to be updated

Reconciliation Vs. Renderer
    -reconcilation and rendering is seperate phase
    -reconciler calculates which part of the app is changed
    -renderer then use this info to render the updated part
    -this means the React DOM and React Native can have their own rendere while sharing the same Reconsiler provided by the React Core

#Scheduling
    -the process of determining when the results of the updates should be done
    -Some popular libraries implement the "push" approach where computations are performed when the new data is available. React, however, sticks to the "pull" approach where computations can be delayed until necessary.
    -If data is arriving faster than the frame rate, we can coalesce and batch updates. We can prioritize work coming from user interactions (such as an animation caused by a button click) over less important background work (such as rendering new content just loaded from the network) to avoid dropping frames.
    
    -The key points are:
        -In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
        -Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
        -A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

#React Fiber
    -the purpose of React Fiber. Fiber is reimplementation of the stack, specialized for React components. You can think of a single fiber as a virtual stack frame.
    -we can keep the stack frames in memory and execute whenever we want => crcucial for scheduling
    -