import React, { Fragment, useState, useEffect } from 'react';
import uuid from 'uuid/dist/v4';

const Form = ({ insertAppointment }) => {

    //Creando el Hook de las citas
    const [appointment, setAppointment] = useState({
        petName: '',
        ownerName: '',
        date: '',
        hour: '',
        symptoms: ''
    });

    //Para insertar las citas
    useEffect(() => {
        if (appointment.id) {
            insertAppointment(appointment);
            setAppointment({
                petName: '',
                ownerName: '',
                date: '',
                hour: '',
                symptoms: ''
            });
        }
    }, [appointment, insertAppointment]);

    //Crear el Hook de error
    const [error, setError] = useState(false);

    const { petName, ownerName, date, hour, symptoms } = appointment;

    const handleChange = event => {
        setAppointment({
            ...appointment,
            [event.target.name]: event.target.value
        })
    }

    //Validando si los inputs son validos
    const submitAppointment = event => {
        event.preventDefault();
        setError(false);
        if (petName.trim() === '' || ownerName.trim() === '' || date.trim() === ''
            || hour.trim() === '' || symptoms.trim() === '') {
            setError(true);
            return;
        }
        setAppointment({
            ...appointment,
            id: uuid()
        });
    }


    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {
                error
                    ?
                    <p
                        className="alert-error"
                    >Todos los campos son obligatorios</p>
                    :
                    null
            }
            <form
                action=""
                onSubmit={submitAppointment}
            >
                <label
                    htmlFor="input-pet-name"
                >Nombre Mascota:</label>
                <input
                    type="text"
                    className="u-full-width"
                    name="petName"
                    id="input-pet-name"
                    placeholder="Nombre de la Mascota"
                    onChange={handleChange}
                    value={petName}
                />
                <label
                    htmlFor="input-owner-name"
                >Nombre Dueño:</label>
                <input
                    type="text"
                    className="u-full-width"
                    name="ownerName"
                    id="input-owner-name"
                    placeholder="Nombre del Dueño de la mascota"
                    onChange={handleChange}
                    value={ownerName}
                />
                <label
                    htmlFor="input-date"
                >Fecha:</label>
                <input
                    type="date"
                    className="u-full-width"
                    name="date"
                    id="input-date"
                    onChange={handleChange}
                    value={date}
                />
                <label
                    htmlFor="input-hour"
                >Hora:</label>
                <input
                    type="time"
                    className="u-full-width"
                    name="hour"
                    id="input-hour"
                    onChange={handleChange}
                    value={hour}
                />
                <label
                    htmlFor="input-symptoms"
                >Sintomas:</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    id="input-symptoms"
                    onChange={handleChange}
                    value={symptoms}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={handleChange}
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Form;