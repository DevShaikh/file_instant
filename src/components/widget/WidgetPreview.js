import React from "react";
import { Link } from "react-router-dom";

const WidgetPreview = () => {
  return (
    <div className='widget_preview'>
      <h5>Widget preview</h5>
      <div className='latest_download'>
        <h4>Latest downloads</h4>
        <div className='latest_download_content'>
          <ul>
            <li>04 Jan</li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "chrome_icon.png"}
                alt=''
                className='img-fluid'
              />
              <Link to='#'>google chrome 28.0.1500.95</Link>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "utorrent.png"}
                alt=''
                className='img-fluid'
              />
              <Link to='#'>utorrent 3.3.1 build 29988</Link>
            </li>
            <li>03 Jan</li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "chrome_icon.png"}
                alt=''
                className='img-fluid'
              />
              <Link to='#'>google chrome 28.0.1500.95</Link>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "utorrent.png"}
                alt=''
                className='img-fluid'
              />
              <Link to='#'>utorrent 3.3.1 build 29988</Link>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "utorrent.png"}
                alt=''
                className='img-fluid'
              />
              <Link to='#'>utorrent 3.3.1 build 29988</Link>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "utorrent.png"}
                alt=''
                className='img-fluid'
              />
              <Link to='#'>utorrent 3.3.1 build 29988</Link>
            </li>
            <li>01 Jan</li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "chrome_icon.png"}
                alt=''
                className='img-fluid'
              />
              <Link to='#'>google chrome 28.0.1500.95</Link>
            </li>
            <li>Powered by filehippo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default WidgetPreview;
