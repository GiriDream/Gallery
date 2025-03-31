import './index.css'

const Capitals = ({  country }) => {
  return (
    <div className="capital-container">
      
      <p>
        <strong>Country:</strong> {country}
      </p>
    </div>
  )
}

export default Capitals
