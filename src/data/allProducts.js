const allProducts = [
	{
		productID: 1,
		name: 'MacBook Pro',
		price: 1400.00,
		description: 'It’s razor thin, feather light, and even faster and more powerful than before. It has the brightest, most colorful Mac notebook display ever. And it features the Touch Bar — a Multi-Touch enabled strip of glass built into the keyboard for instant access to the tools you want, right when you want them. MacBook Pro is built on groundbreaking ideas. And it’s ready for yours.',
		features: [
			'Retina display',
			'13-inch model 2.3GHz dual-core Intel Core i5, Turbo Boost up to 3.6GHz, with 64MB of eDRAM Configurable to 2.5GHz dual-core Intel Core i7, Turbo Boost up to 4.0GHz, with 64MB of eDRAM',
			'13-inch model with Touch Bar 3.1GHz dual-core Intel Core i5, Turbo Boost up to 3.5GHz, with 64MB of eDRAM Configurable to 3.3GHz dual-core Intel Core i5, Turbo Boost up to 3.7GHz, with 64MB of eDRAM; or 3.5GHz dual-core Intel Core i7, Turbo Boost up to 4.0GHz, with 64MB of eDRAM',
			'Wi-Fi 802.11ac Wi-Fi wireless networking; IEEE 802.11a/b/g/n compatible',
			'Bluetooth Bluetooth 4.2 wireless technology'
		],
		rating: 4.5,
		category: 'TECHNOLOGY',
		featured: false,
		images: [
			'macbookpro.jpg',
			'macbook-id-hero.png'
		]
	},
	{
		productID: 2,
		name: 'Harry Potter and the Prisoner of Azkaban',
		price: 11.99,
		description: 'Harry Potter and the Prisoner of Azkaban is the third novel in the Harry Potter series, written by J. K. Rowling. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ron Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban who they believe is one of Lord Voldemort\'s old allies. The book was published in the United Kingdom on 8 July 1999 by Bloomsbury and in the United States on 8 September 1999 by Scholastic Inc.[1][2][3][4] Rowling found the book easy to write, finishing it just a year after she had begun writing it. The book sold 68,000 copies in just three days after its release in the United Kingdom and since has sold over three million in the country.[5] The book won the 1999 Whitbread Children\'s Book Award, the Bram Stoker Award, the 2000 Locus Award for Best Fantasy Novel, and was short-listed for other awards, including the Hugo. The film adaptation of the novel was released in 2004, grossing more than $796 million and earned notable critical acclaim. Video games loosely based on Harry Potter and the Prisoner of Azkaban were also released for several platforms, and most obtained favourable reviews.',
		rating: 4,
		category: 'BOOKS',
		featured: false,
		images: [
			'harry-potter-and-the-prisoner-of-azkaban.jpg'
		]
	},
	{
		productID: 3,
		name: 'Meet the Beatles!',
		price: 9.99,
		description: 'Meet the Beatles! is the second Beatles album released in the United States. It was the first US Beatles album to be issued by Capitol Records, on 20 January 1964 in both mono and stereo formats. It topped the popular album chart on 15 February 1964 and remained at number one for eleven weeks before being replaced by The Beatles\'s Second Album. The cover featured Robert Freeman\'s portrait used in the United Kingdom for With the Beatles, with a blue tint added to the original stark black-and-white photograph.',
		features: [
			'Feature 1',
			'Feature 2',
			'Feature 3'
		],
		rating: 5,
		category: 'MUSIC',
		featured: true,
		images: [
			'meet-the-beatles.jpg'
		]
	},
	{
		productID: 4,
		name: 'Microwave',
		price: 49.99,
		description: 'The best damn product ever!',
		features: [
			'Feature 1',
			'Feature 2',
			'Feature 3'
		],
		rating: 2.5,
		category: 'KITCHEN',
		featured: true,
		images: [
			'microwave.jpg'
		]
	}
]

export default allProducts;