const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Tiaan'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = () => {
      console.log('You clicked it')
    }

    const handleClick2 = (name) => {
      console.log(`${name} was clicked`)
    }

    const handleClick3 = (e) => {
      console.log(e.target)
    }

  return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click It</button>
        <button onClick={() => handleClick2('Tiaan')}>Click It</button>
        <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  )
}

export default Content