// [your-sails-app]/config/autoreload.js
module.exports.autoreload = {
  active: true,
  usePolling: true,
  dirs: [
    "api/models",
    "api/controllers",
    "api/controllers/bpm",
    "api/services"
  ]
};