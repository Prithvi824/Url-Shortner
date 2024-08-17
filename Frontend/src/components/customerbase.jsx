import "../css/customerBase.css";

function CustomerBase() {
  return (
    <section className="customer main m-20">
      <div className="customer main-container">
        <div className="customer inner-container">
          <div className="customer col-1">
            <img
              loading="lazy"
              decoding="async"
              className="customer col-1-img"
              style={{ marginBottom: "30px" }}
              src="https://docrdsfx76ssb.cloudfront.net/static/1712086357/pages/wp-content/uploads/2022/06/globe.png"
              alt="Globe"
              width="550"
              height="420"
              srcSet="https://docrdsfx76ssb.cloudfront.net/static/1712086357/pages/wp-content/uploads/2022/06/globe.png 550w,https://docrdsfx76ssb.cloudfront.net/static/1712086357/pages/wp-content/uploads/2022/06/globe-300x229.png 300w,https://docrdsfx76ssb.cloudfront.net/static/1712086357/pages/wp-content/uploads/2022/06/globe-24x18.png 24w,https://docrdsfx76ssb.cloudfront.net/static/1712086357/pages/wp-content/uploads/2022/06/globe-36x27.png 36w,https://docrdsfx76ssb.cloudfront.net/static/1712086357/pages/wp-content/uploads/2022/06/globe-48x37.png 48w"
              sizes="(max-width: 550px) 100vw, 550px"
            />
          </div>
          <div className="customer col-2">
            <table className="customer-Table">
              <tbody>
                <tr className="customer-table-1">
                  <td className="customer-table-1-left">
                    <h3>500K</h3>
                  </td>
                  <td className="customer-table-1-right">
                    global paying customers
                  </td>
                </tr>
                <tr className="customer-table-2">
                  <td className="customer-table-2-left">
                    <h3>256M</h3>
                  </td>
                  <td className="customer-table-2-right">
                    links &amp; QR Codes created monthly
                  </td>
                </tr>
                <tr className="customer-table-3">
                  <td className="customer-table-3-left">
                    <h3>10B</h3>
                  </td>
                  <td className="customer-table-3-right">
                    connections (clicks &amp; scans) monthly
                  </td>
                </tr>
                <tr className="customer-table-4">
                  <td className="customer-table-4-left">
                    <h3>800+</h3>
                  </td>
                  <td className="customer-table-4-right">
                    app integrations
                  </td>
                </tr>
              </tbody>
            </table>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerBase;
