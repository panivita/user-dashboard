import { PatientsData } from '../data/patients';
import { getAge } from '../utils/getAge';

const PatientsFetch = () => {
  const data = PatientsData();

  const patientsPromise: Promise<any> = new Promise((resolve) => {
    setTimeout(() => {
      const dateNow = Date.now();
      const female = data.filter(({ sex }) => sex === 'female').length;
      const male = data.filter(({ sex }) => sex === 'male').length;
      const sex = { female: female, male: male, total: data.length };

      const patientsWithAge = data.map((patients, index) => {
        const age = getAge(patients.birthDate, dateNow);
        const vacDate = patients.vaccinationDate !== null && new Date(patients.vaccinationDate).getTime();
        const vacAge = patients.vaccinationDate !== null ? getAge(patients.birthDate, vacDate) : null;
        return { ...patients, id: index, age: age, vacAge: vacAge };
      });
      const femaleAge = patientsWithAge.filter(({ sex }) => sex === 'female').map(({ age }) => age);
      const femaleAgeOccurrences = femaleAge.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
      }, {});
      const maleAge = patientsWithAge.filter(({ sex }) => sex === 'male').map(({ age }) => age);
      const maleAgeOccurrences = maleAge.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
      }, {});
      const ageSex = [];
      for (const property in femaleAgeOccurrences) {
        for (const prop in maleAgeOccurrences) {
          if (property === prop) {
            const element = { age: property, female: femaleAgeOccurrences[property], male: maleAgeOccurrences[prop] };
            ageSex.push(element);
          }
        }
      }
      const femaleAgeVac = patientsWithAge
        .filter(({ sex, vacAge }) => sex === 'female' && vacAge !== null && vacAge > 0)
        .map(({ vacAge }) => vacAge);
      const femaleAgeVacOccurrences = femaleAgeVac.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
      }, {});
      const maleAgeVac = patientsWithAge
        .filter(({ sex, vacAge }) => sex === 'male' && vacAge !== null && vacAge > 0)
        .map(({ vacAge }) => vacAge);
      const maleAgeVacOccurrences = maleAgeVac.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
      }, {});
      const ageSexVac = [];
      for (const property in femaleAgeVacOccurrences) {
        for (const prop in maleAgeVacOccurrences) {
          if (property === prop) {
            const element = {
              vaccinationAge: property,
              female: femaleAgeVacOccurrences[property],
              male: maleAgeVacOccurrences[prop],
            };
            ageSexVac.push(element);
          }
        }
      }
      resolve({ sex: sex, ageSex: ageSex, vaccinationAgeSex: ageSexVac });
    }, 500);
  });
  return patientsPromise;
};

export default PatientsFetch;
