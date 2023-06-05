<script setup lang="ts">
import { ref } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
const userName = ref<string>('');
const passWord = ref<string>('');
</script>

<template>
  <div class="containar">
    <div class="form-context">
      <div class="components-input-demo-presuffix">
        <a-input placeholder="请输入用户名" v-model:value="userName">
          <template #prefix>
            <UserOutlined style="color: white;" />
          </template>
        </a-input>
        <a-input-password v-model:value="passWord" placeholder="请输入密码">
          <template #prefix>
            <LockOutlined style="color: white;" />
          </template>
        </a-input-password>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scope>
.containar {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/imgs/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  overflow: hidden;
  .components-input-demo-presuffix {
    position: absolute;
    top: 15%;
    left: 15%;
    transform: translate(-25%, -25%);
    -webkit-transform: translate(-25%, -25%);
    -moz-transform: translate(-25%, -25%);
    -ms-transform: translate(-25%, -25%);
    -o-transform: translate(-25%, -25%);
    .ant-input-affix-wrapper {
      height: 60px;
      border-radius: 30px;
      border: 1px solid rgba(255, 255, 255, 1);
      background-color: transparent;
      margin-bottom: 20px;
      .anticon svg {
        color: white;
        font-size: 24px;
      }
      .ant-input {
        background-color: transparent !important;
        color: white;
      }
    }
  }
}
</style>
