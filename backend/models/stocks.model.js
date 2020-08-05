const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stocksSchema = new Schema({
    by: { type: String },
    valid_key: { type: String, required: true },
    results: { type: Object, required: false },
    execution_time: { type: Number, required: false },
    from_cache: { type: Boolean, required: false },
}, {
    timestamps: true,
});

const Stocks = mongoose.model('Stocks', StocksSchema);

module.exports = Stocks;
