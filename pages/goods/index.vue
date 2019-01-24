<template>
	<el-row>
		{{name}}
	</el-row>
</template>

<script>
export default {
	data() {
		return {
			name: 'goods title'
		}
	},
	asyncData({ params, error}) {
		return { name: 'goods list.. '};
		// error({ statusCode: 404, message: 'Post not found' });
		// Callback-based asyncData, fetch or middleware calls are deprecated. Please switch to promises or async/await syntax
		// callback({ statusCode: 404, message: 'Post not found' });
	},
	layout: 'goods-layout',
}
</script>