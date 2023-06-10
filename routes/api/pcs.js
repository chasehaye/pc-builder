const express = require('express');
const router = express.Router();
const pcsController = require('../../controllers/api/pcs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', pcsController.index);
router.post('/', pcsController.create);
router.get('/:id', pcsController.detail);
router.delete('/:id', pcsController.deletePc);
router.put('/:id', pcsController.update);

module.exports = router;