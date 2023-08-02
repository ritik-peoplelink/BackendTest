const chai = require('chai');
const expect = chai.expect;
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('API Testing', () => {
    it('Get Api Testing', (done) => {
        chai.request('http://localhost:3000').get('/dev/getData').end((err,res)=>{
            expect(res.status).to.be.equal(200);
            done();
        })
    });
    
});
