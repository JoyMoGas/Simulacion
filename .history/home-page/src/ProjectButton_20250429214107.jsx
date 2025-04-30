import PropTypes from 'prop-types';

const ProjectButton = ({ title, url, subtitle = "" }) => {
  return (
    <div className='btn-container'>
      <a href={url} rel="noopener noreferrer">
        <button className='btn-pj'>
          <h3>{title}</h3>
          {subtitle && (
        <p className='btn-p'>
          {subtitle}
        </p>
      )}
        </button>
      </a>
      
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
