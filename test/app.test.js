const request = require('supertest');

const app = require('../app')

describe('users', () => {

    let token = ""

    let id = ""

    it('should login a user', async () => {

        const response = await request(app)

            .post('/api/auth/login')

            .send({ "email": "test10@test.com", "password": "HolaMundo.01" })

            .set('Accept', 'application/json')

            .expect(200)

        expect(response.body.user.email).toEqual('test10@test.com')

        expect(response.body.user.name).toEqual('Menganito')

        token = response.body.token

        id = response.body.user._id

    })

    it('should get the users', async () => {

        const response = await request(app)

            .get('/api/users')

            .auth(token, { type: 'bearer' })

            .set('Accept', 'application/json')

            .expect(200)

        expect(response.body.data.pop().name).toEqual('Menganito')

    });
})
