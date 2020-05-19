process.env.NODE_ENV = 'test'

const Project = require('../app/models/Projects')
const faker = require('faker')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')

const email = faker.internet.email()
const createdID = []

chai.use(chaiHttp)

describe('/GET projects', () => {
    it('it should GET all the projects', (done) => {
      chai
        .request(server)
        .get('/projects')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.an('object')
          done()
        })
    })
})

describe('/POST project', () => {
    it('it should POST a project ', (done) => {
        const project = {
            projectID: faker.random.word(),
            clientProjectId: faker.random.word(),
            clientProjectName: faker.random.words()
        }
        chai
            .request(server)
            .post('/projects')
            .send(project)
            .end((err, res) => {
                res.should.have.status(201)
                res.body.should.be.a('object')
                res.body.should.include.keys('_id', 'projectID', 'clientProjectId', 'clientProjectName')
                createdID.push(res.body._id)
                done()
            })
    })
})

describe('/PATCH/:id project', () => {
    it('it should UPDATE a project given the id', (done) => {
      const id = createdID.slice(-1).pop()
      const project = {
        clientProjectName: faker.random.words()
      }
      chai
        .request(server)
        .patch(`/projects/${id}`)
        .set('Authorization', `Bearer ${tokens.admin}`)
        .send(project)
        .end((error, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('clientProjectName').eql(id)
          createdID.push(res.body._id)
          done()
        })
    })
})

describe('/DELETE/:id project', () => {
    it('it should DELETE a project given the id', (done) => {
        const project = {
            projectID: faker.random.word(),
            clientProjectId: faker.random.word(),
            clientProjectName: faker.random.words()
        }
        chai
            .request(server)
            .post('/projects')
            .send(project)
            .end((err, res) => {
                res.should.have.status(201)
                res.body.should.be.a('object')
                res.body.should.include.keys('_id', 'projectID', 'clientProjectName', 'clientProjectId')
                chai
                    .request(server)
                    .delete(`/projects/${res.body._id}`)
                    .end((error, result) => {
                        result.should.have.status(200)
                        result.body.should.be.a('object')
                        done()
                    })
            })
    })
})

after(() => {
createdID.forEach((id) => {
    Project.findByIdAndRemove(id, (err) => {
        if (err) {
            console.log(err)
        }
    })
})
})
