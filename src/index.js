const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {PORT} = require('./config/serverConfig.js');
const db = require('./models/index');
const apiRoutes = require('./routes/index.js');


const setupAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);


    app.listen(PORT,()=>{
        console.log(`server is started on ${PORT}`)

        if(process.env.DB_SYNC)
        {
            db.sequelize.sync({alter:true});
        }
    })
}

setupAndStartServer();