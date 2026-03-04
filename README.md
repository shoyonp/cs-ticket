1. What is JSX, and why is it used?
- JSX is javaScript XML that allows developer to  write HTML like markup in javaScrip code.
- it is used because of the readability and maintainability of the code. We can build logic within markup cz there is no diffrent file for js and html, the code debugging is become much easier. It is easy to embed dynamic JavaScript expressions directly into the markup using curly braces {}. And many more.

2. What is the difference between State and Props?
- The Props are immutable and passed from parent to child and state is mutable and managed internally within a component.Props are used to pass data where state is used to store dynamic data and if the state changes, then react re-renders the component also for the props.

3. What is the useState hook, and how does it work?
- useState is a React Hook that allows functional component to store and manage the state.
let's say we have 
const [state, setState] = useState(initialValue); 
this state 
state - current value
setState - state update function
initialValue → starting value
we set initial value as 0 " useState(0) " then react stores 0 as the initial state. 
When setCount() is called " setCount(5) "
it updates the stored state value
re-renders the component
updates the UI.

4. How can you share state between components in React?
- The state can be share between the components by using prop drilling from parent to child , using context API and some state management libraries like Redux.

5. How is event handling done in React?
- Event handling done in React by using onClick,onChange and onSubmit event handlers.