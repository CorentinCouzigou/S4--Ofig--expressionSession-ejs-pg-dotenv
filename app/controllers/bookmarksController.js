const path = require('path');
const dataMapper = require('../dataMapper');

const bookmarksController = {
 
  // méthode pour afficher le panier
  bookmarksPage: (request, response) => {
        response.render('favoris');
  },
  addBookmark: (request, response) => {
    const figurineId = +request.params.id;
      dataMapper.getOneFigurine(figurineId, (error2, result2) => {
      if (!request.session.bookmarks) {
        request.session.bookmarks = [];
      }
      if (error2) {
        response.status(500).send('Erreur ! Aucun enregistrement n\'a été créé');
      }
      else {
        const figurine = result2.rows[0];      
        request.session.bookmarks.push(figurine);
     
 
        
         response.redirect('/bookmarks');
      }
    })
    
  },
  deleteBookmark: (request, response) => {
    const figurineId = +request.params.id;
      let tableauFiltre = request.session.bookmarks.filter((fig) => {
        if (fig.id === figurineId){
          return false;
        } 
        else {
          return true;
        }
      });
    request.session.bookmarks =  tableauFiltre;
    response.redirect('/bookmarks')
  },

};


module.exports = bookmarksController;
