# Sample env: `db/redis`

```env
PORT=8080

# ---------------------
# For Encryption:
SECRET_KEY=supersecretkey
SECRET_IV=supersecretiv
ENCRYPTION_METHOD=aes-256-cbc
# ---------------------

JWT_SECRET_KEY=supersecretkey

REDIS_PORT=15220
REDIS_HOST=redis-15220.c330.asia-south1-1.gce.cloud.redislabs.com
REDIS_PASS=password

# MONGODB_URI=mongodb://username:password@host:port/database?options...
MONGODB_URI=mongodb+srv://admin:superSecretPassword@cluster0.bamxp94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
MONGODB_HOST=admin
MONGODB_PASS=superSecretPassword

# POSTGRES:
POSTGRES_DB=test_user_db
POSTGRES_USER=postgres
POSTGRES_HOST=localhost
POSTGRES_PASS=password
POSTGRES_PORT=5432
```
