import React from 'react';
import { useTranslation } from 'react-i18next';

import CallUs from 'library/common/components/CallUs/CallUs';

const Home = () => {
  //* react international lang  middleware
  const { t } = useTranslation();
  return (
    <div>
      {t('loginRegisterPage.descriptionParagraph.firstLine')}

      <CallUs />
    </div>
  );
};

export default Home;
