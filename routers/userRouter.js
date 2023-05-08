const router = require("express").Router()


const users = [{
    Id: "1",
    Name: "Veljko",
    LastName: "Skrbic",
    PhoneNr: "0623687594",
    Mail: "veljko@gmail.com",
    Role: "Customer"
    },
    {
        Id: "2",
        Name: "Vuk",
        LastName: "Skrbic",
        PhoneNr: "132156449874",
        Mail: "vuk@gmail.com",
        Role: "Barber"
    },
    {
        Id: "3",
        Name: "Una",
        LastName: "Skrbic",
        PhoneNr: "966232365",
        mail: "una@gmail.com",
        Role: "Barber"
    },
    {
        Id: "4",
        Name: "Milan",
        LastName: "Skrbic",
        PhoneNr: "031932155",
        mail: "milan@gmail.com",
        Role: "Barber"
    },
    {
        Id: "5",
        Name: "Snezana",
        LastName: "Skrbic",
        PhoneNr: "07041911191",
        mail: "snezana@gmail.com",
        Role: "Customer"
    }
]

router.get("/", async (req,res) =>{
    
    // const appointmentTime = appointment.Time
    return res.json(users)
})


router.get("/:id", async(req,res) =>{
    const id = req.params.id

    console.log(id)
    const user = users.find(el => {
        return el.Id === id
    })

    if(!user){
        return res.sendStatus(404)
    }

    return res.json(user)
})


module.exports = router