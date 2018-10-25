module.exports = class extends think.Model {
  async getUser(code) {
    const config = this.model('config');
    const user = this.model('user');
    const configData = await config.where({id: 1}).find();
    const weixingapi = `?appid=` + configData.openid + `&secret=` + configData.secret + `&js_code=` + code + `&grant_type=authorization_code`;
    const data = await this.fetch(`https://api.weixin.qq.com/sns/jscode2session` + weixingapi).then(res => res.json());
    const result = {
      openid: data.openid
    };
    if (think.isEmpty(await user.where({openid: data.openid})).find()) {
      await user.add({
        openid: data.openid,
        avatar: '0',
        age: 0,
        sleep: 0,
        day: 0
      });
    }
    return result;
  }
};
