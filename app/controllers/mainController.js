const path = require('path');
const dataMapper = require('../dataMapper');

const mainController = {

  homePage: (request, response) => {
   
    dataMapper.getAllFigurines((error, result) => {
      if (error) {
        response.status(500).send('Erreur ! Aucun enregidtrement n\'a été créé')
      }
      else {
        const allFigurines = result.rows;
       
        response.render('accueil', {allFigurines});
      }
    });

  },

  articlePage: (request, response) => {
    const figurine_id = Number(request.params.id);

    dataMapper.getOneFigurine(figurine_id, (error2, result2) => {
      if (error2) {
        response.status(500).send('Erreur ! Aucun enregidtrement n\'a été créé');
      }
      else {
        const figurine = result2.rows[0];
      
        response.render('article', {figurine});
      }
    })
  },



};


module.exports = mainController;
