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
        thumbnail: require('./images/kanyewest/kanyethumbnail.jpg'),
        path: 'kanyewest',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci'],
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
        thumbnail: require('./images/phoebebridgers/phoebethumbnail.jpg'),
        path: 'kendricklamar',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum velit nisi, non dignissim diam rutrum et. Sed vehicula erat a varius aliquet. Ut dignissim purus id posuere euismod. Sed et justo gravida, gravida mauris eget, vestibulum erat. In condimentum ligula vitae magna luctus, vitae porttitor magna consectetur. Praesent dolor quam, mollis eu lacus a, accumsan interdum felis. Fusce a lectus tincidunt, interdum ante et, consequat leo. Curabitur facilisis viverra rhoncus. Donec rutrum ex non nunc fringilla cursus. Morbi sit amet interdum metus, in suscipit enim. Etiam pretium felis nibh, eu placerat odio malesuada nec. Sed nisi est, elementum id justo ac, viverra aliquam libero. Maecenas diam dolor, rhoncus vel tellus eu, euismod lobortis enim. Integer tristique iaculis aliquam. Duis lacinia libero a faucibus aliquam.',
        openers: ['Sabrina Claudio'],
        guests: ['YFN Lucci'],
        images: [require('./images/phoebebridgers/phoebe1.jpg'), require('./images/phoebebridgers/phoebe2.jpg'), require('./images/phoebebridgers/phoebegif1.gif'), require('./images/phoebebridgers/phoebe3.JPG')]
    },
    
]

export default musicEvents;