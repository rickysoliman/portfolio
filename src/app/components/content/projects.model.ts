type Project = {
  name: string,
  description: string,
  url: string,
  gifPath: string,
};

export const projects: Project[] = [
  {
    name: 'Word-Chain',
    description: 'An engaging online word game developed in Angular. It leverages the Free Dictionary API to validate words and challenges players to construct a chain of words within a 60-second timeframe. Test your vocabulary and spelling abilities by entering a word that starts with the last letter of the previous word in the chain and strive to build the longest chain possible!',
    url: 'https://rickysoliman.github.io/word-chain/',
    gifPath: '',
  },
  {
    name: 'Dall-E Clone',
    description: `This is a simple re-creation of the UI for OpenAI's DALL·E Image Generation app.`,
    url: 'https://rickysoliman.github.io/simple-dall-e-clone/',
    gifPath: '',
  }
];
