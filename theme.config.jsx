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
          style={{ width: '70px', height: '25px', borderRadius: '4px' }} 
        />
      </a>
    )
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  footer: {
    text: 'TRON 1 Documentation ',
  },

  nextThemes: {
    defaultTheme: 'dark', // บังคับให้เป็นสีดำตั้งแต่เริ่ม
    storageKey: 'theme',  // จำค่าไว้ (ถ้าผู้ใช้เปลี่ยนกลับ)
  },
}