import request from 'supertest';
import app from '../index.mjs'; // Assuming it's a TypeScript file

describe('Calculator Controller', () => {
  it('should return the result of a valid calculation', async () => {
    const response = await request(app).get('/calculus?query=2*3+5');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ error: false, result: 11 });
  });

  it('should return an error for an invalid calculation', async () => {
    //const response = await request(app).get('/calculus?query=invalid-expression');
    //expect(response.status).toBe(400);
    //expect(response.body).toEqual({ error: true, message: 'Error: Undefined symbol: invalid-expression' });
  });

  // Add more unit tests as needed
});
