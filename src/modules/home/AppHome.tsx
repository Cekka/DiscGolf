import {Image} from "@nextui-org/react";


export const AppHome = () => {

  return (
    <>
      <div style={{height: "600px", width:"100vw", backgroundColor:"lightblue"}}>
        <img src="/src/assets/DiscGolfLand.jpg" style={{objectFit:"cover", height:"100%", width:"100%"}}/>
      </div>
      <div className="bg-gray-200 p-8 flex items-center justify-center">
        <div style={{marginTop:"-250px"}} className="bg-pink-300 p-8 rounded-lg shadow-md w-full max-w-4xl">
          <h1 className="text-xl font-bold mb-4">What's Disc Golf?</h1>
          <p className="mb-4">Disc golf, also known as frisbee golf, is a sport that combines elements of traditional golf and frisbee throwing.
          The objective is to complete a course by throwing a disc into a series of baskets or targets in the fewest possible throws.</p>
          <h1 className="text-xl font-bold mb-4">The History</h1>
          <p className="mb-4">Disc golf began taking shape in the 1960s. George Sappenfield introduced "Frisbee Golf" at a California summer camp in 1965. Ed Headrick, a key figure in the sport's development, founded the Professional Disc Golf Association (PDGA) in 1976 and installed the first permanent course in Pasadena, California.
          Today, disc golf is played in over 40 countries, with thousands of courses worldwide. The sport's accessibility and low cost have fueled its growth. The PDGA oversees numerous tournaments, including the World Championships. Disc golf is beloved for its blend of physical skill, strategy, and the enjoyment of nature.</p>
          <h1 className="text-xl font-bold mb-4">Curiosities</h1>
          <ul className="list-disc list-inside">
            <li>Disc golf is played in over 40 countries.</li>
            <li>The longest recorded disc golf throw is over 1,100 feet (335 meters).</li>
            <li>Courses can vary greatly in design, from wooded areas to open fields, incorporating natural landscapes as obstacles.</li>
            <li>The sport has a dedicated community of enthusiasts who enjoy both casual play and competitive events.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center">
        <Image
          width={500}
          alt="frisbee-types"
          src="/src/assets/disc_types.jpg"
          className="basis-1/2"
        />
        <div className="basis-1/2">02</div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <div className="basis-1/2">01</div>
          <Image
            width={500}
            alt="Disc Golf Rules"
            src="/src/assets/DiscGolfRules2.jpg"
            className="basis-1/2"
          />
        </div>

        <div className="flex flex-row items-center justify-center">
          <Image
          width={500}
          alt="Points"
          src="/src/assets/points.webp"
          className="basis-1/2"
          />
          <div className="basis-1/2">02</div>
        </div>

        <div className="flex flex-row items-center justify-center">
        <div className="basis-1/2">01</div>
        <Image
          width={500}
          alt="Maps"
          src="/src/assets/maps.jpg"
          className="basis-1/2"
        />
        </div>

    </>
  )
}