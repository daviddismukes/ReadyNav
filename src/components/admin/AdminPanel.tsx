import React from 'react';

const AdminPanel = () => {
  return (
    <div className="admin-panel" style={{ padding: '2rem' }}>
      <h2>🛠️ Admin Tools</h2>
      <p>Use the tools below to manage quiz data.</p>

      <iframe
        src="/admin/tools/interface.html"
        style={{ width: '100%', height: '600px', border: '1px solid #ccc' }}
        title="Admin Tools"
      />
    </div>
  );
};

export default AdminPanel;