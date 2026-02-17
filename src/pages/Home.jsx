// 1. Add your logo imports at the top
import fssaiLogo from "../assets/fssai-seeklogo.png"; // Ensure these files exist in assets
import whoGmpLogo from "../assets/WHO-GMP.jpg";

// ... inside the return statement, scroll down to the credentials section ...

{/* ================= CREDENTIALS / CERTIFICATIONS ================= */}
<div className="credentials-section">
  
  {/* NEW: Certification Trust Bar */}
  <div className="certification-trust-bar">
    <h3 className="cert-title">Quality Standards & Accreditations</h3>
    <div className="cert-logo-container">
       <div className="cert-item">
          <img src={fssaiLogo} alt="FSSAI Certified" className="cert-logo-img" />
          <span>FSSAI Certified</span>
       </div>
       <div className="cert-item">
          <img src={whoGmpLogo} alt="WHO-GMP Certified" className="cert-logo-img" />
          <span>WHO-GMP Compliance</span>
       </div>
    </div>
  </div>

  {/* Existing Government Card */}
  <div className="credentials-card">
    <div className="gov-branding">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png" 
        alt="Emblem of India" 
        className="gov-logo" 
      />
      <div className="gov-text">
        <span>GOVERNMENT OF INDIA</span>
        <strong>MINISTRY OF CORPORATE AFFAIRS</strong>
      </div>
    </div>
    {/* ... rest of your existing cert-action code ... */}
  </div>
</div>
