module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'node-example',
      script    : 'app.js',
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      key: 'ssh/id_rsa',
      user : 'deploy',
      host : ['128.199.138.90', '139.59.238.19'],
      ref  : 'origin/master',
      repo : 'https://github.com/togetherWeCode/node-example.git',
      path : '/home/deploy/node-example',
      'post-deploy' : 'nvm install && npm install && /home/deploy/.nvm/versions/node/v6.12.3/bin/pm2 reload ecosystem.config.js --env production'
    }
  }
};
