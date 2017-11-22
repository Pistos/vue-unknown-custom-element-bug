# component-bug-demo

> A demonstration of a possible component bug in Vue

## Steps to Reproduce:

1. `npm install`
1. `npm run dev`
1. Browse to http://localhost:8080
1. Click "Example Tab" at top of page
1. Observe lack of second tabset on page
1. Observe console error: `[Vue warn]: Unknown custom element: <tab-link> - did you register the component correctly? For recursive components, make sure to provide the "name" option.`
1. Open App.vue in an editor
1. Remove the three lines marked with comments; save file
1. Refresh example page in browser
1. Observe presence of expected tabset on page
1. Put three lines back in App.vue
1. Refresh browser
1. Observe disappearance of tabset
