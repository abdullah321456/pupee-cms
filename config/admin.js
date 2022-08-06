module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5de30ca02be125aad5c9354cbb004d83'),
  },
});
