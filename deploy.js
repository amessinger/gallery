const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const {
  FTP_USER: user,
  FTP_PASSWORD: password,
  FTP_HOST: host,
  FTP_PORT: port,
  FTP_ROOT: remoteRoot
} = process.env;

const config = {
  user,
  password,
  host,
  port,
  localRoot:  `${__dirname}/_site`,
  remoteRoot,
  include: ['*', '**/*'],
  deleteRemote: true,
};

ftpDeploy
  .deploy(config)
  .then(res => console.log('deployment success', res))
  .catch(err => console.log('deployment failure', err));
