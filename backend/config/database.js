const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_finance', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
module.exports = mongoose.connect('mongodb://localhost/db_finance');