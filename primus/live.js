module.exports.go = (server) => {
    const Primus = require("primus");
    const primus = new Primus(server, { transformer: "websockets" });
  
    //check if connection, then console.log it
    primus.on("connection", (spark) => {
      console.log("connected 👍🏻");
  
      //check if data is received, then console.log it
      spark.on("data", (data) => {
        console.log(data);
  
        //check if data is received, then send it back
        primus.write(data); //send to all clients
      });
    });
  };
  