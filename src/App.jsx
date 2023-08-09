import Header from "./sections/Header"
import Main from "./sections/Main"
import SectionAchievementsClients from "./sections/SectionAchievementsClients"
import SectionClientsCommentary from "./sections/SectionClientsCommentary"
import SectionNoticesBuild from "./sections/SectionNoticesBuild"
import SectionWaitlist from "./sections/SectionWaitlist"

function App() {

  return (
    <>
      <Header />
      <Main />
      <SectionAchievementsClients />
      <SectionNoticesBuild />
      <SectionClientsCommentary />
      <SectionWaitlist />
    </>
  )
}

export default App
