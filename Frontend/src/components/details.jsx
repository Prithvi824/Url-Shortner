import PropTypes from "prop-types";
import { useState } from "react";
import apiRequest from "../assets/services/api";

function Details({ data, token, onUpdated }) {
  const originalPath = location.origin;
  const [editingCode, setEditingCode] = useState(null);
  const [editValue, setEditValue] = useState("");

  function startEdit(link) {
    setEditingCode(link.code);
    setEditValue(link.target_url);
  }

  async function saveEdit(code) {
    const { ok, data: updated } = await apiRequest("/update", {
      method: "POST",
      token,
      body: { code, target_url: editValue },
    });
    if (ok) {
      onUpdated(updated);
      setEditingCode(null);
    }
  }

  async function toggleActive(link) {
    const { ok, data: updated } = await apiRequest("/update", {
      method: "POST",
      token,
      body: { code: link.code, is_active: !link.is_active },
    });
    if (ok) onUpdated(updated);
  }

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
              <th>Clicks</th>
              <th>Status</th>
              <th>More Information</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((link, index) => (
                <tr key={link.code}>
                  <td>{index + 1}</td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <p
                      style={{ cursor: "pointer" }}
                    >{`${originalPath}/${link.code}`}</p>
                  </td>
                  <td
                    style={{
                      maxWidth: "250px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {editingCode === link.code ? (
                      <input
                        type="url"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                      />
                    ) : (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => startEdit(link)}
                      >
                        {link.target_url}
                      </p>
                    )}
                  </td>
                  <td>{link.click_count}</td>
                  <td>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleActive(link)}
                    >
                      {link.is_active ? "Active" : "Inactive"}
                    </p>
                  </td>
                  <td className="details-redirect">
                    {editingCode === link.code ? (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => saveEdit(link.code)}
                      >
                        Save
                      </p>
                    ) : (
                      <a
                        href={`${originalPath}/${link.code}`}
                        style={{ textDecoration: "none" }}
                      >
                        <p>Open in Browser</p>
                        <i className="bx bx-right-top-arrow-circle"></i>
                      </a>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No long URLs found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

Details.propTypes = {
  data: PropTypes.array,
  token: PropTypes.string,
  onUpdated: PropTypes.func,
};

export default Details;
