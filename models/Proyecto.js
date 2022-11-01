const {Schema,model} = require("mongoose");

const ProyectoSchema= Schema ({
numero: {
    type:String,
    required: true,
    unique:true,
},
titulo: {
    type:String,
    required: true,
    
},
fechaIniciacion:{
    type:Date,
    required:true,
  
},

fechaEntrega:{
    type:Date,
    required:true,
  
},

valor:{
    type:Number,
    required:true,
  
},

fechaCreacion:{
    type:Date,
    required:true,
},
fechaActualizacion:{
    type:Date,
    required:true,  
},

cliente: {
    type: Schema.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },

  tipoProyecto: {
    type: Schema.Types.ObjectId,
    ref: "TipoProyecto",
    required: true,
  },

  universidad: {
    type: Schema.Types.ObjectId,
    ref: "Universidad",
    required: true,
  },

  etapaProyecto: {
    type: Schema.Types.ObjectId,
    ref: "Etapas",
    required: true,
  },




});

module.exports = model ("Proyecto",ProyectoSchema);