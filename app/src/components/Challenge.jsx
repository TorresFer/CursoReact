const Challenge = () => {
    const a = 10;
    const b = 20;

  return (
    <div>
        <button onClick={() => console.log(a + b)}>
            Clique para somar!
        </button>
    </div>
  )
}

export default Challenge