const express = require("express");
const router = express.Router();

const {
    getAllAdmin,
    postCreateAdmin,
    putUpdateAdmin,
    deleteAdmin,
} = require("../controllers/Admin");

/**
 * @route GET api/Admin
 * @description get all Admin
 * @access public
 */
router.get("/", getAllAdmin);

/**
 * @route POST api/Admin
 * @description add a new Admin
 * @access public
 */
router.post("/", postCreateAdmin);

/**
 * @route PUT api/Admin/:id
 * @description update Admin
 * @access public
 */
router.put("/:id", putUpdateAdmin);

/**
 * @route DELETE api/Admin/:id
 * @description delete Admin
 * @access public
 */
router.delete("/:id", deleteAdmin);

module.exports = router;