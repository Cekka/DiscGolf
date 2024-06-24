export const AppHome = () => {

  return (
    <>
      <div style={{height: "600px", width:"100vw", backgroundColor:"lightblue"}}>
        <img src="/src/assets/DiscGolfLand.jpg" style={{objectFit:"cover", height:"100%", width:"100%"}}/>
      </div>
      <div className="">
        <div style={{marginTop:"-250px"}} className="">
          <h1 className="">What's Disc Golf?</h1>
          <p className="">Disc golf, also known as frisbee golf, is a sport that combines elements of traditional golf and frisbee throwing.
          The objective is to complete a course by throwing a disc into a series of baskets or targets in the fewest possible throws.</p>
          <h1 className="">The History</h1>
          <p className="">Disc golf began taking shape in the 1960s. George Sappenfield introduced "Frisbee Golf" at a California summer camp in 1965. Ed Headrick, a key figure in the sport's development, founded the Professional Disc Golf Association (PDGA) in 1976 and installed the first permanent course in Pasadena, California.
          Today, disc golf is played in over 40 countries, with thousands of courses worldwide. The sport's accessibility and low cost have fueled its growth. The PDGA oversees numerous tournaments, including the World Championships. Disc golf is beloved for its blend of physical skill, strategy, and the enjoyment of nature.</p>
          <h1 className="">Curiosities</h1>
          <ul className="">
            <li>Disc golf is played in over 40 countries.</li>
            <li>The longest recorded disc golf throw is over 1,100 feet (335 meters).</li>
            <li>Courses can vary greatly in design, from wooded areas to open fields, incorporating natural landscapes as obstacles.</li>
            <li>The sport has a dedicated community of enthusiasts who enjoy both casual play and competitive events.</li>
          </ul>
        </div>
      </div>


    </>
  )
}