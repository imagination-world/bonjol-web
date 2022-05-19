<template>
	<section class="flex flex-nowrap container mx-auto my-12">
		<div class="flex flex-col h-fit">
			<h1 class="text-8xl font-bold text-[#786fa6] supper-title">Bonjol Coin decentral cryptocurrency</h1>
			<p class="text-3xl mt-8">
				This is a meme coin and has no value and buying it is like wasting your money.
			</p>
		</div>
		<Exchange />
	</section>

	<br>
	<section class="flex flex-col relative top-24 w-screen h-[200px]">
		<Status class="bg-[#f5cd79] w-screen origin-center scale-110 rotate-3 z-10" :text="status" />
		<Status class="bg-[#e66767] w-screen origin-center scale-110 -rotate-3" :text="status" />
	</section>

	<About class="container mx-auto mt-24 mb-12"/>
</template>

<script lang="ts" setup>
const status: string[] = Array(5).fill('Bonjol Coin Token')
</script>
