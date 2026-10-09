import Modules from "../modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home">
      <table>
        <tbody>
          <tr>
            <td style={{ verticalAlign: "top" }} width="70%">
              <Modules />
            </td>
            <td style={{ verticalAlign: "top" }}>
              <CourseStatus />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
