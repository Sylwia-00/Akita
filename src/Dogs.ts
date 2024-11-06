type Gender = "Mâle" | "Femelle";


export interface Dog {
	id: number;
	picture: string;
	name: string;
	race: string;
	age: number;
	gender: Gender;
	sterilized: boolean;
	description: string;
}

export const dogsList: Dog[] = [
	{
		id: 1,
		picture: "https://cdn.belpatt.fr/img/belpatt_races/Labrador.jpg",
		name: "Max",
		race: "Labrador",
		age: 5,
		gender: "Mâle",
		sterilized: true,
		description: "Un Labrador amical et joueur, aime les promenades.",
	},
	{
		id: 2,
		picture:
			"https://www.pro-nutrition.fr/img/ybc_blog/post/1-BergerAllemand.jpg",
		name: "Bella",
		race: "Berger Allemand",
		age: 3,
		gender: "Femelle",
		sterilized: true,
		description: "Intelligente et protectrice, elle adore les enfants.",
	},
	{
		id: 3,
		picture:
			"https://cdn.prod.website-files.com/62178d5c536d9151904f4361/632b31ef1015904d6b63a740_croquettes-pour-malamute-d-alaska_yt88de.jpg",
		name: "Charlie",
		race: "Malamute d'Alaska",
		age: 4,
		gender: "Mâle",
		sterilized: false,
		description: "Curieux et plein d'énergie, il aime explorer.",
	},
	{
		id: 4,
		picture:
			"https://images.ctfassets.net/denf86kkcx7r/1TUv3Iy7mfBSH23Wx3prij/52cd94c2c35eb950ffca7b25be5ac1b6/terre_neuve_assurance_sant_vet",
		name: "Daisy",
		race: "Terre-Neuve",
		age: 2,
		gender: "Femelle",
		sterilized: true,
		description: "Calme et affectueuse, elle adore les câlins.",
	},
	{
		id: 5,
		picture:
			"https://cdn.prod.website-files.com/62178d5c536d9151904f4361/632c5e32c0bc243fd3b7c927_Races-Eurasier_slmvgx.jpg",
		name: "Rocky",
		race: "Eurasier",
		age: 6,
		gender: "Mâle",
		sterilized: false,
		description: "Actif et joueur, il aime les jeux de balle.",
	},
	{
		id: 6,
		picture:
			"https://as2.ftcdn.net/v2/jpg/00/52/08/89/1000_F_52088947_hvzeqIVtmc5ua1ZMRtw3DOlSx0pJrcUP.jpg",
		name: "Lola",
		race: "Chihuahua",
		age: 1,
		gender: "Femelle",
		sterilized: true,
		description: "Petite mais pleine de caractère, elle est très affectueuse.",
	},
	{
		id: 7,
		picture:
			"https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80/article/images/staffie%20bleu%20b-content-60b74ca1536d3-20047.jpg",
		name: "Buddy",
		race: "Staffie",
		age: 7,
		gender: "Mâle",
		sterilized: true,
		description: "Gentil et loyal, il aime passer du temps en famille.",
	},
	{
		id: 8,
		picture:
			"https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fanimaux.2Fchiens-et-chats-de-race.2Fchiens-de-race.2Fle-cocker-anglais-00353.2F10309139-2-fre-FR.2Fle-cocker-anglais-un-bon-vivant.2Ejpg/970x545/quality/80/crop-from/center/le-cocker-anglais-un-bon-vivant.jpeg",
		name: "Sophie",
		race: "Cocker Spaniel",
		age: 5,
		gender: "Femelle",
		sterilized: false,
		description: "Sociable et joyeuse, elle aime jouer avec ses amis.",
	},
	{
		id: 9,
		picture:
			"https://cdn.prod.website-files.com/62b2d13ccd148d1bccca591c/63c47ce48a664f7790e872ce_cairn-terrier_01.jpg",
		name: "Toby",
		race: "Cairn Terrier",
		age: 3,
		gender: "Mâle",
		sterilized: true,
		description: "Énergique et curieux, il est toujours prêt pour l'aventure.",
	},
	{
		id: 10,
		picture: "https://www.goodbro.fr/wp-content/uploads/Spitz-Allemand.jpg",
		name: "Mia",
		race: "Spitz",
		age: 4,
		gender: "Femelle",
		sterilized: true,
		description: "Intelligente et élégante, elle adore apprendre des tours.",
	},
];
