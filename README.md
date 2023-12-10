-React.createElement() does not creates a tag, it creates a React Element thta is object.
-it has props, props are children and attributes that we are passing
-"Hello World from React !!" is the children which will go inside h1 tag
-{id:'heading'} is the attributes
-h1 is not an tag it is an React Object
-render method is responsible to take the object and convert it into the tag and put it uopn the DOM

--------------------------------------------------------------------------------------------------------------------------

To ignite the app

npm init
npm install   //fill the details
a JSON file is create. JSON file is used for configuration

Parcel

1. Dev Build
2. Local Server
3. HMR = Hot Module Replacememnt
4. File Watching Alorithm - written in c++
5. Caching - Faster Builds
6. Image optimization
7. Minification of file
8. Budling
9. Compress file
10. Consistent hashing
11. Differential Bundling - to support older browsers
12. Code Splitting
13. Diagnostics
14. Error handling
15. HTTPs
16. Zero Config
17. Tree shaking - remove un-used code
18. Different dev and prod bundles

--------------------------------------------------------------------------------------------

JSX

JSX is a JavaScript syntax which is easier to create react elements otherwise it we have to use React.createElement("",{},"") to create an element.

------------------------------------------------------------------------------------------------------------------------------------
Reconciliationn Algorithm or React Fiber

-Whenever we have a UI, react creates a virtual DOM of it.

Virtual DOM 

-Virtual DOM is not an actual DOM.
-Virtual DOM is a representation of actual DOM.
-Virtual DOM is basically an object/react Elements.

Diff Algorithm

-It finds out the difference between two virtual DOM's updated virtual DOM & previous virtual DOM.