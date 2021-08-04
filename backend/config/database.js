const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_finance', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
module.exports = mongoose.connect('mongodb://localhost/db_finance');

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório!"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' informado é inválido para o atributo '{PATH}'."