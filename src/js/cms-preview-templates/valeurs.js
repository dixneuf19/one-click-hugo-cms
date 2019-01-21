import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class ValeursPreview extends React.Component {
  render() {
    const { entry, getAsset, widgetFor } = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])} />

      <div className="bg-off-white pv4">
        <div className="ph3 mw7 center">
          <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "presentation", "heading"])}</h2>
          {(entry.getIn(["data", "presentation", "paragraphs"]) || []).map((par, index) => <p key={index} className="mb4 mw6">{par}</p>)}

          <h2 class="f2 b lh-title mb2">{entry.getIn(["data", "objectifs", "heading"])}</h2>
          <p class="mb4 mw6">{entry.getIn(["data", "objectifs", "description"])}</p>
          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {(entry.getIn(["data", "objectifs", "blurbs"]) || []).map((blurb, index) => <div className="ph2-ns w-50-ns mb4" key={index}>
              <img src={blurb.get("image") && getAsset(blurb.get("image"))} alt="" className="center db mb3" style={{ width: "240px" }} />
              <p>{blurb.get("text")}</p>
            </div>)}
          </div>
        </div>
      </div>

      <div className="pb4">
        {(entry.getIn(["data", "testimonials"]) || []).map((testimonial, index) => <div className="center mb3 ph3" key={index}>
          <blockquote className="bg-grey-1 primary pa3 mb3 br1 b mw6 center">
            <p className="f4 mb0">“{testimonial.get("quote")}”</p>
            <cite className="tr db grey-3">{testimonial.get("author")}</cite>
          </blockquote>
        </div>)}
      </div>

      <div className="mw7 center ph3 pv4">

        <div class="cms">{widgetFor("body")}</div>


        <div className="flex flex-wrap mhn1">
          <div className="w-100 w-50-ns ph1-ns">
            <img src={getAsset(entry.getIn(["data", "image1", "image"]))} />
          </div>

          <div className="w-100 w-50-ns ph1-ns">
            <img src={getAsset(entry.getIn(["data", "image2", "image"]))} />
          </div>

          <div className="w-100 ph1-ns">
            <img src={getAsset(entry.getIn(["data", "image3", "image"]))} />
          </div>
        </div>
      </div>

    </div>;
  }
}
