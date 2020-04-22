import { Recipe, RecipeContentType } from '../types';

const prepareData = (data: Recipe[]) => {
	data.forEach(recipe => {
		recipe.content.forEach((content, i) => {
			content.key = `recipe-${recipe.id}-${content.type}-${i}`;
		});
	});
	return data;
};

export const recipes: Recipe[] = prepareData([
	{
		id: '1',
		title: 'Gurmanski krompir iz rerne',
		titleAlt: 'gurmanski krompir iz rerne',
		tags: ['slano', 'krompir'],
		imageUrl: 'https://imgur.com/k7Co6mR',
		content: [
			{
				type: RecipeContentType.INGREDIENTS,
				content: `
				3 : srednja krompira
				50 g : slanine
				150 g : praziluka
				200 ml : pavlake za kuvanje
				2 : jajeta
				1 : čen belog luka
				začini po ukusu (so, biber, muskatni oraščić, tucana ljuta)
				tvrdi sir po izboru (Gauda, Kačkavalj, Mocarela ili npr. Čedar)
				`,
			},
			{
				type: RecipeContentType.YOUTUBE,
				content: 'https://www.youtube.com/watch?v=vdqmlX6Pl5s',
			}
		]
	},

	{
		id: '2',
		title: 'Jogurt kocke sa grizom i sirom',
		titleAlt: 'jogurt kocke sa grizom i sirom',
		tags: ['slano', 'pita', 'sir'],
		imageUrl: 'https://imgur.com/vgeFyty',
		content: [
			{
				type: RecipeContentType.INGREDIENTS,
				title: 'Sastojci za pitu',
				content: `
				1 : pakovanje gotovih kora za pite i gibanice
				3 : jajeta
				2 : čaše jogurta
				pola : čaše ulja
				1 : čaša griza
				130 g : sira
				1 : kašičica soli
				2 : kašičice praška za pecivo
				`,
			},
			{
				type: RecipeContentType.INGREDIENTS,
				title: 'Sastojci za preliv',
				content: `
				pola : čaše jogurta
				manje od pola : čaše ulja
				manje od pola : čaše mleka
				susam za posipanje
				`,
			},
			{
				type: RecipeContentType.YOUTUBE,
				content: 'https://www.youtube.com/watch?v=3iubYoYJjl4',
			}
		]
	},

	{
		id: '3',
		title: 'Krofne',
		titleAlt: 'krofne',
		tags: ['slatko'],
		imageUrl: 'https://imgur.com/Ib3xP1a',
		content: [
			{
				type: RecipeContentType.INGREDIENTS,
				content: `
				400 ml : mleka
				50 ml : ulja
				40 g : kvasca
				2 : cela jaja
				1 : kašika šećera
				1 : prstohvat soli
				700 g : brašna
				+ 50 g : za pospipanje
				+ 50 g : da se završi mešenje testa
				`,
			},
			{
				type: RecipeContentType.PARAGRAPH,
				content: `
				Kvasac nije potrebno da kisne.
				U toplo mleko dodati izmrvljen kvasac i šećer pa izmešati.
				U to dodati pola mere brašna i sve sjediniti žicom za mućenje.
				Zatim dodati ulje, razmućena jaja i so.
				Opet izmešati.
				Dodati ostatak brašna pa umutiti kašikom.
				Tome dodati još 50 gr brašna.
				Testo će biti mekano i lepiće se za ruke, ali tako treba.
				Kašikom ga uobličite, pospite sa malo brašna, pa pokrite krpom i ostavite da odstoji oko 30 minuta dok se masa ne udvostruči.
				Pobrašnaviti sto, pa istreti nadošlo testo. Biće i dalje lepljivo ali kad ga budete sa malo brašna premesili neće više.
				Malo testo premesite, sve ivice ubacite unutra.
				Pospite brašnom opet sto pa razvucite testo na debljinu 1 cm.
				Vadite modlom, veličine koju želite krofne.
				Pospite brašnom tacne ili sto gde ćete ih slagati.
				Kada isečete krofne, onaj ostatak testa opet premesite i opet razvucite pa isecite krofne.
				Pokrijte isečene krofne krpom pa ostavite da kisnu 20 minuta.
				Zagrejte dosta ulja, ja sam stavila 700 ml na srednju temperaturu. Pazite da ne bude prejaka, a ni preslaba.
				Spuštajte krofne u zagrejano ulje, ona strana koja je bila gore sad ide dole i obrnuto.
				Obavezno poklopite do okretanja.
				Kada je donja strana porumenila otklopite i okrenite krofne.
				Sada se ne poklapa.
				Pečene krofne izbadite na papirni ubrus ili salvetu da se ocede od viška ulja.
				Za kraj krofne pospite šećerom u prahu ili, pošto su šuplje napunite špricem sa nekim kremom ili pekmezom.
				`,
			},
			{
				type: RecipeContentType.YOUTUBE,
				content: 'https://www.youtube.com/watch?v=qpjsd0pIzTc',
			}
		]
	},
	{
		id: '4',
		title: 'Štapići sa semenkama',
		titleAlt: 'stapici sa semenkama',
		tags: ['slano', 'štapići', 'semenke'],
		imageUrl: 'https://imgur.com/q5fMMbK',
		content: [
			{
				type: RecipeContentType.INGREDIENTS,
				content: `
				500 g : brašna
				150 ml : ulja
				200 ml : belog vina
				1 : kesica praška za pecivo
				50 g : semenki suncokreta
				50 g : semenki lana
				50 g : susama
				1 : žumance
				malo : mleka
				so (po ukusu)
				`,
			},
			{
				type: RecipeContentType.PARAGRAPH,
				content: `
				U vanglicu staviti sve sastojke i zamesiti testo. Umešeno testo prebaciti na pobrašnjenu radnu površinu i razviti ga, 0,5 cm debljine. Seći na štapiće i ređati u pleh, preko pek papira. Isečeno testo može da se uvrti, pa da se dobiju spirale.
				Poređane štapiće premazati umućenim žumancetom (sa malo mleka) i staviti da se peče, u prethodno zagrejanoj rerni, na 190 stepeni.
				`,
			}
		]
	},
	{
		id: '5',
		title: 'Zdravi mafini bez šećera i brašna',
		titleAlt: 'zdravi mafini bez secera i brasna',
		tags: ['slatko', 'mafini'],
		imageUrl: 'https://imgur.com/WiQ44FO',
		content: [
			{
				type: RecipeContentType.INGREDIENTS,
				title: 'Sastojci (12 mafina)',
				content: `
				2 : jajeta
				150 g : mlevenih ovsenih pahuljica
				1 : banana
				1 : šargarepa
				1 : jabuka
				1 : pomorandža
				30 g : oraha
				30 g : suvog grožđa, suvih šljiva ili nekog suvog voća po želji
				1 : kašičica ekstrakta od vanile
				60 ml : ulja (maslinovo, kokosovo ili otopljenog putera)
				1 : kašičica praška za pecivo
				pola : kašičice sode bikarbone
				na vrh : kašičice cimeta
				na vrh : kašičice mlevenog đumbira
				na vrh : kašičice muskatnog oraščića
				1 : prstohvat soli
				1,5 : kašičica meda
				malo : celih ovsenih pahuljica za posipanje
				`,
			},
			{
				type: RecipeContentType.PARAGRAPH,
				content: `
				Izmutite jaja pa im dodajte izgnječenu bananu, med i ekstrakt od vanile. Narendajte zatim koricu od jedne pomorandže pa je presecite napola i nacedite sok od jedne polovine. Dodajte sok i narendanu koricu u smesu. Dodajte prstohvat soli, prašak za pecivo, sodu bikarbonu kao i ostale začine pa narendajte i dodajte ulje i narendanu šargarepu.
				Sve izmešajte i na kraju postepeno uz mešanje dodajte i ovsene pahuljice. Ja sam ovoga puta seckala suve šljive jer su mi ostale i želela sam da ih iskoristim. Potopila sam ih prethodno veče u vodu kako bi omekšale pa ih procedila i iseckala sitno. Umesto suvih šljiva možete koristiti suvo grožđe ili neko suvo voće po izboru. U smesu dodajte seckane orahe, sve promešajte i sipajte u korpice za mafine.
				Pecite ih u već zagrejanoj rerni na 180 C 25-30 minuta.
				`,
			},
			{
				type: RecipeContentType.YOUTUBE,
				content: 'https://www.youtube.com/watch?v=3iubYoYJjl4',
			}
		]
	},
]);
