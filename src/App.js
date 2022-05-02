import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Citas from "./components/Citas";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {

  let citasLocalStorage = JSON.parse(localStorage.getItem('citas-patita-feliz'));
  if (citasLocalStorage) {

  } else {
    citasLocalStorage = [];
  }
  const [citas, setCitas] = useState(citasLocalStorage);

  useEffect(() => {
    let citasLocalStorage = JSON.parse(localStorage.getItem('citas-patita-feliz'));
    if (citasLocalStorage) {
      localStorage.setItem('citas-patita-feliz', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas-patita-feliz', JSON.stringify([]));
    }
  }, [citas]);

  const company = {
    adress: 'Av. Cóndores 460, int. 65 segundo piso. Urb. La Capilla - La Molina.',
    phone: 'Teléfono: 972517558',
    name: 'REGISTRO DE CITAS ONLINE',
    slogan: '¡Porque es parte de nuestra familia, te cuidamos!.'
  };

  const credits = {
    author: 'Fabricio Yaringaño P.',
    currentYear: new Date().getFullYear()
  };

  const registrarCita = (cita) => {
    setCitas([
      ...citas,
      cita
    ]);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Cita registrada!',
      showConfirmButton: false,
      timer: 2000,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  };

  const eliminarCita = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger mx-2'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: '¿Estás segur@?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, bórralo!',
      cancelButtonText: '¡No, cancélalo!',
      reverseButtons: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const citasRestantes = citas.filter((cita) => {
          return cita.id !== id;
        });
        setCitas(citasRestantes);
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'Ha sido eliminado.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelad@',
          'Está seguro :)',
          'error'
        );
      }
    });
  };

  return (
    <>
      <Header
        company={company}
      />
      <main>
        <section className="container">
          <div className="row gap-3 justify-content-around">
            <section className="col-md-5">
              <Formulario
                registrarCita={registrarCita}
              />
            </section>
            <section className="col-md-5">
              <Citas
                citas={citas}
                eliminarCita={eliminarCita}
              />
            </section>
          </div>
        </section>
      </main>
      <Footer
        credits={credits}
      />
    </>
  );
}

export default App;