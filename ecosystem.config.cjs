const logDirectory = process.env.HEALTHCARE_LOG_DIR || '/var/log/cloud-health';

module.exports = {
  apps: [
    {
      name: 'patient-service',
      script: 'java',
      args: ['-jar', 'patient-service/target/patient-service-0.0.1-SNAPSHOT.jar'],
      cwd: __dirname,
      interpreter: 'none',
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      kill_timeout: 25000,
      output: `${logDirectory}/patient-service-out.log`,
      error: `${logDirectory}/patient-service-error.log`,
      env: {
        SERVER_PORT: '8081'
      }
    },
    {
      name: 'diagnostics-service',
      script: 'java',
      args: ['-jar', 'diagnostics-service/target/diagnostics-service-0.0.1-SNAPSHOT.jar'],
      cwd: __dirname,
      interpreter: 'none',
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      kill_timeout: 25000,
      output: `${logDirectory}/diagnostics-service-out.log`,
      error: `${logDirectory}/diagnostics-service-error.log`,
      env: {
        SERVER_PORT: '8082'
      }
    },
    {
      name: 'file-service',
      script: 'java',
      args: ['-jar', 'file-service/target/file-service-0.0.1-SNAPSHOT.jar'],
      cwd: __dirname,
      interpreter: 'none',
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      kill_timeout: 25000,
      output: `${logDirectory}/file-service-out.log`,
      error: `${logDirectory}/file-service-error.log`,
      env: {
        SERVER_PORT: '8083'
      }
    }
  ]
};
