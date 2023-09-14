import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../component/BookingWidget";
import PlaceGallery from "../component/PlaceGallery";
import AddressLink from "../component/AddressLink";

function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return "";

  return (
    <div className="mt-8 bg-gray-100 -mx-8 px-8 pt-8">
      {/* header */}
      <h2 className="text-3xl">{place.title}</h2>
      <AddressLink>
        {place.address}
      </AddressLink>

      {/* Photo */}
      <PlaceGallery place={place}/>

      {/* ExtraInfo */}
      <div className="mt-8 mb-8 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          {/* checkIn, checkOut, maxGuest */}
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Desctiption</h2>
            {place.description}
          </div>
          Check-in: {place.checkIn}
          <br />
          Check-out: {place.checkOut}
          <br />
          Max number of guest: {place.maxGuests}
        </div>
        <BookingWidget place={place} />
      </div>
      <div className="bg-white -mx-8 p-8 border-t">
          <h2 className="font-semibold text-2xl">Extra Info</h2>
          <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
            {place.extraInfo}
          </div>
      </div>
    </div>
  );
}

export default PlacePage;
