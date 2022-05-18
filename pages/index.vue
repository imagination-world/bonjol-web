<template>
	<section class="flex flex-nowrap my-12">
		<div class="flex flex-col h-fit">
			<h1 class="text-8xl font-bold supper-title">Bonjol Coin decentral cryptocurrency</h1>
			<p class="text-3xl mt-8">
				This is a meme coin and has no value and buying it is like wasting your money.
			</p>
		</div>

		<div class="bonjol-card w-[500px] h-fit p-8 relative">
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
	</section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// database
import { DBTokens } from '../database/tokens'

const from = ref<string>('BNB')
const value = ref<number>(1)
const bonjol = ref<number>(1)
</script>
