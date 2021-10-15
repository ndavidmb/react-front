import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DoctorForm } from "../components/pages/DoctorForm";
import { GenericMain } from "../components/pages/GenericMain";
import { Home } from "../components/pages/Home";
import { Pdf } from "../components/pages/Pdf";
import { SpecialtyForm } from "../components/pages/SpecialtyForm";
import { Navbar } from "../components/ui/Navbar";

export const HomeRouter = () => {
  const tables = [
    {
      form: <SpecialtyForm />,
      api: "specialty",
      title: "Especialidades",
      btnLabel: "Nueva especialidad",
    },
    {
      form: <DoctorForm />,
      api: "doctor",
      title: "Doctores",
      btnLabel: "Nuevo doctor",
    },
    {
      form: <DoctorForm />,
      api: "patient",
      title: "Pacientes",
      btnLabel: "Nuevo paciente",
    },
    {
      form: <DoctorForm />,
      api: "treatment",
      title: "Tratamiento",
      btnLabel: "Nuevo tratamiento",
    },
    {
      form: <DoctorForm />,
      api: "user",
      title: "Usuarios",
      btnLabel: "Nuevo usuario",
    },
    {
      form: <DoctorForm />,
      api: "insurance",
      title: "Seguros",
      btnLabel: "Nuevo seguro",
    },
    {
      form: <DoctorForm />,
      api: "bed",
      title: "Camas",
      btnLabel: "Nueva cama",
    },
    {
      form: <DoctorForm />,
      api: "profile",
      title: "Perfiles",
      btnLabel: "Nuevo perfil",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Navbar routes={tables} />
        <Switch>
          {tables.map((r) => (
            <Route key={r.api} path={`/home/${r.api}`}>
              <GenericMain api={r.api} tables={tables} />
            </Route>
          ))}
          <Route path="/home/pdf" component={Pdf} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
