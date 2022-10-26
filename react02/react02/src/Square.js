const Square = ({ colorValue, hexValue }) => {
  return (
    <section className="square" style={{ backgroundColor : colorValue }}>
        <p>{colorValue ? colorValue : "empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>
    </section>
  )
}

Square.defaultProps = {
    colorValue: "Empty color value"
}

export default Square