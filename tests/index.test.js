const request = require('supertest');
const app = require('../src/index');

describe('node-api-gateway API', () => {
  test('GET / should return app info', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toContain('node-api-gateway');
  });

  test('GET /health should return healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});
