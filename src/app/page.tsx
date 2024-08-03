import HeaderSection from '@/app/components/landing/header'
import Banner from '@/app/components/landing/banner'
import FeaturePatch from '@/app/components/landing/featurePatch'
import ChartSection from '@/app/components/landing/chartSection'
import UserFlow from '@/app/components/landing/userFlow'
import Review from '@/app/components/landing/review'
import Price from '@/app/components/landing/price'
import NewsLetter from '@/app/components/landing/newsletter'
import Footer from '@/app/components/landing/footer'
import CopyRight from '@/app/components/landing/copyright'
import Features from '@/app/components/landing/features'


export default function Home() {
  return (
     <>
      <HeaderSection/>
      <Banner/>
      <FeaturePatch/>
      <Features/>
      <ChartSection/>
      <UserFlow/>
      <Review/>
      <Price/>
      <NewsLetter/>
      <Footer/>
      <CopyRight/>

     </>
  );
}
