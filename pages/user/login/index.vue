<template>
  <div class="login-container">
    <el-form 
      ref="login" 
      :model="login" 
      :rules="rules" 
      label-width="80px"
      @submit.native.prevent 
      class="login-form">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="login.name" placeholder="admin" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="login.password" placeholder="123456" autocomplete="off" />
      </el-form-item>	
      <el-form-item>
        <el-button type="primary" native-type="submit" @click="handleLogin">登录</el-button>
      </el-form-item>		
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: {
        name: '',
        password: ''
      },
      rules: {
        name: [{ required: true, message: '用户名不能为空' }],
        password: [{ required: true, message: '密码不能为空' }]
      }
    };
  },
  mounted() {
  },
  methods: {
    handleLogin() {
      console.log(1);
      this.$refs.login.validate(valid => {
        if (!valid) return false;

        localStorage.setItem('USER', JSON.stringify(this.login));
        this.$router.push('/user');
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
