"use client";
import { useEffect, useState } from "react";
import PatientsFetch from "../services/patientsfetch";
import { Patient } from "../components/Patient";

interface IPatient {
  firstName: string;
  lastName: string;
  sex: string;
  age: string;
  color: string;
  id: string | number;
}

export default function Page() {
  const [patientsList, setPatientsList] = useState<IPatient[]>([]);

  useEffect(() => {
    (async () => {
      const result = await PatientsFetch();
      setPatientsList(result.patients);
    })();
  }, []);

  return (
    <main className="w-full md:w-2/3 p-16 overflow-hidden m-auto bg-white">
      <h2 className="text-center text-4xl">Patients Dashboard</h2>
      <div className="grid grid-cols-1 mx-xxs md:grid-cols-4 gap-sm mx-0 md:gap-lg">
        {patientsList &&
          patientsList.map((patient) => (
            <Patient key={patient.id} {...patient} />
          ))}
      </div>
    </main>
  );
}