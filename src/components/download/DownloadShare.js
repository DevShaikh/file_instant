import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon
} from "react-share";

const DownloadShare = () => {
  const url = "https://github.com/devshaikh"
  return (
    <div className="download_details">
      <h5>Share</h5>
      <div className="download_share_buttons my-4">
        <FacebookShareButton url={url} className="download_share_btn">
          <FacebookIcon size={40}/>
        </FacebookShareButton>
        <TwitterShareButton url={url} className="download_share_btn">
          <TwitterIcon size={40}/>
        </TwitterShareButton>
        <PinterestShareButton url={url} className="download_share_btn">
          <PinterestIcon size={40}/>
        </PinterestShareButton>
        <LinkedinShareButton url={url} className="download_share_btn">
          <LinkedinIcon size={40}/>
        </LinkedinShareButton>
        <WhatsappShareButton url={url} className="download_share_btn">
          <WhatsappIcon size={40}/>
        </WhatsappShareButton>
        <EmailShareButton url={url} className="download_share_btn">
          <EmailIcon size={40}/>
        </EmailShareButton>
      </div>
    </div>
  );
};
export default DownloadShare;
