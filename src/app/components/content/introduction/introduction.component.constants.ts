export const introText = {
  header: `Hi!`,
  paragraph: `I'm a software engineer based in the Washington DMV Metro area and I love to build things for the web. Check out some things I've built and feel free to reach out!`,
};

type TechnicalSkill = {
  name: string;
  iconPath: string;
};

export const technicalSkills: TechnicalSkill[] = [
  {
    name: 'JavaScript',
    iconPath: '../../../../assets/skill-icons/javascript.png',
  },
  {
    name: 'TypeScript',
    iconPath: '../../../../assets/skill-icons/typescript.png',
  },
  { name: 'Python', iconPath: '../../../../assets/skill-icons/python.png' },
  { name: 'HTML', iconPath: '../../../../assets/skill-icons/html.png' },
  { name: 'CSS', iconPath: '../../../../assets/skill-icons/css.png' },
  { name: 'Angular', iconPath: '../../../../assets/skill-icons/angular.png' },
  { name: 'RxJS', iconPath: '../../../../assets/skill-icons/rxjs.png' },
  { name: 'GraphQL', iconPath: '../../../../assets/skill-icons/graphql.png' },
  { name: 'RESTAPI', iconPath: '../../../../assets/skill-icons/api.png' },
  { name: 'React', iconPath: '../../../../assets/skill-icons/react.png' },
  { name: 'Jest', iconPath: '../../../../assets/skill-icons/jest.png' },
  { name: 'Cypress', iconPath: '../../../../assets/skill-icons/cypress.png' },
  { name: 'Node.js', iconPath: '../../../../assets/skill-icons/node.png' },
  { name: 'Git', iconPath: '../../../../assets/skill-icons/git.png' },
];
