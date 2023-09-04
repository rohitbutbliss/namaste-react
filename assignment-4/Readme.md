# Assignment 4

## Question : Is JSX mandatory for React?

## Answer : JSX is not mandatory for React. But it is preferred to use JSX as it makes our code look much more readable & it is easier to write code in JSX rather than using React.createElement. It also, takes care of cross server scripting and other injection attacks.

<br>
<br>

## Question : Is ES6 mandatory for React?

## Answer : ES6 is not mandatory but it is beneficial as it makes our code much more readable and maintainable.

<br/>
<br/>
<br/>

## Question : How can we write comments in JSX?

<br>

## Answer : We can write comments in JSX by enclosing the code inside curly braces{} and commenting it like how we do it in JS.

<br/>
<br/>
<br/>

## Question : Can we use index as keys in React?

<br/>

## Answer : We can use index as keys in React but it is absolutely not preferred and should only be used as an last resort when we don't have any other option for keys.

<br/>
<br/>
<br/>

## Question : What is props in React?

<br/>

## Answer : Props in React are properties/arguments which are passed to a functional components. You can pass props directly into the JSX tag like this : `<jsxtag props="some-value" />` or as an object like : `<jsxtag props={{some object}}/>`. Later you can retrieve it using destructuring in the functional component signature.

<br/>
<br/>
<br/>

## Question : What is Config Driven UI?

<br/>

## Answer : Config Driven UI is an UI which is configured according to the data or configuration it has received. It helps in creating different layouts depending on different configuration received without making changes in the actual UI codebase.

<br/>
<br/>
<br/>

## Question : What is `<React.Fragment></React.Fragment>` and `<></>`?

<br/>

## Answer : `<React.Fragment><React.Fragment/>` and `<></>` are used to return muliple child elements without adding extra node to the DOM.

<br/>
<br/>
<br/>

## Question : What is Virtual DOM?

<br/>

## Answer : Virtual DOM is the representation of actual DOM but in React Element Object form. It is easier for React to perform manipulation and compare changes on Virtual DOM than on actual DOM. Hence, it makes DOM manipulation efficient in React.

<br/>
<br/>
<br/>

## Question : What is Reconciliation in React?

 <br/>

## Answer : Reconciliation in React is the process by which react updates the UI efficiently. It uses diffing algorithm and virtual dom to perform any updation in UI.

 <br/>
 <br/>
 <br/>

## Question : What is React Fibre?

 <br/>

## Answer : React Fiber is the new implementation of reconciliation which makes the process of reconciliation much more efficient.

<br/>
<br/>
<br/>

## Question : Why do we need keys in React? When do we need keys in React?

<br/>

## Answer : We need keys in React to perform updation, deletion or insertion in list efficiently and correctly. We need keys whenever we are working with lists. Lists could be of anything like list of restaurant, list of hospitals, list of cart items and so on.
