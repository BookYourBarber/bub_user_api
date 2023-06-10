const app = require('../app')
const supertest = require('supertest');
const request = supertest(app)

describe("Get all users", () => {
    it('should return a status 200', async () => {

        const usersExample = [
                {
                    "Id": "1",
                    "Name": "Veljko",
                    "LastName": "Skrbic",
                    "PhoneNr": "0623687594",
                    "Mail": "veljko@gmail.com",
                    "Role": "Customer"
                },
                {
                    "Id": "2",
                    "Name": "Vuk",
                    "LastName": "Skrbic",
                    "PhoneNr": "132156449874",
                    "Mail": "vuk@gmail.com",
                    "Role": "Barber"
                },
                {
                    "Id": "3",
                    "Name": "Una",
                    "LastName": "Skrbic",
                    "PhoneNr": "966232365",
                    "mail": "una@gmail.com",
                    "Role": "Barber"
                },
                {
                    "Id": "4",
                    "Name": "Milan",
                    "LastName": "Skrbic",
                    "PhoneNr": "031932155",
                    "mail": "milan@gmail.com",
                    "Role": "Barber"
                },
                {
                    "Id": "5",
                    "Name": "Snezana",
                    "LastName": "Skrbic",
                    "PhoneNr": "07041911191",
                    "mail": "snezana@gmail.com",
                    "Role": "Customer"
                }
        ]

        const response = await request.get("/users")

        expect(response.statusCode).toBe(200)
        expect(response.body).toMatchObject(usersExample)
    })
})

describe("Get user by user_id", () => {
    it("should return an object of user", async () => {

        const userExample ={
            Id: "5",
            Name: "Snezana",
            LastName: "Skrbic",
            PhoneNr: "07041911191",
            mail: "snezana@gmail.com",
            Role: "Customer"
        }

        const response = await request.get(`/users/${userExample.Id}`)
        console.log(response.body)

        expect(response.statusCode).toBe(200)
        expect(response.body).toMatchObject(userExample)
    })

    it("should return error 404", async () => {
        
        const response = await request.get(`/users/invalid_id`)

        expect(response.statusCode).toBe(404)
        // expect(response.statusCode).notToMatchObject(userExample)
    })

})