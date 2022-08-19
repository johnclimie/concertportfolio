// Creates data for application to render from

const musicEvents = [
    {
        name: '6lack',
        date: 'November 25th, 2017',
        venue: 'The Tabernacle',
        thumbnail: require('./images/6lack/6lackThumbnail.jpg'),
        path: '6lack',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci'],
        images: [require('./images/travisscott1/travisscott1.jpg'), require('./images/travisscott1/travisscott2.jpg'), require('./images/travisscott1/travisscott3.jpg'), require('./images/travisscott1/travisscott4.jpg'), require('./images/travisscott1/travisscottgif1.gif'), require('./images/travisscott1/travisscott5.jpg'), require('./images/travisscott1/travisscott6.jpg'), require('./images/travisscott1/travisscott7.jpg'), require('./images/travisscott1/travisscottgif2.gif'), require('./images/travisscott1/travisscott8.jpg'), require('./images/travisscott1/travisscott9.jpg'), require('./images/travisscott1/travisscott10.jpg'),]
    },
    {
        name: 'Travis Scott',
        date: 'March 22nd, 2019',
        venue: 'State Farm Arena',
        thumbnail: require('./images/travisscott2/travisscott2thumbnail.jpg'),
        path: 'travisscott2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci'],
        images: [require('./images/travisscott2/travisscott1.jpg'), require('./images/travisscott2/travisscott2.JPG'), require('./images/travisscott2/travisscott3.jpg'), require('./images/travisscott2/travisscottgif1.gif'), require('./images/travisscott2/travisscott4.jpg'), require('./images/travisscott2/travisscott5.JPG'), require('./images/travisscott2/travisscott6.jpg'), require('./images/travisscott2/travisscottgif2.gif'), require('./images/travisscott2/travisscott7.jpg'), require('./images/travisscott2/travisscott8.JPG'), require('./images/travisscott2/travisscott9.jpg'), require('./images/travisscott2/travisscottgif3.gif'),]
    },
    {
        name: 'Kanye West',
        date: 'September 15th, 2019',
        venue: 'New Birth Missionary Baptist Church',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Kanye_West_-_Jesus_Is_King.png',
        path: 'kanyewest',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci']
    },
    {
        name: 'James Blake',
        date: 'October 15th, 2021',
        venue: 'The Tabernacle',
        thumbnail: 'https://media.pitchfork.com/photos/60f9880e4a319e50a860a52e/1:1/w_600/James-Blake.jpg',
        path: 'jamesblake',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci']
    },
    {
        name: 'Tyler, The Creator',
        date: 'March 25th, 2022',
        venue: 'Gas South Arena',
        thumbnail: 'https://resources.tidal.com/images/9db5f3a2/b872/45d6/8dbb/2b7a078be19e/640x640.jpg',
        path: 'tylerthecreator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci']
    },
    {
        name: 'Nine Inch Nails',
        date: 'April 30th, 2022',
        venue: 'Shaky Knees Festival',
        thumbnail: 'http://www.bleaq.com/wp-content/uploads/russel-mills-01.jpg',
        path: 'nineinchnails',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci']
    },
    {
        name: 'Phoebe Bridgers',
        date: 'May 27th, 2022',
        venue: 'Cadence Bank Amphitheatre',
        thumbnail: 'https://media.pitchfork.com/photos/5ee923f47bb7acb328d5683d/1:1/w_600/Punisher%20_Phoebe%20Bridgers.jpg',
        path: 'phoebebridgers',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci']
    },
    
]

export default musicEvents;