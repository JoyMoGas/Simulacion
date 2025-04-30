import PropTypes from 'prop-types';

const ProjectButton = ({ title, url, subtitle = "" }) => {
  return (
    <div className='btn-container'>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className='btn-pj' style={{
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

// Validación de las props
ProjectButton.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default ProjectButton;
