const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '1082328',
  key: '19802fe5a208aab57f9b',
  secret: '91d164448877b6217a11',
  cluster: 'eu',
  encrypted: true,
});

module.exports = pusher;
