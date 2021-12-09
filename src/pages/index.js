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
          title="Hello there!"
          subTitle={[
            "I <i>love</i> building things and solving problems!",
            "I <i>love</i> building things and solving problems! I also run a startup, ",
            "I <i>love</i> building things and solving problems! I also run a startup, teach, ",
            "I <i>love</i> building things and solving problems! I also run a startup, teach, code, ",
            "I <i>love</i> building things and solving problems! I also run a startup, teach, code, design, ",
            "I <i>love</i> building things and solving problems! I also run a startup, teach, code, design, mentor, ",
            "I <i>love</i> building things and solving problems! I also run a startup, teach, code, design, mentor, and help others.",
          ]}
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
