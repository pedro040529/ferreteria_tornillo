import Hero from '@/app/components/Hero';
import Categories from '@/app/components/Categories';
import InfoBoxes from '@/app/components/InfoBoxes';
import connectDB from '@/config/database';

const HomePage = async () => {
  await connectDB();

  return (
    <>
      <Hero />
      <Categories />
      <InfoBoxes />
    </>
  );
};

export default HomePage;
