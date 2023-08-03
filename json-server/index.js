const path = require('path')
const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

//Задержка(имитация api)
server.use(async (req, res, next) => {
    await new Promise(res => {
        setTimeout(res, 800)
    })
    next()
});

//Check authorization
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({message: 'AUTH ERROR'})
    }

    next()
})

server.use(jsonServer.defaults())
server.use(router)

//login endpoint
server.post('./login', (req, res) => {
    const {username, password}=req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const {users} = db

    const userFromDB = users.find(user => user.username === username && user.password === password)

    if(userFromDB) {
        return res.json(userFromDB)
    }

    return res.status(403).json({message: 'AUTH ERROR'})
})

//start server
server.listen(4200, () => {
    console.log("Server running on 4200")
})




















