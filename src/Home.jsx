import {
  Header,
  HeaderPopup,
  SidebarPopup,
  HeroSlider,
  EventCountdown,
  AboutEvent,
  VideoSection,
  FeatureSection,
  EventSchedule
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
      </main>
      {/* Main Content Stops */}
    </>
  );
}
