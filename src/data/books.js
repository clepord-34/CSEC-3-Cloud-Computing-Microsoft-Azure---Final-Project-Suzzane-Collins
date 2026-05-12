import balladCover from '../assets/Images/The_Ballad.jpg';
import sunriseOnTheReapingBackground from '../assets/Images/Sunrise-on-the-Reaping.jpg';
import hungerGamesBackground from '../assets/Images/The_Hunger_Games.jpg';
import catchingFireBackground from '../assets/Images/Catching_Fire.jpg';
import mockingjayBackground from '../assets/Images/Mockingjay.jpg';
import gregorOverlanderBackground from '../assets/Images/gregor_the_overlander.jpg';
import gregorProphecyBackground from '../assets/Images/gregor_prophecy.jpg';
import gregorWarmbloodsBackground from '../assets/Images/gregor_warmbloods.jpg';
import gregorMarksSecretBackground from '../assets/Images/gregor_marks_Secret-cover.jpg';
import gregorCodeOfClawBackground from '../assets/Images/Gregor_and_the_Code_of_Claw.jpg';
import yearOfTheJungleBackground from '../assets/Images/yearOfTheJungle_Poster.jpg';
import whenCharlieCover from '../assets/Images/when_charlie_mcbtn_cover.jpg';

const bookImages = {
  'Sunrise on the Reaping': sunriseOnTheReapingBackground,
  'The Ballad of Songbirds and Snakes': balladCover,
  'The Hunger Games': hungerGamesBackground,
  'Catching Fire': catchingFireBackground,
  'Mockingjay': mockingjayBackground,
  'Gregor the Overlander': gregorOverlanderBackground,
  'Gregor and the Prophecy of Bane': gregorProphecyBackground,
  'Gregor and the Curse of the Warmbloods': gregorWarmbloodsBackground,
  'Gregor and the Marks of Secret': gregorMarksSecretBackground,
  'Gregor and the Code of Claw': gregorCodeOfClawBackground,
  'Year of the Jungle': yearOfTheJungleBackground,
  'WHEN CHARLIE MCBUTTON LOST POWER': whenCharlieCover,
};

