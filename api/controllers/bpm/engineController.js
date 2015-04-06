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
    //---load case_data
    // Case.findOne({
    //       'idwf': req.param('idwf'),
    //       'id': req.param('idcase')
    //     }

    //   )
    Case.find(
      {
          'idwf':'fondyfpp',
          // 'id':'AOKI'
        })
    .limit(1)
      .exec(function(err, result) {
        console.log('err',err,result);
        if(!err){
        //var thisCase = result.toJSON();
        //console.log(thisCase);
        return res.json(result.pop().toJSON());
        }
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