const jsonServer = require("json-server");

const cors = require("cors");

const router=jsonServer.router("db.json")

const server = jsonServer.create();

const middleware = jsonServer.defaults();

server.use(cors());

server.use(middleware);

server.use(router)

const PORT=5000
server.listen(PORT,()=>{
    console.log("server started")
})
