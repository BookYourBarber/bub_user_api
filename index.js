const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


const userRouter = require("./routers/userRouter")

app.use("/users", userRouter)

// app.get('/', (req, res) => {
//   res.send('Hello, Wodasdrld!');
// });

app.listen(5001, () => {
  console.log('Server started on port 5001');
});
