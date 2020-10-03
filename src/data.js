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
]