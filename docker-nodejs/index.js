const express = require("express");
const session = require("express-session");
const redis = require("redis");
const cors = require("cors");
let RedisStore = require("connect-redis")(session);

const { REDIS_PORT, REDIS_URL, SESSION_SECRET } = require("./config/redis");

let redisClient = redis.createClient({
  host: REDIS_URL,
  port: REDIS_PORT,
});

const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

const PORT = process.env.PORT || 3000;
const connectTodB = require("./config/db");

connectTodB();

app.enable("trust proxy");
app.use(cors({}));
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: SESSION_SECRET,
    resave: false,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is online");
});

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
