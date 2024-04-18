import redis from "redis";
import { REDIS_PW, REDIS_HOST, REDIS_PORT } from "../config/config.js";

const client = redis.createClient({
  password: REDIS_PW,
  socket: {
    host: REDIS_HOST,
    port: REDIS_PORT,
  },
  // legacyMode: true, // Backward compatibility
});

client.connect().catch(console.error);

// Client Handling:
client.on("connect", () => console.log("Redis client connected..."));
client.on("ready", () => console.log("Redis client ready..."));
client.on("reconnecting", () => console.log("Redis client reconnecting..."));
client.on("error", (err) => console.log("Error:", err));
client.on("end", () => console.log("Redis client ended"));

// Setting username and jwts:
const setToken = (username, token) => {
  client.set(username, token, (err, reply) => {
    if (err) {
      console.error("Error setting token:", err);
    }
    console.log("User session stored in Redis successfully");
    return;
  });
};

const getToken = (username, callback) => {
  client.get(username, (err, reply) => {
    if (err) {
      console.error("Error getting token:", err);
      callback(err, null);
    }
    console.log("Token retrieved successfully");
    callback(null, reply);
  });
};

const deleteToken = (token) => {
  client.del(token, (err) => {
    if (err) {
      console.error("Error deleting token:", err);
    }
    console.log("Token deleted successfully");
    return;
  });
};

const redisToken = {
  setToken,
  getToken,
  deleteToken,
};

export { redisToken };
