# Assignment 6

## Question : What is a Microservice?

<br/>

## Answer : Microservice Architecture is an architectural style where an application is broken into different services and codebases which are deployed independently. And communicate with each other to form an application.

<br/>
<br/>
<br/>

## Question : What is Monolith architecture?

<br/>

## Answer : Monolith Architecture is an architectural style where an application is based on only one codebase, which performs all the services required.

<br/>
<br/>
<br/>

## Question : What is the difference between Monolith and Microservice?

<br/>

## Answer : Monolith architecture has a single codebase which performs all the functions required hence it runs on a single server. It needs to have similar tech stack to make it work.

## Microservice divides each service into different codebase which can be deployed on different servers. Hence, tech stack can be different and it wouldn't be an issue.

<br/>
<br/>
<br/>

## Question : Why do we need a useEffect Hook?

<br/>

## Answer : Sometimes, we need to perform certain task only after some particular component is rendered/re-rendered. useEffect helps us to perform those tasks after a component is rendered/re-rendered.

<br/>
<br/>
<br/>

## Question : What is Optional Chaining?

<br/>

## Answer : Sometimes when we might face the issue that object whose property we are trying to access is not defined. In this case, javascript will simply throw the error but with optional chaining it will convert those values into undefined or null so that it won't throw any error.

<br/>
<br/>
<br/>

## Question : What is Shimmer UI?

<br/>

## Answer : Shimmer UI is a UI which is used to mimic the actual UI when it will be loaded later on after fetching the details. It gives user a better user experience and also it makes it look like loading is faster compared to loading animations.

<br/>
<br/>
<br/>

## Question : What is the difference between JS expression and JS statement?

<br/>

## Answer : JS expression refers to the piece of code which converts to a value. It can be a simple mathematical equation or function call which will return some value.

## JS statements refer to those piece of code where we ask js to perform some task. Like using condition statements to check condition or looping.

<br/>
<br/>
<br/>

## Question : What is Conditional Rendering, explain with a code example?

<br/>

## Answer : When we render our UI based on certain conditions like if certain conditons has been achieved. Like if your data is fetched then show data until then show shimmer ui.

## Code Example :

```javascript
return (
  <main>
    <div className="body">
      {!isLoaded ? (
        <ShimmerUI />
      ) : (
        <>
          <BodyTop
            restaurantCount={restaurantCount}
            handleInputEnter={handleSearchEnter}
            handleInputChange={handleChangeInInput}
            handleFilterClick={handleFilterClick}
            isFiltered={isFiltered}
            searchText={searchText}
          />
          {restaurantList.length === 0 ? (
            <NoResult />
          ) : (
            <RestaurantCardContainer restaurantList={restaurantList} />
          )}
        </>
      )}
    </div>
  </main>
);
```

<br/>
<br/>
<br/>

## Question : What is CORS?

<br/>

## Answer : CORS (Cross origin resource sharing) is a mechanism that allows us to share data between two different domains.

<br/>
<br/>
<br/>

## Question : What is async and await?

<br/>

## Answer : Javascript is synchronous by nature but sometimes we need to to make certain functions to work asynchronously to avoid error in the execution of program. async key word in the function signature makes a function asynchronous and await function which is used inside asynchronous function only pauses the execution of code until the that particular expression on which await keyword is used is called executes.

<br/>
<br/>
<br/>

## Question : What is the use of `const json = await data.json();` in getRestaurants()?

<br/>

## Answer : `const json = await data.json()` pause the further execution of code until data.json() is executed completely. .json() function returns a promise which resolves to data which can be converted to json object and can be used further execution.
