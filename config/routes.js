/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  }
  
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/


/*
bpm/controllers/engine.php:
REGEX: (\d){2,4}:     function (\w*)\((.*)\)
*/

// 	,'GET /bpm/engine/assign/:model/:idwf/:idcase/:src_resourceId/:resourceId/:idu':'bpm/engineController.assign' 
// 	,'GET /bpm/engine/Newcase/:model/:idwf/:manual = false/:parent = null/:silent = false,:data=array()':'bpm/engineController.Newcase' 
// 	,'GET /bpm/engine/Start/:model/:idwf/:idcase/:silent = false':'bpm/engineController.Start' 
// 	,'GET /bpm/engine/Startcase/:model/:idwf/:idcase/:silent = false':'bpm/engineController.Startcase' 
	,'GET /bpm/engine/run/model/:idwf/:idcase':'bpm/engineController.run' 
	,'GET /bpm/engine/run/model/:idwf/:idcase/:run_resourceId':'bpm/engineController.run' 
	,'GET /bpm/engine/run/model/:idwf/:idcase/:run_resourceId/:silent':'bpm/engineController.run' 
// 	,'GET /bpm/engine/run_after/':'bpm/engineController.run_after' 
// 	,'GET /bpm/engine/run_task/:model/:idwf/:idcase/:resourceId':'bpm/engineController.run_task' 
// 	,'GET /bpm/engine/run_post/:model/:idwf/:idcase/:resourceId':'bpm/engineController.run_post' 
// 	,'GET /bpm/engine/run_gate/:model/:idwf/:idcase/:resourceId/:flowId':'bpm/engineController.run_gate' 
// 	,'GET /bpm/engine/task_locked/:model/:idwf/:idcase/:resourceId':'bpm/engineController.task_locked' 
// 	,'GET /bpm/engine/manual_task/:model/:idwf/:idcase/:resourceId':'bpm/engineController.manual_task' 
// 	,'GET /bpm/engine/manual_gate/:model/:idwf/:idcase/:resourceId':'bpm/engineController.manual_gate' 
// 	,'GET /bpm/engine/load_data/:wf/:idcase':'bpm/engineController.load_data' 
// 	,'GET /bpm/engine/do_signals/:name':'bpm/engineController.do_signals' 
// 	,'GET /bpm/engine/do_triggers/':'bpm/engineController.do_triggers' 
// 	,'GET /bpm/engine/do_subproc/:idcase = null':'bpm/engineController.do_subproc' 
// 	,'GET /bpm/engine/bindArrayToObject/:array':'bpm/engineController.bindArrayToObject' 
// 	,'GET /bpm/engine/bindObjectToArray/:object':'bpm/engineController.bindObjectToArray' 
// 	,'GET /bpm/engine/recursiveArraySearch/:haystack/:needle, :index = null':'bpm/engineController.recursiveArraySearch' 
// 	,'GET /bpm/engine/do_pending/$model, $idwf, $idcase, $run_resourceId = null':'bpm/engineController.do_pending' 
// 	,'GET /bpm/engine/get_pending/$model, $idwf, $idcase, $run_resourceId = null':'bpm/engineController.get_pending' 
// 	,'GET /bpm/engine/show_modal/$name, $text':'bpm/engineController.show_modal' 

};
