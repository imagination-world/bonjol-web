<template>
	<div class="bonjol-card bg-[#63cdda] w-[500px] h-fit p-8 relative">
		<h3 class="text-2xl">Exchange your token</h3>
		<p class="opacity-70">From your wallet to Trush wallet by buying Bonjol coins</p>

		<div class="bonjol-input my-4">
			<select v-model="from" class="bonjol-input-prefix">
				<option v-for="(item, index) in DBTokens" :key="index" :value="item.key">
					{{ item.name }}
				</option>
			</select>
			<input type="number" min="1" v-model="value" />
		</div>

		<div class="flex flex-nowrap items-center px-4">
			<strong>You will get</strong>
			<div class="flex-1"></div>
			<span>{{ bonjol }} Bonjol</span>
		</div>

		<br />

		<Button class="bonjol-theme-primary absolute -bottom-6 left-1/2 -translate-x-1/2">
			Buy Bonjol Tokens
		</Button>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// database
import { DBTokens } from '../database/tokens'

const from = ref<string>('BNB')
const value = ref<number>(1)
const bonjol = ref<number>(1)
</script>
