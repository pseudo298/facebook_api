const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        console.error("Failed to start server:", err);
    } else {
        console.log(`Server started on port ${port}`);
    }
});


const pageId=387852341070170;
const access_token="EAALFXN4ddlUBO8XmUElFQZAZCsf5zZB9vViKS1LmB4JcsyEmXw9RSRIjhPdvC1DxSltbWv8mzIGd0tKYR3rzZAAJm4XEA2roNWeCiE4eYFjtkWhkkRZBhcl1CHXSdCi1bUKH7c7ygKGMT47G7QFNaGSyRWqeI4FfAIMbhl2KywxixMYW6tGJRpeLnp9E1ELd95jXaXYZBzRBx3AP4ssKyFLJZCBZAmEpXjQk";


app.post("/posttopage", (req, res) => {
    const text=req.body.text;
    const img=req.body.img;

    axios
    .post(`https://graph.facebook.com/v20.0/${pageId}/photos?url=${img}?&message=${text}&access_token=${access_token}`,null)
    .then(function(response) {
        console.log(response);
    })
    
})