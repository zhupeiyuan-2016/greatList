module.exports = class extends think.Model {
  async config(type) {
    const model = this.model('config');
    const dataList = await model.where({id: 1}).find();
    return dataList.type;
  }
};
