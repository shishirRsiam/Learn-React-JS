const VisitedCard = (props) => {
    const data = props.data
    return (
        <>
            <div className="border-2 border-gray-200 rounded-3xl p-5 shadow-xl mx-10">
              <div className="grid grid-cols-10 gap-6 items-start">
                <img
                  src={data.img.src}
                  alt={data.img.alt}
                  className="col-span-3 row-span-10 w-full h-full object-cover rounded-3xl shadow-md"/>
  
                <div className="col-span-7 space-y-4">
                  <div className="location flex items-center">
                    <img
                      src="./src/assets/location.png"
                      alt="Location"
                      className="w-10 h-10 object-contain" />
                    <span className="text-lg font-semibold text-gray-800">
                      {data.country}
                    </span>
                    <span className="mx-2 font-bold"> - </span>
                    <a target="_blank"
                      href={data.googleMapsLink}
                      className="text-lg font-semibold text-blue-900 hover:text-blue-700 transition duration-300"> View on Map? </a>
                  </div>
  
                  <div className="space-y-3">
                    <p className="text-5xl font-semibold text-gray-900">
                      {data.title}
                    </p>
                    <p className="text-3xl font-semibold text-gray-800">
                      {data.dates}
                    </p>
                    <p className="whitespace-pre-wrap text-3xl text-gray-800">
                        {data.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default VisitedCard;