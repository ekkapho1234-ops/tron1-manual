export default {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img src="/gic.png" alt="TRON 1 Logo" style={{ width: '50px', height: '30px' }} />
      <span style={{ fontWeight: 470 }}>TRON1</span>
    </div>
  ),
  project: {
    link: 'https://github.com/limxdynamics',
  },
  navbar: {
    extraContent: (
      <>
        <a 
          href="https://www.limxdynamics.com/en/tron1" 
          target="_blank" 
          rel="noreferrer"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '0 5px' 
          }}
        >
          <img 
            src="/logo.png" 
            alt="LimX" 
            className="nav-logo" 
            style={{ width: '70px', height: '25px', borderRadius: '4px' }} 
          />
        </a>

        {/* ส่วนที่เพิ่ม: สั่งกลับสีโลโก้เมื่อเป็น Light Mode */}
        <style jsx global>{`
          html:not(.dark) .nav-logo {
            filter: invert(1);
          }
        `}</style>
      </>
    )
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  footer: {
    text: (
      <div style={{ textAlign: 'center', fontSize: '16px' }}>
        <strong>TRON 1 Documentation</strong>
        <br />
        <span style={{ fontSize: '12px', color: '#888', display: 'block', marginTop: '10px' }}>
          "This website is for educational purposes only. Not affiliated with LimX Dynamics."
        </span>
      </div>
    ),
  },

  nextThemes: {
    defaultTheme: 'dark', // บังคับให้เป็นสีดำตั้งแต่เริ่ม
    storageKey: 'theme',  // จำค่าไว้ (ถ้าผู้ใช้เปลี่ยนกลับ)
  },
}