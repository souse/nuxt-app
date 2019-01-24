<template>
  <section class="container index-container">
    <header class="pz-header">common header</header>
    <section class="main">
      <el-button type="primary" @click="handleGoLogin">登录</el-button>
      <!-- <ul>
        <li v-for="hp in $store.state.hospitalList" :key="hp.id">
          {{hp.name}}
        </li>
      </ul> -->
    </section>
    <footer class="pz-footer">common footer</footer>
  </section>
</template>

<script>
export default {
	name: 'Index',
  asyncData({ isClient }) {
    console.log('asyncData=======');
    
    return { haha: 1 };
  },
  async fetch({ store }) {
    await store.dispatch('searchList');
  },
  mounted() {
    console.log(this.$store.state.hospitalList.length);
  },
  methods: {
    handleGoLogin() {
      this.$router.push('/user/login');
    }
  }
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/common.scss';

.index-container {	
}  
</style>
