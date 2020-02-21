const db = require('../data/db.config');
const cars = require('./carsModel');

describe('Hobbits model', () => {    
    beforeEach(async () => {
        await db('cars').truncate();
    });

    describe('insert', () => {
        it('Should insert cars into db', async () => {
            await cars.insert({make:'Ford', model:'LTD'});
            const carsDB = await db('cars');
            expect(carsDB).toHaveLength(1);
        })

        it('Should return Ford', async () => {
            await cars.insert({make:'Ford', model:'LTD'});
            const carsDB = await db('cars')
            const car = carsDB[0]
            expect(car.make).toBe('Ford');
            expect(car.model).toBe('LTD');
        })
    })
})
