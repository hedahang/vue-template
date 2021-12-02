import request from "@/utils/request";

// 登录方法
export function login(baseAccount, password) {
  const data = {
    baseAccount,
    password,
  };
  return request({
    url: "/scLogin/webLogin",
    method: "get",
    params: data,
  });
}

// 获取用户详细信息
export function getInfo() {
  return request.get("/scUserInfo/currentUser");
}

// 退出方法
export function logout() {
  return request({
    url: "/logout",
    method: "post",
  });
}
