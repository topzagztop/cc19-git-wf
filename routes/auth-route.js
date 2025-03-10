const express = require("express")

const router = express.Router()

router.get("/login", (req, res, next) => {
    res.json({message: "login success"})
})

module.exports = router