process.env.NODE_ENV = 'test'

const Employee = require('../app/models/Employee')
const faker = require('faker')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')

const should = chai.should()
const email = faker.internet.email()


describe('/GET employees', () => {
    it('should NOT be able to consume the route since no token was sent', (done) => {
        chai.request(server)
            .get('/employee')
            .end((err, res) => {
                res.should.have.status(401)
                done()
            })
    })
    it('it should GET all employees', (done) => {
        chai.request(server).
        get('/Employee')
            .set('Authorization', `Bearer ${tokens.admin}`)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.an('object')
                res.body.docs.should.be.a('array')
                done()
            })
    })
})

describe('/POST Employee', () => {
    it('it should NOT POST an employee without name', (done) => {
        const user = {}
        chai
            .request(server)
            .post('/Employee')
            .set('Authorization', `Bearer ${tokens.admin}`)
            .send(employee)
            .end((err, res) => {
                res.should.have.status(422)
                res.body.should.be.a('object')
                res.body.should.have.property('errors')
                done()
            })
    })
    it('it should POST an employee', (done) => {
        const employee = {
            firstName: faker.random.words(),
        }
    })

})