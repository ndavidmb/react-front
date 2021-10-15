import PropTypes from "prop-types";
import React from "react";

export const Table = ({ tableContent, handleModal }) => {
  const [keys, setKeys] = React.useState([]);

  React.useEffect(() => {
    if (tableContent?.length > 0) {
      const objectKeys = Object.keys(tableContent[0]);
      setKeys(objectKeys);
    }
  }, [tableContent]);

  const handleMenu = (id) => {
    const reference = document.querySelector(`#float-${id}`);
    const display = reference.style.display;

    reference.style.display = display === "block" ? "none" : "block";
  };

  const handleEvent = (method, id, obj) => {
    const reference = document.querySelector(`#float-${id}`);
    reference.style.display = "none";

    if (method === "update") {
      handleModal({ edit: true, obj });
    } else if (method === "delete") {
      handleModal({ delete: true, id });
    }
  };

  return (
    <table className="table table-striped border">
      <thead>
        <tr>
          <th style={{ width: "30px" }}></th>
          {keys.map((key, i) => (
            <th key={i}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {keys.length > 0 &&
          tableContent.map((cont) => {
            const id = keys.find((f) => f.includes("id"));
            const fields = keys.map((key, i) => <td key={i}>{cont[key]}</td>);
            fields.unshift(
              <td style={{ width: "30px" }} key={fields.length}>
                <i
                  role="button"
                  className="bi bi-three-dots-vertical text-secondary"
                  onClick={() => handleMenu(cont[id])}
                ></i>
                <div
                  style={{ display: "none" }}
                  className="floating-container"
                  id={`float-${cont[id]}`}
                >
                  <div className="floating">
                    <ul>
                      <li onClick={() => handleEvent("update", cont[id], cont)}>
                        Editar
                      </li>
                      <li onClick={() => handleEvent("delete", cont[id])}>
                        Eliminar
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
            );
            return <tr key={cont[id]}>{fields}</tr>;
          })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  tableContent: PropTypes.array.isRequired,
};
