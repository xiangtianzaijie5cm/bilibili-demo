<template>
  <div class="userDetail">
    <div>
      <div class="user-avatar">
        <img v-if="userInfo.user_img" src="@/assets/avatar.jpg" alt="" />
      </div>
      <div class="user-edit">
        <div>
          <p>
            <span>3</span>
            <span class="user-text">粉丝</span>
          </p>
          <p>
            <span>80</span>
            <span class="user-text">关注</span>
          </p>
          <p>
            <span>0</span>
            <span class="user-text">获赞</span>
          </p>
        </div>
        <div @click="$router.push('/edit')">
          <div class="user-edit-btn">
            编辑资料
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2>{{ userInfo.name }}</h2>
      <p v-if="userInfo.user_desc">{{ userInfo.user_desc }}</p>
      <p v-else>这个人神秘，什么都没有写</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userInfo']
}
</script>

<style scoped lang="less">
.userDetail {
  padding: 0 3.333vw;
  background-color: white;
  > div:nth-child(1) {
    display: flex;
    .user-avatar {
      margin-right: 5.556vw;
      img {
        height: 25vw;
        width: 25vw;
        border-radius: 50%;
      }
    }
    .user-edit {
      flex: 1;
      div:nth-child(1) {
        display: flex;
        margin-top: 2.778vw;
        p {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          font-size: 3.611vw;
          .user-text {
            color: #bbb;
          }
        }
        p:nth-child(1),
        p:nth-child(2) {
          border-right: 0.278vw solid #ccc;
        }
      }
      div:nth-child(2) {
        padding: 1.389vw;
        .user-edit-btn {
          border: 0.278vw solid #fb7a9f;
          padding: 0.833vw;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fb7a9f;
          border-radius: 1.389vw;
        }
      }
    }
  }
  > div:nth-child(2) {
    h2 {
      margin: 10px 0 3px 0;
      padding: 0;
      font-size: 4.8vw;
      font-weight: 400;
    }
    p {
      color: #999;
      padding: 0;
      margin: 2.778vw 0;
      font-size: 3.46667vw;
    }
  }
}
</style>
