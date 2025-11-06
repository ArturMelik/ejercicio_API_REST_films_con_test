const fetchFilm = require('../utils/fetchFilm');

const getFilmTitle = async (req, res) => {
  try {
      const title = req.params.title;
      const film = await fetchFilm(title); //api de arriba
      if(film){
        res.status(200).json(film); // Respuesta de la API para 1 producto
      } else{
        res.status(404).json({message:`Film not found`})
      }

        }
  catch(error){
     console.log(`ERROR: ${error.stack}`);
     res.status(400).json({message:`ERROR: ${error.stack}`});
  }
};



const postFilm = async (req, res) => {
    try {
    const { title } = req.body; // obtienes el título desde el body
    if (!title) {
      return res.status(400).json({ msj: "Falta el campo Title" });
    }

    // Simulas que se ha guardado
    res.status(200).json({ message: `Se ha guardado ${title}` });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};



const putFilm = (req, res) => {
    try{
      const id = req.body.id;
      const title = req.body.title;
      res.status(200).json({
            id: id,
            message: `Se ha actualizado ${title}`
        });
    }catch(error){
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`}); 
    }
}


//DELETE
const deleteFilm =(req,res) =>{
   const id = req.body.id;
    try{
     res.status(200).send({message:`Se ha borrado la película con ID: ${id}`});  
    }catch(error){
      console.log(`ERROR: ${error.stack}`);
      res.status(400).json({msj:`ERROR: ${error.stack}`}); 
    }
}

module.exports = { 
    getFilmTitle,
    postFilm,
    putFilm,
    deleteFilm
 };
