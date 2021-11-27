import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import HeroBanner from "../components/BannerModule/HeroBanner"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <HeroBanner
          title="Adaaab"
          subTitle="This one's a bit of a toughie, but I don't have one 'career focus' -- I'm into learning new things well and fast, and bringing some of those seemingly unrelated disciplines together to solve difficult problems."
        />
        <BasicTextModule />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features />
      </Layout>
    </>
  )
}

export default Index
