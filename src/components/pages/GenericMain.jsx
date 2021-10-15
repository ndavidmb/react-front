import React from "react";
import useConstructor from "../../hooks/useConstructor";
import { GenericTable } from "./GenericTable";

export const GenericMain = ({ api, tables }) => {
  const [component, setComponent] = React.useState({
    form: null,
    api: "",
    title: "",
    btnLabel: "",
  });
  

  useConstructor(() => {
    const cur = tables.find((f) => f.api === api);
    setComponent(cur);
  });

  return (
    <GenericTable
      ModalForm={component.form}
      apiMethod={component.api}
      title={component.title}
      buttonLabel={component.btnLabel}
    />
  );
};
