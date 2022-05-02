import Cita from "./Cita";

const Citas = ({ citas, eliminarCita }) => {
  const tituloCitas = citas.length === 0 ? '👨‍⚕️Confirmar cita👨‍⚕️' : '👨‍⚕️Confirmar cita👨‍⚕️';

  return (
    <>
      <h3>{tituloCitas}</h3>
      {[...citas].reverse().map((cita) => {
        return (
          <Cita
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
          />
        )
      })}
    </>
  );
}

export default Citas;