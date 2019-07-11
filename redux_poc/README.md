# Redux Proof of Concept

Minimal Redux application for understanding the main concepts of the library.

#### Main Redux Flow
 ![Flow](./res/reduxFlow.png?raw=true)


The POC (available inside script.js) is based in an insurance company and follows a typical Redux flow.
<br>
The company is composed by several departments and these departments can deal with different well defined actions such as: createPolicy, deletePolicy and createClaim.

After the actions are consumed the reducers generates a controlled state which is accessible in the whole 'application'.
