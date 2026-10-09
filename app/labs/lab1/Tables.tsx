export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table id="wd-quiz-table" border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Next.js</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Routing</td>
            <td align="center">3/10/21</td>
            <td align="right">87</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">Forms</td>
            <td align="center">3/17/21</td>
            <td align="right">93</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">Props</td>
            <td align="center">3/24/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">Components</td>
            <td align="center">3/31/21</td>
            <td align="right">89</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Review</td>
            <td align="center">4/7/21</td>
            <td align="right">89</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">89.9</td>
          </tr>
        </tfoot>
      </table>
      <h5>My interests</h5>
      <table id="wd-your-table" border={1}>
        <caption>Activities I enjoy</caption>
        <thead>
          <tr>
            <th>Activity</th>
            <th>What I practice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Piano</td>
            <td>Learning songs</td>
          </tr>
          <tr>
            <td>Photography</td>
            <td>Composition</td>
          </tr>
          <tr>
            <td>Cooking</td>
            <td>Simple meals</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
