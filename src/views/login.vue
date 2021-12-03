<template>
  <div class="login-container">
    <div
      class="login-box"
      :style="{
        background: 'url(' + bgImg + ') no-repeat 0 0',
        'background-size': 'cover',
      }"
    >
      <img class="img-logo" :src="$config.LoginImg" alt srcset />

      <el-form
        autocomplete="on"
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-position="left"
        label-width="0px"
        class="card-box login-form"
        :style="{
          background: 'url(' + bgLoginImg + ') no-repeat 0 0',
          'background-size': 'contain',
        }"
      >
        <el-form-item prop="manageMobile">
          <img class="bg-input-img" src="@/assets/images/bg-input.png" alt />
          <div class="flex-row">
            <span class="svg-container svg-container_login">
              <img src="../assets/images/icon-user.png" />
            </span>
            <span class="input-line"></span>
            <el-input
              name="manageMobile"
              type="text"
              v-model.trim="loginForm.manageMobile"
              autocomplete="off"
              placeholder="请输入警号"
            />
          </div>
        </el-form-item>
        <el-form-item prop="password">
          <img class="bg-input-img" src="@/assets/images/bg-input.png" alt />
          <div class="flex-row">
            <span class="svg-container svg-container_login">
              <img src="../assets/images/icon-password.png" />
            </span>
            <span class="input-line"></span>
            <el-input
              name="pwdType"
              type="password"
              @keyup.enter.native="handleLogin"
              v-model.trim="loginForm.password"
              autocomplete="off"
              placeholder="请输入密码"
              show-password
            />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            style="width:100%;"
            :loading="loading"
            class="login-btn"
            @click.native.prevent="handleLogin"
            @keyup.native.enter="handleLogin"
            >登录</el-button
          >
        </el-form-item>
        <el-form-item>
          <div class="forget-psd">
            <!-- <span>忘记密码？</span> -->
          </div>
        </el-form-item>
        <!-- <el-form-item>
          <div class="copyright">
            Copyright©2016-2019 公安局检察院版权所有
            <br />
            技术支持：四川中安神盾安全技术开发有限公司
          </div>
        </el-form-item> -->
      </el-form>
    </div>
  </div>
</template>
<script>
import { isvalidUsername } from "@/utils/validate";
import { encrypt } from "@/utils/globalFun";
import bgImg from "@/assets/images/login-bg.jpg";
import bgLoginImg from "@/assets/images/bg-login.png";

export default {
  name: "login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("请输入正确的警号"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error("密码不能小于5位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        manageMobile: "",
        password: "",
        rememberMe: false,
      },
      loginRules: {
        manageMobile: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePass },
        ],
      },
      loading: false,
      pwdType: "password",
      bgImg,
      bgLoginImg,
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          let { manageMobile, password } = this.loginForm;

          password = encrypt(manageMobile, password);

          this.$store
            .dispatch("Login", { manageMobile, password })
            .then(() => {
              this.loading = false;
              console.log(21213);
              this.$router.push("/");
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="less">
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #0b203f;
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .img-logo {
      width: 8rem;
      height: 1.81rem;
      margin: -1.25rem auto 0rem;
      display: block;
    }
    .login-form {
      // position: absolute;
      // top: 3.26rem;
      // left: 0;
      // right: 0;
      width: 5.85rem;
      height: 3.94rem;
      margin: 0rem auto;
      padding: 1.15rem 0.9rem 0.9rem;
      box-sizing: border-box;
      .el-form-item {
        border-radius: 5px;
        color: #454545;
        position: relative;
        width: 4.1rem;
        height: 0.56rem;
        margin-bottom: 0.15rem;
        .bg-input-img {
          position: absolute;
          left: 0;
          right: 0;
          width: 4.1rem;
          height: 0.56rem;
        }
        .flex-row {
          display: flex;
          align-items: center;
          .svg-container {
            margin: 0.16rem 0.15rem 0.16rem 0.25rem;
            vertical-align: middle;
            width: 0.25rem;
            height: 0.25rem;
            display: inline-block;
            img {
              width: 0.25rem;
              height: 0.25rem;
              overflow: hidden;
              display: block;
            }
            .svg-container_login {
              font-size: 20px;
            }
          }
          .input-line {
            display: inline-block;
            width: 1px;
            height: 0.2rem;
            background: rgba(57, 91, 222, 1);
          }
          // input:-webkit-autofill {
          //   -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
          //   -webkit-text-fill-color: #000 !important;
          // }
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-transition-delay: 99999s;
            -webkit-transition: color 99999s ease-out,
              background-color 99999s ease-out;
          }
          input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 0rem 0.1rem 0rem 0.15rem;
            color: #fff;
            height: 0.56rem;
            font-size: 0.16rem;
          }
          .el-input {
            display: inline-block;
            height: 0.56rem;
            line-height: 0.56rem;
            width: 3.4rem;
            .el-input__suffix {
              .el-input__icon {
                line-height: 0.56rem;
              }
            }
          }
          .tips {
            font-size: 14px;
            color: #fff;
            margin-bottom: 10px;
          }
        }
        .el-form-item__error {
          padding-top: 0;
          padding-left: 10px;
        }
        .login-btn {
          margin-top: 0.1rem;
          width: 4rem;
          height: 0.45rem;
          background: rgba(255, 168, 0, 1);
          border-radius: 3px;
          border-color: rgba(255, 168, 0, 1);
          padding: 0px;
          color: #fff;
        }
        .forget-psd {
          display: flex;
          justify-content: flex-end;
          line-height: 14px;
          span {
            display: block;
            // width: 1rem;
            height: 0.2rem;
            line-height: 0.2rem;
            font-size: 0.14rem;
            font-family: Microsoft YaHei;
            color: rgba(255, 255, 255, 1);
            cursor: pointer;
            text-align: right;
          }
        }
        .copyright {
          width: 4.1rem;
          height: 0.4rem;
          font-size: 0.14rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #2e5988;
          line-height: 0.2rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
