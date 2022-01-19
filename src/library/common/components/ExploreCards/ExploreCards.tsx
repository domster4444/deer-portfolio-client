import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EditMenu from 'library/common/components/EditMenu/EditMenu';
import ExploreCardSkeleton from './ExploreCardSkeleton';

const Icon = styled.i`
  margin: 1rem;
`;

const GreenCard = styled.div`
  width: 22%;
  height: 12rem;
  margin: 0.25rem;
  position: relative;
  border-radius: 0.25rem;
  span {
    color: white;

    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }

  &:hover {
    span {
      color: black;
    }
    i {
      color: lightgreen;
    }
    background-color: #f5f5f5;
    border: 1px solid lightgreen;
  }
  background-color: lightgreen;
`;
const BlueCard = styled.div`
  width: 22%;
  height: 12rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
  position: relative;

  background-color: #007fff;
  span {
    color: white;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }
  &:hover {
    span {
      color: black;
    }
    i {
      color: #007fff;
    }
    background-color: #f5f5f5;
    border: 1px solid #007fff;
  }
`;
const RedCard = styled.div`
  width: 22%;
  height: 12rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
  position: relative;

  background-color: #ff5c5c;
  span {
    color: white;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }

  &:hover {
    span {
      color: black;
    }
    i {
      color: #ff5c5c;
    }
    background-color: #f5f5f5;
    border: 1px solid #ff5c5c;
  }
`;
const PinkCard = styled.div`
  width: 22%;
  height: 12rem;
  position: relative;

  margin: 0.25rem;
  border-radius: 0.25rem;
  span {
    color: white;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }
  &:hover {
    span {
      color: black;
    }
    i {
      color: #ff9faf;
    }

    background-color: #f5f5f5;
    border: 1px solid #ff9faf;
  }
  background-color: #ff9faf;
`;

const SkeletonCard = styled.div`
  width: 22%;
  height: 12rem;
  margin: 0.25rem;
  position: relative;
  border-radius: 0.25rem;
  span {
    color: white;

    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }

  &:hover {
    span {
      color: black;
    }

    background-color: #f5f5f5;
    border: 1px solid lightgreen;
  }
`;

export const GreenExploreCard = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);
  return (
    <>
      {(() => {
        if (isLoaded === true) {
          return (
            <GreenCard>
              <Icon className="bx bx-user" />
              <span className="regular">455</span>
              <EditMenu />
            </GreenCard>
          );
        }
        return (
          <SkeletonCard>
            <ExploreCardSkeleton />
          </SkeletonCard>
        );
      })()}
    </>
  );
};
export const BlueExploreCard = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);
  return (
    <>
      {(() => {
        if (isLoaded === true) {
          return (
            <BlueCard>
              <Icon className="bx bx-user" />
              <span className="regular">455</span>
              <EditMenu />
            </BlueCard>
          );
        }
        return (
          <SkeletonCard>
            <ExploreCardSkeleton />
          </SkeletonCard>
        );
      })()}
    </>
  );
};
export const RedExploreCard = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);
  return (
    <>
      {(() => {
        if (isLoaded === true) {
          return (
            <RedCard>
              <Icon className="bx bx-user" />
              <span className="regular">455</span>
              <EditMenu />
            </RedCard>
          );
        }
        return (
          <SkeletonCard>
            <ExploreCardSkeleton />
          </SkeletonCard>
        );
      })()}
    </>
  );
};
export const PinkExploreCard = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);
  return (
    <>
      {(() => {
        if (isLoaded === true) {
          return (
            <PinkCard>
              <Icon className="bx bx-user" />
              <span className="regular">455</span>
              <EditMenu />
            </PinkCard>
          );
        }
        return (
          <SkeletonCard>
            <ExploreCardSkeleton />
          </SkeletonCard>
        );
      })()}
    </>
  );
};
