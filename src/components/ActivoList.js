import React from 'react';

const ActivoList = ({ activos, eliminarActivo, valorarActivo }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Valoración</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {activos.map((activo) => (
                    <tr key={activo.id}>
                        <td>{activo.id}</td>
                        <td>{activo.nombre}</td>
                        <td>{activo.categoria}</td>
                        <td>
                            <input
                                type="number"
                                value={activo.valoracion}
                                onChange={(e) => valorarActivo(activo.id, e.target.value)}
                            />
                        </td>
                        <td>
                            <button onClick={() => eliminarActivo(activo.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ActivoList;
