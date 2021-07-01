let style = `
<style>
    .membership-types-main {
        display: none;
    }
    
    .custom-membership {
      padding: 40px 0;
      margin: 0 auto;
      max-width: 1060px;
      width: 95%;
    }
    
    .custom-membership h1 {
      font-weight: 800;
      text-align: center;
      font-size: 36px;
      margin-bottom: 10px;
    }
    
    .custom-membership h3 {
      font-size: 16px;
      font-weight: 300;
      text-align: center;
      width: 400px;
      margin: 0 auto 50px;
    }
    
    .custom-membership table {
      border-collapse: collapse;
      border: 1px solid #f5f5f6;
    }
    
    .custom-membership td {
      border: 1px solid #f5f5f6;
    }
</style>
`

let newBlock = `
    <section class="custom-membership">
        <h1>Pick Your Plan</h1>
        <h3>Take real estate investing to the next level with unlimited access to education and tools.</h3>
        <table>
          <tr>
              <th>Features</th>
              <th>Feature info</th>
              <th>Free</th>
              <th>Pro Monthly<br>$39/month</th>
              <th>Pro Annual<br>$390/year</th>
          </tr>
          <tr>
              <td>Community forum and blog</td>
              <td>Avoid mistakes by tapping into the collective knowledge of more than 2 million members.</td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td>Property analysis calculators</td>
              <td>Determine a property’s cash flow potential in minutes with interactive calculators and tools.</td>
              <td>Limited (5 uses)</td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td>Market rental data and insights</td>
              <td>Access to rental data and insights: choose highest ROI deals based on a valid data instead of gut-feeling</td>
              <td>Limited</td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td>Virtual events</td>
              <td>Get access to exclusive events in industry</td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td>Free lease agreement documents</td>
              <td>Get special lease agreemnet documents quick and easy</td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td>Pro Member Badge</td>
              <td>Get more answers on your questions and querries from expert investment community" "Increase your posts visibility comments and credibility</td>
              <td>Limited (1 post)</td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td>Pro member events (webinars)</td>
              <td>Get access to over 30 Pro webinars every week</td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
        </table>
    </section>
`

document.body.insertAdjacentHTML('afterbegin', style)

document.querySelector('.page-content').insertAdjacentHTML('afterbegin', newBlock)

