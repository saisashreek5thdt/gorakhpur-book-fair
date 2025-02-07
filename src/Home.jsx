/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import {
  Header,
  HeaderPopup,
  SidebarPopup,
  HeroSlider,
  EventCountdown,
  AboutEvent,
  VideoSection,
  FeatureSection,
  EventSchedule,
  CounterArea,
  PricingSection,
  SpeakersSection,
  EventRegister,
  JoinEvent,
  Testimonials,
  Gallery,
  Sponsors,
  VenueInfo,
  RegisterForm,
  BlogSection,
  SocialImages,
  FAQSection
} from "./Components";
import FooterInfo from "./Components/Footer/FooterInfo";

export default function Home() {
  return (
    <>
      {/* Header Section Start */}
      <Header />
      {/* Header Section End */}
      {/* Header Popup Section Start */}
      <HeaderPopup />
      {/* Header Popup Section End */}
      {/* Sidebar Popup Section Start */}
      <SidebarPopup />
      {/* Sidebar Popup Section End */}
      {/* Main Content Starts */}
      <main className="main">
        {/* Hero Slider Start */}
        <HeroSlider />
        {/* Hero Slider End */}
        {/* Event Countdown Start */}
        <EventCountdown />
        {/* Event Countdown End */}
        {/* About Event Start */}
        <AboutEvent/>
        {/* About Event End */}
        {/* Video Section Start */}
        <VideoSection />
        {/* Video Section End */}
        {/* Feature Section Start */}
        <FeatureSection />
        {/* Feature Section End  */}
        {/* Events Schedule Start */}
        <EventSchedule />
        {/* Events Schedule End */}
        {/* Counter Area Start */}
        <CounterArea />
        {/* Counter Area End */}
        {/* Pricing Section Start */}
        {/* <PricingSection /> */}
        {/* Pricing Section End */}
        {/* Speakers Section Start */}
        <SpeakersSection />
        {/* Speakers Section End */}        
        {/* Join Event Start */}
        {/* <JoinEvent /> */}
        {/* Join Event End */}
        {/* Testimonials Start */}
        <Testimonials />
        {/* Testimonials End */}
        {/* Gallery Start */}
        <Gallery />
        {/* Gallery End */}
        {/* Sponsors Start */}
        <Sponsors />
        {/* Sponsors End */}
        {/* Venue Start */}
        <VenueInfo />
        {/* Venue End */}
        {/* Event Register Start */}
        <EventRegister />
        {/* Event Register End */}
        {/* Register Form Start */}
        {/* <RegisterForm /> */}
        {/* Register Form End */}
        {/* Blog Section Start */}
        {/* <BlogSection /> */}
        {/* Blog Section End */}
        {/* Social Images Start */}
        {/* <SocialImages /> */}
        {/* Social Images End */}
        {/* FAQ Start */}
        <FAQSection />
        {/* FAQ End */}
      </main>
      {/* Main Content Stops */}
      {/* Footer Content Start */}
      <FooterInfo />
      {/* Footer Content End */}
      {/* Scroll To Top Start */}
      <Link to="/" id="scroll-top"><i className="fas fa-arrow-up"></i></Link>
      {/* Scroll To Top End */}
    </>
  );
}
