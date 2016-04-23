'use strict'

module.exports = function(app, express){
  const dataRouter = express.Router();
  require('./routes/dataRoutes.js')(dataRouter);
  app.use('/data', dataRouter);
}