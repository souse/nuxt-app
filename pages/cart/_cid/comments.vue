<template>
	<el-row>
		comments
	</el-row>
</template>

<script>
	export default {
		layout: 'user',
		validate({ params }) {
			console.log('=============',params);

			return true;
		}
	}
</script>