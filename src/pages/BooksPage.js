import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import ScrollReveal from '../components/ScrollReveal';
import hungerGamesCover from '../assets/Images/about_Icon.png';
import underlandCover from '../assets/Images/underland_icon.png';
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
import yearJungleCover from '../assets/Images/year_jungle.png';
import whenCharlieCover from '../assets/Images/when_charlie_mcbtn_cover.jpg';
import booksInterviewCoverPage from '../assets/Images/books_interview_coverPage.jpg';

const categoryTabs = [
  'All Books',
  'The Hunger Games',
  'Underland Chronicles',
  'Picture Book',
];

const books = [
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
    icon: '🎧',
  },
  {
    title: 'The Hunger Games',
    year: '2008',
    series: 'The Hunger Games Trilogy',
    category: 'The Hunger Games',
    description:
      'Katniss is a 16-year-old girl living with her mother and younger sister in the poorest district of Panem, the remains of what used be North America. Long ago the districts waged war on the Capitol and were defeated. As part of the surrender terms, each district agreed to send one boy and one girl to appear in an annual televised event called, "The Hunger Games." The terrain, rules, and level of audience participation may change but one thing is constant: kill or be killed. When her sister is chosen by lottery, Katniss steps up to go in her place. (Scholastic Press, 2008)',
    publishedBy: 'Published by Scholastic Press',
    badge: ['Awards & Recognition', 'New York Times Editor’s Choice'],
    coverTone: 'bg-[#f8ddb9]',
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
  },
  {
    title: 'Gregor the Overlander',
    year: '2003',
    series: 'The Underland Chronicles',
    category: 'Underland Chronicles',
    description:
      'Meet Gregor, a kid from New York City, who falls out of his laundry room into a fantastical subterranean world called the Underland. Accompanied by his toddler sister, Boots, he encounters giant talking creatures-- cockroaches, bats, spiders and rats--and an unusual society of humans. And they’re all expecting him... (Scholastic Press, 2003)',
    publishedBy: 'Published by Scholastic Press',
    badge: [],
    coverTone: 'bg-[#f3d7ae]',
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
  },
  {
    title: 'WHEN CHARLIE MCBUTTON LOST POWER',
    year: '2005',
    series: 'Picture Book',
    category: 'Picture Book',
    description:
      "When a thunderstorm knocks out the electricity, Charlie McButton's whole tech empire comes tumbling down. He needs batteries-FAST. But the only batteries are inside his baby sister's beloved talking doll. Will he resort to desperate measures, and cause his sister to have a meltdown of her own? Or will he snap out of his computer craze long enough to realize sisters can be fun, even without batteries? (Penguin Group, 2005)",
    publishedBy: 'Published by Penguin Group',
    badge: [],
    coverTone: 'bg-[#dfefcf]',
  },
];

