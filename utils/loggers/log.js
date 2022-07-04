let {config}=require('../../config/config.js')

//logss
let logs=require('log4js')

//Hacemos log dinamico en base a si es en produccion o desarrollo
logs.configure({
    appenders:{
        logConsole:{type:'console'},
        logFileWarn:{type:'file',filename:'warn.log'},
        logFileError:{type:'file',filename:'error.log'}
    },
    categories:{
        default:{appenders:["logConsole"],level:'info'},
        consoleWarn:{appenders:["logConsole","logFileWarn"],level:'warn'},
        consoleError:{appenders:["logConsole","logFileError"],level:'error'}
    }
})

module.exports=logs