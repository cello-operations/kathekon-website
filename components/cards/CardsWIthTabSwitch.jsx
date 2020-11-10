import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container } from "../misc/Layouts.jsx";
import { SectionHeading } from "../misc/Headings.jsx";
import { PrimaryButton } from "../misc/Buttons.jsx";
import {
  Post, PostContainer, Posts, Info,
  Title, CreationDate, Description,
  Category, Image,
} from '../blog/BlogPosts.jsx'
import Modal from '../modal/Modal.jsx';
import OpenModalButton from '../modal/OpenModalButton.jsx';

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
// const PaddedBackground = tw.div`max-w-screen-xl mx-auto px-6 py-6 lg:px-8 lg:py-8`;
const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto py-10 lg:py-12`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CreateButton = styled(PrimaryButton)`
  ${tw`shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-100 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`}
`;

const CardsWithTabSwitch = ({
  heading = "Available funding options",
  tabs = {
    All: [{
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Chicken Chilled",
        content: "Chicken Main Course",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        imageSrc:
          "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
        category: "Grants",
        date: "April 21, 2020",
        title: "Introducing the Femi Falana Grant",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://timerse.com",
        featured: true
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Samsa Beef",
        content: "Fried Mexican Beef",
        price: "$3.99",
        rating: "4.5",
        reviews: "34",
        url: "#",
        imageSrc:
          "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
        category: "Scholarships",
        date: "April 21, 2020",
        title: "Random Scholarship for you",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://timerse.com",
        featured: true
      }],
    Grants: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Chicken Chilled",
        content: "Chicken Main Course",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        imageSrc:
          "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
        category: "Grants",
        date: "April 21, 2020",
        title: "Another Two",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://timerse.com",
        featured: true
      }
    ],
    Scholarships: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Secure you future",
        content: "Incredible Scholarships await you",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        imageSrc:
          "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
        category: "Scholarships",
        date: "April 21, 2020",
        title: "Another One",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://timerse.com",
        featured: true
      }
    ],
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = (open) => {
    console.log(open)
    setModalOpen(open);
  }

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow style={{ fontFamily: 'Raleway' }}>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>
        <div style={{ marginTop: '2rem' }}>
          <OpenModalButton handleButtonClick={() => handleOpenModal(true)}>Create New Grant</OpenModalButton>
        </div>
          <Modal isOpen={modalOpen} handleClose={() => handleOpenModal(false)} />
        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((post, index) => (
              <Posts key={index}>
              {getRandomCards().slice(0).map((post, index) => (
                <PostContainer key={index} featured={post.featured}>
                  <Post className="group" as="a" href={post.url}>
                    <Image imageSrc={post.imageSrc} />
                    <Info>
                      <Category>{post.category}</Category>
                      <CreationDate>{post.date}</CreationDate>
                      <Title>{post.title}</Title>
                      {post.featured && post.description && <Description>{post.description}</Description>}
                    </Info>
                  </Post>
                </PostContainer>
              ))}
            </Posts>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Chilled",
      content: "Chicken Main Course",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
      category: "Grants",
      date: "April 21, 2020",
      title: "Another One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://timerse.com",
      featured: true
    },
    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //   title: "Samsa Beef",
    //   content: "Fried Mexican Beef",
    //   price: "$3.99",
    //   rating: "4.5",
    //   reviews: "34",
    //   url: "#",
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
    //   category: "Travel Tips",
    //   date: "April 21, 2020",
    //   title: "Safely Travel in Foreign Countries",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //   url: "https://timerse.com",
    //   featured: true
    // },
    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //   title: "Carnet Nachos",
    //   content: "Chilli Crispy Nachos",
    //   price: "$3.99",
    //   rating: "3.9",
    //   reviews: "26",
    //   url: "#"
    // },
    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //   title: "Guacamole Mex",
    //   content: "Mexican Chilli",
    //   price: "$3.99",
    //   rating: "4.2",
    //   reviews: "95",
    //   url: "#"
    // },
    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //   title: "Chillie Cake",
    //   content: "Deepfried Chicken",
    //   price: "$2.99",
    //   rating: "5.0",
    //   reviews: "61",
    //   url: "#"
    // },
    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //   title: "Nelli",
    //   content: "Hamburger & Fries",
    //   price: "$7.99",
    //   rating: "4.9",
    //   reviews: "89",
    //   url: "#"
    // },
    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //   title: "Jalapeno Poppers",
    //   content: "Crispy Soyabeans",
    //   price: "$8.99",
    //   rating: "4.6",
    //   reviews: "12",
    //   url: "#"
    // },
    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //   title: "Cajun Chicken",
    //   content: "Roasted Chicken & Egg",
    //   price: "$7.99",
    //   rating: "4.2",
    //   reviews: "19",
    //   url: "#"
    // }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};

export default CardsWithTabSwitch;