const interviewItems = [
  {
    type: 'Written Interview',
    year: '2026',
    title: 'HUNGER GAMES 10TH ANNIVERSARY SCHOLASTIC INTERVIEW',
    description:
      'On the occasion of the tenth anniversary of the publication of The Hunger Games, author Suzanne Collins and publisher David Levithan discussed the evolution of the story, the editorial process, and the first ten years of the life of the trilogy, encompassing both books and films.',
    source: 'Source: Scholastic',
    body: [
      'On the occasion of the tenth anniversary of the publication of The Hunger Games, author Suzanne Collins and publisher David Levithan discussed the evolution of the story, the editorial process, and the first ten years of the life of the trilogy, encompassing both books and films. The following is their written conversation.',
      '',
      'NOTE: The following interview contains a discussion of all three books in The Hunger Games Trilogy, so if you have yet to read Catching Fire and Mockingjay, you may want to read them before reading the full interview.',
      '',
      'David Levithan: Let\'s start at the origin moment for The Hunger Games. You were flipping channels one night . . .',
      '',
      'Suzanne Collins: Yes, I was flipping through the channels one night between reality television programs and actual footage of the Iraq War, when the idea came to me. At the time, I was completing the fifth book in The Underland Chronicles and my brain was shifting to whatever the next project would be. I had been grappling with another story that just couldn\'t get any air under its wings. I knew I wanted to continue to explore writing about just war theory for young audiences. In The Underland Chronicles, I\'d examined the idea of an unjust war developing into a just war because of greed, xenophobia, and long-standing hatreds. For the next series, I wanted a completely new world and a different angle into the just war debate.',
      '',
      'DL: Can you tell me what you mean by "just war theory" and how that applies to the setup of the trilogy?',
      '',
      'SC: Just war theory has evolved over thousands of years in an attempt to define what circumstances give you the moral right to wage war and what is acceptable behavior within that war and its aftermath. The why and how. It helps differentiate between what\'s considered a necessary and an unnecessary war. In The Hunger Games Trilogy, the districts rebel against their own government because of its corruption. The citizens of the districts have no basic human rights, are treated as slave labor, and are subjected to the Hunger Games annually. I believe the majority of today\'s audience would define that as grounds for revolution. They have just cause but the nature of the conflict raises a lot of questions. Do the districts have the authority to wage war? What is their chance of success? How does reemergence of District 13 alter the situation? When we enter the story, Panem is a powder keg and Katniss the spark.',
      '',
      'DL: As with most novelists I know, once you have that origin moment – usually a connection of two elements (in this case, war and entertainment) – the number of connections quickly increases, as different elements of the story take their place. I know another connection you made early on was with mythology, particularly the myth of Theseus. How did that piece come to fit?',
      '',
      'SC: I was such a huge Greek mythology geek as a kid, it\'s impossible for it not to come into play in my storytelling. The connection to the myth of Theseus happened immediately. As a young prince of Athens, he participated in a lottery that required sevens girls and seven boys to be taken to Crete and thrown into a labyrinth to be devoured by the Minotaur. In one version of the myth, this excessively cruel punishment resulted from the Athenians opposing Crete in a war. Sometimes the labyrinth\'s a maze, sometimes it\'s an arena. In my teens I read Mary Renault\'s The King Must Die, in which the labyrinth\'s an arena called the Bull Court. They\'re trained to perform with a wild bull for an audience composed of the elite of Crete who bet on the entertainment. You can see depictions of this in ancient sculpture and vase paintings. In her book, Theseus and his team would dance and handspring over the bull in what\'s called bull-leaping while the elite of Crete bet on them. The show ended when they\'d either exhausted the bull or one of the team had been killed. After I read that book, I could never go back to thinking of the labyrinth as simply a maze, except perhaps ethically. It will always be an arena to me.',
      '',
      'DL: But in this case, you dispensed with the Minotaur, no? Instead, the arena harkens more to gladiator vs. gladiator than to gladiator vs. bull. What influenced this construction?',
      '',
      'SC: A fascination with the gladiator movies of my childhood, particularly Spartacus. Whenever it ran, I\'d be glued to the set. My dad would get out Plutarch\'s Lives and read me passages from "Life of Crassus," since Spartacus, being a slave, didn\'t rate his own book. It\'s about a person who\'s forced to become a gladiator, breaks out of the gladiator school/arena to lead a rebellion, and becomes the face of a war. That\'s the dramatic arc of both the real-life Third Servile War and the fictional Hunger Games Trilogy.',
      '',
      'DL: Can you talk about how war stories influenced you as a young reader, and then later as a writer? How did this knowledge of war stories affect your approach to writing The Hunger Games?',
      '',
      'DL: Another key piece of The Hunger Games is the voice and perspective that Katniss brings to it. I know some novelists start with a character and then find a story through that character, but with The Hunger Games (and correct me if I\'m wrong) I believe you had the idea for the story first, and then Katniss stepped into it. Where did she come from? I\'d love for you to talk about the origin of her name, and also the origin of her very distinctive voice.',
      '',
      'SC: Katniss appeared almost immediately after I had the idea, standing by the bed with that bow and arrow. I\'d spent a lot of time during The Underland Chronicles weighing the attributes of different weapons. I used archers very sparingly because they required light and the Underland has little natural illumination. But a bow and arrow can be handmade, shot from a distance, and weaponized when the story transitions into warfare. She was a born archer. Her name came later, while I was researching survival training and specifically edible plants. In one of my books, I found the arrowhead plant, and the more I read about it, the more it seemed to reflect her. Its Latin name has the same roots as Sagittarius, the archer. The edible tuber roots she could gather, the arrowhead-shaped leaves were her defense, and the little white blossoms kept it in the tradition of flower names, like Rue and Primrose. I looked at the list of alternative names for it. Swamp Potato. Duck Potato. Katniss easily won the day. As to her voice, I hadn\'t intended to write in first person. I thought the book would be in the third person like The Underland Chronicles. Then I sat down to work and the first page poured out in first person, like she was saying, "Step aside, this is my story to tell." So I let her.',
      '',
      'DL: For Peeta . . . why baking?',
      '',
      'SC: Bread crops up a lot in The Hunger Games. It\'s the main food source in the districts, as it was for many people historically. When Peeta throws a starving Katniss bread in the flashback, he\'s keeping her alive long enough to work out a strategy for survival. It seemed in keeping with his character to be a baker, a life giver. But there\'s a dark side to bread, too. When Plutarch Heavensbee references it, he\'s talking about Panem et Circenses, Bread and Circuses, where food and entertainment lull people into relinquishing their political power. Bread can contribute to life or death in the Hunger Games.',
      '',
      'DL: Let\'s talk about the Capitol for a moment—particularly its most powerful resident. I know that every name you give a character is deliberate, so why President Snow?',
      '',
      'SC: Snow because of its coldness and purity. That\'s purity of thought, although most people would consider it pure evil. His methods are monstrous, but in his mind, he\'s all that\'s holding Panem together. His first name, Coriolanus, is a nod to the titular character in Shakespeare\'s play who was based on material from Plutarch\'s Lives. He was known for his anti-populist sentiments, and Snow is definitely not a man of the people. On the surface, she\'s the face of the rebels, he\'s the face of the Capitol. Underneath, things are a lot more complicated. Snow\'s quite old under all that plastic surgery. Without saying too much, he\'s been waiting for Katniss for a long time. She\'s the worthy opponent who will test the strength of his citadel, of his life\'s work. He\'s the embodiment of evil to her, with the power of life and death. They\'re obsessed with each other to the point of being blinded to the larger picture.',
      '',
      'DL: With The Hunger Games, the choice of Games is natural—but the choice of Hunger is much more odd and interesting. So I\'ll ask: Why Hunger Games?',
      '',
      'SC: Because food is a lethal weapon. Withholding food, that is. Just like it is in Boris when the Nazis starve out the people of Leningrad. It\'s a weapon that targets everyone in a war, not just the soldiers in combat, but the civilians, too. In the prologue of Henry V, the Chorus talks about Harry as Mars, the god of war. "And at his heels, Leash\'d in like hounds, should famine, sword, and fire crouch for employment." Famine, sword, and fire are his dogs of war, and famine leads the pack. With a rising global population and environmental issues, I think food could be a significant weapon in the future.',
      '',
      'DL: The cover was another huge effort. We easily had over a hundred different covers comped up before we landed on the iconic one. There were some covers that pictured Katniss—something I can\'t imagine doing now. And there were others that tried to picture scenes. Of course, the answer was in front of us the entire time—the Mockingjay symbol, which the art director Elizabeth Parisi deployed to such amazing effect. What do you think of the impact the cover and the symbol have had? What were your thoughts when you saw this cover?',
      '',
      'SC: Oh, it\'s a brilliant cover, which I should point out I had nothing to do with. I only saw a handful of the many you developed. The one that made it to print is absolutely fantastic; I loved it at first sight. It\'s classy, powerful, and utterly unique to the story. It doesn\'t limit the age of the audience and I think that really contributed to adults feeling comfortable reading it. And then, of course, you followed it up with the wonderful evolution of the mockingjay throughout the series. There\'s something universal about the imagery, the captive bird gaining freedom, which I think is why so many of the foreign publishers chose to use it instead of designing their own. And it translated beautifully to the screen where it still holds as the central symbolic image for the franchise.',
      '',
      'DL: Where do you write? Are you a longhand writer or a laptop writer? Do you listen to music as you write, or go for the monastic, writerly silence?',
      '',
      'SC: I write best at home in a recliner. I used to write longhand, but now it\'s all laptop. Definitely not music, it demands to be listened to. I like quiet, but not silence. You know, I\'m just not very handy. I read a lot about how to build a bow from scratch, but I doubt I could ever make one. I burn my toast half the time. Being good with your hands is a gift. So I do a lot of book research. Sometimes I visit museums or historic sites for inspiration. I was trained in stage combat, particularly sword fighting in drama school; I have a nice collection of swords designed for that, but that was more helpful for The Underland Chronicles. The only time I got to do archery was in gym class in high school.',
      '',
      'DL: While I wish I could say the editorial team (Kate Egan, Jennifer Rees, and myself) were the first ever readers of The Hunger Games, I know this isn\'t true. When you\'re writing a book, who reads it first?',
      '',
      'SC: My husband, Cap, and my literary agent, Rosemary Stimola, have consistently been the books\' first readers. They both have excellent critique skills and give insightful notes. I like to keep the editorial team as much in the dark as possible, so that when they read the first draft it\'s with completely fresh eyes.',
      '',
      'DL: And then there was the question of the title. The original title of the first book was The Tribute of District Twelve. You wanted to change it to The Hunger Games, which was my name for the series. I said, "Okay, but I\'m not thinking of another name for the series!" But you were right, The Hunger Games was a much better name for the book. Catching Fire was originally called The Ripple Effect and I wanted to change that one, because it was too watery for a Girl on Fire, so we came up with Catching Fire. Thank goodness you were there; you have far better taste in titles.',
      '',
      'DL: One of the strange things for me about having a novel adapted is knowing that the actors involved will become, in many people\'s minds, the faces and bodies of the characters. Do you picture your characters as you\'re writing them? If so, how close did Jennifer Lawrence come to the Katniss in your head? And now when you think about Katniss, do you see Jennifer or do you still see what you imagined before?',
      '',
      'SC: I definitely do picture the characters when I\'m writing them. The actress who looks exactly like my book Katniss doesn\'t exist. Jennifer looked close enough and felt very right, which is more important. She gives an amazing performance. When I think of the books, I still think of my initial image of Katniss. When I think of the movies, I think of Jen. Those images aren\'t at war any more than the books are with the films. Because they\'re faithful adaptations, the story becomes the primary thing. Some people will never read a book, but they might see the same story in a movie. When it works well, the two entities support and enrich each other.',
      '',
      'DL: All of the actors did such a fantastic job with your characters (truly). Are there any in particular that have stayed with you?',
      '',
      'SC: A writer friend of mine once said, "Your cast—they\'re like a basket of diamonds." That\'s how I think of them. I feel fortunate to have had such a talented team--directors, producers, screenwriters, performers, designers, editors, marketing, publicity, everybody—to make the journey with. And I\'m so grateful for the readers and viewers who invested in The Hunger Games. Stories are made to be shared.',
      '',
      'DL: We\'re talking on the occasion of the tenth anniversary of The Hunger Games. Looking back at the past ten years, what have some of the highlights been?',
      '',
      'SC: The response from the readers, especially the young audience for which it was written. Seeing beautiful and faithful adaptations reach the screen. Occasionally hearing it make its way into public discourse on politics or social issues. The Hunger Games Trilogy has been an international bestseller. Possibly because the themes are universal. War is a magnet for difficult issues. In The Hunger Games, you have vast inequality of wealth, destruction of the planet, political struggles, war as a media event, human rights abuses, propaganda, and a whole lot of other elements that affect human beings wherever they live. I think the story might tap into the anxiety a lot of people feel about the future right now.',
      '',
      'DL: As we celebrate the past ten years and look forward to many decades to come for this trilogy, I\'d love for us to end where we should—with the millions of readers who\'ve embraced these books. What words would you like to leave them with?',
      '',
      'SC: Thank you for joining Katniss on her journey. And may the odds be ever in your favor.',
    ],
  },
  {
    type: 'Written Interview',
    year: '2020',
    title: 'THE BALLAD OF SONGBIRDS AND SNAKES SCHOLASTIC INTERVIEW',
    description:
      'On the eve of the publication of The Ballad of Songbirds and Snakes, author Suzanne Collins spoke to David Levithan, her publisher and one of her editors, about the making of the book.',
    source: 'Source: SCHOLASTIC',
    body: [
      'On the eve of the publication of The Ballad of Songbirds and Snakes, author Suzanne Collins spoke to David Levithan, her publisher and one of her editors, about the making of the book.',
      '',
      'DL: One of the first things you said to me about this book was that I\'d better brush up on my Hobbes, Locke, and Rousseau to best understand what you were doing with it. That feels like a great springboard for this conversation, since I know these philosophers and their conflicting constructions of human nature were key to what you wanted to explore. Did the novel start with these questions, and then find its story, or vice-versa?',
      '',
      'SC: This novel began in a philosophical swamp that my brain swam around in until the narrative came to me. With the two series, The Underland Chronicles and The Hunger Games Trilogy, my goal was to tell stories for young audiences that examined aspects of just war theory. If you focus on that topic long enough, you naturally arrive at the question of human nature and why we tend towards conflict.',
      '',
      'I\'ll do my best to boil down some complex ideas here, but they all bear far more discussion. The state of nature debate of the Enlightenment thinkers--Hobbes, Locke, and Rousseau--addresses the human condition before we had societies or political associations. Your opinion on who we were in the state of nature defines the form of government you think we need.',
      '',
      'During my work on the two series, I kept running into Thomas Hobbes, author of Leviathan, and his war "of every man, against every man." He wrote that in the state of nature life was "solitary, poore, nasty, brutish, and short" and that we require a common power, a sovereign or absolute political authority, to rule us. In return for protection, we agree to give our obedience.',
      '',
      'John Locke had a gentler view of humanity. He wrote that "men living together according to reason . . . is properly the state of nature. But force . . . upon the person of another . . . is the state of war." He\'s very big on reason, which "teaches all mankind, who will but consult it, that being all equal and independent, no one ought to harm another in his life, health, liberty, or possessions. . . ."',
      '',
      'DL: That sounds very familiar. . . .',
      '',
      'SC: Yes, much of it was used by Thomas Jefferson in the Declaration of Independence less than a century later. "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness." Locke believed in limited government. The government was there to protect the rights of the people, and if it failed to do so, they could put another in its place.',
      '',
      'DL: And Rousseau?',
      '',
      'SC: Jean-Jacques Rousseau thought that human beings in the state of nature were motivated by amour de soi, a naturally good form of self-love or self-preservation. When we entered society, amour de soi evolved into amour-propre, a destructive form of self-love that depends on the approval of other people and is associated with vanity, contempt, shame, and envy. Rousseau wrote about the rule of "the general will" or the will of the people as a whole. In The Social Contract, he says, "Each of us puts his person and all his power in common under the supreme direction of the general will; and in our corporate capacity, we receive each member as an indivisible part of the whole." His thinking influenced the French Revolution, socialism and a wide range of political theory.',
      '',
      'DL: And how do you see the Hobbes, Locke, and Rousseau positions on human nature in relation to your characters?',
      '',
      'SC: The principle characters in Ballad embrace elements of the different philosophers\' arguments and carry them into Panem. Volumnia Gaul passes Hobbes\'s basic worldview on to Coriolanus. Sejanus fights the good fight for Locke, as does Lucy Gray, who picks up the mantle for Romanticism as well. Rousseau is lightly sprinkled over the Covey, usually by way of his influence on the Romanticists, as he was an early one himself.',
      '',
      'DL: Why is the state of nature debate timely?',
      '',
      'SC: Here in the United States, we spend a great deal of time attacking each other for our liberal or conservative views, left or right, blue or red. But I think we\'ve lost sight of a deeper issue, which is about democratic versus authoritarian rule, and what it requires to sustain a democracy.',
      '',
      'DL: Another influence on the book is Wordsworth, whose "Lucy Gray" influences both your character of that name and one of the ballads she sings. Did you know from the start that the poem would be the basis for her ballad, or was that something that came after the story was set in motion?',
      '',
      'SC: Romanticism emerged in the late 18th century and celebrates individualism, emotion, nature, free expression, and the form of nationalism embodied by the Covey. Wordsworth was a key figure in the movement with his Lyrical Ballads, where he describes poetry as "the spontaneous overflow of powerful feelings." When I read his "Lucy Gray" poem, I thought, That\'s it. That\'s my girl\'s ballad.',
      '',
      'The character was already fairly well developed, but with a different name. I had to find her name the way I had to find Katniss\'s. I was drawn to the poem by the mystery of Lucy Gray\'s fate. Being able to echo that in the novel seemed perfect, leaving the reader to wonder, leaving a question that I can address if I decide to fill out more of the world of Panem. Also, the name Lucy Gray seemed designed for the Covey, with the built-in color. I liked the idea that the Covey, as lovers of nature, would honor all colors, not just the flashy ones. Taupe and ivory and gray like a winter day. Then there\'s the ambiguity of the color gray. I don\'t think that was an accident on Wordsworth\'s part. And the obliteration by snow. And the easy adaptation to a song. It met so many needs.',
      '',
      'DL: And what happens when Coriolanus\'s Hobbesian worldview encounters Romanticism?',
      '',
      'SC: They\'re like oil and water; they don\'t mix well. Ultimately, Romanticism is a factor in bringing down Coriolanus and the Hunger Games. Katniss does it with the help of Lucy Gray\'s music. Conversely, the katniss plant lends a hand to Lucy Gray in a time of need.',
      '',
      'DL: Jumping from the derivation of Lucy Gray\'s name to the derivation of Coriolanus\'s . . . as you note in the acknowledgments, one of the serendipities that occurred during the writing and editing of this book was that it happened to coincide with the first Shakespeare in the Park production of Coriolanus in decades. In the trilogy, particularly when it comes to Snow\'s finale, the connections to Shakespeare\'s Coriolanus are clear. What do you see as the points of connection between eighteen-year-old Coriolanus and the leader in Shakespeare\'s play?',
      '',
      'SC: Shakespeare\'s Coriolanus owes a great debt to "The Life of Coriolanus" in Plutarch\'s Lives. Like the protagonist in the play, he had anti-populist views. Here Plutarch describes Coriolanus\'s reaction to a dispute over grain distribution in the senate. (Coriolanus is referred to by the name given to him at birth, Caius Marcius.) "But Marcius rose in his place and vehemently attacked those who favored the multitude, calling them demagogues and betrayers of the aristocracy, and declaring that they were nourishing, to their own harm, the evil seeds of boldness and insolence which had been sown among the rabble; these they should have choked when they first sprang up, and not have strengthened the people by such a powerful magistracy as the tribunate."',
      '',
      'Shakespeare makes his Coriolanus\'s loathing clear from his entrance, where he greets the citizens with: "What\'s the matter, you dissentious rogues, / That, rubbing the poor itch of your opinion, / Make yourselves scabs?" He follows that up with a whole string of insults, driving home his contempt for them.',
      '',
      'This anti-populist position would be the key character trait to carry over to the book. Young Coriolanus\'s sense of superiority to the district citizens of Panem is absolute. He believes them to be almost subhuman, barbaric, and goes to great lengths to separate Lucy Gray from them when he begins to fall for her. Exposure to the districts only reinforces his position. And while he recognizes their advantages, he doesn\'t have a particularly high opinion of his neighbors in the Capitol either. Ultimately, he embraces the Hobbesian worldview that humanity needs an absolute authority to rule at the expense of personal freedom.',
      '',
      'DL: And, for better or worse, each Coriolanus has the counsel of a Volumnia. . . .',
      '',
      'SC: In the play, Coriolanus is influenced by his mother, Volumnia. In Ballad, Coriolanus\'s philosophical mother is Volumnia Gaul, not the gentle mother who dies when he\'s five. She educates him and is clearly a fan of Hobbes\' state of nature philosophy. Both Coriolanuses come from the upper class, lose their fathers at a young age, serve in the military, and live in the Rome of their worlds. But they\'re not meant to be identical; in fact, in some ways they\'re polar opposites. For instance, Coriolanus of the play thrives in war, but Ballad Coriolanus struggles to find its appeal. In this, he\'s much more like Hobbes, who developed his ideas having lived through the English Civil War.',
      '',
      'DL: The one epigraph that surprised me, because we hadn\'t discussed her influence or her thinking, was the one from Mary Shelley. Although in her most famous novel, she was also investigating the boundaries and inclinations of human nature. How does her influence or her treatment of the themes apply to Ballad?',
      '',
      'SC: Mary Shelley embodies the ideas of Romanticism but incorporates Locke and Rousseau\'s earlier ones as well, which makes her most representative of Lucy Gray and the Covey. Look at the quote from Frankenstein: "I thought of the promise of virtues which he had displayed on the opening of his existence and the subsequent blight of all kindly feeling by the loathing and scorn which his protectors had manifested towards him." When I read it, I\'m reminded of Locke\'s tabula rasa, or blank slate, theory, in which all we know comes from experience, as well as of Rousseau\'s state-of-nature human beings, who were capable of pity and compassion. She seems to be saying that naturally good creatures exposed to an abusive world result in monsters. You can apply that to Frankenstein, Coriolanus, or anyone you choose.',
      '',
      'DL: Did you always plan to return to Panem after the trilogy with a book set sixty-four years earlier? And if not, what made you return to the story in this way?',
      '',
      'SC: Here\'s how it works now. I have two worlds, the Underland and Panem. I use both of them to explore elements of just war theory. When I find a related topic that I want to examine, then I look for the place it best fits. The state of nature debate of the Enlightenment period naturally lent itself to a story centered on Coriolanus Snow. Focusing on the 10th Hunger Games also gave me the opportunity to tell Lucy Gray\'s story. In the first chapter of The Hunger Games, I make reference to a fourth District 12 victor. Katniss doesn\'t seem to know anything about the person worth mentioning. While her story isn\'t well-known, Lucy Gray lives on in a significant way through her music, helping to bring down Snow in the trilogy. Imagine his reaction when Katniss starts singing "Deep in the Meadow" to Rue in the arena. Beyond that, Lucy Gray\'s legacy is that she introduced entertainment to the Hunger Games.',
      '',
      'DL: I have to ask—when you wrote that reference in the first book, did you have any sense of who that fourth victor might be?',
      '',
      'SC: Yes, but she\'s evolved a lot since then.',
      '',
      'DL: What was it like to rewind the world you\'d built by sixty-four years? What were some of the touchstones you used to understand what this version of Panem would be?',
      '',
      'SC: I really enjoyed going back in time to an earlier version of Panem and visiting the reconstruction period that followed the Dark Days. I thought a lot about the period after the Civil War here in the United States and also the post–World War II era in Europe. People trying to rebuild, to live their daily lives in the midst of the rubble. The challenges of food shortages, damaged infrastructure, confusion over how to proceed in peacetime. The relief that the war has ended coupled with the bitterness toward the wartime enemy. The need to place blame.',
      '',
      'DL: What about the early Hunger Games?',
      '',
      'SC: Even as the victor in the war, the Capitol wouldn\'t have had the time or resources for anything elaborate. They had to rebuild their city and the industries in the districts, so the arena really is an old sports arena. They just threw in the kids and the weapons and turned on the cameras. The 10th Hunger Games is where it all blows wide open, both figuratively and literally.',
      '',
      'DL: What was it like to have to dial back a character you created in his late maturity and then to rethink him as an eighteen-year-old?',
      '',
      'SC: Well, I\'m back to Wordsworth, who wrote, "The child is the father of the man." The groundwork for the aging President Snow of the trilogy was laid in childhood. Then there\'s Locke, who\'s all over this book, with his theory of tabula rasa, or blank slate, in which we\'re all products of our experiences. Snow\'s authoritarian convictions grew out of the experiences of his childhood, as did his complicated relationships with mockingjays, food, the Hunger Games, District 12, District 13, and women. So, you rewind and plant the seeds. But given all that, you still need to leave room for Snow\'s personality. Is he a product of nature or nurture? Everyone of his generation experienced trauma, loss, and deprivation. And yet Sejanus, Tigris, Lucy Gray, and Lysistrata turned out very differently. For whatever reason, Snow has a very controlling personality. Then he experiences one of the most out-of-control emotions, falling in love. It turns out to be a bad combination.',
      '',
      'DL: I\'ll confess it was hard for me to get Donald Sutherland out of my head (because he\'s a masterful Snow). How is he different from how you pictured Snow in the books?',
      '',
      'SC: I agree, he is a masterful Snow! He\'s such a talented actor; I could watch him in anything, really. Physically, Donald\'s bigger than Snow in the novels, but his interpretation of the character is dead-on. In one interview, he talked about how he didn\'t think of Snow as a villain but as a tyrant. He said, "And he doesn\'t think he\'s a bad person. He thinks it\'s the only way that society can survive. And whether you think he\'s right or wrong, he doesn\'t think he\'s bad. He likes himself." That\'s exactly right. With his Hobbesian worldview, Coriolanus Snow believes he\'s all that\'s keeping Panem from chaos and destruction. With that grasp of the character and that snow-white mane and that remarkable voice, it\'s hard to imagine anyone being better as the trilogy\'s president.',
      '',
      'DL: One of the things that struck me the most when I read the opening of Ballad for the first time was your decision to shift from first person to close third person. What was it about this particular story or character that made you decide to write in third person?',
      '',
      'SC: The first series I did, The Underland Chronicles, was in close third person. You basically ride through five books on Gregor\'s shoulder, and you\'re privy to his thoughts. When I sat down to write The Hunger Games, I intended to use the same point of view, but Katniss insisted on telling the story in first person. For Coriolanus, it seemed natural to step back a bit again. It\'s enough to know his thoughts, I think, without being entirely in his head.',
      '',
      'DL: Of all the authors I work with, you are one of the firmest believers in structure. Three parts, ten chapters each. Where did this structure come from?',
      '',
      'SC: The first eight novels I did were three parts, nine chapters each. For this new one, I needed that extra chapter in each part, possibly because it\'s a stand-alone and I couldn\'t use the following book to fill out the story. It all had to be contained between the covers. The structure is based on a three-act dramatic structure. I use elements that I learned in both playwriting and screenwriting.',
      '',
      'DL: I know, down to the very title of The Ballad of Songbirds and Snakes, that music was a huge influence when it came to writing this book. So I will start with the most basic question: How do you see this book as a ballad?',
      '',
      'SC: A ballad is a song or poem that tells a story. This is a story about humans and the Enlightenment state of nature debate largely between Hobbes and Locke. The melody is provided by the titular creatures, the songbirds and the snakes. At first glance, the songbirds are the Lockeans and the snakes are the Hobbesians, but it\'s never that simple. We\'re all mixed up in this big stew of feathers and scales. I took great care to show the overlap and the mutual attraction between the two. Lucy Gray, the lead songbird, has an affinity for mockingjays and snakes alike. Coriolanus, a budding Hobbesian, has a fascination with both Lucy Gray and jabberjays.',
      '',
      'DL: There are a number of original songs within the book, as well as adaptations and variations of some centuries-old poems and ballads. Can you talk a little about these?',
      '',
      'SC: Ballads are often kept alive by an oral tradition, passed down from generation to generation, and I wanted the Covey to be caretakers of that tradition. You see it immediately in their names, which are drawn from old ballads, many with English and Scottish roots. For instance, Tam Amber is from "Tam Lin," Clerk Carmine is from "Clerk Saunders," Barb Azure is from "Barbara Allen," Maude Ivory is from Christina Rossetti\'s "Maude Clare," and Lucy Gray is from William Wordsworth\'s "Lucy Gray."',
      '',
      'DL: Can you tell me about "The Ballad of Lucy Gray Baird"? The lyrics are original, but I know you were inspired by another traditional piece.',
      '',
      'SC: Yes, one that has roots in a ballad from the 1700s called "The Unfortunate Rake." Through the years, it evolved both in music and lyric to songs we know today, like "Streets of Laredo." I took that story tradition and used it for Lucy Gray. She thinks her hours are numbered, and her questionable choice is loving Billy Taupe, which has indeed led to her being chosen for the Hunger Games. It departs from the standard story in that it focuses on a bad romance, but she admits to plenty of bad behavior as well.',
      '',
      'DL: "The Hanging Tree" provides one of the most interesting through lines between this book and the trilogy—it\'s very moving to see the origin of a song that plays such a memorable role in Katniss\'s story. What was it like to return to something you knew so well and to give it a concrete history?',
      '',
      'SC: It was great to have an opportunity to tell the origin story, which wasn\'t possible in the trilogy, and to bridge the two time periods. In the book Mockingjay, it appears in an intimate moment. Peeta, who\'s been tortured to madness with the tracker jacker serum, recalls Katniss\'s father singing it. It\'s a memory untouched by the serum and the first connection that doesn\'t trigger a mental meltdown. Either way, it\'s a gift from Lucy Gray to Katniss. The origin story we see in Ballad explains the puzzle of the lyrics, how the dead man calls out for his love to flee the gallows. That requires the jabberjays, who father the mockingjays.',
      '',
      'DL: And there\'s one other song from the trilogy. . . .',
      '',
      'SC: "Deep in the Meadow," which is the lullaby Katniss sings to Rue as she dies in The Hunger Games. The two pairs of girls are meant to mirror each other. Both renditions take place in the woods, but Katniss and Rue are in the arena, while Lucy Gray and Maude Ivory are by the lake. In the song, nature will protect you. "Here it\'s safe, here it\'s warm. Here the daisies guard you from every harm." And the mockingjays pick it up in both the arena and the woods. They\'re protective, too.',
      '',
      'DL: Do you listen to music as you write, or do you need silence?',
      '',
      'SC: Silence. Or rather, quiet. The usual murmur of the house is fine. Music is so lively in my brain that I have to stop to listen to it. Especially if it has words.',
    ],
  },
  {
    type: 'Written Interview',
    year: '2024',
    title: 'SUNRISE ON THE REAPING SCHOLASTIC INTERVIEW',
    description:
      'Prior to the release of Sunrise on the Reaping, Suzanne Collins spoke to David Levithan about the making of the book.',
    source: 'Source: SCHOLASTIC',
    body: [
      'Prior to the release of Sunrise on the Reaping, Suzanne Collins spoke to David Levithan, SVP, Publisher and Editorial Director at Scholastic, also one of her editors.',
      '',
      'Please note: This conversation is best read after you\'ve finished the novel, since it does contain spoilers.',
      '',
      'David Levithan: Instead of starting with Haymitch, I\'d like to start with the eighteenth century Scottish philosopher David Hume. Can you talk about how you first encountered his writings?',
      '',
      'Suzanne Collins: My dad introduced me to David Hume when I was a child, along with many other philosophers. He talked about them while using more kid-friendly examples. Like, in Hume\'s case, sunrises and billiard balls. It was a little mind-bending but always interesting.',
      '',
      'DL: As signaled in the quotes at the start, in Sunrise on the Reaping you\'re examining two particular aspects of Hume\'s philosophy. The first involves the distinction between inductive and deductive reasoning. It\'s at the heart of the initial disagreement we see between Haymitch and Lenore Dove and resonates within the title of the book. Can you talk a little about why you chose to title the book Sunrise on the Reaping, and why what might seem to some to be an absurd question — Is the sun guaranteed to rise tomorrow morning? — actually leads to some of the greater themes of the book.',
      '',
      'SC: Let\'s start with the difference between deductive and inductive reasoning. Deductive reasoning is top-down logic. It works from the general to the specific. Like, "All human beings need oxygen to survive. I am a human being. I need oxygen to survive." If your premise is true, then your conclusion is correct.',
      '',
      'But inductive reason goes from the specific to the general. "My cat Zorro loves yogurt. Your cat Fluffy loves yogurt. Therefore, all cats love yogurt." But do they? Your conclusion might be considered probable if you witnessed a bunch of other cats loving yogurt, but it\'s not a certainty.',
      '',
      'So, is the sun guaranteed to rise tomorrow morning? David Hume would say no. If you say yes, you\'re using faulty inductive reasoning. Just because the sun rose yesterday and it rose this morning, there\'s no guarantee it will rise tomorrow. You can\'t rely on something happening in the future just because it happened in the past. That\'s an assumption. You\'re assuming the future will act like the past. The sun could rise . . . or an infinite number of other things could happen. You can say you feel it\'s highly probable that it will rise tomorrow based on your observations, but that\'s as certain as you can get. (Of course, as Haymitch points out about using inductive reasoning, this is kind of how we plan out our lives.)',
      '',
      'Lenore Dove applies the sunrise idea to Haymitch\'s certainty that the reaping will always occur on his birthday because it always has in the past. But, in fact, the reaping\'s only been around for fifty years. And even if it\'d been around for a million years, it still wouldn\'t be a done deal. She wants him to recognize that and accept that the reaping isn\'t inevitable. Because if he believes it\'s inevitable, he will never think it can be ended, let alone think that he might be capable of ending it himself.',
      '',
      'That\'s where the title came from. Sunrise on the Reaping. Lenore Dove\'s convinced it\'s not a certainty. She can imagine a world without it. The future can be different than the past. She makes Haymitch promise that he will fight to make sure there is never another sunrise on the reaping. It becomes his dramatic goal, his mission, and his reason for living. But it takes many years to achieve.',
      '',
      'DL: This of course ties into a second observation of Hume\'s regarding implicit submission.',
      '',
      'SC: If all people do is read this Hume quote and discuss it, this book has been a win for me. "Nothing appears more surprising to those, who consider human affairs with a philosophical eye, than the easiness with which the many are governed by the few; and the implicit submission, with which men resign their own sentiments and passions to those of their rulers. When we enquire by what means this wonder is effected, we shall find, that, as Force is always on the side of the governed, the governors have nothing to support them but opinion. It is therefore, on opinion only that government is founded; and this maxim extends to the most despotic and most military governments, as well as to the most free and most popular."',
      '',
      'This quote invites so many questions. Like, "Do you think Hume is right? As human beings, do we ultimately end up being governed by a few people? Not just in, say, a totalitarian state, but in a democracy?" (After thinking about it, every single person I asked about this said yes. No one seemed happy about it.) "But why have we resigned our own sentiments and passions to those rulers? Why are we implicitly submitting to this? Especially since force is on our side, as the governed." Hume answers that for us. We\'re allowing ourselves to be controlled by "opinion." And that\'s where propaganda comes in. All right, then, "What propaganda do we all consume on a daily basis that maintains this status quo? Is it harder to maintain in an autocracy or a democracy where we pride ourselves on our intellectual or political freedom? How much propaganda does it take to make you think that implicit submission is what you want? Is it inevitable? Is there a way to protect ourselves against it? What would that entail?"',
      '',
      'DL: How does implicit submission manifest in Sunrise on the Reaping?',
      '',
      'SC: Within the story, I\'m attempting to have implicit submission play out on three levels: individual, Hunger Games, and national. First, there\'s Haymitch\'s personal dramatic arc. Will he defy his own implicit submission to the Capitol and stop that reaping? The second level plays out during the actual Hunger Games. By refusing to demonstrate implicit submission, will Ampert\'s alliance against the Careers upend the usual results in the arena, allowing a Newcomer to win? Finally, there\'s the nation of Panem, in which not just the districts but the entire country has ceded power to a dictator and his cronies.',
      '',
      'At the end of Mockingjay, Panem\'s in the process of forming a republic. Will that ultimately result in the majority resigning their own sentiments and passions to a handful of rulers? I think life should be better under Paylor than it was under Snow. But I\'m sure Snow would say that\'s the real propaganda and that his rule is more beneficial for the governed. Either way, as a species, are we satisfied with those choices, or have we just never come up with a better alternative?',
      '',
      'DL: Switching now to Orwell and Blake and the issue of truth, lies, and propaganda. One of the overarching themes of The Hunger Games Series has been the use of propaganda to achieve and maintain power. In The Ballad of Songbirds and Snakes, we see the propaganda war at a very early stage, while in the trilogy we see it at its peak. How would you describe the use of propaganda within Sunrise?',
      '',
      'SC: Well, as Plutarch says, the Hunger Games are the best propaganda the Capitol has. For Snow, it\'s the annual Hobbesian reminder of who human beings are in the state of nature and why an authoritarian government is necessary for the survival of the species. They\'ve devised this event in which district citizens kill one another — that way, the Capitol citizens don\'t directly bloody their hands and the districts are at war. The participants are children, which reinforces the idea that even the most innocent of us are brutal. And it\'s mandatory viewing.',
      '',
      'In Ballad, the losses and hatreds of the war were fresh and so the propaganda didn\'t need to be so heavy-handed. In Sunrise, forty years have passed. A lot of people weren\'t even alive during the war. Yet every year the entire country is forced to witness this excessively cruel punishment. By the second Quarter Quell, it\'s a lot more work to keep opinion on the Capitol\'s side. Now the strategy is to serve up a spectacular Hunger Games while exploiting people\'s fears with the "No Peace" campaign in order to justify the Capitol\'s existence.',
      '',
      'DL: What are the propaganda techniques that most come into play?',
      '',
      'SC: They saturate the story, but here are a few examples: Card-stacking (Plutarch\'s edited District 12 reaping), Fear (the "No Peace" campaign), Transfer (that endlessly waving flag). Whatever it takes to persuade people that the Capitol should control them. As Hume said, "It is therefore, on opinion only that government is founded."',
      '',
      'DL: Another clear influence on the book is Poe. How did you land on "The Raven"?',
      '',
      'SC: Haymitch\'s love needed a name. Since she\'s Covey, that starts with a ballad. I knew she\'d died young, as Haymitch mentions this in Mockingjay. So, love of his life + her early death + his relentless grief = Edgar Allan Poe. I\'m right back at the Romantic poets again. Even then, I\'ve got several poems to choose from — "Annabel Lee", "Ulalume", "Lenore", "To One in Paradise" —but I couldn\'t resist "The Raven".',
      '',
      'For one thing, that rhythm and language just pull you right in, and I believed Haymitch could commit it to memory, especially since it was set to music in the story. Then, of course, the Covey love their birds. The raven\'s the largest songbird. It can mimic human speech. The raven in the poem\'s like a jabberjay who recorded one word, "Nevermore," and plays it over and over. Most importantly, there\'s the tormented lover imprisoned in the chamber of grief with the bird forever casting its shadow on him. That\'s Haymitch. So desperate to forget, to drown himself in nepenthe. But he doesn\'t really want to forget his Lenore, and he never really lost her. It takes helping Katniss stop the sun from rising on the reaping to make him realize that.',
      '',
      'DL: After writing in Coriolanus\'s voice for Ballad, it must have felt like quite a change to slip into Haymitch\'s point of view. Can you talk about what it was like to be wearing his voice and how that shaped the book as a whole?',
      '',
      'SC: After traveling with Coriolanus, who is endlessly manipulative and controlling, it was a relief to wear both Haymitch\'s voice and character. He has a much greater capacity for hope and love and joy. More than Coriolanus — or Katniss, for that matter. His voice is Seam overlaid with Lenore Dove\'s Covey influence. There\'s far more color to his expression, more humor. Sadly, at the end of the book you see his concentrated effort to strip all that away, so by the time you reach the trilogy, his language has lost the musicality of his youth. A combination of his desperation to forget combined with years of Capitol TV erase it. I like to think in his remaining years after the war, he reclaims it. You can hear it coming back in the epilogue.',
      '',
      'DL: It is a particular challenge to start a novel when you and most of its future readers already know its ending.',
      '',
      'SC: It\'s another way to approach a story, but it has its advantages. If you look at Shakespeare\'s Romeo and Juliet, we learn in the prologue that the lovers will die. So you\'re really not focused on what\'s going to happen, but on how or why it happens. In the same way, you know Haymitch becomes a victor and Snow kills his loved ones, but you don\'t know the events that lead to these ends. How? Why? Where? What? Who? You have to read the book to find out.',
      '',
      'DL: In some of our initial conversations about the book, we talked about whether it would be written in the voice of the older Haymitch looking back or the younger Haymitch processing it as he experienced it. What led you to decide to take the approach you ultimately did?',
      '',
      'SC: I played around with it both ways, but I found that younger Haymitch speaks directly to the YA audience the best. An older person reflecting back on their youth or shifting into a child\'s perspective is harder to pull off. Good work, Harper Lee!',
      '',
      'DL: How do you feel spending so much time in younger Haymitch\'s shoes has changed your understanding of the Haymitch we see in the trilogy?',
      '',
      'SC: I don\'t think it changed my understanding of him — Haymitch is still Haymitch — but it gave me room to explore his earlier journey. Like his relationship to Katniss via Burdock. What it meant to take on his best friend\'s child and see her through the war and become her surrogate father. It was nice to have some time with that angle.',
      '',
      'DL: Like the other Hunger Games books, there is a clear three-part structure in place here, with each part getting the same number of chapters. How does this structure help you shape the story?',
      '',
      'SC: I began as a playwright over forty years ago, and that dramatic structure became the template for the novels. Since I\'ve worked with it for decades, it\'s almost second nature, and that allows me to spend my energy elsewhere. This is the tenth book I\'ve used this structure for, so I know certain things I want to achieve by certain points in the story. If I haven\'t achieved them, something isn\'t working the way I hoped, and I probably need to pause and figure out why.',
    ],
  },
  {
    type: 'Written Interview',
    year: '2007',
    title: 'UNDERLAND CHRONICLES SCHOLASTIC INTERVIEW',
    description:
      'A conversation with Suzanne Collins about the completion of The Underland Chronicles and the war story at the heart of Gregor\'s journey.',
    source: 'Source: Scholastic',
    body: [
      'At the completion of The Underland Chronicles, Jen Rees at Scholastic Press discussed the series with Suzanne Collins.',
      '',
      'Jen Rees: Of all the places Gregor could have traveled to, why the Underland?',
      '',
      'Suzanne Collins: I liked the fact that this world was teeming under New York City and nobody was aware of it. That you could be going along preoccupied with your own problems and then whoosh! You take a wrong turn in your laundry room and suddenly a giant cockroach is right in your face. No magic, no space or time travel, there\'s just a ticket to another world behind your clothes dryer.',
      '',
      'JR: Is there anything you find/found difficult or challenging in writing from the perspective of an 11-year-old boy?',
      '',
      'SC: I remember being eleven very clearly and I had a lot of friends who were boys so it felt pretty natural being in Gregor\'s head.',
      '',
      'JR: Are you anything like Gregor?',
      '',
      'SC: I think I\'m like Gregor because we both want to do the right thing but sometimes have trouble figuring out what it is. Also, neither of us likes to ride roller coasters and we\'ve both changed a lot of diapers. But Gregor is much braver than I am…if I even see a regular sized rat in New York City I immediately cross the street.',
      '',
      'JR: What kinds of things did you enjoy doing when you were 11?',
      '',
      'SC: Gymnastics, like Luxa. Reading. Running around in the woods with my friends.',
      '',
      'JR: Many people think bats, rats, cockroaches, and spiders are creepy! Did you have to get over your fear of any (or all!) of them to write this story?',
      '',
      'SC: I wish I could say that after I researched the creepy animals I was no longer at all afraid of them…but that would be a big fib! Cockroaches aren\'t really scary, just a little germy, so I don\'t mind them much. I love bats…except these really loud ones that get in my attic in the summer and hold some kind of party all night long. Spiders still scare me some, although I\'m also fascinated by them and I can happily watch them from a distance. But rats…not pet rats but the wild kind…I will always have what I consider to be a healthy fear of rats. You should, too.',
      '',
      'JR: Are you kinder to cockroaches, bats, rats, and/or spiders nowadays?',
      '',
      'SC: I don\'t think I was ever particularly unkind to them…but I do have more of a connection with them now. I\'m more aware of their similarities to humans. And I\'m sympathetic to their desire to survive, which all creatures share.',
      '',
      'JR: Did you have a sibling who, like Boots, got you into a world of trouble?',
      '',
      'SC: I have two older sisters and one older brother and hold them largely responsible for the trouble I got into growing up. I believe as the youngest child, that is my right.',
      '',
      'JR: Have you ever lived in New York City?',
      '',
      'SC: I lived in New York City for 16 years, from 1987 to 2003. But when I was growing up we moved all the time because my dad was in the Air Force. We were mostly on the eastern half of the U.S. and in Europe but, like Gregor, I definitely know what it feels like to be a stranger somewhere.',
      '',
      'JR: If you had to go to the Underland, what items would you take along with you?',
      '',
      'SC: I\'d take all the flashlights and batteries I could find. I\'d also take a couple of bottles of water and chocolate, because I don\'t like traveling without either of these things. I would wear very comfortable clothes and sneakers…in case I had to run.',
      '',
      'JR: And who would you take with you?',
      '',
      'SC: My husband, Cap, would be great to have in the Underland, since he is very good in an emergency, but I\'d want him to be with our kids up in the Overland so I\'d know they were in safe hands. (Note: Cap says he would not take me to the Underland because I am not good in an emergency and I would constantly make him stop and ask for directions. Both of these things are true.) So I think I would take my good friend Christopher Santos with me, because he is very diplomatic and travels a lot and he seems at ease in foreign places. Also, he would never make loud, mean remarks about the creatures which could get a person in all kinds of trouble. In the Underland, I would make it my first order of business to hook up with a couple of bats because, let\'s face it, without a bat you\'re probably going to end up as someone\'s lunch.',
      '',
      'JR: Have you ever been lost and wanted to find your way home?',
      '',
      'SC: All the time. I have a terrible sense of direction. I get lost practically every time I leave my house. Fortunately, people are usually very kind about giving you directions if you ask politely.',
      '',
      'JR: Do you think you were destined to be a writer? (or is there some free will involved?!)',
      '',
      'SC: I…have no idea how to answer this. I would have to go to a cave and meditate on it or something, and then I probably still wouldn\'t know.',
      '',
      'JR: If you could invite one of the characters to have dinner with your family, who would it be? What might you cook for them?! What questions would you ask them?',
      '',
      'SC: I would invite Ripred to dinner because I think he would tell the most interesting stories. We would have to serve shrimp in cream sauce because this is his favorite dish of all. Just to irritate him, I would tell him he has to use a napkin—or he won\'t get dessert. He would use the napkin, because dessert would be a fabulous chocolate cake and he loves food, but I bet he would glare at me the whole time. I would ask all kinds of questions about being a rat, and living alone in the Dead Land, and about his family. Ripred sometimes sneaks up to the Overland, so I would ask him his opinion of New York City, too. After dinner, we\'d play Scrabble.',
      '',
      'JR: All fun aside for a moment, Gregor is also about war and battling forces and survival. Can you tell us a little bit about this?"',
      '',
      'SC: Gregor falls into a fantastical world, but he\'s really acting out the main role in a war story. Almost as soon as he arrives in the Underland, he\'s recognized as the "warrior" of the prophecies and he\'s called upon to undertake what are essentially a series of military missions. For instance, in Book I he goes into enemy territory to rescue a prisoner of war who also happens to be his dad. It\'s never described as such, but that\'s what\'s really happening.',
      '',
      'As the series continues, Gregor is faced with increasingly difficult quests and choices as the Underland breaks into a massive global war. His struggle to survive-both physically and spiritually-forms the arc of The Underland Chronicles.',
    ],
  },
  {
    type: 'Written Interview',
    year: '2013',
    title: 'Year of the Jungle/Invasion: Scholastic War Stories for Young Readers Interview with Walter Dean Myers',
    description:
      'In 2013, Walter Dean Myers and Suzanne Collins came together at Scholastic Auditorium to discuss writing war stories for readers of all ages.',
    source: 'Source: Scholastic',
    body: [
      'In 2013, authors Walter Dean Myers and Suzanne Collins came to the Scholastic Auditorium for a conversation about writing war stories for readers of all ages. The following is an edited transcript of this illuminating conversation, which was introduced by Walter Dean Myers\'s editor, Andrea Davis Pinkney, and moderated by Suzanne Collins\'s publisher, David Levithan.',
      '',
      'Andrea Davis Pinkney: We\'re here to talk about a topic that can be very unsettling, and that is the topic of war. And we\'re going to explore the complexities of war through the work and wisdom of two great literary thinkers:',
      '',
      'Suzanne Collins, author of the groundbreaking Hunger Games Trilogy and the bestselling Underland Chronicles, breaks ground again, looking at war in her extraordinary new picture book entitled Year of the Jungle, which is illustrated by James Proimos.',
      '',
      'Walter Dean Myers, the 2012–2013 National Ambassador For Young People\'s Literature and a critically acclaimed bestselling author of more than 100 books for children and young adults, delves into war in his new novel, Invasion, the companion to his classic war novels Fallen Angels and Sunrise Over Fallujah.',
      '',
      'David Levithan: Walter, Invasion is the extraordinary prequel to two classic war novels, Fallen Angels, which is about Vietnam, and Sunrise Over Fallujah, which is about Iraq. What made you want to write a prequel, and what did you decide to write about?',
      '',
      'Walter Dean Myers: Well, most of my life there\'s been some kind of a war going on. When I was a kid, it was Vietnam. I went up to join the Army on my seventeenth birthday, you know? Because I thought it was a good idea and I had these romantic ideas about war.',
      '',
      'Then my brother came in and he was killed in Vietnam. And then with Iraq, my son was in Iraq . . . and every day you\'re worried. Every time the phone rings at night, you\'re worried about this. But I kept seeing these romanticized versions of war; I kept seeing war being displayed as distant from the humanity that was actually fighting in the wars.',
      '',
      'And so I can\'t go away from it. My interest is there. I want to look at war in a very realistic sense, and I think that young people need to do this because young people who read Fallen Angels are the generation that\'s now making the decisions about modern wars. We need to bring them to that concept of, Yes, I know something about war, and it\'s about the human costs.',
      '',
      'DL: So you decided to focus on Normandy and World War II.',
      '',
      'WDM: The idea of Normandy has been, It was a bad day, but we won, and we got to the beaches, and we won. Many of the people that I interviewed recounted that. But there were bad days that followed.',
      '',
      'I mean it took the Americans and the Canadians and the Brits twenty-five days to go twenty-five miles, and at a terrible, terrible cost.',
      '',
      'DL: How was writing about World War II different than writing about Vietnam or the Iraqi War?',
      '',
      'WDM: I was a child. War meant the bad guys were someplace, doing something. But for me one of the differences was that I married a German lady, and I began listening to her relatives, what they were saying about how they got into the army, and what it meant to face the Americans.',
      '',
      'And that was so human. So human.',
      '',
      'DL: One of the amazing things about the book is the detail and how you really feel like you were there, not just on the beach, but as you said, in that month afterwards, and sloughing through.',
      '',
      'And you do even have a moment — one of my favorite scenes in the book — where you\'re really seeing it from the German point of view as well, through the interrogation of a prisoner. So I\'m curious about the research you did to sort of get into the heads of these soldiers.',
      '',
      'WDM: Well, the research was different with this book, because with the Vietnam book, that was my war, I was in the army during that time — with the Iraq thing, my son was there, and I could talk to men. But for this book, I\'m interviewing guys in their eighties, and I normally like to interview people three times.',
      '',
      'The first time is to sort of get their minds going; the second time, digging a little deeper. And so there were guys I\'m talking to with this book, in their late eighties, crying to me, actually crying as they live, relive those memories.',
      '',
      'DL: Suzanne, your research for Year of the Jungle was obviously of a more personal nature, since you had to go back to your six-year-old self as well as your family to explore the year your father was deployed to Vietnam. What was that like, to excavate that part of your past?',
      '',
      'SC: Well, a few weeks ago Jim [illustrator James Proimos] and I were doing some short book trailers for this, and the director sent a list with a breakdown, and he said, "This is the part where Suzanne will show the artifacts," and what he meant was things from my childhood. It made me feel like a mummy or something. But then I thought, No, it was forty-five years ago, and especially for a child, it might as well be five thousand years ago. It is a thing now set in history, even though it was part of my early childhood.',
      '',
      'Because that year was so emotional and so intense, even common objects took on a different kind of significance. So I have a thermos I mentioned in the book, which is like a Junior Miss thermos from 1968. And I have a beautiful Vietnamese doll that my dad sent me, as well as the postcards he sent.',
      '',
      'In terms of interviews I called my brother and sisters and my mom. I\'d been very little during the time, but they shared certain memories with me as well.',
      '',
      'So that was really my research. Unlike some other books, in which I do delve into historic research to use it as models for certain parts in the series, this was all very personal.',
      '',
      'DL: Walter, you were talking before about how you enlisted when you were seventeen. Your brother died in Vietnam, your son was in the army. How does that affect how you write about war?',
      '',
      'WDM: Well, you know, it has an amazing effect because what I see as I look at war, I see the numbers of people being killed. My son that was in Iraq was a trauma counselor, and he would tell me stories about these men going through this trauma. While they were in the army and while they were out of the army.',
      '',
      'And I\'m saying, why am I not getting this on the news? Why this distance between what was going on in the lives of the people, the humanity of the people, and what I\'m picking up every day in the news? And this just bothers me, it eats at me. And I don\'t want this idea to continue.',
      '',
      'You know, I\'m seeing it more and more. I\'m seeing, during the Iraq War, we first got the idea of smart bombs. You know, a bomb\'s not smart; it kills people. It kills people. War\'s about killing people, killing strangers, killing people you\'re not angry with.',
      '',
      'But smart bombs sounds like, "Oh, this is a smart bomb; this is only going to hit the bad guy. You know, the bad guy\'s going to be having a beer; bam, it\'s gonna get him." Now we\'re talking about cyber war.',
      '',
      'It makes it sound like a game. Or we\'re talking about drones. Drones kill people. As young people are given these ideas — "Oh, it\'s a drone, it\'s a cyber war, you go to your computer, you do this, you do the other thing" — I\'ve seen pictures of guys in I think Florida or someplace like this, and they\'re shooting off drones in the Middle East, and I\'m saying, "What does a kid think about this war? Is it real to them? Is it real?"',
      '',
      'I felt driven to make it real. You have to write about war in a way that expresses the humanity of it. You know, we\'re talking about postcards. That\'s real, and that\'s a postcard from a far-off place and represents so much. I have Mass cards, the German soldiers would have when someone in the family was killed, and they\'d carry the Mass cards around. That\'s real.',
      '',
      'DL: Suzanne, for you, obviously the through line between growing up in a military family in this book is obvious, but do you think that\'s really guided you for your other books as well?',
      '',
      'SC: Oh yeah. I mean, my father, along with being a Vietnam veteran, was also career Air Force. He was a doctor of political science, and he was a military historian. And when he came back from Vietnam — I\'m sure he had been educating us all along — but after he had experienced that war firsthand, he came back, I think, with almost an obsession to educate his children about war.',
      '',
      'So from a very early age, he did just that. He told us stories, he took us to battlefields. We went to memorials, and it was all very integrated into our lives. And because of that, because I learned about it so young, I think it seems very natural for me to write about this for children of any age. I don\'t think that I would have that if I had gone through basically the normal American education system, where we really ignore a lot of war, and skirt around a lot of things, and wave a patriotic flag about a lot of other things.',
      '',
      'You don\'t really get to the heart or the truth of what\'s going on. So I think it was an education that was rather unique that led to writing these books about war.',
      '',
      'DL: Both of you are fairly unique in that you\'ve now written about war in picture books for young kids, novels for elementary school kids, and then novels for young adults. How do you approach that?',
      '',
      'WDM: I just want to remove the romantic notions. You know, I grew up on the romance of war. "Into the valley of death rode the six hundred." You know. [laughs] "I could do that." You know. "Wherever I fall, there lies a bit of England." I read all that stuff, you know, and I saw all the movies when I was a kid.',
      '',
      'Even today you have the movies wherein you know the good guy is not gonna die, the star is not gonna die, and people get hit in the movies, they fall nicely and they go, "Oh, oh." It\'s not like that. People scream and yell, and you know, it\'s horrendous.',
      '',
      'So I don\'t want to have any kid turn against the country because we\'re involved in wars, but just know what you\'re getting into.',
      '',
      'The same kids who picked up that copy at fifteen of Fallen Angels are now forty years old. Lord, time flies. [laughter] But they\'re the ones who are making the decisions, and they need to know the truth, and they need to learn it early.',
      '',
      'DL: I think the wonderful thing about the books is the context that you give. You were talking earlier to us about a letter you got about Fallen Angels.',
      '',
      'WDM: Nicest letter I\'ve ever received in my life. The Iraq War had broken out, and there was so much flag-waving and gung-ho stuff, and this woman wrote to me and she said that her son wanted to quit school and join the army. She says, "I begged him, I had tears in my eyes. You know, at least finish high school," and he said okay, he\'d finish high school, but he was ready to go.',
      '',
      'And what he did was he read every war book he could, and he read Fallen Angels and he changed his mind. The mother just thanked me and thanked me and thanked me. You know, I\'ll never see her, but I know she\'s out there; I know the boy\'s out there.',
      '',
      'SC: Yes. Whether you decide to enlist or not, I think that one of Walter\'s books should be mandatory reading. You should read one before you go, so that you don\'t get caught up in a lot of idealism, so you have some sense of what you might be entering.',
      '',
      'DL: And in your books, looking at Year of the Jungle, then The Underland Chronicles, then The Hunger Games, there\'s a progression—',
      '',
      'SC: In Year of the Jungle, the main character Suzy is six. In The Underland Chronicles it begins when Gregor\'s eleven, and in The Hunger Games Katniss is sixteen. So you\'re entering with a protagonist who\'s the age of the audience, or somewhere in the vicinity.',
      '',
      'There\'s also a sort of philosophical progression about what I\'m asking the audience to think about. If I had to take thirty-five years of my father\'s war tutelage that I experienced and boil it down into one question, it would involve the issue of whether something is a necessary or an unnecessary war, and the very high bar of being a necessary war. The picture book is a story of the home front, and the main character gets the concept of what a war is. So we begin there.',
      '',
      'The Underland Chronicles deals with the concept of an unnecessary war. It\'s five books. And until you\'re about into the fourth book, there\'s no reason the war couldn\'t be avoided, and it\'s simply because of anger and greed and hatred and bad decision-making that they\'re propelled into a necessary war, probably by the time that there\'s genocide. And then in the fifth book it results in a huge, very bloody Underland global war.',
      '',
      'When I got to the YA, I thought, Now is where you begin with a concept of the necessary war, the war which, by our standards today, is accepted. It\'s said, "If X, Y, and Z happens to you, then it\'s just for you to wage war." So at the beginning of The Hunger Games you have Panem, a country in which the people are horribly oppressed, and the symbol of this is the Hunger Games, in which these children are forced to fight to the death.',
      '',
      'But even that is not that simple, because of the arena, which is a symbol that transforms throughout the three books. In the first book it is simply a gladiator game; in the second it becomes the hotbed of the revolution. And by the third, when they\'re actually in the war, the arena is the Capitol, and they\'ve come full circle. And all the things that were wrong, that propelled them into the necessary war that were going on in the original arena in The Hunger Games are now occurring in Mockingjay, except they\'re happening on a battlefield. Nothing has, in fact, been resolved. They\'ve just brought themselves full circle, and because they\'ve done that, nobody is safe.',
      '',
      'DL: So why write about war? Do you feel that you have a choice? You keep coming back to the subject over and over again. What\'s the passion behind that?',
      '',
      'WDM: I keep coming back to it because we keep going, we keep having wars. As Suzanne was saying, you keep asking yourself, Is this war necessary? And, you know, the reason that we have wars is that people make bad decisions, but we allow them to make bad decisions. You know, nobody wants to stand up and say, "Wait a minute, wait a minute, wait a minute," and somebody has to do that.',
      '',
      'The book community has to do that. Librarians have to do that. We have to say, "Wait a minute." I was looking the other day about the drones; I said, "Oh, this is so bad, this is so bad, because this is going to lead to bad decisions. This is going to lead to the company that makes the drones, they\'ll be making the decisions, and the people who make the smart bombs will be making decisions," and we need readers, we need people who are thinking, and we need people to say, "Wait a minute."',
      '',
      'You know, I spend a lot of time in prisons, juvenile prisons, and one of the things that I always know about juvenile prisons is if the guys had been over the problems before acting, they\'d have made different decisions. And it\'s the same thing with wars. If they would go over the problems and understand what\'s going on, their decisions would be different.',
      '',
      'I feel compelled to write about that.',
      '',
      'SC: And I think you can say, "Well, there are all these amazing war books that came ahead of you," and it\'s true, there are, but it seems that the stories need to be refreshed for every generation. You know, because you\'ll get something like All Quiet on the Western Front, and it seems like that should\'ve been it, no more war. And it\'s not so much, I think, that you think you\'re going to write the book that ends war; it\'s more that you feel like you\'re part of a continuum, that the discussion has to be kept on the table.',
      '',
      'If not, will we backslide even further? There\'s a sort of responsibility to keep the subject alive and make it new, and I think writing for younger audiences, you have even more of an opportunity to do that.',
      '',
      'DL: Let\'s talk about the void in other parts of the culture in discussing war. We were talking earlier about just how it is not a topic that\'s very much on people\'s minds, and you can easily sort of shunt it away and not pay attention to it.',
      '',
      'I think it\'s interesting that these books really do force you to. Look at how it operates with war and the media –',
      '',
      'SC: Right. I mean the initial idea for The Hunger Games came when I was channel surfing through television, and there was a reality program, and then there was footage of the Iraq War, although it is not the footage that, you know, you\'re talking about from Vietnam, because they don\'t show that kind of footage anymore.',
      '',
      'WDM: Right, right.',
      '',
      'SC: And then you hit the button again and you\'re on a cooking show, and then there\'s a baseball game. We\'re so inundated with information and with options of things to view right now, it becomes very difficult to distinguish. The footage you saw in Iraq is, for one thing, not entertainment. It\'s something real and very serious going on, and lives are being lost. But there\'s a real desensitization to people, because we\'re so overloaded with imagery.',
      '',
      'When I was a child, when Year of the Jungle was going on, we had, I think, four channels in black and white. And when the news was on, you knew it was the news; there wasn\'t any confusion. And there weren\'t a million other images coming to you from other places.',
      '',
      'We\'ve been at war going on twelve years now, and although much lip service is paid to the contrary, there\'s a really small segment of our population — the military families — who are utterly bearing the brunt of this, and in many ways are very isolated.',
      '',
      'I don\'t feel that we feel as if we\'re a nation at war, but we should all hold equal responsibility in that. At the time of Year of the Jungle, we did not live on a military base; I did not know anybody else that had a parent in Vietnam. In situations like that, you\'re isolated, and you\'re going through a very difficult time without support. And of course Vietnam was not a popular war.',
      '',
      'WDM: You also have to remember that one of the things that eroded the support for the Vietnam War were the images on television. And after that, the government understood that, and there were not those images for the Iraq War, and there are not those images for today\'s war, and there\'s not those images for all of these young people who are being traumatized.',
      '',
      'I know that I was shocked when they had the Paralympics, and all these young people with artificial limbs. We weren\'t seeing those on television. You know, that story was not being told. Suzanne and I are trying to tell that story.',
      '',
      'DL: It\'s been twenty-five years since Fallen Angels came out, and obviously time has passed, it\'s a different kind of war. So what themes do you find keep recurring and what things do you think are unique for now?',
      '',
      'WDM: If you\'re ever in a war zone and you see bodies, if you smell the bodies, you begin to rethink what war\'s about. And I really think that the excitement that we try to reach out and generate among very young kids, war games and stuff like this, it goes on and on and on, hiding the horrors of war behind this huge mask, sometimes of patriotism; more recently, just by censorship.',
      '',
      'SC: Right. And having a realistic sense and an education about war is essential on so many levels. If you don\'t even have an idea of what propaganda is, how will you know when it\'s being used against you? How will you know to question a government, to question the information that\'s being fed to you? You won\'t know, because you won\'t have any background to know that you should have alarms going off when certain things are said.',
      '',
      'And then lastly — and Walter alluded to this — the young people of today are the ones that we\'ll be looking to, hopefully, in the future, to come up with nonviolent means of conflict resolution. If they don\'t understand conflict, if they don\'t really understand the nature of war and its cost and what it means and what it\'s meant historically, if they have no sense of it other than the romanticized movies or whatever they\'ve seen, how can we expect them to have a clue about how they might come up with solutions for it?',
      '',
      'WDM: Yeah.',
      '',
      'DL: Well, I, luckily, feel I can end on a note of hope, because I think we can see what literature and stories can do.',
      '',
      'I love the fact that the seventeen-year-old who joined the army because of poetry and grandiose notions of war now writes novels that seventeen-year-olds read and decide not to go to war.',
      '',
      'And the six-year-old who didn\'t know what war was, and was so just confused by what was going on, has grown up to write a book for six-year-olds, explaining what\'s going on. I think there\'s some beauty in that, and in the hope that we can actually improve things, which I hope we can.',
      '',
      'Thank you, Walter and Suzanne.',
    ],
  },
];

