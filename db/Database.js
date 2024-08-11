const mongoose = require("mongoose") // Veritabanı bağlantısı yapmak için kullanılır.
let instance = null
class Database {
    constructor(){
        //Bu sınıfı singleton yapmış olduk. Birden fazla instancede üretilse hep aynısına bakacak.
        if(!instance){
            this.mongoConnection = null
            this.instance = this;
        }
        
        return instance;
    }

    async conncet(options) {
        try {
            console.log("DB Connecting")
            // Bu fonsksiyon ile db bağlantısı yapılmış oldu.
            // mongooseyi projeye dahil etmek için terminale 'npm i -S mongoose' yaz.
            let db = await mongoose.connect(options.CONNECTION_STRING);
            this.mongoConnection = db
            console.log("DB Connected.")
        } catch (error) {
            console.log(error)
            process.exit(1)
        }
        
    }
}

module.exports = Database