const express = require('express')

const app = express()
app.use(express.static('static'))

const usuarios = {
    "usuarios": [
        "juan",
        "jocelyn",
        "astrid",
        "maria",
        "ignacia",
        "javier",
        "brian"
    ]
}


app.get('/usuarios', async (req, res) => {
    res.json({ usuarios })
});


app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'))