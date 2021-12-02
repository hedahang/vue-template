/**
 * 通用js方法封装处理
 * Copyright (c) 2019 munachar
 */
import CryptoJS from "@/utils/crypto";

export function encrypt(phone, password) {
  var key = CryptoJS.enc.Utf8.parse(
    CryptoJS.MD5(phone)
      .toString()
      .slice(0, 16)
  );
  let rs = CryptoJS.AES.encrypt(password, key, {
    iv: key,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  }).toString();

  return rs;
}
export function md5(val) {
  return CryptoJS.MD5(val);
}
