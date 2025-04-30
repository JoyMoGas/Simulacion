const ProjectButton = ({ title, url, subtitle = "" }) => {
  return (
    <div style={{ margin: '10px', textAlign: 'center' }}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          {title}
        </button>
      </a>
      {subtitle && (
        <p style={{ marginTop: '5px', fontSize: '0.9rem', color: '#555' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default ProjectButton;
