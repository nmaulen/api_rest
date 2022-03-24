import express from 'express'
import config from './config'

const app= express()

// configuracion para que el server no caiga
// let port;

//settings
app.set('port', config.port || 3000)

export default app