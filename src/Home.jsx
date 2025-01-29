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
  Sponsors
} from "./Components";

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
        <PricingSection />
        {/* Pricing Section End */}
        {/* Speakers Section Start */}
        <SpeakersSection />
        {/* Speakers Section End */}
        {/* Event Register Start */}
        <EventRegister />
        {/* Event Register End */}
        {/* Join Event Start */}
        <JoinEvent />
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
        {/* Venue End */}
      </main>
      {/* Main Content Stops */}
    </>
  );
}
