import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { flexDirection: 'column', padding: 20 },
    header: { marginBottom: 10, fontSize: 14, fontWeight: 'bold', textAlign: 'center' },
    section: { margin: 10, padding: 10, fontSize: 12 },
    subsectionHeader: { marginBottom: 5, fontSize: 12, fontWeight: 'bold' },
    table: { display: 'table', width: 'auto', borderStyle: 'solid', borderWidth: 1, marginBottom: 10 },
    tableRow: { flexDirection: 'row' },
    tableCol: { width: '25%', borderStyle: 'solid', borderWidth: 1 },
    tableCellHeader: { margin: 5, fontSize: 10, fontWeight: 'bold' },
    tableCell: { margin: 5, fontSize: 10 },
    heatmapCell: { margin: 5, fontSize: 10, textAlign: 'center' },
    highRisk: { backgroundColor: 'red', color: 'white' },
    mediumRisk: { backgroundColor: 'yellow', color: 'black' },
    lowRisk: { backgroundColor: 'green', color: 'white' },
});

const PDFDocument = ({ activos }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text>Guía de Gestión y Valoración de Activos</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subsectionHeader}>Tabla de dimensiones de valoración</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}><Text style={styles.tableCellHeader}>Dimensión</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCellHeader}>Descripción</Text></View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>[D] Disponibilidad</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>Propiedad que garantiza el acceso a los activos cuando se requiere. [UNE 71504:2008]</Text></View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>[I] Integridad de datos</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>Propiedad que asegura que los datos no han sido alterados de manera no autorizada. [ISO/IEC 13335-1:2004]</Text></View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>[C] Confidencialidad</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>Propiedad que garantiza que la información no se revela a entidades no autorizadas. [UNE-ISO/IEC 27001:2007]</Text></View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>[A] Autenticidad</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>Propiedad que asegura que una entidad es quien dice ser. [UNE 71504:2008]</Text></View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>[T] Trazabilidad</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCell}>Propiedad que asegura que las acciones pueden ser atribuidas a una entidad específica. [UNE 71504:2008]</Text></View>
                    </View>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.subsectionHeader}>Criterios de valoración</Text>
                <Text>Para valorar los activos de manera efectiva, se recomienda utilizar una escala común y logarítmica para todas las dimensiones, permitiendo así una comparación coherente entre los riesgos. Se ha elegido una escala detallada de diez valores:</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableCol, styles.highRisk]}><Text style={styles.heatmapCell}>Alto Riesgo (8-10)</Text></View>
                        <View style={[styles.tableCol, styles.mediumRisk]}><Text style={styles.heatmapCell}>Riesgo Medio (4-7)</Text></View>
                        <View style={[styles.tableCol, styles.lowRisk]}><Text style={styles.heatmapCell}>Bajo Riesgo (0-3)</Text></View>
                    </View>
                </View>
                <Text>Las escalas cualitativas permiten una valoración rápida de los activos en relación con su importancia relativa, mientras que las valoraciones cuantitativas, aunque requieren más esfuerzo, permiten sumar valores numéricos de forma coherente.</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subsectionHeader}>Valoración cualitativa</Text>
                <Text>Las escalas cualitativas permiten posicionar rápidamente el valor de cada activo en un orden relativo respecto de los demás, facilitando estimaciones del riesgo. Sin embargo, no permiten comparar valores más allá de su orden relativo.</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subsectionHeader}>Valoración cuantitativa</Text>
                <Text>Las valoraciones cuantitativas, aunque más complejas, permiten sumar valores numéricos y hacer estudios económicos comparativos. Son útiles para responder preguntas como la viabilidad de invertir en salvaguardas o el coste razonable de seguros.</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subsectionHeader}>Valor de la interrupción del servicio</Text>
                <Text>La disponibilidad es una dimensión especial donde el tiempo de interrupción tiene un impacto significativo y no proporcional en las consecuencias. Se recomienda usar una estructura más compleja para valorar la interrupción de la disponibilidad de un activo.</Text>
            </View>
            {activos.map((activo) => (
                <View key={activo.id} style={styles.section}>
                    <Text>ID: {activo.id}</Text>
                    <Text>Nombre: {activo.nombre}</Text>
                    <Text>Categoría: {activo.categoria}</Text>
                    <Text>Valoración Total: {activo.valoracionTotal}</Text>
                    <Text>Nivel de Madurez: {activo.nivel}</Text>
                    <Text>Recomendación: {activo.recomendacion}</Text>
                </View>
            ))}
        </Page>
    </Document>
);

const PDFGenerator = ({ activos }) => (
    <div className="pdf-generator">
        <PDFDownloadLink document={<PDFDocument activos={activos} />} fileName="activos.pdf">
            {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar PDF')}
        </PDFDownloadLink>
    </div>
);

export default PDFGenerator;
