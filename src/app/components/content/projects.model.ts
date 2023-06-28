type Project = {
  name: string,
  description: string,
  url: string,
  gifPath: string,
};

export const projects: Project[] = [
  {
    name: 'Word-Chain',
    description: `An engaging online word game developed in Angular. It leverages the Free Dictionary API to validate words and challenges players to construct a chain of words within a 60-second timeframe. Test your vocabulary and spelling abilities by entering a word that starts with the last letter of the previous word in the chain and strive to build the longest chain possible!`,
    url: 'https://rickysoliman.github.io/word-chain/',
    gifPath: '../../../assets/word-chain.gif',
  },
  {
    name: 'Dall-E Clone',
    description: `A re-imagining of OpenAI's DALL-E Image Generation app. Just describe anything you can think of in your wildest dreams, and click Generate. This React based app will utilize OpenAI's Image Generation API to bring your imagination to life!`,
    url: 'https://rickysoliman.github.io/simple-dall-e-clone/',
    gifPath: '../../../assets/dalle.gif',
  }
];
