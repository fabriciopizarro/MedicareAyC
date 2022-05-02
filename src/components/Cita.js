const Cita = ({ cita, eliminarCita }) => {

  let citaWhatsApp = 'https://api.whatsapp.com/send?phone=51972517558&text=Confirmo%20mi%20cita.';

  const handleSubmit = (id) => {
    eliminarCita(id);
  };

  const { id, formCitaArea, formCitaNombrePaciente, formCitaTelefono, formCitaDNI, formCitaFecha, formCitaHora, formCitaSintomas } = cita;
  return (
    <div className="cita animate__animated animate__fadeInUp">
      <p>Especialidad: <span>{formCitaArea}</span></p>
      <p>Paciente: <span>{formCitaNombrePaciente}</span></p>
      <p>Telefono: <span>{formCitaTelefono}</span></p>
      <p>DNI: <span>{formCitaDNI}</span></p>
      <p>Fecha de cita: <span>{formCitaFecha}</span></p>
      <p>Hora de cita: <span>{formCitaHora}</span></p>
      <p>Síntomas: <span>{formCitaSintomas}</span></p>
      <div className="d-grid gap-2">
        <a
          href={`${citaWhatsApp} Especialidad: ${formCitaArea}, Paciente: ${formCitaNombrePaciente}, Telefono: ${formCitaTelefono}, DNI: ${formCitaDNI}, Fecha de cita: ${formCitaFecha}, Hora de cita: ${formCitaHora}, Síntomas: ${formCitaSintomas}.`}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
           Confirmar Cita 
        </a>
        <button
          className="btn btn-danger"
          onClick={() => handleSubmit(id)}
        >
           Eliminar Cita 
        </button>
      </div>
    </div>
  );
}

export default Cita;