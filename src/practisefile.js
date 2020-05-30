// Middleware - Important to be in this order.
// app.use((req, res, next) => {
//     if (req.method === "GET") {
//         res.send("GET requests are disabled");
//     } else {
//         next();
//     }
// });

// app.use((req, res, next) => {
//     if (req) {
//         res.status(503).send("Not up and running");
//     } else {
//         next();
//     }
// });

//
// Without middleware: new request -> run route handler
//
// With middleware: new request -> do something -> run route handler
//

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//     // const task = await Task.findById("5ec81a627dd59f4f7c95ddcb");
//     // await task.populate("owner").execPopulate();
//     // console.log(task.owner);
//     const user = await User.findById("5ec819053ec64a5b20e0e226");
//     await user.populate("tasks").execPopulate();
//     console.log(user.tasks);
// };

// main();

//toJSON in user models - what it does. Gets called whenever something gets stringified.Lets us manipulate what get sent back.
// const pet = {
//     name: "Hal",
// };

// pet.toJSON = function () {
//     //REMOVES EVERYTHING BELOW
//     // return {};
//     // RETURNS THE OBJECT IN ITS WHOLE
//     return this;
// };

// console.log(JSON.stringify(pet));

// PLAYING AROUND WITH JWT
// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//     const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
//         expiresIn: "7 days",
//     });
//     console.log(token);
//     const data = jwt.verify(token, "thisismynewcourse");
//     console.log(data);
// };
// myFunction();

// Creating different instances of multer depending on the needs of our application. Dest is where it should be stored. Filesize restriction is in bytes.
// limits -> object where we set limits. Cb sends back error. Restriction by both filetype and filesize.

// const multer = require("multer");
// const upload = multer({
//     dest: "images",
//     limits: {
//         fileSize: 1000000,
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error("Please upload a word document"));
//         }

//         cb(undefined, true);

//         // cb(new Error("File my be a PDF"));
//         // cb(undefined, true);
//         // cb(undefined, false);
//     },
// });
// // Key in postman needs to match the value provided to single ("upload")

// app.post(
//     "/upload",
//     upload.single("upload"),
//     (req, res) => {
//         res.send();
//     },
//     (error, req, res, next) => {
//         res.status(400).send({ error: error.message });
//     }
// );

// //the setup above is needed for express to know that its for error handling. (error, req, res, next)
