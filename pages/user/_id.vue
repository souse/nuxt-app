<template>
	<el-row>
		个人信息页面
		<p>ID：{{id}}</p>
	</el-row>
</template>

<script>
export default {
	layout: 'user',
	data() {
		id: ''
	},
	asyncData({ params }) {
		return { id: params.id };
	}
}
</script>