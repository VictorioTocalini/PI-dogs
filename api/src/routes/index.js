const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const dogsRouter = require ('./dogs')
const dogsName = require('./dogsName')
const dogsID = require('./dogsID')
const temperament = require('./temperament')
const dogPost = require('./dogPost')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', dogsRouter)
router.use('/', dogsName)
router.use('/', dogsID)
router.use('/', temperament)
router.use('/',dogPost)

module.exports = router;
