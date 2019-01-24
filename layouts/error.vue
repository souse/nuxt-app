<template>
	<el-row>
			<h1 v-if="error.statusCode === 404">页面不存在</h1>
	</el-row>
</template>

<script>
export default {
	name: 'Error',
	props: ['error']
}
</script>