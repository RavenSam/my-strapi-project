module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '39bbbd924f0056453cfde8ef77720e62'),
  },
});
