<template>
	<vue3-marquee>
		<div v-for="(item, index) in text" :key="index">
			<span>{{ item }}</span>
			<span class="star">*</span>
		</div>
	</vue3-marquee>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'

defineProps({
	text: {
		type: Array as PropType<string[]>,
		default: [],
	},
})
</script>
