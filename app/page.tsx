'use client';
import { useEffect, useState } from 'react';
import PatientsFetch from './services/patientsfetch';
import { DiagramMultiple, DiagramPie, GenderDiagram1 } from './components/PatientStatistic';

interface IPatient {
  firstName: string;
  lastName: string;
  sex: string;
  age: string;
  vactAge: string;
  id: string | number;
}

interface ISex {
  female: number;
  male: number;
  total: number;
}

interface IAgeSex {
  age: string;
  female: any;
  male: any;
}

interface IVaccinationAgeSex {
  vaccinationAge: string;
  female: any;
  male: any;
}

export default function Page() {
  const [sexList, setSexList] = useState<ISex>();
  const [ageSex, setAgeSex] = useState<IAgeSex[]>([]);
  const [vaccinationAgeSex, setVaccinationAgeSex] = useState<IVaccinationAgeSex[]>([]);

  useEffect(() => {
    (async () => {
      const result = await PatientsFetch();
      setSexList(result.sex);
      setVaccinationAgeSex(result.vaccinationAgeSex);
      setAgeSex(result.ageSex);
    })();
  }, []);

  const chartDataPie = [
    { sex: 'female', total: sexList?.female, fill: 'var(--color-female)' },
    { sex: 'male', total: sexList?.male, fill: 'var(--color-male)' },
  ];
  return (
    <>
      <h1 className='text-center text-4xl text-white mb-4'>Dashboard</h1>
      <div className='grid grid-cols-1 mx-xxs md:grid-cols-4 gap-sm mx-0 md:gap-lg'>
        <GenderDiagram1 />
        <DiagramMultiple
          chartDataMultiple={ageSex}
          legend={'Gender - Age'}
          cardDescription={'Showing total patients by age'}
          xDataKey={'age'}
        />
        <DiagramMultiple
          chartDataMultiple={vaccinationAgeSex}
          legend={'Gender - Vaccination Age'}
          cardDescription={'Showing total patients by vaccination age'}
          xDataKey={'vaccinationAge'}
        />
        <DiagramPie chartDataPie={chartDataPie}/>
      </div>
    </>
  );
}
