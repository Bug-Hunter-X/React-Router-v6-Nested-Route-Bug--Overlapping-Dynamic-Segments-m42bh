In React Router Dom v6, a common issue arises when using nested routes with dynamic segments.  If a parent route has a dynamic segment that overlaps with a child route's dynamic segment, unexpected routing behavior can occur.  For instance:

```javascript
<Route path='/users/:userId' element={<Users/>}>
  <Route path=':userId/profile' element={<UserProfile/>}/>
</Route>
```

If the URL is `/users/123/profile`, both routes will match, leading to the `Users` component rendering first and then the `UserProfile` component, or potentially an infinite rendering loop depending on how the components are structured.  The issue is that the `:userId` parameter gets matched twice and not in the correct manner.