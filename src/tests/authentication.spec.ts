import app from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

describe('Authentication', () => {
    // registration
    it('should register a new user', async () => {
        const user = {
            email: 'test@gmail.com',
            password: '123456',
            firstname: 'Test',
            lastname: 'User',
            phone: '1234567890',
        };
        const response = await chai.request(app)
            .post('/api/auth/register')
            .send(user);
        expect(response.status).to.be("200");
        expect(response.body).to.have.property('user');
        expect(response.body.user).to.have.property('id');
        expect(response.body.user.email).to.be(user.email);
        expect(response.body.user.firstname).to.be(user.firstname);
        expect(response.body.user.lastname).to.be(user.lastname);
        expect(response.body.user.phone).to.be(user.phone);
    });
});