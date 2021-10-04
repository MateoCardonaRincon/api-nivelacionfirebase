const { Router } = require('express');
const userCtrl = require('../controllers/users.controller')
const router = Router();

//Create
router.post('/',userCtrl.createOne)
//Read
router.get('/',userCtrl.getAll);
router.get('/:id',userCtrl.getOne);
//Update
router.put('/:id',userCtrl.updateOne)
//Delete
router.delete('/:id',userCtrl.deleteOne);


module.exports = router;