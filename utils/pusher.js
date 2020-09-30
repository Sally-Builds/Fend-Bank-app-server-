const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '1082035',
  key: 'f10bb940f7184b427d24',
  secret: '545517070d3c14e73ee8',
  cluster: 'eu',
  encrypted: true,
});

module.exports = pusher;
