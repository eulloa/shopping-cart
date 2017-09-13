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
		featured: {
			description: 'Relive the adventures of the Boy Who Lived in the 3rd book from best-selling author J.K Rowling.'
		},
		images: [
			'harry-potter-and-the-prisoner-of-azkaban.jpg'
		]
	},
	{
		productID: 3,
		name: 'Meet the Beatles!',
		price: 9.99,
		description: 'Meet the Beatles! is the second Beatles album released in the United States. It was the first US Beatles album to be issued by Capitol Records, on 20 January 1964 in both mono and stereo formats. It topped the popular album chart on 15 February 1964 and remained at number one for eleven weeks before being replaced by The Beatles\'s Second Album. The cover featured Robert Freeman\'s portrait used in the United Kingdom for With the Beatles, with a blue tint added to the original stark black-and-white photograph.',
		rating: 5,
		category: 'MUSIC',
		featured: {
			description: 'It\'s 1964 all over again, Beatlemania is back!'
		},
		images: [
			'meet-the-beatles.jpg'
		]
	},
	{
		productID: 4,
		name: 'Hamilton Beach 0.9 cu ft 900W Microwave, Stainless Steel',
		price: 59.99,
		description: 'This Hamilton Beach Microwave features 10 microwave power levels and the one-touch cooking features popcorn, potato, reheat, frozen dinner, beverage and pizza settings. ',
		features: [
			'0.9 cu ft digital microwave',
			'900W',
			'10 microwave power levels',
			'99\'99 minute timer',
			'Child safety lock',
			'Digital clock',
			'Handle door'
		],
		rating: 3.5,
		category: 'KITCHEN',
		images: [
			'microwave.jpg',
			'microwave-1.jpg',
			'microwave-2.jpg'
		]
	},
	{
		productID: 5,
		name: 'Converse All Star Shoes',
		price: 39.99,
		description: 'Created in 1917, the Converse Chuck Taylor All-Star has been evolving for a hundred years while managing to keep it classic: a canvas upper, all-star emblem, and vulcanized rubber sole are known all over the world. The silhouette stays true in both high-top and oxford styles: both looks can handle whatever.',
		features: [
			'Durable canvas you know and love',
			'Outsole pattern for traction (make sure you don\'t fall and eat it)',
			'Star logo path says you get it',
			'Silhouette looks good, has been good for decades, will be good tomorrow, etc.'
		],
		rating: 4.5,
		category: 'CLOTHES',
		featured: {
			description: 'The Chuck Taylor All-Star is a staple, stay simply classic.'
		},
		images: [
			'chucks.png',
			'chucks-1.png',
			'chucks-2.png'
		]
	},
	{
		productID: 6,
		name: 'Men\'s Hotlen Chukka Boot',
		price: 109.99,
		description: 'Feel like a million bucks in these babies!',
		features: [
			'Leather upper',
			'Lace-up and side zip closures',
			'Breathable mesh lining',
			'Synthetic lug sole'
		],
		rating: 4,
		category: 'CLOTHES',
		images: [
			'boot.jpg'
		]
	},
	{
		productID: 7,
		name: 'Cable-knit Cotten Sweater',
		price: 109.99,
		description: 'A slim fit and a classic cable-knit construction define this sweater\'s pure Polo style. Team yours with everything from patterned pants to leather skinny jeans.',
		features: [
			'Slim fit',
			'Crewneck',
			'Long sleeves with rib-knit cuffs. Rib-knit hem',
			'100% cotton'
		],
		rating: 3.5,
		category: 'CLOTHES',
		images: [
			'sweater.jpg'
		]
	},
	{
		productID: 8,
		name: 'Nikon D5300',
		price: 2749.95,
		description: 'Featuring a NIKKOR 24-120 mm f/4G ED VR Lens, the Nikon D810 DSLR Camera delivers clear visuals with a simple click. You can instantly view the captured images or playback your videos on its 3.2-inch 1229k-Dot LCD monitor. In addition, this model provides Full HD video at 1080p display resolution and is equipped with a multi-CAM 3500FX 51-point AF Sensor. Its 36.3 MP FX-format CMOS sensor ensures detailed images, giving you a good user experience.',
		features: [
			'36.3MP FX-Format CMOS Sensor',
			'EXPEED 4 Image Processor',
			'No Optical Low Pass Filter',
			'3.2" 1,229k-Dot LCD Monitor',
			'Full HD 1080p Video at 60/30/24 fps',
			'Multi-CAM 3500FX 51-Point AF Sensor',
			'Native ISO 12800, Extended to ISO 51200',
			'5 fps Shooting at Full Resolution',
			'Electronic Front Curtain Shutter',
			'AF-S NIKKOR 24-120mm f/4G ED VR Lens'
		],
		rating: 4.5,
		category: 'TECHNOLOGY',
		images: [
			'camera.jpg',
			'camera-1.jpg',
			'camera-2.jpg'
		]
	},
	{
		productID: 9,
		name: 'Sony - 65" Class (64.5" Diag.) - LED - 2160p',
		price: 1299.99,
		description: 'Experience immersive TV viewing with this Sony Bravia 4k TV. Stream movies, use apps, play games or access online content on this television with the touch of a button. This Sony Bravia 4k TV uses the industry-leading Sony 4k picture processing technology to produce images that are four times the quality of standard HD.',
		features: [
			'Built-in Wi-Fi Smart TV means a huge world of entertainment',
			'LED TVs perform well in all lighting conditions',
			'2160p resolution for breathtaking HD images',
			'High dynamic range (HDR) creates a more realistic picture'
		],
		rating: 4.5,
		category: 'TECHNOLOGY',
		images: [
			'tv.jpg'
		]
	},
	{
		productID: 10,
		name: 'Stephen King\'s IT',
		price: 9.99,
		description: 'It is a 1986 horror novel by American author Stephen King. It was his 22nd book and 18th novel written under his own name. The story follows the experiences of seven children as they are terrorized by a being that exploits the fears and phobias of its victims to disguise itself while hunting its prey. "It" primarily appears in the form of a clown to attract its preferred prey of young children.',
		rating: 4.5,
		category: 'BOOKS',
		images: [
			'it.jpg'
		]
	},
	{
		productID: 11,
		name: 'The Tragedy of Hamlet',
		price: 9.99,
		description: 'The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet (/ˈhæmlɪt/), is a tragedy written by William Shakespeare at an uncertain date between 1599 and 1602. Set in Denmark, the play dramatises the revenge Prince Hamlet is called to wreak upon his uncle, Claudius, by the ghost of Hamlet\'s father, King Hamlet. Claudius had murdered his own brother and seized the throne, also marrying his deceased brother\'s widow.',
		rating: 4.5,
		category: 'BOOKS',
		images: [
			'hamlet.jpg'
		]
	},
	{
		productID: 12,
		name: 'Mr. Coffee Simple Brew 4-Cup Switch Coffee Maker, TF Series',
		price: 15.99,
		description: 'When a small pot is all you need for making coffee, this Mr. Coffee Simple Brew 4-Cup Switch Coffee Maker brews up ideal coffee flavor in just minutes. With the Pause \'N Serve feature you can pour a cup while it is still brewing by stopping the cycle momentarily and you can remove the filter basket for easy cleaning. This kitchen coffee maker, TF series, also has a dual-water window to monitor filling capacity and has a convenient on/off indicator. It comes in an ideal size without taking up a lot of counter space and is simple to use. Just set it up, turn it on and begin to brew.',
		features: [
			'Brews 4 cups of hot, fresh coffee',
			'Pause \'N Serve feature',
			'Removable filter basket for easy cleaning',
			'Dual water window to monitor filling capacity'
		],
		rating: 4.5,
		category: 'KITCHEN',
		images: [
			'coffeemaker.jpg',
			'coffeemaker-1.jpg'
		]
	},
	{
		productID: 13,
		name: 'The Wind',
		price: 15.99,
		description: 'The Wind is the twelfth and final studio album by American singer-songwriter Warren Zevon. The album was released on August 26, 2003, by Artemis Records. Zevon began recording the album shortly after he was diagnosed with inoperable pleural mesothelioma (a cancer of the lining of the lung), and it was released just two weeks before his death on September 7, 2003. The album was awarded the Grammy Award for Best Contemporary Folk Album. "Disorder in the House", performed by Zevon and Bruce Springsteen, won Best Rock Vocal Performance (Group or Duo). Songs from the album were nominated for an additional three Grammys.',
		rating: 4.5,
		category: 'MUSIC',
		images: [
			'the-wind.jpg'
		]
	},
	{
		productID: 14,
		name: 'Ready to Die',
		price: 15.99,
		description: 'Ready to Die is the debut studio album by American rapper The Notorious B.I.G.; it was released on September 13, 1994, by Bad Boy Records. The label\'s first release, the album features production by Bad Boy founder Sean "Puffy" Combs, Easy Mo Bee, Chucky Thompson, DJ Premier and Lord Finesse, among others. Recording for the album took place during 1993-94 at The Hit Factory and D&D Studios in New York City. The partly autobiographical album tells the story of B.I.G.\'s experiences as a young criminal. Ready to Die was the only studio album released during his life, as he was murdered sixteen days prior to the release of his second album, Life After Death in 1997.',
		rating: 4.5,
		category: 'MUSIC',
		images: [
			'ready-to-die.jpg'
		]
	},
	{
		productID: 15,
		name: 'BLACK+DECKER 4-Slice Toaster, Black, T4560B',
		price: 30.99,
		description: 'Now making breakfast has become so easy with the Black & Decker 4-Slice Toaster. This toaster lets you prepare crispy breads every time and that too at double speed. This 4 slice toaster oven from Black Decker is built keeping your comfort in mind. It puts convenience at your fingertips as the toaster oven comes with dual controls, function indicator lights, self-adjusting bread guides, extra-wide slots, cord wrap, and extra lift. With the function indicator you will find it easy to use its various functions which include bagel, defrost, and cancel along with the variable toast shade selectors. You will choose the bagel function when you want a crispy touch to your bread on the inside and keeps it warm on the outside. You can also cancel toasting within seconds, even before the cycle is complete, just at the touch of a button. The self-adjusting toaster has removable trays in which crumbs of bread fall when the bread is being toasted.',
		features: [
			'4-slice toaster',
			'Dual controls for convenience',
			'Bagel function'
		],
		rating: 4.5,
		category: 'KITCHEN',
		images: [
			'toaster.jpg',
			'toaster-1.jpg',
			'toaster-2.jpg'			
		]
	}
]

export default allProducts;