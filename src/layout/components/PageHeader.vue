<template>
  <div class="page-header ui jbetween">
    <div class="header-lf"></div>
    <div class="header-center">
      <div class="title">{{ headerTitle || "智慧公安检查站" }}</div>
    </div>
    <div class="header-rt ui">
      <div class="menu-btn" @click="toErp">
        <img src="@/assets/images/header/header-menu.png" alt />
      </div>
      <div class="logout ui">
        <div class="user-img">
          <img src="@/assets/images/header/header-portrait.png" alt />
        </div>
        <div class="user-info ui">
          <div class="user-name" :title="userName || ''">
            姓名：{{ userName || "xxxxx" }}
          </div>
          <div class="user-unit ellitext" :title="unitname">
            单位：{{ unitname || "市局巡警支队" }}
          </div>
        </div>
      </div>
      <div class="logout-btn" @click="logout">
        <img src="@/assets/images/header/header-logout.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: null,
    };
  },
  computed: {
    userName() {
      return "张三";
    },
    unitname() {
      return "市公安局";
    },
    headerTitle() {
      return "智慧公安检查站";
    },
  },
  methods: {
    toErp() {
      console.log(this.$route);
      if (this.$route.path == "/checkpoint/index") {
        this.$router.push("/erp");
      } else {
        this.$router.push("/checkpoint/index");
      }
    },
    //退出登录
    logout: function() {
      this.$confirm("确认退出吗?", "提示", {})
        .then(() => {
          this.$store.dispatch("logOutAsync").then(rs => {
            location.reload(); // 为了重新实例化vue-router对象 避免bug
            console.log(rs);
            // if (rs) window.location.href = rs;
          });
        })
        .catch(() => {});
    },
  },
};
</script>
<style lang="less">
.page-header {
  position: relative;
  width: 100%;
  height: 0.78rem;
  background-color: #000e5a;
  box-shadow: 0px 0.05rem 0.5rem 0px rgba(0, 0, 0, 0.5);
  .header-lf {
    width: 2.7rem;
    height: 0.54rem;
    margin-left: 0.31rem;
    margin-top: 0.1rem;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .header-center {
    width: 6.54rem;
    height: 0.88rem;
    background: url("../../assets/images/header/header-name.png") no-repeat 0 0;
    background-size: cover;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    .title {
      font-size: 0.36rem;
      font-weight: bold;
      text-align: center;
      margin-top: 0.18rem;
      // font-family: HYLiLiangHeiJ;
      color: #37d0ff;
      background: linear-gradient(180deg, #ffffff 0%, #70a9ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .header-rt {
    width: 3.9rem;
    height: 100%;
    overflow: hidden;
    align-items: center;
    justify-content: flex-end;
    .menu-btn {
      width: 0.54rem;
      height: 0.54rem;
      flex-shrink: 0;
      margin-right: 0.3rem;
      align-items: center;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .logout {
      flex-shrink: 0;
      width: 2.1rem;
      height: 0.58rem;
      align-items: center;
      .user-img {
        flex-shrink: 0;
        width: 0.54rem;
        height: 0.54rem;
        border-radius: 50%;
        overflow: hidden;
        flex-shrink: 0;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .user-info {
        flex: 1;
        padding-left: 0.15rem;
        height: 0.4rem;
        font-size: 0.14rem;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        color: #00c8ff;
        overflow: hidden;
        .user-unit {
          color: #006cff;
          max-width: 2.4rem;
        }
      }
    }
    .logout-btn {
      width: 0.32rem;
      height: 0.32rem;
      flex-shrink: 0;
      margin-left: 0.2rem;
      margin-right: 0.25rem;
      align-items: center;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
</style>
