# Token Flow Chart

                    +---------------------+
                    | jwtGenerateToken.js |
                    +----------+----------+
                               |
                               |
                               v
                    +---------------------+
                    |  saveToken (Redis)  |
                    +----------+----------+
                               |
                               |
                               v
                    +--------------------+
                    |  getToken (Redis)  |
                    +----------+---------+
                               |
                               |
                               v
                    +--------------------+
                    | auth.controller.js |
                    +----------+---------+
                               |
                               |
                               v
                     +-------------------+
                     |    HTTP Request   |
                     +-------------------+

- `jwtGenerateToken.js` generates a JWT token upon user registration or login.
- `saveToken` saves the generated token to Redis.
- `getToken` retrieves the token from Redis.
- `auth.controller.js` contains the register and login functions, which interact with `jwtGenerateToken.js`, `saveToken`, and `getToken`.

- Finally, an `HTTP` request (such as a request to register or login) triggers the authentication process in `auth.controller.js`.
