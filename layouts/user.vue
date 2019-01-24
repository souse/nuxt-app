<template>
	<el-row class="container">
		<header class="pz-header user-header">
			<el-col class="header-container header-left"></el-col>
			<el-col class="header-container header-center"></el-col>
			<el-col class="header-container header-right">
				<el-button-group>
					<el-button @click="$router.push('/user/1314')">个人信息</el-button>
					<el-button @click="$router.push('/cart')">购物车</el-button>
				</el-button-group>
			</el-col>
		</header>
		<section class="main user-container">
			<nuxt />
		</section>
		<footer class="pz-footer">
			Footer
		</footer>
	</el-row>
</template>

<style lang="scss">
@import '~/assets/scss/common.scss';
.container .user-header {
	display: flex;
	padding-left: 20px;
	padding-right: 20px;
	.header-right {
		text-align: right;
	}
}
</style>