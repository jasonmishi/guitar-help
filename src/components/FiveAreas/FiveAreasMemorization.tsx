import FiveAreasChordCharts from './FiveAreasChordCharts'

function FiveAreasMemorization(){
    return (
      <div>
        <h1>Five Areas Memorization</h1>
        <h2>Major</h2>
        <FiveAreasChordCharts type="major"/>

        <h2>Minor</h2>
        <FiveAreasChordCharts type="minor"/>

        <h2>Dominant 7<sup>th</sup></h2>
        <FiveAreasChordCharts type="dom7"/>
      </div>
    )
}

export default FiveAreasMemorization