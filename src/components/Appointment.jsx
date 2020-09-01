import React from 'react';

const Appointment = ({ appointment, deleteAppointment }) => {

    const { petName, ownerName, date, hour, symptoms } = appointment;

    return (
        <div className="appointment">
            <p>Mascota: <span>{petName}</span></p>
            <p>Dueño: <span>{ownerName}</span></p>
            <p>Fecha: <span>{date}</span></p>
            <p>Hora: <span>{hour}</span></p>
            <p>Sintomas: <span>{symptoms}</span></p>
            <button
                className="button-delete u-full-width"
                onClick={() => deleteAppointment(appointment.id)}
            >Eliminar &times;</button>
        </div>
    );
}

export default Appointment;