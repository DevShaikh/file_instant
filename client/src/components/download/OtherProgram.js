import React from "react";
import { Link } from "react-router-dom";

const OtherProgram = () => {
  return (
    <div className="other_program_box">
      <table>
        <tr>
          <td>
            <img src="/firefox.png" alt="" />
          </td>
          <td>Google Chrome</td>
        </tr>
        <tr>
          <td></td>
          <td>
            Image result for chrome details Chrome is a free Internet browser.
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <Link to="/download/firefox">Download</Link>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default OtherProgram;
