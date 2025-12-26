'use client';
import { useEffect, useState } from 'react';
import PatientsFetch from './services/patientsfetch';
import { DiagramHorizontal, DiagramMultiple, DiagramPie, MainDiagram } from './components/PatientStatistic';

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
    { sex: 'female', total: (sexList?.female!! / sexList?.total!!) * 100, fill: 'var(--color-female)' },
    { sex: 'male', total: (sexList?.male!! / sexList?.total!!) * 100, fill: 'var(--color-male)' },
  ];
  const chartDataHorizontal = [
    { sex: 'total', total: sexList?.total, fill: 'var(--color-total)' },
    { sex: 'male', total: sexList?.male, fill: 'var(--color-male)' },
    { sex: 'female', total: sexList?.female, fill: 'var(--color-female)' },
  ];
  return (
    <>
      <h1 className='text-center text-4xl text-white mb-4'>Dashboard</h1>
      <div className='grid grid-cols-1 mx-xxs lg:grid-cols-2 gap-sm mx-0 md:gap-lg mb-4'>
        <MainDiagram />
        <div className='grid grid-cols-1 mx-xxs lg:grid-cols-2 gap-sm mx-0 md:gap-lg'>
          <DiagramMultiple
            chartDataMultiple={ageSex}
            legend={'Gender - Age'}
            cardDescription={'Showing total patients by age'}
            xDataKey={'age'}
          />
          <DiagramMultiple
            chartDataMultiple={vaccinationAgeSex}
            legend={'Gender - Vaccination Age'}
            cardDescription={'Showing patients by vaccination age'}
            xDataKey={'vaccinationAge'}
          />
          <DiagramHorizontal chartDataHorizontal={chartDataHorizontal} />
          <DiagramPie chartDataPie={chartDataPie} />
        </div>
      </div>
    </>
  );
}
