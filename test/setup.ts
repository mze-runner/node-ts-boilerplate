/* eslint-disable no-undef */
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
// import app from '../src/app';

const mongo = new MongoMemoryServer();

beforeAll(async () => {
    // let set up env variable
    process.env.NODE_ENV = 'staging';
    // const mongo = new MongoMemoryServer();
    const mongoUrl = await mongo.getUri();
    await mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();
    collections.forEach(async (col) => {
        await col.deleteMany({});
    });
});

afterAll(async () => {
    await mongo.stop();
    await mongoose.connection.close();
});
