const generateFibonacci = require("../utils/fibonacci");

exports.getFibonacci = (req, res) => {
    const n = parseInt(req.params.n);

    if (isNaN(n) || n < 0) {
        return res.status(400).json({ error: "Le paramètre doit être un entier positif." })
    }
    const fibonacci = generateFibonacci(n);
    res.setHeader('Content-Type', 'application/json');
    
    return res.status(200).json({ fibonacci });
}