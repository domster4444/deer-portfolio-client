/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TweenMax, Power3 } from 'gsap';

// ? mui
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const ThemeCardSmall = styled.div`
  width: 30rem;
  cursor: pointer;
  margin: 1rem;
  font-size: 1.4rem;
  overflow: hidden;
  border-radius: 0.35rem;
  box-shadow: 0px 0px 10px 1px lightgrey;
  /* background-color: rgb(17, 16, 29); */
  /* border: 0.25rem solid black; */

  @media only screen and (max-width: 840px) {
    width: 60%;
  }
  @media only screen and (max-width: 640px) {
    width: 75%;
  }
  @media screen and (min-width: 1900px) and (max-width: 5000px) {
    width: 30rem;
  }

  transition: all 0.6s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-1.25rem);
    /* border: 0.25rem solid green; */
  }
`;

const ThemeCardImg = styled.img`
  width: 100%;
`;
const PreviewBtn = styled.button`
  padding: 0.75rem 2rem;
  border: 0.25rem solid black;
  border-radius: 0.5rem;
  font-size: 1.8rem;
  cursor: pointer;
  background-color: rgb(228, 233, 247);
  a {
    color: black;
  }
  &:hover {
    a {
      color: white;
    }
    color: white;
    border: 0.25rem solid white;
    background-color: rgb(17, 16, 29);
  }
`;
const UseBtn = styled.button`
  padding: 0.75rem 2rem;
  border: 0.25rem solid black;
  border-radius: 0.5rem;
  font-size: 1.8rem;
  cursor: pointer;
  background-color: rgb(228, 233, 247);
  a {
    color: black;
  }
  &:hover {
    a {
      color: white;
    }
    color: white;
    border: 0.25rem solid white;
    background-color: rgb(17, 16, 29);
  }
`;
const themeCardBtnContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0.5rem 0rem',
};
type ThemeProps = {
  url: string;
  name: string;
  description: string;
  imageUrl: string;
};
// eslint-disable-next-line object-curly-newline
const ThemeCard = ({ url, name, description, imageUrl }: ThemeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  let animateThemeCard = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 400);

    // alert('not loaded');
    TweenMax.to(animateThemeCard, 0.1, {
      opacity: 0,
      scale: 0.1,
      ease: Power3.easeOut,
    });
  }, []);
  useEffect(() => {
    if (isLoaded === true) {
      TweenMax.to(animateThemeCard, 0.1, {
        opacity: 1,
        scale: 1,
        ease: Power3.easeOut,
      });
    }
  }, [isLoaded]);

  return (
    <>
      {(() => {
        if (isLoaded !== false) {
          return (
            <ThemeCardSmall
              ref={(el) => {
                // @ts-ignore
                animateThemeCard = el;
              }}
            >
              <ThemeCardImg src={`${imageUrl}`} alt="" />
              <br />
              {name}
              <div
                className="themeCard__btnContainer"
                style={themeCardBtnContainer}
              >
                <PreviewBtn className="medium" type="button">
                  <a rel="noreferrer" target="_blank" href={`${url}`}>
                    Preview
                  </a>
                </PreviewBtn>
                <UseBtn className="medium" type="button">
                  Use
                </UseBtn>
              </div>
            </ThemeCardSmall>
          );
        }
        return (
          <ThemeCardSmall
            ref={(el) => {
              // @ts-ignore
              animateThemeCard = el;
            }}
          >
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                style={{ width: '100%' }}
                height={158}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Skeleton
                  style={{ margin: '1rem' }}
                  variant="rectangular"
                  width={100}
                  height={40}
                />

                <Skeleton
                  style={{ margin: '1rem' }}
                  variant="rectangular"
                  width={100}
                  height={40}
                />
              </div>
            </Stack>
          </ThemeCardSmall>
        );
      })()}
    </>
  );
};

export default ThemeCard;
