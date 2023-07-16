import React from "react";
import ReactPlayer from "react-player/youtube";
export default function Video(props) {
  return (
    <>
      {props.data.map((value, id) => {
        return (
          <div key={id} className="_username__featuredLink__MeYB7 text-start">
            <h3>{value.linkTitleInput}</h3>
            <div className="BaseEmbeddedLink_baseEmbeddedLinkWrapper__SlpfZ">
              <div className="BaseEmbeddedLink_baseEmbeddedLink__WXu5a">
                <div className="BaseEmbeddedLink_baseEmbeddedLinkContainer__SlSm5 BaseEmbeddedLink_baseEmbeddedLinkContainerEmbed__py5x8">
                  <div className="BaseEmbeddedLink_baseEmbeddedLinkItem__EDHSQ BaseEmbeddedLink_baseEmbeddedLinkItemVisible__63uQ_">
                    <ReactPlayer
                      // url={`https://www.youtube.com/embed/${url}?showinfo=0&amp;modestbranding=1&modestbranding=3&controls=0&rel=1&contore=1`}
                      url={value.titleInput}
                      light={true}
                      width="100%"
                      playing={true}
                      className="EmbeddedYouTube_embeddedYouTube__kZebg EmbeddedYouTube_featuredLinkEmbeddedVideo__GERzu reactYoutube"
                      height="100%"
                      controls
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="_username__featuredLink__MeYB7">
        <h3>Biggest Reward & Recognition Event (2019) - Investors Clinic</h3>
        <div className="BaseEmbeddedLink_baseEmbeddedLinkWrapper__SlpfZ">
          <div className="BaseEmbeddedLink_baseEmbeddedLink__WXu5a">
            <div className="BaseEmbeddedLink_baseEmbeddedLinkContainer__SlSm5 BaseEmbeddedLink_baseEmbeddedLinkContainerEmbed__py5x8">
              <div className="BaseEmbeddedLink_baseEmbeddedLinkItem__EDHSQ BaseEmbeddedLink_baseEmbeddedLinkItemVisible__63uQ_">
                <ReactPlayer
                  // url={`https://www.youtube.com/embed/${url}?showinfo=0&amp;modestbranding=1&modestbranding=3&controls=0&rel=1&contore=1`}
                  url="https://www.youtube.com/watch?v=TNQsmPf24go&t=2s"
                  light={true}
                  width="100%"
                  playing={true}
                  className="EmbeddedYouTube_embeddedYouTube__kZebg EmbeddedYouTube_featuredLinkEmbeddedVideo__GERzu reactYoutube"
                  height="100%"
                  controls
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* girl safety */}
    </>
  );
}
