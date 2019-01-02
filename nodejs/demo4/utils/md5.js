const crypto = require('crypto');

module.exports = {
  MD5_SUFFIX : 'FDSW$t34tregt5tO&$(#RHuyoyiUYE*&OI$HRLuy87odlfh是个风格热腾腾)',
  MD5: function(str) {
    let cryptoObj=crypto.createHash('md5');

    cryptoObj.update(str);

    return cryptoObj.digest('hex');
  }
}