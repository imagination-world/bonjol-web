export interface IToken {
	logo: string
	name: string
	key: string
}

export const DBTokens: IToken[] = [
	{
		logo: '/assets/tokens/bnb.png',
		name: 'Binance Coin',
		key: 'BNB',
	},
]
