import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import vanceIcon from '../media/vance-ia-voz-removebg-preview.png';

const DemoPage = () => {
  const widgetRef = useRef(null);
  const [widgetReady, setWidgetReady] = useState(false);
  const placeholderText = 'verás reflejados los datos despues de la llamada...';
  const [sheetData, setSheetData] = useState({
    nombre: placeholderText,
    nombreCompleto: placeholderText,
    telefono: placeholderText,
    mail: placeholderText,
    ubicacion: placeholderText,
    financiacion: placeholderText,
    tiempos: placeholderText,
    venderas: placeholderText
  });

  useEffect(() => {
    // Cargar widget de ElevenLabs
    const src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    let script = document.querySelector(`script[src="${src}"]`);

    if (!script) {
      script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.type = 'text/javascript';
      script.onload = () => setWidgetReady(true);
      document.body.appendChild(script);
    } else {
      setWidgetReady(true);
    }

    // Función para cargar datos reales de Google Sheets
    const loadRealSheetData = async () => {
      try {
        // ID del Google Sheet y lectura de la hoja LEADS
        const sheetId = '1ZT0gyxbLqo7w1yy_r4_B1WzaV6IdPQH4SYAJB3-0yQY';
        const sheetName = 'LEADS';
        const range = `${sheetName}!C2:J`;
        
        // Usar la API pública de Google Sheets
        const response = await fetch(
          `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?sheet=${encodeURIComponent(sheetName)}&range=${encodeURIComponent(range)}&tqx=out:json`
        );
        
        if (response.ok) {
          const text = await response.text();
          // Extraer datos JSON de la respuesta
          const jsonMatch = text.match(/google\.visualization\.Query\.setResponse\((.*)\)/);
          if (jsonMatch) {
            const data = JSON.parse(jsonMatch[1]);
            const rows = data.table.rows;
            
            if (rows && rows.length > 0) {
              // Usar la ultima fila con datos para reflejar el lead mas reciente
              const latestRow = [...rows].reverse().find((row) => {
                const cells = row?.c || [];
                return cells.some((cell) => {
                  const value = cell?.v;
                  return value !== null && value !== undefined && `${value}`.trim() !== '';
                });
              });

              if (!latestRow) return;

              const cells = latestRow.c || [];
              const nombreCompleto = cells[0]?.v ? String(cells[0].v) : '';
              const nombre = nombreCompleto ? nombreCompleto.split(' ')[0] : '';

              setSheetData({
                nombre: nombre || placeholderText,
                nombreCompleto: nombreCompleto || placeholderText,
                telefono: cells[1]?.v ? String(cells[1].v) : placeholderText,
                mail: cells[2]?.v ? String(cells[2].v) : placeholderText,
                ubicacion: cells[3]?.v ? String(cells[3].v) : placeholderText,
                venderas: cells[4]?.v ? String(cells[4].v) : placeholderText,
                financiacion: cells[5]?.v ? String(cells[5].v) : placeholderText,
                tiempos: cells[7]?.v ? String(cells[7].v) : placeholderText
              });
            }
          }
        }
      } catch (error) {
        console.error('Error cargando datos de Google Sheets:', error);
        // Mantener el texto por defecto si hay error
      }
    };

    // Cargar datos iniciales
    loadRealSheetData();

    // Actualizar cada 5 segundos
    const interval = setInterval(() => {
      loadRealSheetData();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goBack = () => {
    window.open('/', '_self');
  };

  const handleStartConversation = () => {
    if (!widgetReady) {
      return;
    }

    const widget = widgetRef.current || document.querySelector('elevenlabs-convai');
    if (!widget) return;

    try {
      widget.click();
    } catch (error) {
      console.error('No se pudo iniciar el widget de ElevenLabs', error);
    }
  };

  return (
    <div className="h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,_175,_55,_0.15),_transparent_55%)]"></div>

      <div className="relative grid lg:grid-cols-2 h-full">
        {/* Sección del formulario - lado derecho */}
        <div className="bg-white/5 order-1 lg:order-2 p-4 lg:p-6 overflow-y-auto">
          <div className="space-y-3">
            <h2 className="text-xl lg:text-2xl font-outfit font-bold text-white mb-4">Datos en tiempo real</h2>
            
            {/* Campo Nombre */}
            <div className="space-y-1">
              <label className="text-xs font-outfit text-[#D4AF37] uppercase tracking-wider">Nombre</label>
              <div className="glass-card p-2 lg:p-3 border border-[#D4AF37]/20">
                <input
                  type="text"
                  value={sheetData.nombre}
                  readOnly
                  className="w-full bg-transparent text-white text-sm placeholder-[#DBCE97] outline-none"
                  placeholder="Cargando..."
                />
              </div>
            </div>

            {/* Campo Teléfono */}
            <div className="space-y-1">
              <label className="text-xs font-outfit text-[#D4AF37] uppercase tracking-wider">N. Completo</label>
              <div className="glass-card p-2 lg:p-3 border border-[#D4AF37]/20">
                <input
                  type="text"
                  value={sheetData.nombreCompleto}
                  readOnly
                  className="w-full bg-transparent text-white text-sm placeholder-[#DBCE97] outline-none"
                  placeholder="Cargando..."
                />
              </div>
            </div>

            {/* Campo Teléfono */}
            <div className="space-y-1">
              <label className="text-xs font-outfit text-[#D4AF37] uppercase tracking-wider">Teléfono</label>
              <div className="glass-card p-2 lg:p-3 border border-[#D4AF37]/20">
                <input
                  type="text"
                  value={sheetData.telefono}
                  readOnly
                  className="w-full bg-transparent text-white text-sm placeholder-[#DBCE97] outline-none"
                  placeholder="Cargando..."
                />
              </div>
            </div>

            {/* Campo Mail */}
            <div className="space-y-1">
              <label className="text-xs font-outfit text-[#D4AF37] uppercase tracking-wider">Mail</label>
              <div className="glass-card p-2 lg:p-3 border border-[#D4AF37]/20">
                <input
                  type="email"
                  value={sheetData.mail}
                  readOnly
                  className="w-full bg-transparent text-white text-sm placeholder-[#DBCE97] outline-none"
                  placeholder="Cargando..."
                />
              </div>
            </div>

            {/* Campo Ubicación */}
            <div className="space-y-1">
              <label className="text-xs font-outfit text-[#D4AF37] uppercase tracking-wider">Ubicación</label>
              <div className="glass-card p-2 lg:p-3 border border-[#D4AF37]/20">
                <input
                  type="text"
                  value={sheetData.ubicacion}
                  readOnly
                  className="w-full bg-transparent text-white text-sm placeholder-[#DBCE97] outline-none"
                  placeholder="Cargando..."
                />
              </div>
            </div>

            {/* Campo Financiación */}
            <div className="space-y-1">
              <label className="text-xs font-outfit text-[#D4AF37] uppercase tracking-wider">Financiación</label>
              <div className="glass-card p-2 lg:p-3 border border-[#D4AF37]/20">
                <input
                  type="text"
                  value={sheetData.financiacion}
                  readOnly
                  className="w-full bg-transparent text-white text-sm placeholder-[#DBCE97] outline-none"
                  placeholder="Cargando..."
                />
              </div>
            </div>

            {/* Campo Tiempos */}
            <div className="space-y-1">
              <label className="text-xs font-outfit text-[#D4AF37] uppercase tracking-wider">Tiempos</label>
              <div className="glass-card p-2 lg:p-3 border border-[#D4AF37]/20">
                <input
                  type="text"
                  value={sheetData.tiempos}
                  readOnly
                  className="w-full bg-transparent text-white text-sm placeholder-[#DBCE97] outline-none"
                  placeholder="Cargando..."
                />
              </div>
            </div>

            {/* Campo ¿Venderás? */}
            <div className="space-y-1">
              <label className="text-xs font-outfit text-[#D4AF37] uppercase tracking-wider">¿Venderás?</label>
              <div className="glass-card p-2 lg:p-3 border border-[#D4AF37]/20">
                <input
                  type="text"
                  value={sheetData.venderas}
                  readOnly
                  className="w-full bg-transparent text-white text-sm placeholder-[#DBCE97] outline-none"
                  placeholder="Cargando..."
                />
              </div>
            </div>

            {/* Mensaje final */}
            <div className="mt-4 p-3 lg:p-4 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-xl">
              <p className="text-sm lg:text-base font-outfit font-semibold text-white mb-1">
                ¡Vé reflejado en tiempo real la información que procesamos por detrás!
              </p>
              <p className="text-xs text-[#DBCE97]">
                y.... tranquilo borramos en 30seg los datos! *mejor prueba a Vance con datos ficticios
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 p-6 lg:p-10 bg-black/80 backdrop-blur-xl border-r border-white/10 overflow-y-auto order-2 lg:order-1">
          <div className="flex items-center gap-3 text-[#D4AF37] uppercase tracking-[0.3em] text-xs">
            <img src={vanceIcon} alt="Vance" className="w-5 h-5 object-contain" />
            Soy Vance, Demo Asistente IA
          </div>

          <div>
            <h1 className="text-2xl lg:text-3xl font-outfit font-bold leading-tight mb-3">
              Activa a Vance y observa la automatización en tiempo real
            </h1>
            <p className="text-[#DBCE97] text-sm lg:text-base">
              Vance, quiere que la pruebes para enseñar como por voz gestiona una llamada entrante y actualiza automáticamente
              los datos operativos en Google Sheets, sin necesidad de intervención humana.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              className="btn-primary justify-center text-sm gap-2"
              onClick={handleStartConversation}
              disabled={!widgetReady}
            >
              <ArrowRight className="w-4 h-4" />
              ¡Inicia conversación con Vance abajo!
            </button>
            <elevenlabs-convai
              ref={widgetRef}
              agent-id="agent_8101kh9twf68e7pr0asgm1m9ahmx"
              style={{ display: 'block', width: '100%', minHeight: '280px' }}
            ></elevenlabs-convai>
          </div>

          <div className="text-xs text-[#DBCE97]">
            <p className="font-semibold text-white mb-1">¿Qué verás?</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Captura automática de datos de la llamada.</li>
              <li>Registro del lead y actualización de estado.</li>
              <li>Acabe la conversación para que los datos se guarden.</li>
              <li>*los datos se borran en 120 segundos.</li>
            </ul>
          </div>

          <button onClick={goBack} className="btn-secondary w-fit text-sm">
            Volver al sitio
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
