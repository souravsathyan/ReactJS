#react

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

#parcel
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
    -Tree Shaking
    prod bild cmd = npx parcel build index.html 
    -dist folder keeps all the bundeled files