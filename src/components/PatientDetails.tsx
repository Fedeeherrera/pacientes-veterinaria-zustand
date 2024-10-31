import { Patient } from '../types'

type PatientDetailsProps = {
  patient: Patient
}

function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <>
      <h2>{patient.name}</h2>
      <h2>{patient.caretaker}</h2>
      <h2>{patient.email}</h2>
      <h2>{patient.symptoms}</h2>
    </>
  )
}
export default PatientDetails