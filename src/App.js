import React, { useState } from 'react';
import ActivoForm from './components/ActivoForm';
import ActivoList from './components/ActivoList';
import PDFGenerator from './components/PDFGenerator';
import './App.css';

const categorias = [
    'Activos Esenciales',
    'Activos de Información',
    'Activos de Servicios',
    'Activos Físicos',
    'Activos Humanos',
    'Activos Financieros',
    'Activos de Software',
    'Activos de Red',
];

const App = () => {
    const [activos, setActivos] = useState([]);

    const agregarActivo = (activo) => {
        setActivos([...activos, activo]);
    };

    const eliminarActivo = (id) => {
        setActivos(activos.filter((activo) => activo.id !== id));
    };

    const valorarActivo = (id, nuevaValoracion) => {
        setActivos(activos.map((activo) => (activo.id === id ? { ...activo, valoracion: nuevaValoracion } : activo)));
    };

    return (
        <div className="app-container">
            <h1>PMEA_RC4_Proyecto integrador: Gestión de Activos</h1>
            <h3>Elaborado por: Sebastián Poveda</h3>
            <ActivoForm agregarActivo={agregarActivo} categorias={categorias} />
            <ActivoList activos={activos} eliminarActivo={eliminarActivo} valorarActivo={valorarActivo} />
            <PDFGenerator activos={activos} />

            {/* Guía de Gestión y Valoración de Activos */}
            <div className="guide-container">
                <h2>Guía de Gestión y Valoración de Activos</h2>

                {/* Tabla de dimensiones de valoración */}
                <div className="guide-section">
                    <h3>Tabla de dimensiones de valoración</h3>
                    <div className="guide-table">
                        <div className="guide-table-row">
                            <div className="guide-table-col"><span className="guide-table-header">Dimensión</span></div>
                            <div className="guide-table-col"><span className="guide-table-header">Descripción</span></div>
                        </div>
                        <div className="guide-table-row">
                            <div className="guide-table-col"><span className="guide-table-cell">[D] Disponibilidad</span></div>
                            <div className="guide-table-col"><span className="guide-table-cell">Propiedad que garantiza el acceso a los activos cuando se requiere. [UNE 71504:2008]</span></div>
                        </div>
                        <div className="guide-table-row">
                            <div className="guide-table-col"><span className="guide-table-cell">[I] Integridad de datos</span></div>
                            <div className="guide-table-col"><span className="guide-table-cell">Propiedad que asegura que los datos no han sido alterados de manera no autorizada. [ISO/IEC 13335-1:2004]</span></div>
                        </div>
                        <div className="guide-table-row">
                            <div className="guide-table-col"><span className="guide-table-cell">[C] Confidencialidad</span></div>
                            <div className="guide-table-col"><span className="guide-table-cell">Propiedad que garantiza que la información no se revela a entidades no autorizadas. [UNE-ISO/IEC 27001:2007]</span></div>
                        </div>
                        <div className="guide-table-row">
                            <div className="guide-table-col"><span className="guide-table-cell">[A] Autenticidad</span></div>
                            <div className="guide-table-col"><span className="guide-table-cell">Propiedad que asegura que una entidad es quien dice ser. [UNE 71504:2008]</span></div>
                        </div>
                        <div className="guide-table-row">
                            <div className="guide-table-col"><span className="guide-table-cell">[T] Trazabilidad</span></div>
                            <div className="guide-table-col"><span className="guide-table-cell">Propiedad que asegura que las acciones pueden ser atribuidas a una entidad específica. [UNE 71504:2008]</span></div>
                        </div>
                    </div>
                </div>

                {/* Criterios de valoración */}
                <div className="guide-section">
                    <h3>Criterios de valoración</h3>
                    <p>Para valorar los activos de manera efectiva, se recomienda utilizar una escala común y logarítmica para todas las dimensiones, permitiendo así una comparación coherente entre los riesgos. Se ha elegido una escala detallada de diez valores.</p>
                    <div className="guide-table">
                        <div className="guide-table-row">
                            <div className="guide-table-col guide-high-risk">Alto Riesgo (8-10)</div>
                            <div className="guide-table-col guide-medium-risk">Riesgo Medio (4-7)</div>
                            <div className="guide-table-col guide-low-risk">Bajo Riesgo (0-3)</div>
                        </div>
                    </div>
                    <p>Las escalas cualitativas permiten una valoración rápida de los activos en relación con su importancia relativa, mientras que las valoraciones cuantitativas, aunque requieren más esfuerzo, permiten sumar valores numéricos de forma coherente.</p>
                </div>

                {/* Valoración cualitativa */}
                <div className="guide-section">
                    <h3>Valoración cualitativa</h3>
                    <p>Las escalas cualitativas permiten posicionar rápidamente el valor de cada activo en un orden relativo respecto de los demás, facilitando estimaciones del riesgo. Sin embargo, no permiten comparar valores más allá de su orden relativo.</p>
                </div>

                {/* Valoración cuantitativa */}
                <div className="guide-section">
                    <h3>Valoración cuantitativa</h3>
                    <p>Las valoraciones cuantitativas, aunque más complejas, permiten sumar valores numéricos y hacer estudios económicos comparativos. Son útiles para responder preguntas como la viabilidad de invertir en salvaguardas o el coste razonable de seguros.</p>
                </div>

                {/* Valor de la interrupción del servicio */}
                <div className="guide-section">
                    <h3>Valor de la interrupción del servicio</h3>
                    <p>La disponibilidad es una dimensión especial donde el tiempo de interrupción tiene un impacto significativo y no proporcional en las consecuencias. Se recomienda usar una estructura más compleja para valorar la interrupción de la disponibilidad de un activo.</p>
                </div>
            </div>
        </div>
    );
};

export default App;
