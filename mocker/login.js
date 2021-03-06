module.exports = {
  "GET /scLogin/webLogin": (req, res) => {
    return res.json({
      code: 200,
      data: {
        AUTH_TOKEN: "b3cb313c-605e-42cb-a3f2-c85ee4c39b4b",
        user: {
          userId: 10,
          baseAccount: "admin",
          basePassword: "3783dce43d83b8bcca239f972404d1b5",
          baseName: "超管",
        },
      },
      msg: "登录成功test",
    });
  },
  "GET /scUserInfo/currentUser": (req, res) => {
    return res.json({
      code: 200,
      msg: "登录成功test",
      permissions: ["*:*:*"],
      roles: ["admin"],
      user: {
        searchValue: null,
        createBy: "admin",
        createTime: "2020-11-20 19:29:42",
        updateBy: null,
        updateTime: null,
        remark: "管理员",
        params: {},
        userId: 1,
        deptId: 103,
        userName: "admin",
        nickName: "若依",
        email: "ry@163.com",
        phonenumber: "15888888888",
        sex: "1",
        avatar: "",
        salt: null,
        status: "0",
        delFlag: "0",
        loginIp: "127.0.0.1",
        loginDate: "2020-11-20T19:29:42.000+0800",
        dept: {
          searchValue: null,
          createBy: null,
          createTime: null,
          updateBy: null,
          updateTime: null,
          remark: null,
          params: {},
          deptId: 103,
          parentId: 101,
          ancestors: null,
          deptName: "研发部门",
          orderNum: "1",
          leader: "若依",
          phone: null,
          email: null,
          status: "0",
          delFlag: null,
          parentName: null,
          children: [],
        },
        roles: [
          {
            searchValue: null,
            createBy: null,
            createTime: null,
            updateBy: null,
            updateTime: null,
            remark: null,
            params: {},
            roleId: 1,
            roleName: "超级管理员",
            roleKey: "admin",
            roleSort: "1",
            dataScope: "1",
            menuCheckStrictly: false,
            deptCheckStrictly: false,
            status: "0",
            delFlag: null,
            flag: false,
            menuIds: null,
            deptIds: null,
            admin: true,
          },
        ],
        roleIds: null,
        postIds: null,
        admin: true,
      },
    });
  },
};
