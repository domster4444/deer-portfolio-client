/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';

import './Themes.css';

// ?  components
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';
import ThemeCard from './components/ThemeCard/ThemeCard';

const allThemes = [
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 1',
    description: 'This is the first theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 2',
    description: 'This is the second theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 3',
    description: 'This is the third theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 4',
    description: 'This is the fourth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 5',
    description: 'This is the fifth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 6',
    description: 'This is the sixth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 7',
    description: 'This is the seventh theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 8',
    description: 'This is the eighth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 9',
    description: 'This is the ninth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 10',
    description: 'This is the tenth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },

  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 11',
    description: 'This is the eleventh theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 12',
    description: 'This is the twelfth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 13',
    description: 'This is the thirteenth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 14',
    description: 'This is the fourteenth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 15',
    description: 'This is the fifteenth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 16',
    description: 'This is the sixteenth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 17',
    description: 'This is the seventeenth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 18',
    description: 'This is the eighteenth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 19',
    description: 'This is the nineteenth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://akira-elementor.axonvip.com/en/',
    name: 'Theme 20',
    description: 'This is the twentieth theme',
    imageUrl:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
];

const Themes = () => {
  const [filter, setFilter] = useState('');
  const inputChangeHandler = (e: any) => {
    setFilter(e.target.value);
  };

  const dataSearch = allThemes.filter((item) => {
    return Object.keys(item).some((key) =>
      // @ts-ignore
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <div>
      <DashboardDrawer />

      <section className="home-section">
        <ScrollToTop smooth color="black" />
        <div>
          <AccountMenu />
          <header className="text">Themes</header>
          <BreadCrumb currentPath="payment" />
          <div className="input_container">
            <h1>{filter}</h1>
            <input
              style={{ fontSize: '2rem' }}
              type="text"
              value={filter}
              onChange={(e) => {
                inputChangeHandler(e);
              }}
            />
          </div>
          <div className="theme__cardContainer">
            {(() => {
              return dataSearch.map((item) => (
                <ThemeCard
                  key={item.name}
                  url={item.url}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  name={item.name}
                />
              ));
            })()}
          </div>
          j
        </div>
      </section>
    </div>
  );
};

export default Themes;
