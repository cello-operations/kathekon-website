import { truncateText } from '../helpers/truncateText';

export const fundingCategories = [
  {
    imageSrc:
      "https://res.cloudinary.com/tolulope-od/image/upload/v1601139160/jaredd-craig-HH4WBGNyltc-unsplash_vgzblr.jpg",
    // author: "Adam Wathan",
    // category: "Education",
    title: "Education",
    description: "Education is a necessity in our society and part of our work at Kathekon is to identify inefficiencies in this area and help rebuild and achieve a well standardized model by providing funds to schools that have the potential but are limited in resources.",
    url: "/grants",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/tolulope-od/image/upload/v1601138950/logan-weaver-uwyqYYWUQJw-unsplash_upqyxf.jpg",
    // author: "Owais Khan",
    // category: "Civil Society",
    title: "Civil Society",
    description: `We are poised to close the gap with regards to funding, whereby driving a change through contributing to the funding opportunities for civil society organization currently carrying on work at the grassroots level in specific thematic areas ${'          '}`,
    url: "/grants",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/tolulope-od/image/upload/v1598367140/trevor-cole-CWcAsKuhwy0-unsplash_vdmd17.jpg",
    // author: "Steve Schoger",
    // category: "July 10",
    title: "Social Welfare",
    description: "We invest in credible organizations dedicated to catering for the underserved communities with basic needs and amenities lacking in the environment they decide to work in. Some communities still lack clean water, good roads, daily meals for families. ",
    url: "/grants",
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
