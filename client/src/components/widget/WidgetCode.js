import React, { useContext } from "react";
import widgetContext from "../../context/fileinstant/widget/widgetContext";

const WidgetCode = () => {
  const WidgetContext = useContext(widgetContext);
  const {
    widgetWidth,
    // showIcons,
    dateSize,
    linkSize,
    lineSpacing,
    underline,
    titleColor,
    titleBackground,
    dateColor,
    linkColor,
    borderColor,
    roundedCorners,
    roundedCornersSize,
  } = WidgetContext;

  return (
    <div className='widget_code_area'>
      <h4>Widget code</h4>
      <p>Copy following code to your page</p>
      <div className='widget_code'>
        <span>
          {`<!-- FileHippo Feed -->`}
          <br />
          {`<style type="text/css">`}
          <br />
          {`<!--`}
          <br />
          {`
            .fh_title{
              padding:4px;
              background-color:${titleBackground};
              font-weight:bold;font-size:13px;
            }
          `}
          <br />
          {`
            .fh_title a {
              color:${titleColor} !important;
              text-decoration:none !important;
            }
          `}
          <br />
          {`
            .fh_box {
              width:${widgetWidth}px;
              border:solid 1px ${borderColor};
              ${roundedCorners ? `border-radius: ${roundedCornersSize}px;` : ""}
              background-color:#fff;font-family:Arial,Helvetica sans-serif;
            }
          `}
          <br />
          {`
            .fh_box a:hover {
              text-decoration:${underline !== "hover" ? "none" : "underline"};
            }
            
          `}
          {(() => {
            let onWhich = "hover";
            // eslint-disable-next-line
            switch (underline) {
              case "blur":
                onWhich = "blur";
                break;

              case "click":
                onWhich = "focus";
                break;
            }
            if (onWhich !== "hover") {
              return `
              .fh_box a:${onWhich} {
                text-decoration: underline;
              }
              `;
            }
          })()}
          <br />
          {`
.fh_box a{color:${linkColor};text-decoration:none;font-size:${linkSize}}`}
          <br />
          {`
ul.fh_items{font-size:12px;list-style:none;margin:5px;padding:0;}`}
          <br />
          {`
.fh_date{color:${dateColor};font-size:${dateSize};font-weight:bold;margin-top:2px;line-height:${lineSpacing};}`}
          <br />
          {`
.fh_item{margin:3px 0px 3px 0px;}`}
          <br />
          {`
.fh_item img{border:0px;padding-right:3px;vertical-align:top;width:16px;height:16px;}`}
          <br />
          {`
-->`}
          <br />
          {`
</style>`}
          <br />
          {`
<div class="fh_box">`}
          <br />
          {`
<div class="fh_title">`}
          <br />
          {`<a href="http://www.filehippo.com/" target="_blank">Latest downloads</a>`}
          <br />
          {`</div>`}
          <br />
          {`
<div align="right" style="padding:16px 5px 5px 5px;font-size:11px">`}
          <br />
          {`
<a href="http://www.filehippo.com/" target="_blank" style="color:#000">Powered by FileHippo.com</a>`}
          <br />
          {`
</div>`}
          <br />
          {`</div>`}
          <script
            language='JavaScript'
            src='http://www.filehippo.com/en/rss2/?format=js&icons=1'
            type='text/javascript'
          ></script>
          <br />
          {`<!-- End FileHippo Feed -->`}
        </span>
      </div>
      <div className='widget-add'>
        <div className='add_top'>
          <img src={process.env.PUBLIC_URL + "/add2.png"} alt='' />
        </div>
      </div>
    </div>
  );
};
export default WidgetCode;
