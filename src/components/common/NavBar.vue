<template>
  <div class="NavBar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div>
      <p>
        请输入内容
        <van-icon name="search" class="ipt-icon" />
      </p>
    </div>
    <div>
      <img src="@/assets/default_img.jpg" alt="" />
      <p>下载APP</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeys: ''
    }
  }
}
</script>

<style scope lang="less">
.NavBar {
  height: 12.5vw;
  background-color: white;
  display: flex;
  .logo {
    width: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
    }
  }
  div:nth-child(2) {
    // flex-grow: 1;
    flex: 1;
    display: flex;
    align-items: center;
    margin: 0 5px;
    p {
      height: 8.333vw;
      padding-left: 8.333vw;
      line-height: 8.333vw;
      background-color: #f4f4f4;
      width: 90%;
      border-radius: 2.778vw;
      position: relative;
      color: #aaa;
      .ipt-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #aaa;
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 6.944vw;
      height: 6.944vw;
    }
    p {
      padding: 1.389vw 2.778vw;
      margin: 0 2.222vw;
      border-radius: 1.389vw;
      background-color: #fb7299;
      color: white;
      font-size: 3.611vw;
    }
  }
}
</style>
