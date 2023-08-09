import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Main from "./sections/Main"
import SectionAchievementsClients from "./sections/SectionAchievementsClients"
import SectionClients from "./sections/SectionClients"
import SectionNoticesBuild from "./sections/SectionNoticesBuild"
import SectionWaitlist from "./sections/SectionWaitlist"

function App() {

  return (
    <>
      <Header />
      <Main />
      <SectionAchievementsClients />
      <SectionNoticesBuild />
      <SectionClients />
      <SectionWaitlist />
      <Footer />
    </>
  )
}

export default App
