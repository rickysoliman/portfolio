type Project = {
  name: string,
  description: string,
  url: string,
  gifPath: string,
};

type WorkExperience = {
  company: string,
  title: string,
  date: string,
  description: string,
  logoPath: string,
};

export const projects: Project[] = [
  {
    name: 'Word Chain',
    description: `An engaging online word game developed in Angular. It leverages the Free Dictionary API to validate words and challenges players to construct a chain of words within a 60-second timeframe. Test your vocabulary and spelling abilities by entering a word that starts with the last letter of the previous word in the chain and strive to build the longest chain possible!`,
    url: 'https://rickysoliman.github.io/word-chain/',
    gifPath: '../../../assets/word-chain.gif',
  },
  {
    name: 'DALL·E Clone',
    description: `A re-imagining of OpenAI's DALL·E Image Generation app. Just describe anything you can think of in your wildest dreams, and click Generate. This React based app will utilize OpenAI's Image Generation API to bring your imagination to life!`,
    url: '',
    gifPath: '../../../assets/dalle.gif',
  }
];

export const workExperience: WorkExperience[] = [
  {
    company: 'Bill.com',
    title: 'Software Engineer II - Frontend UI',
    date: 'July 2021 - November 2022',
    description: `
      At Bill.com, I had the pleasure of working on bug fixes and new features with an amazing team of engineers who I learned so much from. Along with developing features and writing unit and end to end tests, I also got to integrate the Google Places API into our address forms, design a set of dynamic components that can be utilized throughout the application, and lots more!
    `,
    logoPath: '../../../assets/bill-logo.png',
  },
  {
    company: 'Disaster Accountability Project',
    title: 'Volunteer Frontend Software Engineer',
    date: 'May 2023 - Present',
    description: `
      I’ve been enjoying doing volunteer work for the Disaster Accountability Project very much by contributing to the revamping of their website. I've built several Angular components, including a re-usable and dynamic text input component, and a slick hamburger icon drop-down menu. With a keen eye for quality, I crafted solid unit tests using Jest and conducted thorough end-to-end tests using Cypress. Throughout the process, I also actively participated in code reviews, offering constructive feedback and fostering a friendly and collaborative team environment.
    `,
    logoPath: '../../../assets/dap-logo.jpg',
  },
  {
    company: 'All for the Family Legal Clinic, Inc.',
    title: 'Frontend Software Engineer',
    date: 'February 2021 - April 2021',
    description: `
      At All for the Family Legal Clinic, I was tasked with rebuilding their website from the ground up. I designed and built their website using React and also incorporated the Google Maps API for their map feature, Nodemailer for client service inquiries, and the PayPal API for their donations feature.
    `,
    logoPath: '../../../assets/all-for-the-family.jpg',
  },
];
