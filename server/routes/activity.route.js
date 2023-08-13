const { create, index, remove, edit } = require("../controllers/activity.controller");

module.exports = (app) => {
    app.post('/api/activity', create);
    app.get('/api/activity', index);
    app.put('/api/activity/:id', edit);
    app.delete('/api/activity/:id', remove);
}
