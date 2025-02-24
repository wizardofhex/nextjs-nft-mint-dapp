import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Minting from '../components/Minting';
import Faq from '../components/Faq';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import projectConfig from '../config/projectConfig';
import topImage from '../public/assets/1920x600.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{projectConfig.nftName}</title>
      </Head>
      <center>
      <Image src={topImage} alt={projectConfig.nftName} />
      </center>
      <div className="bg-gray-800 py-8"  style={{backgroundColor: '#5e42a6'}} >
        <Prose>
          <h1 className="text-5xl font-bold mb-2">{projectConfig.nftName}</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Prose>
      </div>

      <div className="py-8" style={{backgroundColor: '#5052b5'}}>
        <Prose>
          <Minting />
        </Prose>
      </div>

      <div className="bg-gray-800 py-8" style={{backgroundColor: '#3e4094'}} >
        <Prose>
          <Faq />
        </Prose>
      </div>

      <div className="py-8"  >
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      <div className="bg-gray-800 py-8" style={{backgroundColor: '#493382'}}>
        <Prose>
          <Team />
        </Prose>
      </div>
    </Layout>
  );
};

export default Home;
