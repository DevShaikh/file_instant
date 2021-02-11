import React, { useContext } from "react";
import widgetContext from "../../context/fileinstant/widget/widgetContext";

const WidgetContent = () => {
  const WidgetContext = useContext(widgetContext);
  const {
    widgetWidth,
    showIcons,
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
    fieldChange,
    checkboxChange,
  } = WidgetContext;

  const onChange = (e) => fieldChange(e.target.name, e.target.value);
  const onCheck = (e) =>
    checkboxChange(e.target.name, e.target.checked ? true : false);

  return (
    <div className='widget_content'>
      <div className='widget_option'>
        <h5>Widget options</h5>
        <div className='widget_fields'>
          <div className='widget_field'>
            <label>Widget width (px):</label>
            <input
              type='number'
              className='input_widget'
              name='widgetWidth'
              onChange={onChange}
              value={widgetWidth}
            />
          </div>
          <div className='widget_field'>
            <label>Show icons:</label>
            <input
              type='checkbox'
              className='input_widget'
              name='showIcons'
              onChange={onCheck}
              defaultChecked={showIcons}
            />
          </div>
          <div className='widget_field'>
            <label>Date size:</label>
            <input
              type='number'
              className='input_widget'
              name='dateSize'
              onChange={onChange}
              value={dateSize}
            />
          </div>
          <div className='widget_field'>
            <label>Link size:</label>
            <input
              type='number'
              className='input_widget'
              name='linkSize'
              onChange={onChange}
              value={linkSize}
            />
          </div>
          <div className='widget_field'>
            <label>Line spacing:</label>
            <input
              type='number'
              className='input_widget'
              name='lineSpacing'
              onChange={onChange}
              value={lineSpacing}
            />
          </div>
          <div className='widget_field'>
            <label>Underline:</label>
            <select
              className='input_widget'
              name='underline'
              onChange={onChange}
              value={underline}
            >
              <option value='hover'>On Hover</option>
              <option value='click'>On Click</option>
              <option value='blur'>On Blur</option>
            </select>
          </div>
          <div className='widget_field'>
            <label>Title color:</label>
            <div className='color'>
              <input
                type='text'
                className='input_widget'
                name='titleColor'
                onChange={onChange}
                value={titleColor}
                maxLength='7'
              />
              <input
                type='color'
                name='titleColor'
                onChange={onChange}
                value={titleColor}
                maxLength='7'
                minLength='1'
              />
            </div>
          </div>
          <div className='widget_field'>
            <label>Title background:</label>
            <div className='color'>
              <input
                type='text'
                className='input_widget'
                name='titleBackground'
                onChange={onChange}
                value={titleBackground}
                maxLength='7'
              />
              <input
                type='color'
                name='titleBackground'
                onChange={onChange}
                value={titleBackground}
                maxLength='7'
                minLength='1'
              />
            </div>
          </div>
          <div className='widget_field'>
            <label>Date color:</label>
            <div className='color'>
              <input
                type='text'
                className='input_widget'
                name='dateColor'
                onChange={onChange}
                value={dateColor}
                maxLength='7'
              />
              <input
                type='color'
                name='dateColor'
                onChange={onChange}
                value={dateColor}
                maxLength='7'
                minLength='1'
              />
            </div>
          </div>
          <div className='widget_field'>
            <label>Link color:</label>
            <div className='color'>
              <input
                type='text'
                className='input_widget'
                name='linkColor'
                onChange={onChange}
                value={linkColor}
                maxLength='7'
              />
              <input
                type='color'
                name='linkColor'
                onChange={onChange}
                value={linkColor}
                maxLength='7'
                minLength='1'
              />
            </div>
          </div>
          <div className='widget_field'>
            <label>Border color:</label>
            <div className='color'>
              <input
                type='text'
                className='input_widget'
                name='borderColor'
                onChange={onChange}
                value={borderColor}
                maxLength='7'
              />
              <input
                type='color'
                name='borderColor'
                onChange={onChange}
                value={borderColor}
                maxLength='7'
                minLength='1'
              />
            </div>
          </div>
          <div className='widget_field'>
            <label>Rounded corners:</label>
            <div className='color corner'>
              <input
                type='checkbox'
                className='input_widget'
                name='roundedCorners'
                onChange={onCheck}
                defaultChecked={roundedCorners}
                maxLength='7'
              />
              <input
                type='number'
                name='roundedCornersSize'
                onChange={onChange}
                value={roundedCornersSize}
                maxLength='7'
                minLength='1'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WidgetContent;
