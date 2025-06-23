import React, { useEffect, useRef } from 'react';
import Card from './Card';
import './Dashboard.css'; // Use CSS Modules if needed
import initAHole from './Hole';

function Dashboard() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
      // Create <a-hole> custom element and its canvas
      const aHoleEl = document.createElement('a-hole');
//      its like making a new tag in html for here <ahole>
      const canvas = document.createElement('canvas');
//      <canvas>
      canvas.className = 'js-canvas a-hole-canvas';
//      add that css class in canvas
      aHoleEl.appendChild(canvas);
//      add everthing to ahole
      wrapperRef.current.appendChild(aHoleEl);
//      now gove it to wrapperRef

      initAHole(canvas); // Attach animation logic
    }
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div ref={wrapperRef} className="a-hole-wrapper"></div>
      <div className="dark-overlay" />
      <div className="overlay-content">
        <h2 className="welcome-text"
        style={{ position: 'relative',zIndex: 25,pointerEvents: 'auto',background: 'linear-gradient(90deg, #00f8f1, #a900ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    textShadow: '0 0 10px #a900ff88, 0 0 20px #00f8f188',textAlign:'center' }}>Welcome to Baymax</h2>
        <div className="grid-container"  style={{
    position: 'relative',
    zIndex: 20,
    display: 'flex',
    pointerEvents: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap', // Optional: allows wrapping on smaller screens
  }}>
          <Card title="Patient Register" description="Register as a patient" url="/patientregister" />
          <Card title="Doctor Register" description="Register as a doctor" url="/register" />
          <Card title="Make Appointment" description="Schedule your appointment" url="/appointments" />
          <Card title="Doctor Suggestion" description="AI-based suggestions" url="/suggestion" />
          <Card title="My Appointments" description="View scheduled visits" url="/myappointments" />
           <Card title="Doctor list" description="View list of doctors" url="/Doctorlist" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

////CSS Property	What It Does
//position: 'relative'	Like above, allows positioning and stacking (z-index) without leaving normal layout.
//zIndex: 20	Places this slightly below the title (zIndex: 25), but above lower layers.
//pointerEvents: 'auto'	Lets you click or hover on the cards inside this container.
//display: 'flex'	Converts this <div> into a flexbox, which is good for laying out multiple items in a row.
//flexDirection: 'row'	Makes the cards appear side by side (horizontally).
//justifyContent: 'center'	Puts the cards in the center of the page.
//gap: '1rem'	Adds spacing (1rem = ~16px) between the cards.
////flexWrap: 'wrap'	Makes the cards go to the next line if the screen is too small to fit them in one row.
