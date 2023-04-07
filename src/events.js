// Creates data for application to render from

const musicEvents = [
    {
        name: '6lack',
        date: 'November 25th, 2017',
        venue: 'The Tabernacle',
        thumbnail: require('./images/6lack/6lackThumbnail.jpg'),
        path: '6lack',
        description: `As this was my first concert, I had no clue what I was going into. That being said, I believe that this was a great first experience. When I attended this concert, I was in the 11th grade as a 17 year old. It was 6lack's first tour shortly after releasing his debut album. I was fortunate enough to meet him before the show. He put on a great first show, performing nearly every song on his new album. I enjoyed the darker aesthetic of the show that went along with the album, along with great vocal performances. The show was so high in demand that he needed to book more shows for this venue due to the location, which is where he originated from. As a bonus, he brought out YFN Lucci as a surprise guest. Sabrina Claudio also put on a great show as an opener.`,
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci'],
        images: [require('./images/6lack/6lack1.JPG'), require('./images/6lack/6lack2.jpg'), require('./images/6lack/6lack3.jpg'), require('./images/6lack/6lackGIF.gif'), require('./images/6lack/6lack4.jpg'), require('./images/6lack/6lack5.JPG'), require('./images/6lack/6lack6.jpg'), require('./images/6lack/6lack7.JPG'),]
    },
    {
        name: 'Travis Scott',
        date: 'November 13th, 2018',
        venue: 'State Farm Arena',
        thumbnail: require('./images/travisscott1/travisscott1thumbnail.jpg'),
        path: 'travisscott1',
        description: `This was my first ever massive concert. Travis Scott soared to fame shortly after releasing Astroworld. This album defined my senior year in high school. During this show I was located about 4 or 5 rows away from the stage. It wasn't as chaotic as I expected, however that's because I was tucked away in the coroner. Regardless, I still had a great experience. The stage setup was truly special and unique, as a roller coaster hovered over the audience, as Travis would get on the ride halfway through his set. The visuals provided a great psychedelic experience. Towards the end of the show, I had the pleasure of meeting Metro Boomin, as I realized he was standing right behind me. I will never forget seeing kids drinking straight out of soda fountains at State Farm Arena right after the show due to thirst.`,
        openers: ['Sheck Wes', 'Trippie Redd', 'Gunna'],
        guests: ['Lil Yachty', 'Lil Baby', 'Don Toliver'],
        images: [require('./images/travisscott1/travisscott1.jpg'), require('./images/travisscott1/travisscott2.jpg'), require('./images/travisscott1/travisscott3.jpg'), require('./images/travisscott1/travisscott4.jpg'), require('./images/travisscott1/travisscottgif1.gif'), require('./images/travisscott1/travisscott5.jpg'), require('./images/travisscott1/travisscott6.jpg'), require('./images/travisscott1/travisscott7.jpg'), require('./images/travisscott1/travisscottgif2.gif'), require('./images/travisscott1/travisscott8.jpg'), require('./images/travisscott1/travisscott9.jpg'), require('./images/travisscott1/travisscott10.jpg'),]
    },
    {
        name: 'Travis Scott',
        date: 'March 22nd, 2019',
        venue: 'State Farm Arena',
        thumbnail: require('./images/travisscott2/travisscott2thumbnail.jpg'),
        path: 'travisscott2',
        description: `While the first Travis Scott show I attended was great, this one was leagues better. During this show, I got the opportunity to stay in the middle of the crowd. I started the show at about the second row, however ended up 10th row by the end of the show. This night was pure chaos. Mosh pits opened up for every song, I even lost my friend during Butterfly Effect. I lost my shoe during the show, however I somehow got it back. During Mamacita, Travis had us open up a mosh pit down the arena, that happened to be the length of the arena, which is exactly where I was. This is by far my favorite concert experience. Travis brought every special guest that represented the Atlanta trap scene for the last 10 years. This night was truly an amazing experience.`,
        openers: ['Sheck Wes'],
        guests: ['Lil Yachty', '2 Chainz', 'Rick Ross', 'Young Thug', 'Future'],
        images: [require('./images/travisscott2/travisscott1.jpg'), require('./images/travisscott2/travisscott2.JPG'), require('./images/travisscott2/travisscott3.jpg'), require('./images/travisscott2/travisscottgif1.gif'), require('./images/travisscott2/travisscott4.jpg'), require('./images/travisscott2/travisscott5.JPG'), require('./images/travisscott2/travisscott6.jpg'), require('./images/travisscott2/travisscottgif2.gif'), require('./images/travisscott2/travisscott7.jpg'), require('./images/travisscott2/travisscott8.JPG'), require('./images/travisscott2/travisscott9.jpg'), require('./images/travisscott2/travisscottgif3.gif'),]
    },
    // {
    //     name: 'Kanye West',
    //     date: 'September 15th, 2019',
    //     venue: 'New Birth Missionary Baptist Church',
    //     thumbnail: require('./images/kanyewest/kanyethumbnail.jpg'),
    //     path: 'kanyewest',
    //     description: `This may not be a concert, however, with someone as indecisive as Ye, I figured I might not be able to see him again. Therefore, I had to attend this event. This was during Music Midtown weekend, and Travis Scott was performing again, however I wasn't able to go. My friend felt bad about it and sent me an Instagram post about Kanye hosting Sunday Service here. I saw this right when I woke up, and walked out the door 10 mins after. I got to the church and got a seat. I saw that other kids my age were there, in their Travis Scott t-shirts. After the sermon, Kanye came out and held his Sunday Service. I managed to get a good spot. I stood about 3 feet from T.I. along with 2 Chainz. Jermaine Dupree was also there, along with Elijah Connor, who is apparently the younger cousin of late musician Prince, who you would recognize from that one GIF with Sean Combs.`,
    //     openers: ['The World Famous Tony Williams'],
    //     guests: ['T.I. & Tiny', '2 Chainz', 'Jermaine Dupree', 'Elijah Connor'],
    //     images: [require('./images/kanyewest/kanye1.jpg'), require('./images/kanyewest/kanye2.jpg'), require('./images/kanyewest/kanyegif1.gif'), require('./images/kanyewest/kanye3.jpg'),]
    // },
    {
        name: 'James Blake',
        date: 'October 15th, 2021',
        venue: 'The Tabernacle',
        thumbnail: require('./images/jamesblake/jamesblakethumbnail.JPG'),
        path: 'jamesblake',
        description: `After a long drought of live performances due to the COVID-19 Pandemic, I was very excited for another concert. James Blake went on tour for his new album 'Friends that Break Your Heart', which I personally really enjoyed. He performed a good range of his own songs, from his Post-Dubstep era, all the way up to his current Electronic R&B music. His visuals were spot on, with LED bars on the side of the stage. His show was all performed live by timing instrumentals, multiple pianos, soundboards, and an electronic drum kit, which was assisted by 2 other members on stage. His vocals sounded amazing, especially when he covered 'Godspeed' by Frank Ocean, which was written by Blake. He finished the show by covering Joni Mitchell's 'A Case of You'. He also brought out Atlanta locals JID and SwaVay to perform frozen together. His opener also brought out Lil Yachty for a guest feature, which makes it only the third time I've seen him live. Overall, it was such a great performance and I'm excited to see him again one day. No rush, James.`,
        openers: ['Fousheé'],
        guests: ['Lil Yachty', 'JID', 'SwaVay', 'Monica Martin'],
        images: [require('./images/jamesblake/jamesblake1.jpg'), require('./images/jamesblake/jamesblake2.jpg'), require('./images/jamesblake/jamesblake3.jpg'),  require('./images/jamesblake/jamesblakegif1.gif'), require('./images/jamesblake/jamesblake4.jpg'), require('./images/jamesblake/jamesblake5.jpg'),  require('./images/jamesblake/jamesblakegif2.gif'), require('./images/jamesblake/jamesblake6.jpg'), require('./images/jamesblake/jamesblake7.jpg'), require('./images/jamesblake/jamesblake8.jpg')]
    },
    {
        name: 'Tyler, The Creator',
        date: 'March 25th, 2022',
        venue: 'Gas South Arena',
        thumbnail: require('./images/tylerthecreator/tylerthumbnail.jpg'),
        path: 'tylerthecreator',
        description: `During the summer of 2021, Tyler dropped a great album that captured the vibe of a summer vacation. Going into this concert, I had no clue what to expect. I had no clue what his crowd would be like. When I think of Tyler fans, I think of introverted art students that don't cause much of a ruckus. I was proven completely wrong. I feel as if this concert itself topped Travis Scott in chaos. There were multiple moshpits, which truly caught me surprised with how energetic they were. The show's visuals were impressive, as the stage was set up as a massive house, with a 1930's Rolls Royce that came up from the stage. A boat also traveled down the crowd onto another stage. Tyler's openers did great too, as they all had their own unique stage setup, and put on a wonderful performance. I never thought that I would mosh to Kali Uchis but I'm not complaining. Tyler mentioned that there were a few special guests in attendance, which I found out to be Westside Gunn and DJ Drama. Tyler put on a great show.`,
        openers: ['Teezo Touchdown, Vince Staples, Kali Uchis'],
        guests: ['None'],
        images: [require('./images/tylerthecreator/tyler1.jpg'), require('./images/tylerthecreator/tylergif1.gif'), require('./images/tylerthecreator/tyler2.jpg'), require('./images/tylerthecreator/tylergif2.gif'), require('./images/tylerthecreator/tyler3.jpg'), require('./images/tylerthecreator/tylergif3.gif'), require('./images/tylerthecreator/tyler4.jpg'), require('./images/tylerthecreator/tylergif4.gif'), require('./images/tylerthecreator/tyler5.jpg'), require('./images/tylerthecreator/tylergif5.gif')]
    },
    {
        name: 'Nine Inch Nails',
        date: 'April 30th, 2022',
        venue: 'Shaky Knees Festival',
        thumbnail: require('./images/nin/ninthumbnail.JPG'),
        path: 'nineinchnails',
        description: `Over the course of the pandemic, I really got into Nine Inch Nails. I found the experimental approach to their music was impressive, along with the content and expressions that were expressed throughout the entire record 'The Downward Spiral'. When I saw that Nine Inch Nails was coming to Atlanta at the Shaky Knees Festival, I knew I had to go. I bought just a one day ticket, which is all I needed. I spent about 6 hours at the festival before they came on stage at about 9PM. About one hour before they're set, I managed to find 2 friends from high school in the same row as me, just 10 people away. Which I found amazing, considering that over 30,000 people were in the crowd. Nine Inch Nails hit the stage at 9, and started off with Mr. Self Destruct, which was perfect. They put on an amazing performance, and closed with the song Hurt. I'm hoping they one day go on tour again if they release a new album. I believe that this was possibly the loudest show I have ever been to. I think it was worth the hearing damage.`,
        openers: ['None'],
        guests: ['None'],
        images: [require('./images/nin/nin1.jpg'), require('./images/nin/ningif1.gif'), require('./images/nin/nin2.jpg'), require('./images/nin/ningif2.gif'),  require('./images/nin/nin3.jpg'), require('./images/nin/ningif3.gif')]
    },
    {
        name: 'Phoebe Bridgers',
        date: 'May 27th, 2022',
        venue: 'Cadence Bank Amphitheatre',
        thumbnail: require('./images/phoebebridgers/phoebethumbnail.jpg'),
        path: 'phoebebridgers',
        description: `During the summer of 2021, I found myself getting into Phoebe Bridgers when I heard her on Kid Cudi's 'Man on the Moon III', which was a fantastic record. The first song by Phoebe that stuck out to me was Funeral. The songwriting felt so emotional, which helped set a strong message and theme in her music. I quickly fell in love with her music, as I enjoy sad, downtempo music. I saw that she was coming to Buckhead, therefore I took the opportunity and bought tickets. This was the calmest concert I've ever been to. Her performance captured exactly what I found great about her music, emotional vulnerability. Her music is not afraid to express any sort of sad emotion. Her show ended with one of my favorite songs from her 'I Know the End', which is basically about the end of the world. This show left me excited to see what is next for her discography.`,
        openers: ['Charlie Hickey'],
        guests: ['None'],
        images: [require('./images/phoebebridgers/phoebe1.jpg'), require('./images/phoebebridgers/phoebe2.jpg'), require('./images/phoebebridgers/phoebegif1.gif'), require('./images/phoebebridgers/phoebe3.JPG')]
    },
    {
        name: 'Denzel Curry',
        date: 'June 18th, 2022',
        venue: 'The Tabernacle',
        thumbnail: require('./images/denzelcurry/denzelthumbnail.jpg'),
        path: 'denzelcurry',
        description: `As I said that Phoebe had the calmest concert I've ever been to, Denzel held the most chaotic show I've ever been to, topping Tyler and Travis. Denzel Curry came to the Tabernacle, which was the perfect size for an artist like him. His openers put on a great set, warming up the audience to what was coming. Once Denzel came out, it was moshpit after moshpit after moshpit. Only two songs didn't contain any mosh pits, the first song he performed and the last song. He performed a great mix of his songs, including the newest ones, and some of his older songs. The crowd was so energetic, that halfway through the show, me and a few others lost control of ourselves and nearly fell over. The floor was smeared in drinks and sweat. The show was so chaotic, I didn't get many videos or photos simply because of the fact that the crowd was so dangerous, I didn't want to risk losing my phone. After Zel's set, he came out with a surprise guest, Kenny Mason, who performed his song stick. When he came out, I was trying to figure out who it was on stage, but as I turned around, there was a moshpit that took up the entire floor, so I went ahead and just lived it out in celebration of such a good night.`,
        openers: ['RedVeil', 'PlayThatBoyZay'],
        guests: ['Kenny Mason'],
        images: [require('./images/denzelcurry/denzelgif1.gif'), require('./images/denzelcurry/denzel1.jpg'), require('./images/denzelcurry/denzelgif2.gif'), require('./images/denzelcurry/denzel2.jpg'), require('./images/denzelcurry/denzelgif3.gif')]
    },
    {
        name: 'Pusha T',
        date: 'June 21st, 2022',
        venue: 'Center Stage Theatre',
        thumbnail: require('./images/pushat/pushatthumbnail.jpg'),
        path: 'pushat',
        description: `Three days after I saw Denzel, I got to see Pusha T. This was the smallest venue I've ever been to, which was great because it made the night feel intimate. I happened to be front row, which gave me perfect opportunities for images as you can see. Pusha T put on such a great show. He ran through nearly most of his new album, "It's almost dry", along with nearly most of his album before 'Daytona'. Push performed songs that went all the way back to when he was in Eclipse with his brother. The show wasn't that chaotic, other than a few songs. This was great considering that Pusha T knew all of his lyrics. He had no mistakes, and put all of his effort into this show. Sadly, there were no surprise guests, but I thought it was such a great show considering the ticket only cost $35. I'm considering seeing him again in October simply because of how great the show was.`,
        openers: ['Rueben Vincent'],
        guests: ['None'],
        images: [require('./images/pushat/pushat1.jpg'), require('./images/pushat/pushat2.jpg'), require('./images/pushat/pushatgif1.gif'), require('./images/pushat/pushat3.jpg'), require('./images/pushat/pushatgif2.gif'), require('./images/pushat/pushat4.jpg'), require('./images/pushat/pushat5.jpg')]
    },
    {
        name: 'Kendrick Lamar',
        date: 'July 30th, 2022',
        venue: 'State Farm Arena',
        thumbnail: require('./images/kendricklamar/kendrickthumbnail.jpg'),
        path: 'kendricklamar',
        description: `After 5 long years, Kendrick Lamar finally dropped his long awaited album. When he announced his tour, two of my friends and I paid resell prices for floor seats. This concert was breathtaking. Kendrick performed for nearly 2 and a half hours, which is the longest I've ever seen anyone perform. His performance reflected the main theme of his album, self-reflection. A therapist narrated the entire show, as if Kendrick was in therapy himself. He played songs from Good Kid Maad City all the way up to Mr. Morale. His cousin, Baby Keem, opened for him, and later came out on stage for their hit song Family Ties. Kendrick's show had many different props and stage setups. Dolls, Pianos, Floating Panels, Plastic quarantine cubes that rise up into the air and are held up by mirrors. This show had it all. It was a great performance, coming from one who is known as the best artist of my generation. Not to mention, the dancers for the stage had great choreography. I'm excited to see Kendrick again one day sometime in the near future of 2032!`,
        openers: ['Tana Leone', 'Baby Keem'],
        guests: ['None'],
        images: [require('./images/kendricklamar/kendrick1.jpg'), require('./images/kendricklamar/kendrick2.jpg'), require('./images/kendricklamar/kendrick3.jpg'), require('./images/kendricklamar/kendrick4.jpg'), require('./images/kendricklamar/kendrickgif1.gif'), require('./images/kendricklamar/kendrick5.jpg'), require('./images/kendricklamar/kendrick6.jpg'), require('./images/kendricklamar/kendrick7.jpg'), require('./images/kendricklamar/kendrick8.jpg'), require('./images/kendricklamar/kendrickgif2.gif')]
    },
    {
        name: 'Kid Cudi',
        date: 'September 6th, 2022',
        venue: 'State Farm Arena',
        thumbnail: require('./images/kidcudi/kidcudithumbnail.jpg'),
        path: 'kidcudi',
        description: `As a decently big fan of Kid Cudi, I really wanted to see him one day. I really enjoyed his third installment in his “Man on the Moon” series, so I thought that this would be a great opportunity to see him. Unfortunately, tickets were quite expensive so I had to settle for nosebleeds. Even though I was far from the stage, I still really enjoyed the show. Strick from YSL and 070 Shake both opened for Cudi, and they both put on a really good performance. When Cudi made his arrival, his stage had a nice appearance. There were lots of stage props, such as mushrooms, rocks, fake grass, and really nice lighting, as you can see by the photos. He put on a really good set, as he performed a lot of his newer music and old music. My personal favorites were “She knows this”, “Mr. Rager”, and “Sept. 16th.” For anyone interested in Cudi, I highly recommend it. He put on a great performance.`,
        openers: ['Strick', '070 Shake'],
        guests: ['Chip the Ripper'],
        images: [require('./images/kidcudi/kidcudi1.jpg'), require('./images/kidcudi/kidcudi2.jpg'), require('./images/kidcudi/kidcudigif1.gif'), require('./images/kidcudi/kidcudi3.jpg'), require('./images/kidcudi/kidcudi4.jpg'), require('./images/kidcudi/kidcudigif2.gif')]
    }, 
    {
        name: 'JPEGMAFIA',
        date: 'October 12th, 2022',
        venue: 'The Masquerade',
        thumbnail: require('./images/jpegmafia/jpegmafiathumbnail.jpg'),
        path: 'jpegmafia',
        description: `After 5 long years, Kendrick Lamar finally dropped his long awaited album. When he announced his tour, two of my friends and I paid resell prices for floor seats. This concert was breathtaking. Kendrick performed for nearly 2 and a half hours, which is the longest I've ever seen anyone perform. His performance reflected the main theme of his album, self-reflection. A therapist narrated the entire show, as if Kendrick was in therapy himself. He played songs from Good Kid Maad City all the way up to Mr. Morale. His cousin, Baby Keem, opened for him, and later came out on stage for their hit song Family Ties. Kendrick's show had many different props and stage setups. Dolls, Pianos, Floating Panels, Plastic quarantine cubes that rise up into the air and are held up by mirrors. This show had it all. It was a great performance, coming from one who is known as the best artist of my generation. Not to mention, the dancers for the stage had great choreography. I'm excited to see Kendrick again one day sometime in the near future of 2032!`,
        openers: ['The Difference Machine'],
        guests: ['None'],
        images: [require('./images/jpegmafia/jpegmafia1.jpg'), require('./images/jpegmafia/jpegmafiagif1.gif'), require('./images/jpegmafia/jpegmafiathumbnail.jpg'), require('./images/jpegmafia/jpegmafiagif2.gif'), require('./images/jpegmafia/jpegmafia2.jpg'),require('./images/jpegmafia/jpegmafiagif3.gif')]
    }, 
    {
        name: 'Pusha T',
        date: 'October 14th, 2022',
        venue: 'Coca-Cola Roxy',
        thumbnail: require('./images/kendricklamar/kendrickthumbnail.jpg'),
        path: 'kidcudi',
        description: `After 5 long years, Kendrick Lamar finally dropped his long awaited album. When he announced his tour, two of my friends and I paid resell prices for floor seats. This concert was breathtaking. Kendrick performed for nearly 2 and a half hours, which is the longest I've ever seen anyone perform. His performance reflected the main theme of his album, self-reflection. A therapist narrated the entire show, as if Kendrick was in therapy himself. He played songs from Good Kid Maad City all the way up to Mr. Morale. His cousin, Baby Keem, opened for him, and later came out on stage for their hit song Family Ties. Kendrick's show had many different props and stage setups. Dolls, Pianos, Floating Panels, Plastic quarantine cubes that rise up into the air and are held up by mirrors. This show had it all. It was a great performance, coming from one who is known as the best artist of my generation. Not to mention, the dancers for the stage had great choreography. I'm excited to see Kendrick again one day sometime in the near future of 2032!`,
        openers: ['IDK'],
        guests: ['None'],
        images: [require('./images/kendricklamar/kendrick1.jpg'), require('./images/kendricklamar/kendrick2.jpg'), require('./images/kendricklamar/kendrick3.jpg'), require('./images/kendricklamar/kendrick4.jpg'), require('./images/kendricklamar/kendrickgif1.gif'), require('./images/kendricklamar/kendrick5.jpg'), require('./images/kendricklamar/kendrick6.jpg'), require('./images/kendricklamar/kendrick7.jpg'), require('./images/kendricklamar/kendrick8.jpg'), require('./images/kendricklamar/kendrickgif2.gif')]
    },
    {
        name: 'Turnstile',
        date: 'November 14th, 2022',
        venue: 'Coca-Cola Roxy',
        thumbnail: require('./images/kendricklamar/kendrickthumbnail.jpg'),
        path: 'kidcudi',
        description: `After 5 long years, Kendrick Lamar finally dropped his long awaited album. When he announced his tour, two of my friends and I paid resell prices for floor seats. This concert was breathtaking. Kendrick performed for nearly 2 and a half hours, which is the longest I've ever seen anyone perform. His performance reflected the main theme of his album, self-reflection. A therapist narrated the entire show, as if Kendrick was in therapy himself. He played songs from Good Kid Maad City all the way up to Mr. Morale. His cousin, Baby Keem, opened for him, and later came out on stage for their hit song Family Ties. Kendrick's show had many different props and stage setups. Dolls, Pianos, Floating Panels, Plastic quarantine cubes that rise up into the air and are held up by mirrors. This show had it all. It was a great performance, coming from one who is known as the best artist of my generation. Not to mention, the dancers for the stage had great choreography. I'm excited to see Kendrick again one day sometime in the near future of 2032!`,
        openers: ['Strick', '070 Shake'],
        guests: ['Chip the Ripper'],
        images: [require('./images/kendricklamar/kendrick1.jpg'), require('./images/kendricklamar/kendrick2.jpg'), require('./images/kendricklamar/kendrick3.jpg'), require('./images/kendricklamar/kendrick4.jpg'), require('./images/kendricklamar/kendrickgif1.gif'), require('./images/kendricklamar/kendrick5.jpg'), require('./images/kendricklamar/kendrick6.jpg'), require('./images/kendricklamar/kendrick7.jpg'), require('./images/kendricklamar/kendrick8.jpg'), require('./images/kendricklamar/kendrickgif2.gif')]
    },
    {
        name: 'JID & Smino',
        date: 'February 19th, 2023',
        venue: 'Coca-Cola Roxy',
        thumbnail: require('./images/kendricklamar/kendrickthumbnail.jpg'),
        path: 'kidcudi',
        description: `After 5 long years, Kendrick Lamar finally dropped his long awaited album. When he announced his tour, two of my friends and I paid resell prices for floor seats. This concert was breathtaking. Kendrick performed for nearly 2 and a half hours, which is the longest I've ever seen anyone perform. His performance reflected the main theme of his album, self-reflection. A therapist narrated the entire show, as if Kendrick was in therapy himself. He played songs from Good Kid Maad City all the way up to Mr. Morale. His cousin, Baby Keem, opened for him, and later came out on stage for their hit song Family Ties. Kendrick's show had many different props and stage setups. Dolls, Pianos, Floating Panels, Plastic quarantine cubes that rise up into the air and are held up by mirrors. This show had it all. It was a great performance, coming from one who is known as the best artist of my generation. Not to mention, the dancers for the stage had great choreography. I'm excited to see Kendrick again one day sometime in the near future of 2032!`,
        openers: ['Strick', '070 Shake'],
        guests: ['Chip the Ripper'],
        images: [require('./images/kendricklamar/kendrick1.jpg'), require('./images/kendricklamar/kendrick2.jpg'), require('./images/kendricklamar/kendrick3.jpg'), require('./images/kendricklamar/kendrick4.jpg'), require('./images/kendricklamar/kendrickgif1.gif'), require('./images/kendricklamar/kendrick5.jpg'), require('./images/kendricklamar/kendrick6.jpg'), require('./images/kendricklamar/kendrick7.jpg'), require('./images/kendricklamar/kendrick8.jpg'), require('./images/kendricklamar/kendrickgif2.gif')]
    }
    
]

export default musicEvents;