import { nanoid } from "nanoid";
import { useState } from "react";


const Formulario = ({ registrarCita }) => {

  const [cita, setCita] = useState({
    formCitaArea: '',
    formCitaNombrePaciente: '',
    formCitaTelefono: '',
    formCitaDNI: '',
    formCitaFecha: '',
    formCitaHora: '',
    formCitaSintomas: ''
  });
  const [error, setError] = useState(false);

  const { formCitaArea, formCitaNombrePaciente, formCitaTelefono, formCitaDNI, formCitaFecha, formCitaHora, formCitaSintomas } = cita;

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formCitaArea.trim() === '' || formCitaNombrePaciente.trim() === '' || formCitaTelefono.trim() === '' || formCitaDNI.trim() === '' || formCitaFecha.trim() === '' || formCitaHora.trim() === '' || formCitaSintomas.trim() === '') {
      setError(true);
    } else {
      cita.id = nanoid();
      registrarCita(cita);
      setError(false);

      setCita({
        formCitaArea: '',
        formCitaNombrePaciente: '',
        formCitaTelefono: '',
        formCitaDNI: '',
        formCitaFecha: '',
        formCitaHora: '',
        formCitaSintomas: ''
      });
    }
  };

  return (
    <>
      <h3>🤒Registrar Cita🤒</h3>
      <p className="indicaciones">*ATENCIÓN: Las citas quedan sujetas a confirmación de acuerdo a disponibilidad de horario, al confirmar su cita recibirá un mensaje a la brevedad para confirmar el horario elegido, de lo contrario se le informará de otros horarios disponibles. <br></br> *Medios de pago: Efectivo, Yape, Plin.</p>
      <form onSubmit={handleSubmit} className="my-3">
      <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="formCitaArea"
            name="form-cita-nombre-mascota"
            required
            placeholder="Nombre de la mascota"
            value={formCitaArea}
            onChange={handleChange}
          />
          <label className="area" htmlFor="">Área (medicina,obstetricia, ginecología,nutrición)</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="formCitaNombrePaciente"
            name="form-cita-nombre-mascota"
            required
            placeholder="Nombre de la mascota"
            value={formCitaNombrePaciente}
            onChange={handleChange}
          />
          <label htmlFor="">Nombre de paciente</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="formCitaTelefono"
            name="form-cita-nombre-propietario"
            required
            placeholder="Nombre del propietario"
            value={formCitaTelefono}
            onChange={handleChange}
          />
          <label htmlFor="">telefono</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="formCitaDNI"
            name="form-cita-nombre-propietario"
            required
            placeholder="Nombre del propietario"
            value={formCitaDNI}
            onChange={handleChange}
          />
          <label htmlFor="">DNI</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            id="formCitaFecha"
            name="form-cita-fecha"
            required
            placeholder="Fecha de cita"
            value={formCitaFecha}
            onChange={handleChange}
          />
          <label htmlFor="">Fecha de cita</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="time"
            className="form-control"
            id="formCitaHora"
            name="form-cita-hora"
            required
            placeholder="Hora de cita"
            value={formCitaHora}
            onChange={handleChange}
          />
          <label htmlFor="">Hora de cita</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="formCitaSintomas"
            name="form-cita-sintomas"
            required
            placeholder="Síntomas"
            value={formCitaSintomas}
            onChange={handleChange}
          />
          <label htmlFor="">Síntomas</label>
        </div>
        {
          error
            ?
            (
              <div className="alert alert-danger" role="alert">
                Todos los campos son obligatorios
              </div>
            )
            :
            (
              null
            )
        }
        <button className="btn btn-warning rimary w-100">🤒 Confirmar cita 🤒</button>
      </form>
    </>
  );
}

export default Formulario;