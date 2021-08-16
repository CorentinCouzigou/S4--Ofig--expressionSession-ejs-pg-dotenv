const client = require('./database');

const dataMapper = {
    getAllFigurines: (callback) => {
        const allFigurines = {
        text:'SELECT * FROM "figurine";'
        }
    
    client.query (allFigurines, callback);
    },

    getOneFigurine: (id, callback) => {
        const oneFigurine = {
            text:'SELECT * FROM "figurine" WHERE id=$1;',
            values: [id]
        } 
    
    client.query(oneFigurine, callback)
    }

};

module.exports = dataMapper;