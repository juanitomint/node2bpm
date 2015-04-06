/**
 * Bpm/engineController
 *
 * @description :: Server-side logic for managing bpm/engines
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {



  /**
   * `Bpm/engineController.run()`
   */
  run: function(req, res, next) {
    var tokens;
    Token.find().limit(1).exec(
      function(err, result) {
        tokens = result;
      });
    console.log(tokens.pop().toJSON());
    sails.log(typeof(rs));
    //({'idwf':'FONDYFPP'}).toJSON());
    return res.json({
      params: req.params,
      msg: "hi=hola"
    });
  },


  /**
   * `Bpm/engineController.startcase()`
   */
  startcase: function(req, res) {
    return res.json({
      todo: 'startcase() is not implemented yet!'
    });
  }
};