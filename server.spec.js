const server = require('./server');
const request = require('supertest');

describe('server.js', () => {
    test('Should be the testing environment.', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
})