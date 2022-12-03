const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:6080'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const db = require("./models");
// db.sequelize.sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

const trTourismModel_routes = require('./routes/trTourismModel_routes');
app.use('/api/tr_tourism_model', trTourismModel_routes);

app.get('/', (req, res) => {
    res.json({message: 'hello'});
});

const PORT = process.env.PORT || 6080;
app.listen(PORT, () =>{
    console.log('hello SERVER port '+PORT+'');
})