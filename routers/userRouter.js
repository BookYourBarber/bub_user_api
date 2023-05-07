const router = require("express").Router()

router.get("/", async (req,res) =>{
    
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
    }
]

    // const appointmentTime = appointment.Time

    return res.json(users)
})

module.exports = router