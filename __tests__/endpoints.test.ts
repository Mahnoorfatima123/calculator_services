// test/endpoints.test.ts

import chai from 'chai';
import supertest from 'supertest';
import app from '../index.mjs'; // Import your Express app

const expect = chai.expect;
const request = supertest(app);

describe('Calculator API Endpoints', () => {
  it('should calculate a valid expression', async () => {
    const response = await request.get('/calculus?query=2*(3+4)');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ error: false, result: 14 });
  });

  it('should handle an invalid expression', async () => {
    const response = await request.get('/calculus?query=2*(3+4');
    expect(response.status).to.equal(400);
    expect(response.body).to.deep.equal({
      error: true,
      message: 'Invalid expression',
    });
  });

  it('should retrieve calculation history', async () => {
    const response = await request.get('/calculus/history');
    expect(response.status).to.equal(200);
    // Add more assertions based on the expected format of the response
  });

  // Add more test cases for other endpoints and scenarios
});
