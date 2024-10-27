const express = require('express')

//kurulum
const app = express();
const PORT = 3005;


//route veya endpoistleri tanımla

app.get('/api/v1/cars', (req, res) => { });
app.post('/api/v1/cars', (req, res) => { });



app.get('/api/v1/cars/:id', (req, res) => { })
app.patch('/api/v1/cars/:id', (req, res) => { })
app.delete('/api/v1/cars/:id', (req, res) => { })


//dinlenecek portu belirle

app.listen(PORT, () => {
    console.log(`Server${PORT} portunu DİNLEMEYE BAŞLADI`)
});