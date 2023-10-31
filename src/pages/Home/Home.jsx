import React from 'react';
import './_Home.scss';
import Hero from '../../components/Hero/Hero.jsx';
import Feature from '../../components/Feature/Feature.jsx';
import  Iconchat from '../../images/icon-chat.png';
import  Iconmoney from '../../images/icon-money.png';
import  Iconsecurity from '../../images/icon-security.png';

function Home() {
    return (
      <div>
        <div className='row'>
        </div>
        <main>
          <Hero />
          <section className="features">
            <Feature
              icon={Iconchat}
              title="You are our #1 priority"
              description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <Feature
              icon={Iconmoney}
              title="More savings means higher rates"
              description="The more you save with us, the higher your interest rate will be!"
            />
            <Feature
              icon={Iconsecurity}
              title="Security you can trust"
              description="We use top of the line encryption to make sure your data and money is always safe."
            />
          </section>
        </main>
      </div>
    );
  }

export default Home;

