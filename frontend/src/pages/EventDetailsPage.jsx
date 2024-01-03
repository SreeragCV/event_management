import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem.js";
function EventDetailsPage() {
  const data = useLoaderData();
  const event = data.event;

  // const params = useParams();

  // const [fetchData, setFetchData] = useState(null);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:8080/eventss/${params.eventId}`
  //       );
  //       const data = await response.json();
  //       const event = await data.event;
  //       console.log(data.event);
  //       setFetchData(event);
  //     } catch (error) {
  //       setError({
  //         message:
  //           "failed to fetch the event, please try again..",
  //       });
  //     }
  //   }
  //   fetchData();
  // }, []);

  // if(error){
  //   return <Error message={error.message} title='Error fetching data!'/>
  // }

  return (
    <div>
      <EventItem event={event} />
    </div>
  );
}

export default EventDetailsPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/eventWs/${id}`);

  if(!response.ok){
    throw json({message: 'Error fetching the event'}, {status: 500})
  }

  return response;
}
