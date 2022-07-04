const express=require('express')
const app=express()
const compression=require('compression')
app.use(compression())
const logs=require('log4js')
const config=require('./config/config.js')
const PORT=config.PORT
let pal='Hola que tal - '
let logdef=logs.getLogger('default')
let logWarn=logs.getLogger('consoleWarn')
let logError=logs.getLogger('consoleError')

app.get('/info',(req,res)=>{
    try{
        logdef.info('ROUTE    /info   |   METHOD     /GET')
        //logs.info('ROUTE    /info   |   METHOD     /GET')
        res.send(pal.repeat(1000))
    }catch (error) {
        logError.error('ERROR: ',error)
        console.log('error ', error)
    }
})

app.get('/infozip',compression(),(req,res)=>{
    try {    
        logdef.info('ROUTE    /infozip   |   METHOD     /GET')
        res.send(pal.repeat(1000))
    } catch (error) {
        logError.error('ERROR: ',error)
        console.log('error ', error)
    }
})

app.get('*',(req,res)=>{
    try {
        logWarn.warn('resource invalid')
        res.json({message:'ERROR resource invalid'})   
    } catch (error) {
        logError.error('ERROR: ',error)
        console.log('error ', error)
    }
})

app.listen(PORT,(err)=>{
    if(err){
        logWarn.warn('ERROR: ',err)
    }
    `LISTEN PORT http://localhost/${PORT}`
})