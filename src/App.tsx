import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Beneficios from './pages/Beneficios';
// import AddVehicle from './pages/AddVehicle';
// import Monitoring from './pages/Monitoring';
// import Reminders from './pages/Reminders';
// import Preventive from './pages/Preventive';
// import Diagnostics from './pages/Diagnostics';
// import Scheduling from './pages/Scheduling';
// import FAQ from './pages/FAQ';
// import MaintenanceRecord from './pages/MaintenanceRecord';
// import NearbyMechanics from './pages/NearbyMechanics';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <Router>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beneficios" element={<Beneficios />} />

      {/* <Route path="/adicionarveiculo" element={<AddVehicle />} />
      <Route path="/monitoramento" element={<Monitoring />} />
      <Route path="/lembrente" element={<Reminders />} />
      <Route path="/preventiva" element={<Preventive />} />
      <Route path="/diagnosticoveiculo" element={<Diagnostics />} />
      <Route path="/agendamento" element={<Scheduling />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/registromanutencao" element={<MaintenanceRecord />} />
      <Route path="/mecanicaproxima" element={<NearbyMechanics />} /> */}
    </Routes>
  </Router>
);

export default App;
