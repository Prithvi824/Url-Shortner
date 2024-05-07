import PropTypes from "prop-types";

function Details({ data }) {
  const longUrls = Object.keys(data);
  const orignalPath = location.origin;

  return (
    <section className="details-container" id="details-container">
      <div className="details-container-inner">
        <div className="details-header-container">
          <h1 className="details-header">My links</h1>
        </div>

        <table className="details-table">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Short Url</th>
              <th>Long Url</th>
              <th>More Information</th>
            </tr>
          </thead>
          <tbody>
            {longUrls.length > 0 ? (
              longUrls.map((key, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <p
                      style={{ cursor: "pointer" }}
                    >{`${orignalPath}/${key}`}</p>
                  </td>
                  <td
                    style={{
                      maxWidth: "250px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <p style={{ cursor: "pointer" }}>{data[key]}</p>
                  </td>
                  <td className="details-redirect">
                    <a
                      href={`${orignalPath}/${key}`}
                      style={{ textDecoration: "none" }}
                    >
                      <p>Open in Browser</p>
                      <i className="bx bx-right-top-arrow-circle"></i>
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No long URLs found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

Details.propTypes = {
  data: PropTypes.object,
};

export default Details;
