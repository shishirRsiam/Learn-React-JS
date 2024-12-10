import VisitedCard from './_VisitedCard';
import Data from './__Data'

const MainContent = () => {
    const ShowAllVisitedArea = Data.map((data) => {
      return <VisitedCard data={data}/>
    }) 
    return (
      <div className="bg-gray-100 pt-10 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Welcome to My Travel Journal
          </h1>
  
          <div className="bg-green-500 rounded-3xl py-10 px-5 space-y-10">
            { ShowAllVisitedArea }
          </div>
        </div>
      </div>
    );
  };
  
  export default MainContent;
  