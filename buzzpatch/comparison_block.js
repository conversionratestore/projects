let styleComparisonBlock = /*html*/ `
<style>
  .comparison_block table thead tr:last-child td,
  table thead tr:last-child th {
    border-bottom: none;
  }

  .accent_span {
    font-family: "Roboto Condensed", sans-serif !important;
    font-weight: 400 !important;
    font-size: 14px !important;
    line-height: 114% !important;
    letter-spacing: 0.015em !important;
    text-transform: uppercase !important;
    color: #ff3c81 !important;
  }

  .img_block {
    margin-bottom: -2px;
  }

  .img_block img {
    width: 100% !important;
  }

  .comparison_block {
    background-size: 100%;
    background-color: #eceef0;
    padding: 30px 16px;
  }

  .comparison_block h2 {
    font-family: "DINEngschrift LT", sans-serif;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #0c0b0b;
    margin-bottom: 40px;
  }

  .comparison_block > p {
    font-family: "DINEngschrift LT", sans-serif;
    font-weight: 400;
    font-size: 26px !important;
    line-height: 110% !important;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
    border: 2px solid #ff3c81;
    border-radius: 6px;
    padding: 20px 47px;
    margin-top: 40px;
  }

  .comparison_block > p span {
    color: #ff3c81;
  }

  .comparison_block table {
    border-spacing: 0;
    border: none;
    border-radius: none;
  }

  .comparison_block table thead th {
    font-family: "Roboto Condensed", sans-serif !important;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #212529;
    padding-bottom: 20px;
  }

  .comparison_block table thead th div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .comparison_block table thead th span {
    display: inline-block;
    margin-top: 7px;
  }

  .comparison_block table th,
  .comparison_block table td {
    background: #eceef0 !important;
    border-bottom: none;
    border-right: none;
  }

  .comparison_block table tbody tr {
    border-top: 1px solid #d9d9d9;
  }

  .comparison_block table tbody tr td {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #212529;
    padding: 20px 0;
    width: 119px;
  }

  .comparison_block table tbody tr td:first-child {
    font-weight: 600;
    text-align: left;
  }

  .comparison_block table tbody tr td:not(:last-child) div {
    position: relative;
  }

  .comparison_block table tbody tr td:not(:last-child) div::after {
    position: absolute;
    content: "";
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: #d9d9d9;
    width: 1px;
    height: 26px;
  }

  @media (max-width: 321px) {
    .comparison_block > p {
      padding: 20px 19px;
    }

    .comparison_block table tbody tr td:first-child div {
      padding-right: 20px;
    }
  }
</style>
`

let comparisonBlock = /*html*/ `
<div class="img_block">
  <img src="https://conversionratestore.github.io/projects/buzzpatch/img/background_comparison_block.svg" alt="background figure">
</div>
    <section class="comparison_block">
      <h2>
        How expensive is Buzzpatch <br />
        compared to mosquito <br />
        repelling sprays
      </h2>
      <table>
        <thead>
          <th>&nbsp;</th>
          <th class="accent_span">
            <div>
              <img src="https://conversionratestore.github.io/projects/buzzpatch/img/buzzpatch_smiley.svg" alt="sticker buzzpatch" />
              <span>Buzzpatch</span>
            </div>
          </th>
          <th>
            <div>
              <img src="https://conversionratestore.github.io/projects/buzzpatch/img/spray_buzz.svg" alt="spray" />
              <span>Spray</span>
            </div>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>Price</div>
            </td>
            <td>
              <div>$19</div>
            </td>
            <td>
              <div>$10</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>One package <br> contains</div>
            </td>
            <td>
              <div>60 patches</div>
            </td>
            <td>
              <div>300 ml</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>Normal use <br> per day</div>
            </td>
            <td>
              <div>3 patches</div>
            </td>
            <td>
              <div>~35 ml</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>How long <br> does it last</div>
            </td>
            <td>
              <div>20 days</div>
            </td>
            <td>
              <div>8 days</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>Price per day</div>
            </td>
            <td>
              <div>$0.95 <br></div>
            </td>
            <td>
              <div>$1.25</div>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Buzzpatch is <span>UP to 25% <br />cheaper</span> than a bug spray
      </p>
    </section>
`

document.head.insertAdjacentHTML("beforeend", styleComparisonBlock)

document.querySelector(".js-mobile.effectiveness").insertAdjacentHTML("afterend", comparisonBlock)
