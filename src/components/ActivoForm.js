import React, { useState } from 'react';

const ActivoForm = ({ agregarActivo, categorias }) => {
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [valoracion, setValoracion] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación básica
        if (!nombre || !categoria || !valoracion) {
            setError('Todos los campos son requeridos.');
            return;
        }

        // Validación específica para valoración
        const valoracionNumero = Number(valoracion);
        if (isNaN(valoracionNumero) || valoracionNumero < 0) {
            setError('La valoración debe ser un número válido mayor o igual a 0.');
            return;
        }

        // Si pasan las validaciones, agregar el activo
        agregarActivo({ id: Date.now(), nombre, categoria, valoracion: valoracionNumero });
        setNombre('');
        setCategoria('');
        setValoracion('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} className="activo-form">
            {error && <p className="error-message">{error}</p>}
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="">Selecciona una categoría</option>
                {categorias.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                ))}
            </select>
            <input
                type="number"
                placeholder="Valoración"
                value={valoracion}
                onChange={(e) => setValoracion(e.target.value)}
            />
            <button type="submit">Agregar Activo</button>
        </form>
    );
};

export default ActivoForm;
