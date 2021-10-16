import React from "react"
import { graphql, StaticQuery } from "gatsby"

import AboutData from "../data/homeData.json"
import aboutUsStyles from "../styles/about-us.module.css"
import Image from "../components/image"

/**
 * Contains floating bubbles with short blobs of info about the club
 * Data is stored in /src/data/homeData.json
 *
 * Receives no props
 */
class AboutUs extends React.Component {
  constructor(props) {
    super()
    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    return (
      // <StaticQuery
      //   query={graphql`
      //     query AboutUsSectionData {
      //       allDataJson {
      //         nodes {
      //           about_us_main
      //           about_us_off_1
      //           about_us_off_2
      //           about_us_off_3
      //           about_us_off_4
      //           about_us_off_5
      //           about_us_off_6
      //         }
      //       }
      //     }
      //   `}
      //   render={data => (
      //   )}
      // />
      <React.Fragment>
        <div className={aboutUsStyles.infoRow}>
          <div>
            <div
              className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.topLeft}`}
            >
              {AboutData["about-us-off-1"]}
            </div>
            <div
              className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.midLeft}`}
            >
              {AboutData["about-us-off-2"]}
            </div>
            <div
              className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.bottomLeft}`}
            >
              {AboutData["about-us-off-3"]}
            </div>
          </div>
          <div
            style={{
              width: (this.state.width * 0.7).toString() + "px",
              height: (this.state.width * 0.7).toString() + "px",
              minHeight: "335px",
              minWidth: "335px",
              maxWidth: "450px",
              maxHeight: "450px",
            }}
            className={aboutUsStyles.mainInfo}
          >
            {AboutData["about-us-main"]}
          </div>
          <div>
            <div
              className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.topRight}`}
            >
              {AboutData["about-us-off-4"]}
            </div>
            <div
              className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.midRight}`}
            >
              {AboutData["about-us-off-5"]}
            </div>
            <div
              className={`${aboutUsStyles.secondaryInfo} ${aboutUsStyles.bottomRight}`}
            >
              {AboutData["about-us-off-6"]}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default AboutUs
