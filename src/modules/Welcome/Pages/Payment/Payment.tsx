/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

// ?  components
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';
import PricingPlanSection from 'library/common/components/Pricing/PricingPlanSection';
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';

const Payment = () => {
  return (
    <>
      <DashboardDrawer />

      <section className="home-section">
        <div>
          <AccountMenu />
          <header className="text">Payment</header>
          <BreadCrumb currentPath="payment" />
          <section className="pricing__plan">
            <PricingPlanSection />
          </section>
        </div>
      </section>
    </>
  );
};

export default Payment;
