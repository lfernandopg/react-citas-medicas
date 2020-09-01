import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import Appointment from './components/Appointment'

function App() {

    //Buscando citas en LocalStorage
    let initialListAppointment = JSON.parse(localStorage.getItem('appointment'));

    if (!initialListAppointment) {
        initialListAppointment = [];
    }

    //Creando el Hook de la lista de citas
    const [listAppointment, setListAppointment] = useState(initialListAppointment);

    //Para insertar citas en el LocalStorage
    useEffect(() => {
        if (listAppointment) {
            localStorage.setItem('appointment', JSON.stringify(listAppointment));
        } else {
            localStorage.setItem('appointment', JSON.stringify([]));
        }
    }, [listAppointment]);

    //Insertar citas
    const insertAppointment = appointment => {
        setListAppointment([
            ...listAppointment,
            appointment
        ]);
    }

    //Eliminar citas
    const deleteAppointment = id => {
        const newListAppointment = listAppointment.filter(appointment => (appointment.id !== id));
        setListAppointment(newListAppointment);
    }

    return (
        <div className="App">
            <h1>Administrador de Pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form
                            insertAppointment={insertAppointment}
                        />
                    </div>
                    <div className="one-half column">
                        {
                            listAppointment.length === 0
                                ?
                                <h2>No hay citas</h2>
                                :
                                <h2>Administra tus citas</h2>
                        }

                        {
                            listAppointment.map(appointment => (
                                <Appointment
                                    key={appointment.id}
                                    appointment={appointment}
                                    deleteAppointment={deleteAppointment}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
