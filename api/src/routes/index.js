const { Router } = require("express");
const axios = require("axios");
const { Country, Activity, Country_Activity } = require("../db.js");
const { Op } = require("sequelize");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/* router.get("/", (req, res) => {
  res.send("Hola prueba");
}); */

router.get("/countries/:idPais", async (req, res) => {
  const { idPais } = req.params;
  if (!idPais) res.status(400).json({ msg: "Missing ID" });
  try {
    let coun = await Country.findByPk(idPais, {
      include: [{ model: Activity }],
    });
    res.json(coun);
  } catch (error) {
    console.log(error);
  }
});

router.get("/countries", async (req, res) => {
  //traerme todos los countries por nombre.
  //llamar a la api; ver lo que necesito; llamado async a bd; enviar resultados; validar
  //https://restcountries.com/v3/all
  const name = req.query.name; //guardo lo que me mandan
  if (!name) {
    try {
      const api = await axios.get("https://restcountries.com/v3/all");
      const juntos = api.data.map((c) => {
        const obj = {
          id: c.cca3,
          name: c.name.common,
          flags: c.flags[0],
          continents: c.continents[0],
          capital: c.capital ? c.capital[0] : "no tiene capital",
          subregion: c.subregion ? c.subregion : "no tiene subregión",
          area: c.area,
          population: c.population,
        };
        return obj;
      });

      let prueba = await Country.findAll();
      if (prueba.length === 0) {
        await Country.bulkCreate(juntos);
      }

      res.json(juntos);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      let coun = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: "%" + name + "%",
          },
        },
      });
      return res.json(coun);
    } catch (error) {
      console.log("No existe ese país");
    }
  }
});

router.get("/countries/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const filtrados = countries.filter((c) => c.name === name);
    res.json(filtrados);
  } catch (error) {
    console.log(error);
  }
});

router.post("/activities", async (req, res) => {
  //crear nueva actividad. Por body
  //recibir datos y separarlos; validar datos; agregarla a bd; validar
  const { name, difficulty, duration, seasons, country } = req.body;
  if (!seasons) res.status(400).json({ msg: "Faltan ingresar datos" });

  const regex = /^[a-zA-ZñÑáÁéÉíÍóÓuÚ]*$/;
  const textoName = regex.test(name);
  if (!textoName) res.status(400).json({ msg: "No son letras" });

  const comprobacion = /^[0-9]*$/;
  const numDuration = comprobacion.test(duration);
  if (!numDuration) res.status(400).json({ msg: "Ingresar solo números" });

  const comp = /^[1-5]*$/;
  const numDifficulty = comp.test(difficulty);
  if (!numDifficulty)
    res.status(400).json({ msg: "Ingresar solo númenos del 1 al 5" });

  try {
    const obj = { name, difficulty, duration, seasons };
    const nuevaActivity = await Activity.create(obj);

    res.send(nuevaActivity);
    nuevaActivity.addCountry(country);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

/* 

[ ] GET /countries/{idPais}:
Obtener el detalle de un país en particular
Debe traer solo los datos pedidos en la ruta de detalle de país
Incluir los datos de las actividades turísticas correspondientes
[ ] GET /countries?name="...": FALTA
Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
Si no existe ningún país mostrar un mensaje adecuado

*/
