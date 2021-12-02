module.exports = {
  "GET /scLogin/webLogin": (req, res) => {
    return res.json({
      code: 200,
      data: { name: "test" },
      msg: "成功",
    });
  },
};
