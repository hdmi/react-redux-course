

# Blog Project

App written in JS making use of React, Redux, Axios and Middleware Redux Thunk.

The objective of the project is displaying blogposts  retrieved from an API, each blogpost triggers an other API call for obtaining the username associated.
However repeated API calls with the same parameters are cached and prevented to execute a network call.

All the data is persisted in store repository making use of Redux.

Asynchronous API calls are made making use of the Redux Thunk middleware.

- PostList: Renders a list of posts with the obtained data.
- UserHeader: Component used for displaying and username. At the beginning it was the responsible of firing an action for retrieving the blogpost username. Then the logic was simplified and only consumes the already available data.


## External APIs

 - https://jsonplaceholder.typicode.com
 
## Screenshots

 ![Screenshot](./res/screenshot.png?raw=true)

  - 1 call for retrieving blogposts
  - 10 unique calls for retrieving the usernames of the blogposts obtained
