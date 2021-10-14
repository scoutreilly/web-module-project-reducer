# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.

* the onclick event is fired, which calls the function to dispatch type
* dispatch hits our actions, which returns our type and possible payload
* once our type is dispatched it hits the reducer which then appropriately updates state based on the type
* after state is updated it rerenders our component showing new changes

- TotalDisplay shows the total plus 1.

* the display total follows the same path
* the total is updated through the calculateResult function that is called when the correct case is true