export const books = [
  {
    title: 'Sunrise on the Reaping',
    year: '2025',
    series: 'The Hunger Games Trilogy',
    category: 'The Hunger Games',
    description:
      'As the day dawns on the fiftieth annual Hunger Games, fear grips the districts of Panem. This year, in honor of the Quarter Quell, twice as many tributes will be taken from their homes. Back in District 12, Haymitch Abernathy is trying not to think too hard about his chances. All he cares about is making it through the day and being with the girl he loves. (Scholastic Press, 2025)',
    publishedBy: 'Published by Scholastic Press',
    badge: ['New Release', 'New York Times Bestseller'],
    coverTone: 'bg-[#f8ddb9]',
    coverImage: bookImages['Sunrise on the Reaping'],
  },
  {
    title: 'The Ballad of Songbirds and Snakes',
    year: '2020',
    series: 'The Hunger Games Trilogy',
    category: 'The Hunger Games',
    description:
      'It is the morning of the reaping that will kick off the tenth annual Hunger Games. In the Capitol, eighteen-year-old Coriolanus Snow is preparing for his one shot at glory as a mentor in the Games. The once-mighty house of Snow has fallen on hard times, its fate hanging on the slender chance that Coriolanus will be able to outcharm, outwit, and outmaneuver his fellow students to mentor the winning tribute. (Scholastic Press, 2020)',
    publishedBy: 'Published by Scholastic Press',
    badge: ['Awards & Recognition', 'New York Times Bestseller'],
    coverTone: 'bg-[#f9dbba]',
    coverImage: bookImages['The Ballad of Songbirds and Snakes'],
  },
  {
    title: 'The Hunger Games',
    year: '2008',
    series: 'The Hunger Games Trilogy',
    category: 'The Hunger Games',
    description:
      'Katniss is a 16-year-old girl living with her mother and younger sister in the poorest district of Panem, the remains of what used be North America. Long ago the districts waged war on the Capitol and were defeated. As part of the surrender terms, each district agreed to send one boy and one girl to appear in an annual televised event called, "The Hunger Games." The terrain, rules, and level of audience participation may change but one thing is constant: kill or be killed. When her sister is chosen by lottery, Katniss steps up to go in her place. (Scholastic Press, 2008)',
    publishedBy: 'Published by Scholastic Press',
    badge: ['Awards & Recognition', 'New York Times Editor\'s Choice'],
    coverTone: 'bg-[#f8ddb9]',
    coverImage: bookImages['The Hunger Games'],
  },
  {
    title: 'Catching Fire',
    year: '2009',
    series: 'The Hunger Games Trilogy',
    category: 'The Hunger Games',
    description:
      'Much to her shock, Katniss has fueled an unrest she\'s afraid she cannot stop. And what scares her more is that she\'s not entirely convinced she should try. As time draws near for Katniss and Peeta to visit the districts on the Capitol\'s cruel Victory Tour, the stakes are higher than ever. If they can\'t prove, without a shadow of a doubt, that they are lost in their love for each other, the consequences will be horrifying. (Scholastic Press, 2009)',
    publishedBy: 'Published by Scholastic Press',
    badge: ['Awards & Recognition'],
    coverTone: 'bg-[#f8ddb9]',
    coverImage: bookImages['Catching Fire'],
  },
  {
    title: 'Mockingjay',
    year: '2010',
    series: 'The Hunger Games Trilogy',
    category: 'The Hunger Games',
    description:
      'Katniss Everdeen survived the Hunger Games twice. But now, as the rebellion against the Capitol grows, she becomes the face of the revolution.',
    publishedBy: 'Published by Scholastic Press',
    badge: ['Awards & Recognition', 'New York Times Bestseller'],
    coverTone: 'bg-[#f8ddb9]',
    coverImage: bookImages['Mockingjay'],
  },
  {
    title: 'Gregor the Overlander',
    year: '2003',
    series: 'The Underland Chronicles',
    category: 'Underland Chronicles',
    description:
      'Meet Gregor, a kid from New York City, who falls out of his laundry room into a fantastical subterranean world called the Underland. Accompanied by his toddler sister, Boots, he encounters giant talking creatures-- cockroaches, bats, spiders and rats--and an unusual society of humans. And they\'re all expecting him... (Scholastic Press, 2003)',
    publishedBy: 'Published by Scholastic Press',
    badge: [],
    coverTone: 'bg-[#f3d7ae]',
    coverImage: bookImages['Gregor the Overlander'],
  },
  {
    title: 'Gregor and the Prophecy of Bane',
    year: '2004',
    series: 'The Underland Chronicles',
    category: 'Underland Chronicles',
    description:
      'Gregor returns to the Underland to fulfill a prophecy that involves finding and killing an enormous rat known as the Bane.',
    publishedBy: 'Published by Scholastic Press',
    badge: [],
    coverTone: 'bg-[#f3d7ae]',
    coverImage: bookImages['Gregor and the Prophecy of Bane'],
  },
  {
    title: 'Gregor and the Curse of the Warmbloods',
    year: '2005',
    series: 'The Underland Chronicles',
    category: 'Underland Chronicles',
    description:
      'Gregor and Boots must return to the Underland to help find a cure for a deadly plague called the Curse of the Warmbloods. Gregor is desperate to succeed because, along with several of his Underland friends, a member of his own family is stricken. (Scholastic Press, 2005)',
    publishedBy: 'Published by Scholastic Press',
    badge: [],
    coverTone: 'bg-[#f3d7ae]',
    coverImage: bookImages['Gregor and the Curse of the Warmbloods'],
  },
  {
    title: 'Gregor and the Marks of Secret',
    year: '2006',
    series: 'The Underland Chronicles',
    category: 'Underland Chronicles',
    description:
      'Gregor sets out to solve a mystery involving the Underland mice and ends up discovering a terrible secret. This book leads right into the fifth and final book of the series, "Gregor and the Code of Claw." (Scholastic Press, 2006)',
    publishedBy: 'Published by Scholastic Press',
    badge: [],
    coverTone: 'bg-[#f3d7ae]',
    coverImage: bookImages['Gregor and the Marks of Secret'],
  },
  {
    title: 'Gregor and the Code of Claw',
    year: '2007',
    series: 'The Underland Chronicles',
    category: 'Underland Chronicles',
    description:
      'Everyone in the Underland has been taking great pains to keep The Prophecy of Time from Gregor. Gregor knows it must say something awful but he never imagined just how awful: It calls for the warrior\'s death. Now, with an army of rats approaching, and his mom and sister still in Regalia, Gregor the warrior must gather up his courage to help defend Regalia and get his family home safely. The entire existence of the Underland is in Gregor\'s hands, and time is running out. There is a code to be cracked, a mysterious new princess, Gregor\'s burgeoning dark side, and a war to end all wars. (Scholastic Press, 2007)',
    publishedBy: 'Published by Scholastic Press',
    badge: [],
    coverTone: 'bg-[#f3d7ae]',
    coverImage: bookImages['Gregor and the Code of Claw'],
  },
  {
    title: 'Year of the Jungle',
    year: '2013',
    series: 'Picture Book',
    category: 'Picture Book',
    description:
      'When Suzy\'s father is called to war in a faraway jungle, she struggles to deal with his absence. (Scholastic Press, 2013)',
    publishedBy: 'Published by Scholastic Press',
    badge: ['Awards & Recognition', 'Mostly based on true events'],
    coverTone: 'bg-[#dfefcf]',
    coverImage: bookImages['Year of the Jungle'],
  },
  {
    title: 'WHEN CHARLIE MCBUTTON LOST POWER',
    year: '2005',
    series: 'Picture Book',
    category: 'Picture Book',
    description:
      'When a thunderstorm knocks out the electricity, Charlie McButton\'s whole tech empire comes tumbling down. He needs batteries-FAST. But the only batteries are inside his baby sister\'s beloved talking doll. Will he resort to desperate measures, and cause his sister to have a meltdown of her own? Or will he snap out of his computer craze long enough to realize sisters can be fun, even without batteries? (Penguin Group, 2005)',
    publishedBy: 'Published by Penguin Group',
    badge: [],
    coverTone: 'bg-[#dfefcf]',
    coverImage: bookImages['WHEN CHARLIE MCBUTTON LOST POWER'],
  },
];
