/**
 * Bpm/engineController
 *
 * @description :: Server-side logic for managing bpm/engines
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports.routes={
  
  'GET /bpm/engine/run/*':'bpm/engineController.run'
}
sails.log(module.exports.routes);
module.exports = {
	


  /**
   * `Bpm/engineController.run()`
   */
  run: function (req, res,next) {
    sails.log(req.params);//aaa
    return res.json({
      params: req.params,
      msg:"hi=hola"
    });
  },


  /**
   * `Bpm/engineController.startcase()`
   */
  startcase: function (req, res) {
    return res.json({
      todo: 'startcase() is not implemented yet!'
    });
  }
};