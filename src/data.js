/**
 * Add your data in next index with same key but different values
 * use require('./assets/filename') for offline image
 * add image file to assets/images
 * use {uri: 'image url'} for hosted image
 * please use high quality image
 * you are free to add more than one social media or portfolio link
**/

export const DATA = [
    {
        id: 1, //increment this value
        name: 'Doddy Rizal Novianto',
        image: require('./assets/images/doddy.jpg'),
        techStack: 'React Native, React, Flutter',
        social: [
            {
                name: 'Github',
                link: 'https://github.com/Drzaln'
            },
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/doddy-rizal-novianto-559269157/'
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/drzaln/'
            },
        ]
    },
    {
        id: 2, //increment this value
        name: 'Hary Suryanto',
        image: require('./assets/images/rocket.png'),
        techStack: 'Flutter, CodeIgniter',
        social: [
            {
                name: 'Github',
                link: 'https://github.com/harysuryanto'
            },
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/harysuryanto'
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/harysuryanto_'
            },
        ]
    },
     {
        id: 3, //increment this value
        name: 'Rohit W',
        image: {uri: 'https://i.ytimg.com/vi/p759fOyk2cw/maxresdefault.jpg'},
        techStack: 'MongoDb, Angular, Nodejs, Express',
        social: [
            {
                name: 'Github',
                link: 'https://github.com/rohya8'
            },
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/in/rohit-wadke'
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/rohya8'
            },
        ]
    },
    {
        id: 4, //increment this value
        name: 'Sarekashi',
        image: require('./assets/images/sarekashi.jpg'),
        techStack: 'Nodejs, CodeIgniter, Vim',
        social: [
            {
                name: 'Github',
                link: 'https://github.com/sarekashi'
            }
        ]
    },  
    {
        id: 5, //increment this value
        name: 'alvin',
        image: require('./assets/images/sarekashi.jpg'),
        techStack: 'Nodejs, React Native, React, Typesctipt, GIT',
        social: [
            {
                name: 'Github',
                link: 'https://github.com/alvinadet'
            }
        ]
    },
    {
        id: 5, //increment this value
        name: 'Muhammad Biki Hamzah',
        image: {uri: 'https://www.gematsu.com/wp-content/uploads/2020/03/Genshin-Impact_2020_03-31-20_Top.jpg'},
        techStack: 'Nodejs, Javascript, Typescript, GIT',
        social: [
            {
                name: 'Github',
                link: 'https://github.com/alvinadet'
            }
        ]
    },


]
