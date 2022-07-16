const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));