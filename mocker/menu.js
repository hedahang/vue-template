/* eslint-disable */

module.exports = {
  'GET /system/menu/getRouters': {
    "msg": "操作成功",
    "code": 200,
    "data": [{
      "name": "System",
      "path": "/system",
      "hidden": false,
      "redirect": "noRedirect",
      "component": "Layout",
      "alwaysShow": true,
      "meta": {
        "title": "系统管理",
        "icon": "system",
        "noCache": false
      },
      "children": [{
        "name": "Agent",
        "path": "agent",
        "hidden": false,
        "component": "system/agent/index",
        "meta": {
          "title": "代理商管理",
          "icon": "appoint",
          "noCache": false
        }
      }, {
        "name": "Unit",
        "path": "unit",
        "hidden": false,
        "component": "system/unit/index",
        "meta": {
          "title": "组织机构管理",
          "icon": "tree",
          "noCache": false
        }
      }, {
        "name": "Role",
        "path": "role",
        "hidden": false,
        "component": "system/role/index",
        "meta": {
          "title": "角色管理",
          "icon": "peoples",
          "noCache": false
        }
      }, {
        "name": "Feedback",
        "path": "feedback",
        "hidden": false,
        "component": "system/feedback/index",
        "meta": {
          "title": "意见反馈",
          "icon": "message",
          "noCache": false
        }
      }, {
        "name": "Dict",
        "path": "dict",
        "hidden": false,
        "component": "system/dict/index",
        "meta": {
          "title": "字典管理",
          "icon": "dict",
          "noCache": false
        }
      }, {
        "name": "Log",
        "path": "log",
        "hidden": false,
        "component": "ParentView",
        "meta": {
          "title": "日志管理",
          "icon": "log",
          "noCache": false
        },
        "children": [{
          "name": "Operlog",
          "path": "operlog",
          "hidden": false,
          "component": "system/operlog/index",
          "meta": {
            "title": "操作日志",
            "icon": "form",
            "noCache": false
          }
        }, {
          "name": "Logininfor",
          "path": "logininfor",
          "hidden": false,
          "component": "system/loginlog/index",
          "meta": {
            "title": "登录日志",
            "icon": "logininfor",
            "noCache": false
          }
        }]
      }, {
        "name": "Menu",
        "path": "menu",
        "hidden": false,
        "component": "system/menu/index",
        "meta": {
          "title": "菜单管理",
          "icon": "tree-table",
          "noCache": false
        }
      }]
    }]
  }
};