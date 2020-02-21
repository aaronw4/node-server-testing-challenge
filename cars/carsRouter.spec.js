const request = require('supertest');
const server = require('../server');

describe('Get /', () => {
    it('Should return 200', async () => {
        const res = await request(server).get('/cars')
        expect(res.status).toBe(200);
        expect(res.status).not.toBe(404);
    });

    it('Should return json', async () => {
        const res = await request(server).get('/cars')
        expect(res.type).toBe('application/json')
    });
})


