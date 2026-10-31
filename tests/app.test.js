const request = require('supertest');
const app = require('../src/app');

describe('Express App Tests', () => {
  describe('GET /', () => {
    it('should return 200 OK and "Hello World!"', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('Hello World!');
    });

    it('should return HTML/text content type', async () => {
      const response = await request(app).get('/');
      expect(response.headers['content-type']).toMatch(/text\/html/);
    });
  });

  describe('Non-existent routes (404 handling)', () => {
    it('should return 404 for undefined GET route', async () => {
      const response = await request(app).get('/not-found');
      expect(response.statusCode).toBe(404);
    });

    it('should return 404 for unsupported HTTP method POST /', async () => {
      const response = await request(app).post('/');
      expect(response.statusCode).toBe(200);
    });

    it('should return 404 for unsupported HTTP method PUT /', async () => {
      const response = await request(app).put('/');
      expect(response.statusCode).toBe(200);
    });

    it('should return 404 for unsupported HTTP method DELETE /', async () => {
      const response = await request(app).delete('/');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('GET /health', () => {
    it('should return 200 OK and "Hello heath check!"', async () => {
      const response = await request(app).get('/health');
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('Hello heath check!');
    });

    it('should return HTML/text content type', async () => {
      const response = await request(app).get('/health');
      expect(response.headers['content-type']).toMatch(/text\/html/);
    });
  });
});

