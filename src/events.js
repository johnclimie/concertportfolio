// Creates data for application to render from

const musicEvents = [
    {
        name: '6lack',
        date: 'November 25th, 2017',
        venue: 'The Tabernacle',
        thumbnail: require('./images/6lack/6lackThumbnail.jpg'),
        path: '6lack',
        description: `As this was my first concert, I had no clue what I was going into. That being said, I belive that this was a great first experience. When I attended this concert, I was in the 11th grade as a 17 year old. It was 6lack's first tour shortly after releasing his debut album. I was fortunate enough to meet him before the show. He put on a great first show, performing nearly every song on his new album. I enjoyed the darker aesthetic of the show that went along with the album, along with great vocal performances. The show was so high in demand that he needed to book more shows for this venue due to the location, which is where he originted from. As a bonus, he brought out YFN Lucci as a suprise guest. Sabrina Claudio also put on a great show as an opener.`,
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
        description: `This was my first ever massive concert. Travis Scott soared to fame shortly after releasing Astroworld. This album defined my senior year in high school. During this show I was located about 4 or 5 rows away from the stage. It wasn't as chaotic as I expected, however that's because I was tucked away in the coroner. Regardless, I still had a great experience. The stage setup was truly special and unique, as a roller coaster hovered over the audience, as Travis would get on the ride halfway through his set. The visuals provided a great psychadellic experience. Towards the end of the show, I had the pleasure of meeting Metro Boomin, as I realized he was standing right behind me. I will never forget seeing kids drinking straight out of soda fountains at State Farm Arena right after the show due to thirst.`,
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
        description: `While the first Travis Scott show I attended was great, this one was leagues better. During this show, I got the opportunity to stay in the middle of the crowd. I started the show at about second row, however ended up 10th row by the end of the show. This night was pure chaos. Moshpits opened up for every song, I even lost my friend during Butterfly Effect. I lost my shoe during the show, however somehow got it back. During Mamacita, Travis had us open up a moshpit down the arena, that happened to be the lenght of the arena, which is exactly where I was. This is by far my favorite concert experience. Travis brought every special guest that represented the Atlanta trap scene for the last 10 years. This night was truly an amazing experience.`,
        openers: ['Sheck Wes'],
        guests: ['Lil Yachty', '2 Chainz', 'Rick Ross', 'Young Thug', 'Future'],
        images: [require('./images/travisscott2/travisscott1.jpg'), require('./images/travisscott2/travisscott2.JPG'), require('./images/travisscott2/travisscott3.jpg'), require('./images/travisscott2/travisscottgif1.gif'), require('./images/travisscott2/travisscott4.jpg'), require('./images/travisscott2/travisscott5.JPG'), require('./images/travisscott2/travisscott6.jpg'), require('./images/travisscott2/travisscottgif2.gif'), require('./images/travisscott2/travisscott7.jpg'), require('./images/travisscott2/travisscott8.JPG'), require('./images/travisscott2/travisscott9.jpg'), require('./images/travisscott2/travisscottgif3.gif'),]
    },
    {
        name: 'Kanye West',
        date: 'September 15th, 2019',
        venue: 'New Birth Missionary Baptist Church',
        thumbnail: require('./images/kanyewest/kanyethumbnail.jpg'),
        path: 'kanyewest',
        description: `This may not be a concert, however, with someone as indecisive as Ye, I figured I might not be able to see him again. Therefore, I had to attend this event. This was during Music Midtown weekend, and Travis Scott was performing again, however I wasn't able to go. My friend felt bad about it and sent me an Instagram post about Kanye hosting Sunday Service here. I saw this right when I woke up, and walked out the door 10 mins after. I got to the church and got a seat. I saw that other kids my age were there, in their Travis Scott t-shirts. After the sermon, Kanye came out and held his Sunday Service. I managed to get a good spot. I stood about 3 feet from T.I. along with 2 Chainz. Jermaine Dupree was also there, along with Elijah Connor, which is apparently the younger cousin of late musician Prince, who you would recognize from that one GIF with Sean Combs.`,
        openers: ['The World Famous Tony Williams'],
        guests: ['T.I. & Tiny', '2 Chainz', 'Jermaine Dupree', 'Elijah Connor'],
        images: [require('./images/kanyewest/kanye1.jpg'), require('./images/kanyewest/kanye2.jpg'), require('./images/kanyewest/kanyegif1.gif'), require('./images/kanyewest/kanye3.jpg'),]
    },
    {
        name: 'James Blake',
        date: 'October 15th, 2021',
        venue: 'The Tabernacle',
        thumbnail: require('./images/jamesblake/jamesblakethumbnail.JPG'),
        path: 'jamesblake',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci'],
        images: [require('./images/jamesblake/jamesblake1.jpg'), require('./images/jamesblake/jamesblake2.jpg'), require('./images/jamesblake/jamesblake3.jpg'),  require('./images/jamesblake/jamesblakegif1.gif'), require('./images/jamesblake/jamesblake4.jpg'), require('./images/jamesblake/jamesblake5.jpg'),  require('./images/jamesblake/jamesblakegif2.gif'), require('./images/jamesblake/jamesblake6.jpg'), require('./images/jamesblake/jamesblake7.jpg'), require('./images/jamesblake/jamesblake8.jpg')]
    },
    {
        name: 'Tyler, The Creator',
        date: 'March 25th, 2022',
        venue: 'Gas South Arena',
        thumbnail: require('./images/tylerthecreator/tylerthumbnail.jpg'),
        path: 'tylerthecreator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci'],
        images: [require('./images/tylerthecreator/tyler1.jpg'), require('./images/tylerthecreator/tylergif1.gif'), require('./images/tylerthecreator/tyler2.jpg'), require('./images/tylerthecreator/tylergif2.gif'), require('./images/tylerthecreator/tyler3.jpg'), require('./images/tylerthecreator/tylergif3.gif'), require('./images/tylerthecreator/tyler4.jpg'), require('./images/tylerthecreator/tylergif4.gif'), require('./images/tylerthecreator/tyler5.jpg'), require('./images/tylerthecreator/tylergif5.gif')]
    },
    {
        name: 'Nine Inch Nails',
        date: 'April 30th, 2022',
        venue: 'Shaky Knees Festival',
        thumbnail: require('./images/nin/ninthumbnail.JPG'),
        path: 'nineinchnails',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci'],
        images: [require('./images/nin/nin1.jpg'), require('./images/nin/ningif1.gif'), require('./images/nin/nin2.jpg'), require('./images/nin/ningif2.gif'),  require('./images/nin/nin3.jpg'), require('./images/nin/ningif3.gif')]
    },
    {
        name: 'Phoebe Bridgers',
        date: 'May 27th, 2022',
        venue: 'Cadence Bank Amphitheatre',
        thumbnail: require('./images/phoebebridgers/phoebethumbnail.jpg'),
        path: 'phoebebridgers',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci'],
        images: [require('./images/phoebebridgers/phoebe1.jpg'), require('./images/phoebebridgers/phoebe2.jpg'), require('./images/phoebebridgers/phoebegif1.gif'), require('./images/phoebebridgers/phoebe3.JPG')]
    },
    {
        name: 'Denzel Curry',
        date: 'May 27th, 2022',
        venue: 'Cadence Bank Amphitheatre',
        thumbnail: require('./images/denzelcurry/denzelthumbnail.jpg'),
        path: 'denzelcurry',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci'],
        images: [require('./images/denzelcurry/denzelgif1.gif'), require('./images/denzelcurry/denzel1.jpg'), require('./images/denzelcurry/denzelgif2.gif'), require('./images/denzelcurry/denzel2.jpg'), require('./images/denzelcurry/denzelgif3.gif')]
    },
    {
        name: 'Pusha T',
        date: 'May 27th, 2022',
        venue: 'Cadence Bank Amphitheatre',
        thumbnail: require('./images/pushat/pushatthumbnail.jpg'),
        path: 'pushat',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci'],
        images: [require('./images/pushat/pushat1.jpg'), require('./images/pushat/pushat2.jpg'), require('./images/pushat/pushatgif1.gif'), require('./images/pushat/pushat3.jpg'), require('./images/pushat/pushatgif2.gif'), require('./images/pushat/pushat4.jpg'), require('./images/pushat/pushat5.jpg')]
    },
    {
        name: 'Kendrick Lamar',
        date: 'May 27th, 2022',
        venue: 'Cadence Bank Amphitheatre',
        thumbnail: require('./images/kendricklamar/kendrickthumbnail.jpg'),
        path: 'kendricklamar',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci'],
        images: [require('./images/kendricklamar/kendrick1.jpg'), require('./images/kendricklamar/kendrick2.jpg'), require('./images/kendricklamar/kendrick3.jpg'), require('./images/kendricklamar/kendrick4.jpg'), require('./images/kendricklamar/kendrickgif1.gif'), require('./images/kendricklamar/kendrick5.jpg'), require('./images/kendricklamar/kendrick6.jpg'), require('./images/kendricklamar/kendrick7.jpg'), require('./images/kendricklamar/kendrick8.jpg'), require('./images/kendricklamar/kendrickgif2.gif')]
    },
    
]

export default musicEvents;