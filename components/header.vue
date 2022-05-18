<template>
	<header class="flex flex-nowrap items-center container mx-auto py-10">
		<h2 class="text-3xl">Bonjol</h2>
		<div class="mx-auto">
			<NuxtLink
				v-for="(item, index) in DBHeaderLinks"
				:key="index"
				class="mx-4 opacity-70 hover:opacity-100 cursor-pointer text-lg"
			>
				{{ item.text }}
			</NuxtLink>
		</div>
		<Button class="bonjol-theme-primary">Connect to my wallet</Button>
	</header>
</template>

<script lang="ts" setup>
import { DBHeaderLinks } from '../database/header'
</script>
