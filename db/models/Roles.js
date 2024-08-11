const mongoose = require("mongoose");

const schema = mongoose.Schema({
    //String ile mongoose.SchemaTypes.String aynı şey
    role_name: {type: String, required: true},
    is_active: {type: Boolean, default: false},
    created_by: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
},{
    //mongoda eğer version key false olarak tanımlanmadıysa her tabloda bu alanı kendisi otomotik olarak oluşturmakta.
    versionKey: false,
    //timestamps: true diye tanımlama yapıldığındada createdAt ve updatedAt otomotik tanımlanacaktı. Ancak kolonların adını biz vermek için aşağıda gibi tanımlama yapılır.
    timestamps:{
        createdAt: "created_At",
        updatedAt: "updated_At"
    }
});

// mongoose.Model extends edilme sebebi bu sınıfta default olan CRUD işlemleri kullanabilmesidir.
class Roles extends mongoose.Model {

}

//classı schemaya dahil etme
schema.loadClass(Users);
module.exports = mongoose.model("roles", schema) //1. parametre tablonun adı.