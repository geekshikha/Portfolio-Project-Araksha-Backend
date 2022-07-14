//packages
const express = require("express");
const corsMiddleWare = require("cors");
const http = require("http");
const { Server } = require("socket.io");
// const io = new Server(server);
// const CronJob = require("node-cron");

//routers
const authRouter = require("./routers/auth");
const categoryRouter = require("./routers/categoryRouter");
const orderRouter = require("./routers/orderRouter");

//constants
const { PORT } = require("./config/constants");

// Create an express app
const app = express();
app.use(corsMiddleWare());
app.use(express.json());

const server = http.createServer(app);

// CORS middleware:  * Since our api is hosted on a different domain than our client
// we are are doing "Cross Origin Resource Sharing" (cors)
// Cross origin resource sharing is disabled by express by default

// express.json() to be able to read request bodies of JSON requests a.k.a. body-parser

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "https://admin.socket.io/"],
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log(`client connected: `, socket.id);
  socket.join(`clock-room`);

  socket.on(`disconnect`, (reason) => {
    console.log(reason);
  });
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

//routes
app.use("/auth", authRouter);
app.use("/category", categoryRouter);
app.use("/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

// app.get("/test-socket", async (req, res) => {
//   io.emit("ping", { message: "Hellooooo" });
//   // res.send("hello there!");
//   function getRandomInRange(from, to, fixed) {
//     return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
//   }

//   const lat = getRandomInRange(-180, 180, 3);
//   const long = getRandomInRange(-180, 180, 3);
//   io.to("location", lat, long);

//   console.log(lat, long);

//   res.send("hello there!");
// });

//CONNECTION

//CONNECTION
io.on("connection", (socket) => {
  console.log(`Made socket connection: ${socket.id}`);

  const lat = 52.38826077323548;
  const long = 4.824020920666874;
  const changingLat = lat + Math.random() * 0.1;
  const changingLong = long + Math.random() * 0.1;

  setInterval(() => {
    io.to(`clock-room`).emit(`send-location`, changingLat, changingLong);
  }, 10000);

  // socket.emit("send-location", changingLat, changingLong);

  //ROOM
  // socket.on("join_room", (data) => {
  //   console.log("JOINED IN ROOM: ", data);
  //   socket.join(data);
  // });

  // socket.on("send_message", (data) => {
  //   socket.to(data.room).emit("receive_message", data);
  // });
});

setInterval(() => {
  io.to(`clock-room`).emit(`time`, new Date());
}, 1000);

/********************************************************************************** */

// initScheduledJobs = () => {
//   //Every 15 seconds
//   const statusScheduler = CronJob.schedule("*/5 * * * *", () => {
//     //Everyday at 23:00 see https://crontab.cronhub.io/ //1,30 * * * * *
//     //const statusScheduler = CronJob.schedule("0 23 * * *", () => {
//     updateCompletedReservations();
//     updateExpiredReservations();
//     // const diffDays = (date) => {
//     //   let today = new Date();
//     //   let expire = new Date(date);
//     //   let difference = new Date(expire).getTime() - new Date(today).getTime();
//     //   return difference / (1000 * 3600 * 24);
//     // };
//     // 1. STATUS CHANGES
//     // if(diffDays(r.startDate)<=0)(
//     //   r.status==="expired"
//     // )
//     // 2. BLOCKED CREDIT BACK
//     //
//   });
//   console.log("Scheduler scheduled.");
//   statusScheduler.start();
// };

//start listening
server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

/*
const locationData = ...


1. check out how to emit and listen to messages on socket
io.emit("track-location", (locationData)
2. Cron Scheduler node-cron // => 

*/
