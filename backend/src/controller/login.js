const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const data = this.ctx.post();
    const model = this.model('getuser');
    const result = await model.getUser(data.code);
    return this.success(result);
  }
  async updataAction() {
    const data = this.ctx.post();
    const model = this.model('getuser');
    const result = await model.upData(data.openid);
    return this.success(result);
  }
};
