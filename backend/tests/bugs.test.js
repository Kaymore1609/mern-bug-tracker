const request = require('supertest');
const app = require('../index'); // Adjust path if your Express app is exported here

describe('Bug Tracker API', () => {
  let bugId;

  it('POST /bugs - should create a new bug', async () => {
    const res = await request(app)
      .post('/bugs')
      .send({
        title: 'Test bug',
        description: 'This is a test bug',
        status: 'open',
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    bugId = res.body._id;
  });

  it('GET /bugs - should return bugs list', async () => {
    const res = await request(app).get('/bugs');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('PUT /bugs/:id - should update bug status', async () => {
    const res = await request(app)
      .put(`/bugs/${bugId}`)
      .send({ status: 'closed' });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('closed');
  });

  it('DELETE /bugs/:id - should delete a bug', async () => {
    const res = await request(app).delete(`/bugs/${bugId}`);
    expect(res.statusCode).toBe(200);
  });
});
