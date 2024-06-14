const Page = () => {
  return (
    <div className='wrapper'>
      <h1>TEMPLATE.TSX</h1>
      <h2>This is a TEMPLATE page</h2>
      <p>Template je kao Layout samo sto ne odrzava state itd, nego se resetuje na navigaciji. Dobro za npr forme koje kad jednom popunis treba da resetuju sve i krenu ispocetka na refresh, back forth itd.</p>
      <p>Ovde se nalazi Template u celoj strukturi:</p>
      <p>PROBAJ DA NAPRAVIS NEKU FORMU KOJA IMA SUBMIT I DA VIDIS DA LI TO TAKO I KAKO RADI?</p>
      <pre>
      {`<Layout>
  {/* Note that the template is given a unique key. */}
  <Template key={routeParam}>{children}</Template>
</Layout>`}
      </pre>
    </div>
  )
}

export default Page
