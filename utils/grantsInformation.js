import { truncateText } from '../helpers/truncateText';

export const fundingCategories = [
  {
    imageSrc:
      "https://res.cloudinary.com/tolulope-od/image/upload/v1601139160/jaredd-craig-HH4WBGNyltc-unsplash_vgzblr.jpg",
    // author: "Adam Wathan",
    // category: "Education",
    title: "Education",
    description: "Part of our work at Kathēkon is to improve the quality of education available to children from low-income families. We will fund free schools focused on bridging this quality gap as we continue to identify other transformative interventions.",
    url: "/grants",
    hasList: false,
  },
  {
    imageSrc:
      "https://res.cloudinary.com/tolulope-od/image/upload/v1601138950/logan-weaver-uwyqYYWUQJw-unsplash_upqyxf.jpg",
    // author: "Owais Khan",
    // category: "Civil Society",
    title: "Civil Society",
    description: `We are poised to close the gap with regards to finding, whereby driving  a change through contributing to the funding opportunities for civil society organization currently carrying on work at the grassroots level in our  thematic areas. Our thematic areas are:`,
    url: "/grants",
    hasList: true,
    list: ['Free Speech', 'Environment', 'Internet governance'],
  },
  {
    imageSrc:
      "https://res.cloudinary.com/tolulope-od/image/upload/v1598367140/trevor-cole-CWcAsKuhwy0-unsplash_vdmd17.jpg",
    // author: "Steve Schoger",
    // category: "July 10",
    title: "Social Welfare",
    description: "Drinkable water, daily meals, and reliable housing are crucial to human dignity. Kathēkon will work with credible community leaders and organizations dedicated to serving underserved communities.",
    url: "/grants",
    hasList: false,
  },
];

export const cards =  [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
    company: "Ifedolapo J.",
    type: "Learning",
    title: truncateText("Creating meaningful grants to assist students: A guide to something", 90),
    description: truncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.", 150),
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
    company: "Socrates M.",
    type: "Research",
    title: truncateText("Conducting investigative researches in the Nigerian Ed-Tech space", 90),
    description: truncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.", 150),
  },
];
