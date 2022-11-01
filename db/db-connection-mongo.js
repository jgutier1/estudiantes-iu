const mongoose = require("mongoose");

const getconnection= async ()=> {
    try{
        const url = "mongodb://web-2:eBRfw7aElE1ieSue@ac-awozpgu-shard-00-00.ccmqr2l.mongodb.net:27017,ac-awozpgu-shard-00-01.ccmqr2l.mongodb.net:27017,ac-awozpgu-shard-00-02.ccmqr2l.mongodb.net:27017/Estudiantes-IU?ssl=true&replicaSet=atlas-tuiz4a-shard-0&authSource=admin&retryWrites=true&w=majority";
        await mongoose.connect(url);
    
        console.log("conexion exitosa");

    }catch (error){
        console.log(error);
    }
   

}
module.exports= {
    getconnection,
}