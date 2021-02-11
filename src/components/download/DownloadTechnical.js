import React from "react";
import { Link } from "react-router-dom";

const DownloadTechnical = () => {
  return (
    <div className='download_technical download_details'>
      <h5 className='mb-4'>Technical</h5>
      <table>
        <tr>
          <th>Title:</th>
          <td>Google Chrome 87.0.4280.141 for Windows</td>
        </tr>
        <tr>
          <th>Requirements:</th>
          <td>Windows 10,Windows 7,Windows 8,Windows 8.1</td>
        </tr>
        <tr>
          <th>Language:</th>
          <td>English</td>
        </tr>
        <tr>
          <th>Available languages:</th>
          <td>
            English, German, Spanish, French, Italian, Japanese, Polish, Chinese
          </td>
        </tr>
        <tr>
          <th>License:</th>
          <td>Free</td>
        </tr>
        <tr>
          <th>Date added:</th>
          <td>Thursday, June 20th 2019</td>
        </tr>
        <tr>
          <th>Author:</th>
          <td>
            Google{" "}
            <Link to='https://www.google.com'>https://www.google.com</Link>
          </td>
        </tr>
        <tr>
          <th>SHA-1:</th>
          <td>197d312f67e70617c57eca811c5ddcc08a51f6d0</td>
        </tr>
      </table>
    </div>
  );
};
export default DownloadTechnical;
