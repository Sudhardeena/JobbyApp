import './index.css'

const LocationItem = props => {
  const {locationItemDetails, onFilterLocation} = props
  const {label, locationId} = locationItemDetails
  const filterLocation = event => onFilterLocation(event.target.value)
  return (
    <li className="filter-item">
      <input
        id={locationId}
        type="checkbox"
        name={locationId}
        value={locationId}
        onClick={filterLocation}
      />
      <label htmlFor={locationId}>{label}</label>
    </li>
  )
}

export default LocationItem
