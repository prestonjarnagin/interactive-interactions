export const InteractionInformation = ({substances}) => {
  return (
    <div>
      <h1
        style={{
          color: 'black',
        }}
      >
        {substances[0]} & {substances[1]}
      </h1>
      <p
        style={{
          color: 'black',
        }}
      >Information about the interaction will go here.</p>
    </div>
  )
}