const bookBackgrounds = {
  'Sunrise on the Reaping': sunriseOnTheReapingBackground,
  'The Ballad of Songbirds and Snakes': balladCover,
  'The Hunger Games': hungerGamesBackground,
  'Catching Fire': catchingFireBackground,
  Mockingjay: mockingjayBackground,
  'Gregor the Overlander': gregorOverlanderBackground,
  'Gregor and the Prophecy of Bane': gregorProphecyBackground,
  'Gregor and the Curse of the Warmbloods': gregorWarmbloodsBackground,
  'Gregor and the Marks of Secret': gregorMarksSecretBackground,
  'Gregor and the Code of Claw': gregorCodeOfClawBackground,
  'Year of the Jungle': yearOfTheJungleBackground,
  'WHEN CHARLIE MCBUTTON LOST POWER': whenCharlieCover,
};

function BookCard({ book, onLearnMore, delay = 0 }) {
  return (
    <ScrollReveal as="article" delay={delay} className="grid gap-0 overflow-hidden border border-[#f1cfa8] bg-[#fffaf0] lg:grid-cols-[230px_1fr]" offset={18}>
      <div className={`relative flex min-h-[210px] flex-col items-center justify-center overflow-hidden border-b border-[#f1cfa8] px-6 py-8 text-center lg:border-b-0 lg:border-r ${book.coverTone}`}>
        {bookBackgrounds[book.title] ? (
          <>
            <img
              src={bookBackgrounds[book.title]}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 z-0 h-full w-full object-cover opacity-50"
            />
          </>
        ) : null}
        <div className="relative z-10 flex w-full flex-col items-center justify-center">
          <span className="self-start rounded-sm bg-[#f39b63] px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white">
            {book.year}
          </span>
          {book.category === 'The Hunger Games' || book.category === 'Underland Chronicles' ? (
            <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#f7b47d]/55 p-2">
              <img
                src={book.category === 'The Hunger Games' ? hungerGamesCover : underlandCover}
                alt={book.title}
                className="h-full w-full object-contain"
              />
            </div>
          ) : (book.title === 'Year of the Jungle' || book.title === 'WHEN CHARLIE MCBUTTON LOST POWER') ? (
            <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#f7b47d]/55 p-2">
              <img src={yearJungleCover} alt={book.title} className="h-full w-full object-contain" />
            </div>
          ) : (
            <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#f7b47d]/55 text-3xl text-[#ff6d13]">
              {book.icon}
            </div>
          )}
        </div>
      </div>

      <div className="relative flex flex-col px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex flex-wrap items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#ff6d13]">
          <span className="rounded-sm bg-[#fff0e1] px-2 py-1 text-[#ff6d13]">{book.series}</span>
          <span className="text-[#bfa57f]">•</span>
          <span className="text-[#bfa57f]">{book.year}</span>
        </div>

        <h3 className="mt-3 font-display text-3xl leading-none text-[#b6480c]">{book.title}</h3>
        <p className="mt-3 max-w-3xl text-[0.92rem] leading-7 text-[#5e5347]">{book.description}</p>

        {book.badge.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {book.badge.map((tag) => (
              <span key={tag} className="rounded-sm bg-[#ffd9bf] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#b6480c]">
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <p className="mt-6 text-[0.65rem] uppercase tracking-[0.2em] text-[#8f7f6b]">{book.publishedBy}</p>

        <div className="mt-auto flex justify-end pt-4">
          <button
            type="button"
            onClick={() => onLearnMore && onLearnMore(book)}
            className="inline-flex items-center justify-center bg-[#ff7a11] px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#e66100]"
          >
            Learn More
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}

function InterviewModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#3f2b1d]/60 px-3 py-4 backdrop-blur-[2px] sm:px-4 sm:py-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden border border-[#e2c08e] bg-[#fbf4e8] shadow-[0_30px_90px_-35px_rgba(40,25,13,0.7)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="interview-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#e4c9a2] bg-[#fff7ec] text-xl text-[#8d5d31] transition hover:bg-[#ffe9cf]"
          aria-label="Close dialog"
        >
          ×
        </button>

        <div className="border-b border-[#ead2ae] bg-[linear-gradient(rgba(251,244,232,0.98),rgba(251,244,232,0.98))] px-5 py-5 pr-16 sm:px-8">
          <div className="flex flex-wrap items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#ff6d13]">
            <span className="rounded-sm bg-[#ffd9bf] px-2 py-1 text-[#ff6d13]">{item.type}</span>
            <span className="text-[#bfa57f]">{item.year}</span>
          </div>
          <h2 id="interview-modal-title" className="mt-4 font-display text-4xl leading-tight text-[#b6480c] sm:text-5xl">
            {item.title}
          </h2>
        </div>

        <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-7">
          <p className="max-w-3xl text-base leading-8 text-[#5f5448] sm:text-[1.03rem]">
            {item.description}
          </p>

          <div className="mt-6 space-y-5 text-[0.98rem] leading-8 text-[#4f463d] sm:text-[1.02rem]">
            {(() => {
              const filteredBody = (item.body || []).filter((paragraph) => {
                if (!paragraph) return true; // keep empty separators
                if (!item.description) return true;
                try {
                  const desc = item.description.trim();
                  const p = paragraph.trim();
                  if (!p) return true;
                  if (p === desc) return false;
                  if (p.startsWith(desc)) return false;
                } catch (e) {
                  return true;
                }
                return true;
              });

              return filteredBody.map((paragraph) => (
                <p key={paragraph} className="max-w-3xl">
                  {paragraph}
                </p>
              ));
            })()}
          </div>
        </div>

        <div className="border-t border-[#ead2ae] bg-[#f8ead2] px-5 py-4 sm:px-8 sm:py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[#8f7f6b]">{item.source}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center border border-[#e4c9a2] bg-white px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#b6480c] transition hover:-translate-y-0.5 hover:bg-[#fff6eb]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookModal({ book, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#3f2b1d]/60 px-3 py-4 backdrop-blur-[2px] sm:px-4 sm:py-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden border border-[#e2c08e] bg-[#fbf4e8] shadow-[0_30px_90px_-35px_rgba(40,25,13,0.7)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#e4c9a2] bg-[#fff7ec] text-xl text-[#8d5d31] transition hover:bg-[#ffe9cf]"
          aria-label="Close dialog"
        >
          ×
        </button>

        <div className="border-b border-[#ead2ae] px-5 py-5 sm:px-8">
          <h2 id="book-modal-title" className="font-display text-3xl text-[#b6480c]">
            {book.title}
          </h2>
        </div>

        <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-7">
          {/* Image */}
          <div className="flex justify-center">
            <img src={bookBackgrounds[book.title]} alt={book.title} className="h-56 w-auto object-contain" />
          </div>

          {/* Awards / Blurbs */}
          <div className="mt-6 space-y-4 text-[0.92rem] leading-7 text-[#4f463d]">
            {book.title === 'Sunrise on the Reaping' ? (
              <>
                <div className="mx-auto max-w-2xl space-y-4 text-center font-semibold tracking-[0.02em] text-[#4f463d]">
                  <p>#1 USA TODAY BESTSELLER</p>
                  <p>#1 NEW YORK TIMES BESTSELLER</p>
                  <p>#1 INDIE BESTSELLER</p>
                  <p>#1 PUBLISHERS WEEKLY BESTSELLER</p>
                  <p>NEW YORK TIMES 100 NOTABLE BOOKS OF 2025</p>
                  <p>A NEW YORK TIMES EDITORS' CHOICE</p>
                  <p>AP 10 NOTABLE BOOKS OF 2025</p>
                  <p>NPR: BOOKS WE LOVE 2025</p>
                  <p>8 NOVELS NPR STAFF AND CRITICS LOVED IN 2025</p>
                  <p>BEST BOOKS OF 2025: USA TODAY'S TOP 15 BOOKS OF THE YEAR</p>
                  <p>KIRKUS BEST BOOKS OF 2025--TEENS & YA</p>
                  <p>SCHOOL LIBRARY JOURNAL BEST BOOKS OF 2025--YOUNG ADULT</p>
                  <p>ELLE MAGAZINE BEST FANTASY AND SCI-FI BOOKS OF 2025</p>
                  <p>REACTOR NOTABLE YOUNG ADULT SCIENCE FICTION, FANTASY, AND HORROR OF 2025</p>
                  <p>A PEOPLE BEST BOOK OF 2025</p>
                  <p>READERS DIGEST BEST BOOKS OF 2025</p>
                  <p>TODAY SHOW--READ WITH JENNA JUNIOR'S 2025 SUMMER READING LIST--YOUNG ADULT</p>
                  <p>#1 AMAZON EDITORS' PICK BEST TEEN AND YOUNG ADULT BOOK 2025</p>
                  <p>AMAZON BEST 100 BOOKS OF 2025</p>
                  <p>AMAZON EDITORS' TOP TEN BOOKS OF 2025 (SEIRA WILSON)</p>
                  <p>BARNES AND NOBLE 2025 BOOK OF THE YEAR FINALIST</p>
                  <p>BARNES &amp; NOBLE BEST YA BOOKS OF 2025</p>
                  <p>WATERSTONES BOOK OF THE YEAR 2025 SHORTLIST</p>
                  <p>WATERSTONES BEST TEENAGE &amp; YOUNG ADULT BOOKS OF 2025</p>
                  <p>INDIGO BEST TEEN BOOK OF 2025</p>
                  <p>POWELL'S OUR FAVORITE BOOKS OF 2025--YOUNG READER</p>
                  <p>BOOKSHOP 2025 BOOK GIFT GUIDE: YOUNG ADULT</p>
                  <p>THE BRITISH BOOK AWARDS 2026--CHILDREN'S FICTION SHORTLIST</p>
                  <p>LOS ANGELES PUBLIC LIBRARY BEST BOOKS OF 2025</p>
                  <p>LOS ANGELES PUBLIC LIBRARY BEST OF 2025: TEEN</p>
                  <p>CHICAGO PUBLIC LIBRARY BEST OF THE BEST BOOKS 2025--TEEN</p>
                  <p>2026 LIBBY BOOK OF THE YEAR AWARD WINNER--YA FICTION</p>
                  <p>THE 61ST ANNUAL NEBULA AWARDS: THE ANDRE NORTON NEBULA AWARD FOR MIDDLE GRADE AND YOUNG ADULT FICTION FINALIST</p>
                  <p>2026 LODESTAR AWARD FOR BEST YA BOOK FINALIST</p>
                  <p>2025 BEST YOUNG ADULT/MIDDLE GRADE NOVEL DRAGON AWARD WINNER</p>
                  <p>2025 LIKEWISE CHOICE AWARDS WINNER--BOOK OF THE YEAR</p>
                  <p>2025 BOOKTOK'S BOOK OF THE YEAR</p>
                  <p>2025 GOODREADS CHOICE AWARDS WINNER--YOUNG ADULT FANTASY &amp; SCI-FI</p>
                </div>

                <div className="mt-16 space-y-8 text-left">
                  <div className="space-y-4">
                    <p>★ "[A] brutal tale of compassion and rage, and a frank examination of propaganda and tragedy, that will satisfy longtime series fans and newcomers alike."</p>
                    <p className="text-right italic">--Publishers Weekly, Starred Review</p>
                  </div>
                  <div className="space-y-4">
                    <p>★ "Raw, shocking, and deeply bittersweet, Haymitch's backstory pulls the pieces of the Hunger Games universe together with ease….Collins has mentioned in past interviews that she would not return to this series unless she had something to say—and she has a lot to say. Order multiple copies."</p>
                    <p className="text-right italic">--Booklist, Starred Review</p>
                  </div>
                  <div className="space-y-4">
                    <p>★ "A heartbreaking crescendo and another grimly irresistible chapter in the saga of this interlocking series."</p>
                    <p className="text-right italic">--Kirkus Reviews, Starred Review</p>
                  </div>
                  <div className="space-y-4">
                    <p>★"Required reading for fans of the original trilogy. A must-have in all collections."</p>
                    <p className="text-right italic">--School Library Journal, Starred Review</p>
                  </div>
                  <div className="space-y-4">
                    <p>"...rises to the level of the trilogy in terms of its examination of the political morality of both nations and individuals, particularly in relation to timely themes of autocracy and disinformation. This new installment should easily satisfy existing fans and bring new ones into the fold."</p>
                    <p className="text-right">--The Horn Book Magazine</p>
                  </div>
                  <div className="space-y-4">
                    <p>"A Propulsive, Brutal 'Hunger Games' Is Here. And It's Great...Collins paints a shrewd portrait of the machinery of propaganda and how authoritarism takes root.''</p>
                    <p className="text-right">--The New York Times</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Collins is an excellent writer, and there are moments of surprising lyricism, which help to leaven the grimness."</p>
                    <p className="text-right">--The Guardian</p>
                  </div>
                  <div className="space-y-4">
                    <p>"...it's as if Collins is asking us to reflect on how much we really know of our history, and how much power we have in ensuring that our current truths have a place in the future."</p>
                    <p className="text-right">--NPR</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Collins is awfully good at what she does...It's a life-giving book, no matter what you think of the world we're living in now. Because it reminds us that unity is worth something. In some cases, it's worth everything."</p>
                    <p className="text-right">--People</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Yes, the new 'Hunger Games' prequel is really that good."</p>
                    <p className="text-right">--USA Today</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Nearly two decades after the original trilogy was published, 'Sunrise on the Reaping' proves how critical and timely the series remains....Collins' writing is as lyrical and engrossing as it was when 'The Hunger Games' debuted 17 years ago…. Like Margaret Atwood and George Orwell before her, Collins' novels have become part of the lexicon, an adjective — this is very Hunger Games — used to illustrate government overreach and authoritarianism. "</p>
                    <p className="text-right">--MSNBC</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Sunrise on the Reaping…succeeds in the near-impossible task of making a well-trod story feel as intimate and visceral as its predecessors."</p>
                    <p className="text-right">--ELLE</p>
                  </div>
                  <div className="space-y-4">
                    <p>"True to form, Collins fills this prequel with biting commentary on propaganda, authoritarianism, and resistance."</p>
                    <p className="text-right">--Reactor</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Genuinely outstanding"</p>
                    <p className="text-right">--Paste</p>
                  </div>
                  <div className="space-y-4">
                    <p>"As a Hunger Games prequel, it's a reminder that successful rebellions like the one Katniss will eventually lead are often preceded by years of stops and starts—that acts of resistance don't always pay off immediately."</p>
                    <p className="text-right">--Slate Magazine</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Equal parts touching and deeply sad"</p>
                    <p className="text-right">--Teen Vogue</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Collins reminds readers that it's possible for us all to consider the source of the narratives we're being fed, recognize the goals behind it, and consume media critically. Eventually, she suggests, media literacy can help flip the narrative."</p>
                    <p className="text-right">--Polygon</p>
                  </div>
                </div>
              </>
            ) : book.title === 'The Ballad of Songbirds and Snakes' ? (
              <>
                <div className="mx-auto max-w-2xl space-y-4 text-center font-semibold tracking-[0.02em] text-[#4f463d]">
                  <p>#1 USA TODAY BESTSELLER</p>
                  <p>#1 NEW YORK TIMES BESTSELLER</p>
                  <p>#1 WALL STREET JOURNAL BESTSELLER</p>
                  <p>#1 PUBLISHERS WEEKLY BESTSELLER</p>
                  <p>A BARNES &amp; NOBLE BEST YA SCIENCE FICTION AND FANTASY BOOK OF 2020</p>
                  <p>AN AMAZON BEST SCIENCE FICTION AND FANTASY BOOK OF 2020</p>
                  <p>A NEW YORK TIMES EDITORS' CHOICE</p>
                  <p>WATERSTONES BEST BOOKS OF 2020: SCIENCE FICTION &amp; FANTASY</p>
                  <p>COSMOPOLITAN'S 20 BEST YA BOOKS OF 2020</p>
                  <p>TODAY'S BEST YA BOOKS OF 2020</p>
                  <p>YALSA 2021 TEENS' TOP TEN WINNER</p>
                  <p>2021 KIDS' BOOK CHOICE AWARDS FINALIST</p>
                  <p>BEST FANTASY WORLD BUILDER</p>
                  <p>SUZANNE COLLINS/THE BALLAD OF SONGBIRDS AND SNAKES</p>
                  <p>A HUNGER GAMES NOVEL</p>
                  <p>2020 GOODREADS CHOICE AWARD--YA FANTASY--FINAL ROUND</p>
                  <p>2025 TEEN READERS' CHOICE AWARDS WINNER</p>
                  <p>BEST OF THE LAST DECADE</p>
                  <p>YOUNG ADULT FICTION</p>
                </div>

                <div className="mt-16 space-y-8 text-left">
                  <div className="space-y-4">
                    <p>"'The Ballad of Songbirds and Snakes' delivers a mesmerizing look into the life of Coriolanus Snow and the root causes of his villainous behavior. Collins once again proves that she is a master of building a fascinating world around complex characters who must grapple with the complications of chaos and control and their effects on human nature."</p>
                    <p className="text-right">--The Associated Press</p>
                  </div>
                  <div className="space-y-4">
                    <p>"It's the pull between Coryo's head and heart — and the realization that he actually has a beating heart, not just a rose-scented lump of coal — that makes the future President Snow very worthy of a 517-page prequel."</p>
                    <p className="text-right">--The Washington Post</p>
                  </div>
                  <div className="space-y-4">
                    <p>★"Both a tense, character-driven piece and a cautionary tale...The twists and heartbreaks captivate despite tragic inevitabilities."</p>
                    <p className="text-right italic">--Kirkus Reviews, STARRED REVIEW</p>
                  </div>
                  <div className="space-y-4">
                    <p>"If you read The Hunger Games in one sitting, settle in for the long haul once more—because The Ballad of Songbirds and Snakes is nearly impossible to put down...The Ballad of Songbirds and Snakes is incredibly exciting, thought-provoking, and relevant."</p>
                    <p className="text-right">--Amazon Book Review</p>
                  </div>
                  <div className="space-y-4">
                    <p>"A sleek Hunger Games prequel...The plot of the novel rests on deception and pretence, its view of humanity bleak; yet Collins's themes of friendship, betrayal, authority and oppression, as well as the extra layers of lore about mockingjays and Capitol's history, will please and thrill."</p>
                    <p className="text-right">--The Guardian</p>
                  </div>
                  <div className="space-y-4">
                    <p>"A gripping mix of whipsaw plot twists and propulsive writing make this story's complex issues—vulnerability and abuse, personal responsibility, and institutionalized power dynamics—vivid and personal."</p>
                    <p className="text-right">--Publishers Weekly</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Fans will appreciate revisiting the world of Panem, and teens may relate to Coriolanus beginning to grapple with big ideas like human nature and whether people on opposite sides of a war are fundamentally different."</p>
                    <p className="text-right">--School Library Journal</p>
                  </div>
                  <div className="space-y-4">
                    <p>"A Hunger Games without Everdeen might have seemed as peculiar as a Potter without Harry, but it works beautifully, largely thanks to a new character. The clever, charismatic precursor, Lucy Baird Gray, a Covey (a sort of gypsy) who is chosen to represent District 12 in the tenth Games. She is a folk singer of prophetic ballads and has a thing about snakes. She is gorgeous, of course, in her late mother's old rainbow dress (the casting for the film, confirmed by Lionsgate, will be fun)."</p>
                    <p className="text-right">--The Times</p>
                  </div>
                  <div className="space-y-4">
                    <p>"[B]y introducing a new cast of teenagers, Collins is able to raise questions about privilege, the uses of violence, and the futility of war."</p>
                    <p className="text-right">--People</p>
                  </div>
                  <div className="space-y-4">
                    <p>"It is a steep challenge to write a book whose hero is, everyone knows, destined to become deeply evil. Do we want to hear — now, after we know the endgame — that the young Voldemort was unfairly saddled with a demerit in class or that the adolescent Sauron fretted because he had to wear hand-me-down clothes? Yes, please."</p>
                    <p className="text-right">--The New York Times, Sarah Lyall</p>
                  </div>
                  <div className="space-y-4">
                    <p>"...The Ballad of Songbirds and Snakes' clever exploration of the world and how its perverse forms of entertainment and control came to be are bound to satisfy fans. It may not be a particularly comforting form of escapism, but Collins' uneasy, thought-provoking prequel is absorbing all the same."</p>
                    <p className="text-right">--Insider</p>
                  </div>
                  <div className="space-y-4">
                    <p>"The Ballad of Songbirds and Snakes describes how most lives are actually lived, the consequences of countless small choices that ultimately amount to a big one: not just how to feel but who to be."</p>
                    <p className="text-right">--Slate Magazine</p>
                  </div>
                  <div className="space-y-4">
                    <p>"The Ballad of Songbirds and Snakes is a darkly satisfying origin story...It's a reminder of the power of propaganda — how putting the veneer of a good narrative atop any awful thing can get people to believe the message."</p>
                    <p className="text-right">--Polygon</p>
                  </div>
                  <div className="space-y-4">
                    <p>"The Ballad of Songbirds and Snakes...confirms Collins as a master of dystopian YA, able to spin engaging tales around deeply flawed characters and societies."</p>
                    <p className="text-right">--New York Journal of Books</p>
                  </div>
                  <div className="space-y-4">
                    <p>"The Ballad of Songbirds and Snakes builds on the original series' overt critique of violence and those who perpetuate it, again in terms that speak to a more mature audience than their young-adult marketing might suggest. For true fans of The Hunger Games, Collins shines most as she weaves in tantalizing details that lend depth to the gruesome world she created in the original series and Coriolanus's place in its history."</p>
                    <p className="text-right">--Time Magazine</p>
                  </div>
                </div>
              </>
            ) : book.title === 'The Hunger Games' ? (
              <>
                <div className="mx-auto max-w-2xl space-y-4 text-center font-semibold tracking-[0.02em] text-[#4f463d]">
                  <p>#1 NEW YORK TIMES BESTSELLER</p>
                  <p>#1 USA TODAY BESTSELLER</p>
                  <p>WALL STREET JOURNAL BESTSELLER</p>
                  <p>PUBLISHERS WEEKLY BESTSELLER</p>
                  <p>TIME MAGAZINE: THE 100 BEST YA BOOKS OF ALL TIME</p>
                  <p>NPR YOUR FAVORITES: 100 BEST-EVER TEEN NOVELS</p>
                  <p>PBS THE GREAT AMERICAN READ</p>
                  <p>AMERICA'S 100 BEST-LOVED NOVELS</p>
                  <p>PARADE MAGAZINE: THE 101 BEST YOUNG ADULT BOOKS OF ALL TIME</p>
                  <p>2024 NYT READERS PICK THEIR 100 BEST BOOKS OF THE 21ST CENTURY</p>
                  <p>2025 KIRKUS BEST BOOKS OF THE 21ST CENTURY (SO FAR)</p>
                  <p>TEENS &amp; YA</p>
                  <p>2025 LA TIMES: THE BEST 30 FICTION BOOKS OF THE LAST 30 YEARS</p>
                  <p>PUBLISHERS WEEKLY'S BEST BOOKS OF 2008: CHILDREN'S FICTION</p>
                  <p>NEW YORK TIMES NOTABLE CHILDREN'S BOOK OF 2008</p>
                  <p>AN AMERICAN LIBRARY ASSOCIATION TOP TEN BEST BOOKS FOR YOUNG ADULTS SELECTION</p>
                  <p>AN ALA NOTABLE CHILDREN'S BOOK</p>
                  <p>2009 ALA AMELIA BLOOMER PROJECT LIST</p>
                  <p>#1 ON WINTER '08/'09 CHILDREN'S INDIE NEXT LIST</p>
                  <p>INDIES CHOICE--BEST INDIE YOUNG ADULT BUZZ BOOK HONOR</p>
                  <p>2008 CYBIL AWARD--FANTASY &amp; SCIENCE FICTION</p>
                  <p>2009 CHILDREN'S CHOICE BOOK AWARD TEEN CHOICE BOOK OF THE YEAR FINALIST</p>
                  <p>YALSA'S TEENS' TOP TEN, 2009</p>
                  <p>NYPL "STUFF FOR THE TEEN AGE" LIST, 2009</p>
                  <p>CCBC CHOICES 2009</p>
                  <p>A NEW YORK TIMES EDITORS' CHOICE</p>
                  <p>A KIRKUS BEST BOOK OF 2008</p>
                  <p>A HORN BOOK FANFARE</p>
                  <p>SCHOOL LIBRARY JOURNAL BEST BOOKS OF 2008</p>
                  <p>A BOOKLIST EDITORS' CHOICE, 2008</p>
                  <p>LA TIMES FAVORITE CHILDREN'S BOOKS, 2008</p>
                  <p>BARNES &amp; NOBLE BEST BOOKS OF 2008 FOR TEENS AND KIDS</p>
                  <p>BORDERS BEST BOOKS OF 2008: TEENS</p>
                  <p>AMAZON BEST BOOKS OF 2008: TOP 100 EDITORS' PICK TOP 10 BOOKS: TEENS</p>
                  <p>GOODREADS BEST BOOKS OF 2008</p>
                </div>

                <div className="mt-16 space-y-8 text-left">
                  <div className="space-y-4">
                    <p>"What happens if we choose entertainment over humanity? In Collins's world, we'll be obsessed with grooming, we'll talk funny, and all our sentences will end with the same rise as questions. When Katniss is sent to stylists to be made more telegenic before she competes, she stands naked in front of them, strangely unembarrassed. "They're so unlike people that I'm no more self-conscious than if a trio of oddly colored birds were pecking around my feet," she thinks. In order not to hate these creatures who are sending her to her death, she imagines them as pets. It isn't just the contestants who risk the loss of their humanity. It is all who watch."</p>
                    <p className="text-right">--Publishers Weekly, Megan Whalen Turner, STARRED REVIEW</p>
                  </div>
                  <div className="space-y-4">
                    <p>"...brilliantly plotted and perfectly paced...a futuristic novel every bit as good and as allegorically rich as Scott Westerfeld's 'Uglies' books."</p>
                    <p className="text-right">--The New York Times, John Green</p>
                  </div>
                  <div className="space-y-4">
                    <p>"[The Hunger Games] is a violent, jarring, speed-rap of a novel that generates nearly constant suspense...I couldn't stop reading it."</p>
                    <p className="text-right">--Stephen King, Entertainment Weekly Review</p>
                  </div>
                  <div className="space-y-4">
                    <p>"...enthralling, imaginative and creepy..."</p>
                    <p className="text-right">--Los Angeles Times</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Collins's characters are completely realistic and sympathetic as they form alliances and friendships in the face of overwhelming odds; the plot is tense, dramatic, and engrossing. This book will definitely resonate with the generation raised on reality shows like \"Survivor\" and \"American Gladiator.\"</p>
                    <p className="text-right">--School Library Journal, STARRED REVIEW</p>
                  </div>
                  <div className="space-y-4">
                    <p>"[A] plot-driven blend of suspense, science fiction, and romance."</p>
                    <p className="text-right">--USA Today</p>
                  </div>
                  <div className="space-y-4">
                    <p>"The plot is front and center here—the twists and turns are addictive, particularly when the romantic subplot ups the ante—yet the Capitol's oppression and exploitation of the districts always simmers just below the surface, waiting to be more fully explored in future volumes. Collins has written a compulsively readable blend of science fiction, survival story, unlikely romance, and social commentary."</p>
                    <p className="text-right">--Horn Book, STARRED REVIEW</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Populated by three dimensional characters, this is a superb tale of physical adventure, political suspense, and romance."</p>
                    <p className="text-right">--Booklist, STARRED REVIEW</p>
                  </div>
                  <div className="space-y-4">
                    <p>"I was so obsessed with this book that I had to take it with me out to dinner and hide it under the edge of the table so I wouldn't have to stop reading. The story kept me up for several nights in a row, because even after I was finished, I just lay in bed wide awake thinking about it...The Hunger Games is amazing."</p>
                    <p className="text-right">--Stephenie Meyer</p>
                  </div>
                  <div className="space-y-4">
                    <p>"[A] stylish postmodern 'Lost' in direct collision with 'Lord of the Flies.'"</p>
                    <p className="text-right">--The Wall Street Journal, Katie Roiphe</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Themes of government control, \"big brother,\" and personal independence are explored amidst a thrilling adventure that will appeal to science fiction, survival, and adventure readers. The suspense of this powerful novel will keep the reader glued to the page long after bedtime."</p>
                    <p className="text-right">--VOYA, Deborah L. Dubois</p>
                  </div>
                  <div className="space-y-4">
                    <p>"The Hunger Games is as close to perfect an adventure novel as I've ever read. I could not put it down. Collins has transformed the ancient Labyrinth myth into a terrifyingly believable tale of future America. Readers will be hungry for more."</p>
                    <p className="text-right">--Rick Riordan</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Impressive world-building, breathtaking action and clear philosophical concerns make this volume, the beginning of a planned trilogy, as good as The Giver and more exciting."</p>
                    <p className="text-right">--Kirkus, STARRED REVIEW</p>
                  </div>
                </div>
              </>
            ) : book.title === 'Catching Fire' ? (
              <>
                <div className="mx-auto max-w-2xl space-y-4 text-center font-semibold tracking-[0.02em] text-[#4f463d]">
                  <p>#1 USA TODAY BESTSELLER</p>
                  <p>#1 NEW YORK TIMES BESTSELLER</p>
                  <p>#1 WALL STREET JOURNAL BESTSELLER</p>
                  <p>#1 PUBLISHERS WEEKLY BESTSELLER</p>
                  <p>A NEW YORK TIMES EDITORS' CHOICE</p>
                  <p>TIME MAGAZINE TOP 10 FICTION BOOKS OF 2009</p>
                  <p>PUBLISHERS WEEKLY'S BEST BOOKS OF 2009: CHILDREN'S FICTION</p>
                  <p>A PEOPLE MAGAZINE (TOP 10) BEST BOOK OF 2009</p>
                  <p>A LOS ANGELES TIMES BEST CHILDREN'S BOOK OF 2009</p>
                  <p>A BOOKLIST EDITORS' CHOICE, 2009</p>
                  <p>A KIRKUS BEST BOOK OF 2009</p>
                  <p>AN AMERICAN LIBRARY ASSOCIATION BEST BOOKS FOR YOUNG ADULTS SELECTION</p>
                  <p>#1 YALSA'S TEENS' TOP TEN, 2010</p>
                  <p>NYPL "STUFF FOR THE TEEN AGE" LIST, 2010</p>
                  <p>2010 CHILDREN'S CHOICE BOOK AWARD TEEN CHOICE BOOK OF THE YEAR WINNER AUTHOR OF THE YEAR NOMINEE</p>
                  <p>2010 INDIES CHOICE AWARD WINNER--YOUNG ADULT</p>
                  <p>TOP 10 ON THE FALL 2009 CHILDREN'S INDIE NEXT LIST</p>
                  <p>BARNES &amp; NOBLE BEST TEEN BOOKS OF 2009</p>
                  <p>BORDERS BEST BOOKS OF 2009: TEENS</p>
                  <p>AMAZON BEST BOOKS OF 2009: TOP 100 EDITORS' PICK TOP 10 BOOKS: TEENS</p>
                  <p>2009 GOODREADS CHOICE AWARDS--YOUNG ADULT SERIES AND ALL-TIME FAVORITE--WINNER</p>
                </div>

                <div className="mt-16 space-y-8 text-left">
                  <div className="space-y-4">
                    <p>"Collins has done that rare thing. She has written a sequel that improves upon the first book."</p>
                    <p className="text-right">--The New York Times, Gabrielle Zevin</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Again, Collins' crystalline, unadorned prose provides an open window to perfect pacing and electrifying world-building, but what's even more remarkable is that aside from being tremendously action-packed sf thrillers, these books are also brimming with potent themes of morality, obedience, sacrifice, redemption, love, law, and, above all, survival. Honestly, this book only needs to be good enough to satisfy its legions of fans. Fortunately, it's great. And if you were dying to find out what happens after the last book, get ready for pure torture awaiting the next."</p>
                    <p className="text-right">--Booklist, STARRED REVIEW</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Whereas Katniss kills with finesse, Collins writes with raw power...The Hunger Games and Catching Fire expose children to exactly the kind of violence we usually shield them from. But that just goes to show how much adults forget about what it's like to be a child. Kids are physical creatures, and they're not stupid. They know all about violence and power and raw emotions. What's really scary is when adults pretend that such things don't exist."</p>
                    <p className="text-right">--Time Magazine</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Gladiator" meets "Project Runway" in Suzanne Collins's gripping dystopian novel "The Hunger Games" and its new sequel, "Catching Fire." Collins has joined J.K. Rowling and Stephenie Meyer as a writer of children's books that adults are eager to read."</p>
                    <p className="text-right">--Bloomberg.com</p>
                  </div>
                  <div className="space-y-4">
                    <p>"...doesn't disappoint when it segues into the pulse-pounding action readers have come to expect. Characters from the previous volume reappear to good effect: Katniss's stylist, Cinna, proves he's about more than fashion; Haymitch becomes more dimensional. But the star remains Katniss, whose bravery, honesty and wry cynicism carry the narrative...Collins has also created an exquisitely tense romantic triangle for her heroine...by book's end (and it's a cliffhanger), readers will be picking sides—Peeta or Gale?"</p>
                    <p className="text-right">--Publishers Weekly, STARRED REVIEW</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Stellar, imaginative writing."</p>
                    <p className="text-right">--Los Angeles Times</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Beyond the expert world building, the acute social commentary and the large cast of fully realized characters, there's action, intrigue, romance and some amount of hope in a story readers will find completely engrossing. Collins weaves in enough background for this novel to stand alone, but it will be a far richer experience for those who have read the first installment and come to love Katniss, Peeta, Haymitch and the rest of the desperate residents of this dystopia. A humdinger of a cliffhanger will leave readers clamoring for volume three."</p>
                    <p className="text-right">--Kirkus Reviews, STARRED REVIEW</p>
                  </div>
                  <div className="space-y-4">
                    <p>"...this sequel has enough action to please Hunger Games fans and leaves enough questions tantalizingly unanswered for readers to be desperate for the next installment."</p>
                    <p className="text-right">--School Library Journal, STARRED REVIEW</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Collins ratchets up the tension in the second book in the Hunger Games trilogy. With a host of well-drawn new secondary characters and more lives on the line, this will keep readers of all ages up long past their bedtimes."</p>
                    <p className="text-right">--Romantic Times Book Reviews, ****1/2 STARS</p>
                  </div>
                  <div className="space-y-4">
                    <p>"Collins has once again delivered a page-turning blend of plot and character with an inventive setting and provocative themes."</p>
                    <p className="text-right">--The Horn Book Magazine</p>
                  </div>
                </div>
              </>
            ) : book.title !== 'Gregor the Overlander' && book.title !== 'Gregor and the Prophecy of Bane' && book.title !== 'Gregor and the Curse of the Warmbloods' && book.title !== 'Gregor and the Marks of Secret' && book.title !== 'Gregor and the Code of Claw' && book.title !== 'Mockingjay' && book.title !== 'Year of the Jungle' && book.title !== 'WHEN CHARLIE MCBUTTON LOST POWER' ? (
              <p>{book.description}</p>
            ) : null}
            {book.title === 'WHEN CHARLIE MCBUTTON LOST POWER' ? (
              <>
                <div className="mx-auto max-w-2xl space-y-4 text-center font-semibold tracking-[0.02em] text-[#4f463d]">
                </div>

                <div className="mt-16 space-y-8 text-left">
                  <div className="space-y-4">
                    <p>"A clever, humorous story in rhyme. Charlie's techno-driven world comes to a crashing halt when a thunderstorm causes a power outage. His mother advises, "You'll have to find something without plugs to play./Read a book!/Clean your room!/Sing a song!/Model clay!" Uninspired, Charlie finally remembers an old handheld video game, but the battery is missing. Desperate, he steals one from his sister's talking doll and ends up in the time-out chair. Feeling remorseful when the little girl starts crying, he seeks her out and the two have a grand time playing games and pretending to be dragons and wizards. When the power returns, Charlie is ready to retreat to his "handsets and bots" but decides that it might be fun to spend some time with his sister as well. The hilarious cartoon illustrations are bold and appealing and depict the siblings' many emotions with exaggerated clarity. While the mother appears only as a hand patting her panicked son's head, the family dog is usually present, patiently enduring a hose-down from little Isabel Jane or angrily reproving Charlie for hurting her feelings. Pair this tale with Glenn McCoy's Penny Lee and Her TV (Hyperion, 2002) for a fun storytime during 'TV Turnoff Week.'"</p>
                    <p className="text-right">--School Library Journal</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Charlie loves computer games so much, he never plays with anything else - so when the power goes out, he's really in the dark. His desperate search for batteries involves his sister's toys and some nasty behavior before he settles down to realize what's truly important in his life. Deftly written by Suzanne Collins and nicely illustrated by Mike Lester, When Charlie McButton Lost Power is refreshingly original and moving!"</p>
                    <p className="text-right">--Midwest Book Review</p>
                  </div>

                  <div className="space-y-4">
                    <p>"A computer-game addict temporarily turns into a raving lunatic when a power failure shuts down his PC, and Lester is well up to the task of portraying his breakdown. He sends red-haired Charlie, pop-eyed features wildly distorted with panic, dashing after an old gameboy, then brutalizing his little sister Isabel Jane's talking doll for a triple-A battery. When this behavior instantly relegates him to the Time-Out Chair, Charlie yells (captured in the art by a gross-looking spray of red and yellow) at Isabel Jane, which sends her away in tears—but then also causes him to reflect remorsefully on how much he actually enjoys her company. Once off the chair, he seeks her out for a game of hide-and-seek. Collins tells the tale in loosely written verse and leaves Charlie, as the house explodes with restored light, thinking that he might go play with his sibling some more before plugging in again. Unlikely to work as behavior modification, but young geeks may take a break from their screens to enjoy the over-the-top art."</p>
                    <p className="text-right">--Kirkus Reviews</p>
                  </div>
                </div>
              </>
            ) : null}
            {book.title === 'Gregor the Overlander' ? (
              <>
                <div className="mx-auto max-w-2xl space-y-4 text-center font-semibold tracking-[0.02em] text-[#4f463d]">
                  <p>A NEW YORK TIMES BESTSELLING SERIES</p>
                  <p>USA TODAY BESTSELLER</p>
                  <p>A BOOK SENSE BESTSELLING SERIES</p>
                  <p>KIRKUS REVIEWS EDITOR'S CHOICE, 2003</p>
                  <p>NY PUBLIC LIBRARY 100 TITLES FOR READING AND SHARING</p>
                  <p>A BOOK SENSE CHILDREN'S PICK</p>
                  <p>A CCBC BOOK OF THE WEEK</p>
                  <p>2004 NAIBA CHILDREN'S NOVEL AWARD</p>
                  <p>2006 ALSC NOTABLE CHILDREN'S RECORDING (audio version) — Read by Paul Boehmer</p>
                </div>

                <div className="mt-16 space-y-8 text-left">
                  <div className="space-y-4">
                    <p>"Gregor's luminous, supremely absorbing quest takes place in a strange underground land of giant cockroaches, rideable bats, and violet-eyed humans... Creature depictions are soulful and the plot is riveting... Wonderful."</p>
                    <p className="text-right">--Kirkus Reviews, STARRED REVIEW</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Collins does a grand job of world-building, with a fine economy of words…Unlike Gregor, who cannot wait to leave, readers will likely find [the Underland] to be a fantastically engaging place."</p>
                    <p className="text-right">--Publishers Weekly, STARRED REVIEW</p>
                  </div>

                  <div className="space-y-4">
                    <p>"[An] exceptional debut novel, a well-written, fast-moving, action-packed fantasy... [S]ure to be a solid hit with young fantasy fans."</p>
                    <p className="text-right">--Booklist, STARRED REVIEW</p>
                  </div>

                  <div className="space-y-4">
                    <p>"A refreshing combination of sensitive characters, innovative devices, and an unusual setting make this an appealing purchase for younger fantasy fans."</p>
                    <p className="text-right">--VOYA</p>
                  </div>

                  <div className="space-y-4">
                    <p>"This is an engrossing adventure for fantasy fans and for those new to the genre."</p>
                    <p className="text-right">--School Library Journal</p>
                  </div>

                  <div className="space-y-4">
                    <p>"The fast-paced, detailed narrative features vivid battle scenes (complete with gore), dangerous alliances, some frighteningly close calls, and the sobering death of comrades-in-arms. Cliffhanger chapter endings propel the story forward to its inevitable but nevertheless immensely satisfying conclusion, which, happily for readers, hints at more heart-pounding journeys to the center of the earth."</p>
                    <p className="text-right">--The Horn Book Magazine</p>
                  </div>
                </div>
              </>
            ) : book.title === 'Gregor and the Prophecy of Bane' ? (
              <>
                <div className="mx-auto max-w-2xl space-y-4 text-center font-semibold tracking-[0.02em] text-[#4f463d]">
                  <p>A NEW YORK TIMES BESTSELLING SERIES</p>
                  <p>A BOOK SENSE BESTSELLING SERIES</p>
                  <p>A BOOK SENSE CHILDREN'S PICK</p>
                  <p>2005 CONNECTICUT BOOK AWARD FINALIST--CHILDREN'S LITERATURE</p>
                </div>

                <div className="mt-16 space-y-8 text-left">
                  <div className="space-y-4">
                    <p>"Collins crafts another edge-of-the-seat quest... Gregor's resolution of the prophecy will surprise and delight readers--who will be equally delighted to see a new prophecy in Gregor's luggage when he returns home. Yessss!"</p>
                    <p className="text-right">--Kirkus Reviews</p>
                  </div>

                  <div className="space-y-4">
                    <p>"...fans will not be disappointed with this exciting, action-packed sequel, whose ending suggests more adventures to come."</p>
                    <p className="text-right">--Booklist</p>
                  </div>

                  <div className="space-y-4">
                    <p>"As in the first book, the questers face adventure, danger, death, loss, and change on their journey, and the surprising conclusion leaves room for another sequel. Interpersonal conflict and old enmities among the well-developed characters add depth, and the hazards and beauties of the subterranean Underland are fully realized and clearly presented. An urgent mood and a sense of impending danger are conveyed. This is a strong choice for fantasy fans, including reluctant readers, even if they're not familiar with Gregor's first adventure."</p>
                    <p className="text-right">--School Library Journal</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Along with many Underlanders [rats notwithstanding], Gregor's fans will cheer the promise of future visits."</p>
                    <p className="text-right">--The Horn Book Magazine</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Danger abounds, calling for courage and ingenuity. Gregor consistently makes the right choices and triumphs. Fast-paced adventure and endearing characters make this book an excellent selection for younger fantasy readers."</p>
                    <p className="text-right">--VOYA</p>
                  </div>
                </div>
              </>
            ) : book.title === 'Year of the Jungle' ? (
              <>
                <div className="mx-auto max-w-2xl space-y-4 text-center font-semibold tracking-[0.02em] text-[#4f463d]">
                  <p>A PUBLISHERS WEEKLY BEST BOOK OF 2013: PICTURE BOOK</p>
                  <p>65TH ANNUAL CHRISTOPHER AWARD FOR BOOKS FOR YOUNG PEOPLE</p>
                  <p>2014 CAPITOL CHOICES NOTEWORTHY TITLES FOR CHILDREN AND TEENS</p>
                  <p>A BOOKLIST EDITORS' CHOICE, 2013</p>
                  <p>2014 CHARLOTTE ZOLOTOW AWARD / HONOR BOOK</p>
                  <p>A NEW YORK TIMES EDITORS' CHOICE</p>
                  <p>A BULLETIN OF THE CENTER FOR CHILDREN'S BOOKS BLUE RIBBON BOOK FOR 2013</p>
                  <p>A 2014 GRYPHON HONOR BOOK</p>
                  <p>CCBC CHOICES 2014</p>
                  <p>BOOK LINKS LASTING CONNECTION FOR 2013</p>
                  <p>HUFFINGTON POST BEST PICTURE BOOKS OF 2013 — MOST POWERFUL — HONORABLE MENTION</p>
                  <p>THE GUARDIAN/THE OBSERVER BEST PICTURE BOOKS FOR CHILDREN, 2013</p>
                  <p>A PARENTS' CHOICE SILVER HONOR AWARD RECIPIENT 2013</p>
                  <p>OPPENHEIM TOY PORTFOLIO PLATINUM AWARD WINNER 2013</p>
                </div>

                <div className="mt-16 space-y-8 text-left">
                  <div className="space-y-4">
                    <p>"In this picture book, Collins sensitively examines the impact of war on the very young, using her own family history as a template. Suzy is the youngest of four children—Proimos draws her with impossibly big, questioning blue eyes and a mass of frizzy red hair—and she is struggling to understand the changes in her family. "My dad has to go to something called a war," she explains. "It's in a place called Viet Nam. Where is Viet Nam? He will be gone a year. How long is a year? I don't know what anybody's talking about." When Suzy learns that her father is in the jungle, she imagines something akin to the setting of her favorite cartoon (Collins suggests it's George of the Jungle). As the months wear on, though, Suzy begins to piece together the danger her father is in, whether it's through the increasingly unnerving postcards he sends (one reads, "Pray for me," in closing) or by catching a snippet of wartime violence on the news. "Explosions. Helicopters. Guns. Soldiers lie on the ground. Some of them aren't moving." In four wordless spreads, Proimos makes Suzy's awakening powerfully clear, as the gray jungle she initially pictured (populated by four smiling, brightly colored animals) gives way to a more violent vision, as the animals morph into weapons of war. Just when Suzy's confusion and fear reach an apex: "Then suddenly my dad's home." As in Collins's Hunger Games books, the fuzzy relationship between fear and bravery, and the reality of combat versus an imagined (or, in the case of those books, manufactured) version of it is at the forefront of this story. By the final pages, Suzy has come to understand that "Some things have changed but some things will always be the same." It's a deceptively simple message of reassurance that readers who may currently be in Suzy's situation can take to heart, whether their loved ones return changed, as hers did, or don't return at all. Ages 4–up."</p>
                    <p className="text-right">--Publishers Weekly, STARRED REVIEW</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Suzanne Collins, author of the famously bloody "Hunger Games" trilogy, has written a picture-book memoir about what life at home is like for a child whose father has gone away to war. Collins's own father went to Vietnam the year she turned 6, and she's said the experience had a profound effect on him. But though post-traumatic stress disorder is often spoken of these days, the more subtle effects of war on the children of men and women serving abroad are less well known. "Year of the Jungle" is narrated by a little red-haired girl named Sue, whose father reads her poems by Ogden Nash... With text and illustrations that invite close reading, this will be a powerful title to share with children well beyond picture-book age."</p>
                    <p className="text-right">--The New York Times, Danielle Trussoni</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Suzanne Collins' autobiographical picture book, Year of the Jungle: Memories from the Home Front, seems a sharp departure for the author of The Hunger Games, the best-selling dystopian trilogy. But in a reassuring and deceptively simple way, Jungle, aimed at readers 4 and up, continues Collins' exploration of the effect of war and violence on kids... Proimos' ink-lined, digitally colored illustrations are the pitch-perfect tonal complement to Collins' narration."</p>
                    <p className="text-right">--USA Today, Bob Minzesheimer, 3 1/2 OUT OF 4 STARS</p>
                  </div>

                  <div className="space-y-4">
                    <p>"First-grader Suzy's father is in the jungles of Vietnam for a year. Through a tightly controlled child's point of view, readers live the year with little Suzy in the sheltered world her parents have built for her... With a notable lack of patriotic rhetoric or clichés about bravery and honor, Collins holds firm to her childhood memories, creating a universal story for any child whose life is disrupted by war. Important and necessary."</p>
                    <p className="text-right">--Kirkus Reviews, STARRED REVIEW</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Collins mines her own experience to tell a tender, personal story of war seen through a child's eyes. Firstgrader Suzy's father is deployed to Viet Nam... Collins' unflinching first-person account details the fears and disappointments of the situation as a child would experience them. And where more realistic illustrations would feel overwrought and sentimental, Proimos's flat, cartoony drawings, with their heavy lines and blocky shapes, are sturdy and sweet, reflecting a child's clear-eyed innocence."</p>
                    <p className="text-right">--Booklist, STARRED REVIEW</p>
                  </div>

                  <div className="space-y-4">
                    <p>"This moving picture book recounts, through the author's eyes as a child, the year of her father's military tour of duty in Viet Nam... Vibrantly colored cartoon illustrations, outlined in thick black ink, underscore a child's point of view... The author's spot-on memories paired with child-friendly art create a universal exploration of war and its effect on young children."</p>
                    <p className="text-right">--School Library Journal</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Collins, well known for her middle-school and YA fantasies, offers here a radical change of pace in this picture book story inspired by her own childhood, documenting the year young Suzy's father goes off to the Vietnam War... Collins' text is simple, but it's rich in the telling details that establish the pervasive fear that spills over into other aspects of the little girl's life."</p>
                    <p className="text-right">--The Bulletin of the Center for Children's Books, STARRED REVIEW</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Hunger Games trilogy author Suzanne Collins reverts to her years writing for youth television programming like Scholastic Entertainment's Clifford's Puppy Days for Year of the Jungle, her latest book release for her youngest audience yet... For three years, Collins thumbed through postcards and gifts her father gave her while he was overseas."</p>
                    <p className="text-right">--The Hollywood Reporter</p>
                  </div>

                  <div className="space-y-4">
                    <p>"YEAR OF THE JUNGLE is a moving, personal account of how it feels to have a parent off at war when you're too young to understand what war means or how long a year is... Collins deftly balances the fear and freakout of a little girl who learns her dad's in danger with the upbeat, optimistic portrayal of a kid going about the business of being a kid."</p>
                    <p className="text-right">--Common Sense Media, 5 OUT OF 5 STARS</p>
                  </div>

                  <div className="space-y-4">
                    <p>"In the last book of the "Hunger Games" trilogy, author Suzanne Collins offered a bleak vision of war that felt personal. Now we know the source. In "Year of the Jungle" (Scholastic, $17.99, ages 4 and older), Collins writes a child's-eye memoir of life during her father's tour in Vietnam... Soldiers who go to war leave questions for families to live with, and children are experts at filling in gaps."</p>
                    <p className="text-right">--Newsday</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Year of the Jungle: Memories from the Home Front by Suzanne Collins, illustrated by James Proimos (Scholastic £10.99), is an unusual, brave autobiographical experiment from the author of The Hunger Games. It is about the year Collins's father was deployed to Vietnam when she was a child. It's not sensational but nor does it evade the emotional issues involved... Not an uncontroversial read yet not to be missed."</p>
                    <p className="text-right">--The Guardian/The Observer</p>
                  </div>

                  <div className="space-y-4">
                    <p>"A masterful picture book excels at revealing a young child's experience during the year her father is away at war... Suzanne Collins mines her own childhood memories, transforming them with tremendous skill into a story that is resonant and truthful and timeless and remarkably child-centered. James Proimos's illustrations are stylistically simple but wisely executed, full of sensitivity and power and poignancy, along with occasional moments of whimsy."</p>
                    <p className="text-right">--Cooperative Children's Book Center</p>
                  </div>
                </div>
              </>
            ) : null}
            {book.title === 'Gregor and the Curse of the Warmbloods' ? (
              <>
                <div className="mx-auto max-w-2xl space-y-4 text-center font-semibold tracking-[0.02em] text-[#4f463d]">
                  <p>A NEW YORK TIMES BESTSELLING SERIES</p>
                  <p>A BOOK SENSE BESTSELLING SERIES</p>
                  <p>A BOOK SENSE TOP TEN CHILDREN'S PICK</p>
                  <p>OPPENHEIM TOY PORTFOLIO GOLD AWARD WINNER</p>
                </div>

                <div className="mt-16 space-y-8 text-left">
                  <div className="space-y-4">
                    <p>"This immensely readable installment won't disappoint fans of the first two books... Character development, plotting, pacing, and description all shine; suspenseful chapter endings propel the story forward to its shocking and sobering conclusion."</p>
                    <p className="text-right">--The Horn Book Magazine</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Collins maintains the momentum, charm, and vivid settings of the original title. The characterizations continue to be complex with each new book, revealing new sides to familiar individuals. Fans of this inventive series and new readers alike will be instantly caught up in the action and will look forward to future installments."</p>
                    <p className="text-right">--School Library Journal</p>
                  </div>

                  <div className="space-y-4">
                    <p>"The strong, likeable characters, easy reading level, and nonstop action make this series attractive to even reluctant readers."</p>
                    <p className="text-right">--VOYA</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Collins keeps the plot moving at warp speed and includes just enough background to bring readers up to speed on the multitude of characters and the political rivalries that unite and divide them. This offering takes on an even darker tone than the earlier ones, delving into meaty questions of territorial expansion and its justification. Although no further prophecy is unveiled at the end to explicitly promise another sequel, readers will surely be hoping for one."</p>
                    <p className="text-right">--Kirkus Reviews</p>
                  </div>

                  <div className="space-y-4">
                    <p>"The addition of the mother adds a fresh dynamic to the fast-paced, suspenseful story. Fans of the series will enjoy this latest, skillfully told adventure."</p>
                    <p className="text-right">--Booklist</p>
                  </div>
                </div>
              </>
            ) : null}
            {book.title === 'Gregor and the Marks of Secret' ? (
              <>
                <div className="mx-auto max-w-2xl space-y-4 text-center font-semibold tracking-[0.02em] text-[#4f463d]">
                  <p>A NEW YORK TIMES BESTSELLING SERIES</p>
                  <p>A BOOK SENSE BESTSELLING SERIES</p>
                </div>

                <div className="mt-16 space-y-8 text-left">
                  <div className="space-y-4">
                    <p>"In this penultimate volume in "The Underland Chronicles," Collins begins to gather herself for the grand finale...The cliffhanger ending will leave readers gasping as Gregor goes chasing another prophecy, the direst yet."</p>
                    <p className="text-right">--Kirkus Reviews, STARRED REVIEW</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Collins keeps the tension and the stakes high; vivid description, expert pacing, and subtle character development all enhance this gripping fantasy adventure. At the conclusion, we leave Gregor heading into what promises to be an interspecies conflict of epic proportions. "Who would he be...if he survived?" Readers will have to wait for the fifth (and final?) book to find out. K.F."</p>
                    <p className="text-right">--The Horn Book Magazine</p>
                  </div>

                  <div className="space-y-4">
                    <p>"The breathless pace, intense drama, and extraordinary challenges will leave fans clamoring for the conclusion of this fine series."</p>
                    <p className="text-right">--School Library Journal</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Gregor is getting into more trouble: for generations rats have run the mice out of their lands; but now the mice are vanishing completely, and Gregor must join the queen Luxa on a fact-finding mission to discovery why. For once no prophecy seems involved – until he discovers a truth which will lead him to the final prophecy he must fulfill. More sizzling adventure evolves during his quest for mice."</p>
                    <p className="text-right">--Midwest Book Review</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Fans will be panting for this next installment that follows Gregor and the Curse of the Warm Bloods."</p>
                    <p className="text-right">--VOYA</p>
                  </div>
                </div>
              </>
            ) : null}
            {book.title === 'Gregor and the Code of Claw' ? (
              <>
                <div className="mx-auto max-w-2xl space-y-4 text-center font-semibold tracking-[0.02em] text-[#4f463d]">
                  <p>A NEW YORK TIMES BESTSELLING SERIES</p>
                  <p>A BOOK SENSE BESTSELLING SERIES</p>
                  <p>USA TODAY BESTSELLER</p>
                  <p>A BOOK SENSE CHILDREN'S PICK</p>
                  <p>CCBC CHOICES 2008</p>
                  <p>2009 ALSC NOTABLE CHILDREN'S RECORDING (audio version)</p>
                  <p>Read by Paul Boehmer</p>
                </div>

                <div className="mt-16 space-y-8 text-left">
                  <div className="space-y-4">
                    <p>"Perhaps Collins's greatest achievement in these tales is the effortless introduction of weighty geopolitical ethics into rip-roaring adventure. It seems as elusive in the Underland as up above, but Gregor and his companions, including the unforgettable rat Ripred, may yet find a way. The resolution is bittersweet but faintly hopeful—a fitting end for an unflinchingly gutsy series whose deftly drawn characters have always lived dangerously."</p>
                    <p className="text-right">--Kirkus Reviews</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Collins delivers more of what's made this series so compelling: vivid action scenes, detailed military machinations, and nuanced character development. The plot moves swiftly but with deliberation, reflecting the Regalian leaders' strategic chess-game approach to the conflict. In the end, though the unimaginable doesn't happen, no one is without physical and emotional scars. Readers, too, will be battle-weary but buoyed by Collins's ultimate message of hope. As the Underlanders would say: fly you high, Gregor."</p>
                    <p className="text-right">--The Horn Book Magazine</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Consistent quality has been a hallmark of this series. Although the story line has gradually become darker, Gregor maintains his endearing qualities as a reluctant hero. His love for his family and his compassion for his friends never flag. The world of Regalia, located below the streets of New York City, presents a magical realm of possibilities for young readers of this excellent acquisition for any library."</p>
                    <p className="text-right">--VOYA</p>
                  </div>

                  <div className="space-y-4">
                    <p>"A realistic conclusion, including the loss of old friends and a message about the importance of peace and trust, leaves readers with a sense of optimism about the future of the Underland. Friends and foes from the previous volumes reappear here, and Gregor's self-doubts and changing relationship with Luxa add to his depth as a protagonist. Fans of the series will find much to appreciate, from an enigmatic prophecy to the complex rat Ripred, and they'll be drawn in by Collins's tight pacing and sense of urgency."</p>
                    <p className="text-right">--School Library Journal</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Another outstanding, riveting Gregor fantasy."</p>
                    <p className="text-right">--Midwest Book Review</p>
                  </div>

                  <div className="space-y-4">
                    <p>"The book is fast-paced, easy to read and contains plenty of battle scene and gore for young readers. But it also deals with a boy suddenly forced to make major decisions and face the true and terrible realism of war. The so-called "traitor rat," Ripred reappears and we learn the story behind his decision to join the forces opposed to The Bane. I find Ripred to be one of the most fascinating characters in the book. Armchair Interviews says: Fans of the earlier four books will find plenty of enjoy with this one."</p>
                    <p className="text-right">--Armchair Interviews</p>
                  </div>
                </div>
              </>
            ) : null}
            {book.title === 'Mockingjay' ? (
              <>
                <div className="mx-auto max-w-2xl space-y-4 text-center font-semibold tracking-[0.02em] text-[#4f463d]">
                  <p>#1 USA TODAY BESTSELLER</p>
                  <p>#1 NEW YORK TIMES BESTSELLER</p>
                  <p>#1 WALL STREET JOURNAL BESTSELLER</p>
                  <p>#1 PUBLISHERS WEEKLY BESTSELLER</p>
                  <p>NEW YORK TIMES NOTABLE CHILDREN'S BOOK OF 2010</p>
                  <p>PUBLISHERS WEEKLY'S BEST BOOKS OF 2010: CHILDREN'S FICTION</p>
                  <p>A BOOKLIST EDITORS' CHOICE, 2010</p>
                  <p>A KIRKUS BEST BOOK OF 2010</p>
                  <p>NPR BEST BOOKS OF 2010</p>
                  <p>A NEW YORK TIMES EDITORS' CHOICE</p>
                  <p>A CHRISTIAN SCIENCE MONITOR'S BEST CHILDREN'S BOOKS OF 2010</p>
                  <p>AN IRA YOUNG ADULTS' CHOICES BOOK FOR 2011</p>
                  <p>YALSA'S TEENS' TOP TEN, 2011</p>
                  <p>2011 CHILDREN'S CHOICE BOOK AWARD — TEEN CHOICE BOOK OF THE YEAR NOMINEE — AUTHOR OF THE YEAR NOMINEE</p>
                  <p>CCBC CHOICES 2011</p>
                  <p>2011 LOCUS AWARD FINALIST</p>
                  <p>2010 NEBULA AWARD — ANDRE NORTON AWARD FOR YA SCIENCE FICTION AND FANTASY NOMINEE</p>
                  <p>BARNES &amp; NOBLE BEST TEEN BOOKS OF 2010</p>
                  <p>AMAZON BEST BOOKS OF 2010: #3 ON CUSTOMER FAVORITES LIST</p>
                  <p>2010 GOODREADS CHOICE AWARDS — YOUNG ADULT FANTASY AND FAVORITE BOOK OF 2010 — WINNER</p>
                </div>

                <div className="mt-16 space-y-8 text-left">
                  <div className="space-y-4">
                    <p>"At its best the trilogy channels the political passion of "1984," the memorable violence of "A Clockwork Orange," the imaginative ambience of "The Chronicles of Narnia" and the detailed inventiveness of "Harry Potter." The specifics of the dystopian universe, and the fabulous pacing of the complicated plot, give the books their strange, dark charisma."</p>
                    <p className="text-right">--The New York Times, Katie Roiphe</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Collins does several things brilliantly, not the least of which is to provide heart-stopping chapter endings that turn events on their heads and then twist them once more. But more ambitious is the way she brings readers to questions and conclusions about war throughout the story. There's nothing didactic here, and sometimes the rush of events even obscures what message there is. Yet readers will instinctively understand what Katniss knows in her soul, that war mixes all the slogans and justifications, the deceptions and plans, the causes and ideals into an unsavory stew whose taste brings madness. That there is still a human spirit that yearns for good is the book's primrose of hope."</p>
                    <p className="text-right">--Booklist, STARRED REVIEW</p>
                  </div>

                  <div className="space-y-4">
                    <p>"This dystopic-fantasy series, which began in 2008, has had such tremendous crossover appeal that teens and parents may discover themselves vying for -- and talking about -- the family copy of 'Mockingjay.' And there's much to talk about because this powerful novel pierces cheery complacency like a Katniss-launched arrow. Look skeptically at computer and television images, it suggests, be aware of spin, gaze upon the young faces of the world's soldiers. Children forced to kill children? It's not just in the pages of a novel."</p>
                    <p className="text-right">--The Washington Post</p>
                  </div>

                  <div className="space-y-4">
                    <p>"The indelible conclusion to Suzanne Collins' Hunger Games trilogy proves once more that the greatest fantasy novels hold an incandescent mirror up to reality."</p>
                    <p className="text-right">--Parade, Parade Picks</p>
                  </div>

                  <div className="space-y-4">
                    <p>"But being the Mockingjay comes with a price as Katniss must come to terms with how much of her own humanity and sanity she can willingly sacrifice for the cause, her friends, and her family. Collins is absolutely ruthless in her depictions of war in all its cruelty, violence, and loss, leaving readers, in turn, repulsed, shocked, grieving and, finally, hopeful for the characters they've grown to empathize with and love. Mockingjay is a fitting end to the series that began with The Hunger Games (2008) and Catching Fire (2009) and will have the same lasting resonance as William Golding's Lord of the Flies and Stephen King's The Stand."</p>
                    <p className="text-right">--School Library Journal</p>
                  </div>

                  <div className="space-y-4">
                    <p>"The final installment, the grimmest yet, is a riveting meditation on the costs of war...Clear your schedule before you start: This is a powerful, emotionally exhausting final volume."</p>
                    <p className="text-right">--People Magazine, 4 OUT OF 4 STARS</p>
                  </div>

                  <div className="space-y-4">
                    <p>"This concluding volume in Collins's Hunger Games trilogy accomplishes a rare feat, the last installment being the best yet, a beautifully orchestrated and intelligent novel that succeeds on every level... In short, there's something here for nearly every reader, all of it completely engrossing."</p>
                    <p className="text-right">--Publishers Weekly, STARRED REVIEW</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Fans will be happy to hear that Mockingjay is every bit as complex and imaginative as Hunger Games and Catching Fire. Collins has kicked the brutal violence up a notch in an edge-of-your-seat plot that follows Katniss as she tries to fulfill her role, protect her mother and sister and, in the end, finally choose between her two greatest loves. B+."</p>
                    <p className="text-right">--Entertainment Weekly</p>
                  </div>

                  <div className="space-y-4">
                    <p>"'Mockingjay' is without question the most brutal of the trilogy. Nobody emerges unscathed – very bad things happen to everyone from fan favorites down to characters so minor a reader has to pause and think, 'Now, who was that again?' before recoiling in horror at their fate. Collins doesn't take war lightly – her characters debate the morality involved in tactics used to try to overthrow the rotting, immoral government, and they pay a high cost for those tactics. It is also an entirely gripping read. In Katniss, Collins has crafted a heroine so fierce and tenacious that this reader will follow her anywhere."</p>
                    <p className="text-right">--Christian Science Monitor</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Much of the action takes place on a battlefield akin to Iraq — where innocent civilians are murdered to further a cause and each side resorts to unsavory tactics that could lead to a terrorist label. More maudlin than the first two books in the series, 'Mockingjay' is also the most violent and bloody and, based on the actions and statements of its characters, its most overtly antiwar — though not so much that it distracts from a series conclusion that is nearly as shocking, and certainly every bit as original and thought provoking, as 'The Hunger Games.' Wow."</p>
                    <p className="text-right">--Los Angeles Times</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Suspenseful... Collins' fans, grown-ups included, will race to the end."</p>
                    <p className="text-right">--USA Today</p>
                  </div>

                  <div className="space-y-4">
                    <p>"Throughout the trilogy, Collins has asked readers to consider heavy questions. What level of violence is justified to achieve needed change? How much integrity can one compromise for a just end? To what extent does responsibility to others demand sacrifice of self? How much control does anyone have over the construction of self? Katniss is the ideal vehicle for this dialogue, her present-tense narration constantly putting her own motivations and even identity under scrutiny. It's not giving away anything to reveal that Katniss will be tested sorely, that allegiances will shift, that heart-thumping scenes of combat will yield to anguished reflection, that she and readers will find themselves always wondering just whom to trust, that she and readers will lose friends they love. In the final analysis, this is exactly the book its fans have been hoping for. It will grab them and not let go, and if it leaves them with questions, well, then, it's probably exactly the book Collins was hoping for, too."</p>
                    <p className="text-right">--Kirkus, STARRED REVIEW</p>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>

        <div className="border-t border-[#ead2ae] bg-[#f8ead2] px-5 py-4 sm:px-8 sm:py-5">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center border border-[#e4c9a2] bg-white px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#b6480c] transition hover:-translate-y-0.5 hover:bg-[#fff6eb]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BooksPage() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get('view') || 'books';
  const [activeCategory, setActiveCategory] = useState('The Hunger Games');
  const [activeInterview, setActiveInterview] = useState(null);
  const [activeBook, setActiveBook] = useState(null);

  const closeInterview = () => setActiveInterview(null);
  const closeBook = () => setActiveBook(null);

  const visibleBooks =
    activeCategory === 'All Books'
      ? books
      : books.filter((book) => book.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f7ebdb] text-[#543f2c]">
      <SiteHeader />

      <main id="home">
        <section
          className="relative overflow-hidden border-b border-[#e8caa0] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
          style={{
            backgroundImage: `linear-gradient(rgba(248, 236, 219, 0.82), rgba(248, 236, 219, 0.84)), radial-gradient(circle at top, rgba(255, 255, 255, 0.28), transparent 44%), linear-gradient(135deg, rgba(186, 159, 118, 0.12), rgba(130, 94, 58, 0.06)), url(${booksInterviewCoverPage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <ScrollReveal className="mx-auto flex max-w-7xl flex-col items-center text-center" offset={18}>
            <h1 className="font-display text-5xl text-[#b64d0a] sm:text-6xl lg:text-[4.4rem]">Books & Interviews</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#5f5448] sm:text-lg">
              Explore Suzanne Collins&apos; complete literary collection and read exclusive interviews about her work.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/books-interviews?view=books"
                className={`inline-flex items-center justify-center px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition ${
                  view === 'books'
                    ? 'bg-[#ff7a11] text-white'
                    : 'border border-[#f0c99c] bg-[#fff3df] text-[#c87434]'
                }`}
              >
                Books
              </Link>
              <Link
                to="/books-interviews?view=interviews"
                className={`inline-flex items-center justify-center px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition ${
                  view === 'interviews'
                    ? 'bg-[#ff7a11] text-white'
                    : 'border border-[#f0c99c] bg-[#fff3df] text-[#c87434]'
                }`}
              >
                Interviews
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {view === 'books' ? (
          <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 border border-[#f0d3a8] bg-[#fff7ec] p-2">
              {categoryTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveCategory(tab)}
                  className={`rounded-sm px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition ${
                    activeCategory === tab
                      ? 'bg-[#ff7a11] text-white'
                      : 'bg-white text-[#b6480c] hover:bg-[#fff1df]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </section>
        ) : null}

        {view === 'books' ? (
          <>
            <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
              <div className="space-y-4">
                  {visibleBooks.map((book, index) => (
                    <BookCard key={book.title} book={book} onLearnMore={setActiveBook} delay={index * 80} />
                ))}
              </div>
            </section>

            <section id="available-now" className="border-t border-[#e8caa0] bg-[linear-gradient(rgba(252,242,226,0.96),rgba(252,242,226,0.96))] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
              <ScrollReveal className="mx-auto max-w-4xl text-center" offset={18}>
                <h2 className="font-display text-4xl text-[#b6480c] sm:text-5xl">Available Now</h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5f5448]">
                  All books are available at major retailers in hardcover, paperback, eBook, and audiobook formats.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://www.scholastic.com/"
                    className="inline-flex items-center justify-center bg-[#ff7a11] px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#e66100]"
                  >
                    Scholastic
                  </a>
                  <a
                    href="https://www.amazon.com/"
                    className="inline-flex items-center justify-center border border-[#f0c99c] bg-white px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#b6480c] transition hover:-translate-y-0.5 hover:bg-[#fff6eb]"
                  >
                    Find a Retailer
                  </a>
                </div>
              </ScrollReveal>
            </section>
          </>
        ) : (
          <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
            <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
              {interviewItems.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  as="article"
                  delay={index * 90}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveInterview(item)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setActiveInterview(item);
                    }
                  }}
                  className="group block h-full cursor-pointer text-left outline-none"
                  offset={18}
                >
                  <div className="flex h-full flex-col border border-[#f0c99c] bg-[#fffaf1] p-6 text-left shadow-[0_12px_32px_-24px_rgba(84,63,44,0.45)] transition group-hover:-translate-y-0.5 group-hover:border-[#e6b980] group-hover:shadow-[0_18px_40px_-26px_rgba(84,63,44,0.55)] sm:p-7">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ffd9bf] text-xl text-[#ff6d13]">
                        🗨
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#ff6d13]">
                          <span className="rounded-sm bg-[#ffd9bf] px-2 py-1 text-[#ff6d13]">{item.type}</span>
                          <span className="text-[#bfa57f]">{item.year}</span>
                        </div>
                        <h2 className="mt-2 font-display text-3xl leading-tight text-[#b6480c]">{item.title}</h2>
                      </div>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5448]">{item.description}</p>
                    <p className="mt-auto pt-6 text-[0.68rem] uppercase tracking-[0.18em] text-[#8f7f6b]">{item.source}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {activeInterview ? <InterviewModal item={activeInterview} onClose={closeInterview} /> : null}
        {activeBook ? <BookModal book={activeBook} onClose={closeBook} /> : null}

        <footer id="footer" className="border-t border-[#d3b48f] bg-[#f5e0bf] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
            <div>
              <p className="font-display text-2xl text-[#b84a0d]">Suzanne Collins</p>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#6f6257]">
                Award-winning author of The Hunger Games trilogy and The Underland Chronicles series.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff6d13]">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm text-[#6f6257]">
                <li><Link to="/" className="transition hover:text-[#b84a0c]">Home</Link></li>
                <li><Link to="/about" className="transition hover:text-[#b84a0c]">About</Link></li>
                <li><Link to="/books-interviews" className="transition hover:text-[#b84a0c]">Books and Interviews</Link></li>
                <li><Link to="/audio-books" className="transition hover:text-[#b84a0c]">Audio Books</Link></li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff6d13]">Publishers</p>
              <ul className="mt-4 space-y-2 text-sm text-[#6f6257]">
                <li>Scholastic Press</li>
                <li>Scholastic Audio Books</li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-7xl border-t border-[#e3c7a1] pt-6 text-center text-sm text-[#9a8772]">
            © 2026 Suzanne Collins. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default BooksPage;
