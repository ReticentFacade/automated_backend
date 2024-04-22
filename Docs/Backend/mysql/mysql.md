# MySQL Notes

- Why switching from creating a direct connection to a connection pool is better?

- Using a `connection pool` can improve -->
  1. Performance
  2. Scalability

- It's beneficial especially if we expect a large number of concurrent database connections.
- The pool manages a set of reusable connections --> allowing the app to handle multiple simultaneous requests.
