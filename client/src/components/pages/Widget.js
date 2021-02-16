import React from "react";
import WidgetCode from "../widget/WidgetCode";
import WidgetContent from "../widget/WidgetContent";
import WidgetPreview from "../widget/WidgetPreview";

const Widget = () => {
  return (
    <section id="widget">
      <div className="row">
        <div className="col-lg-12">
          <div className="widget_title">
            <h4>Widget - Create your own!</h4>
            <p>
              Add the filehippo widget to your website, so your visitors can
              benefit from all the latest software updates! Just change the
              options below until the preview matches the style of your site,
              then simply copy the HTML code.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <WidgetContent />
        </div>
        <div className="col-lg-6 col-md-12">
          <WidgetPreview />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <WidgetCode />
        </div>
      </div>
    </section>
  );
};
export default Widget;
