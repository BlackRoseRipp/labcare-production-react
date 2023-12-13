import React, { useEffect, useState } from "react";

function StoreList(props) {
  const [filteredLocations, setFilteredLocations] = useState(props.locations);
  //console.log(props.locations)
  //console.log(filteredLocations)
  const filterLocations = (e) => {
    //console.log(e.target.value)
    let text = e.target.value;
    if (text !== "") {
      setFilteredLocations(
        props.locations.filter((location) =>
          location.address.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setFilteredLocations(props.locations);
    }
  };

  useEffect(() => {
    //console.log(props.locations)
    setFilteredLocations(props.locations);
  }, [props]);

  //const locData = filteredLocations.length > 0 ? filteredLocations : props.locations
  //const locData = filteredLocations
  //console.log("Here I am")

  return (
    <div>
      <input
        type="search"
        className="w-full rounded border border-blue-light px-3 py-1.5 outline-blue-secondary outline-offset-2 focus-visible:!outline-4 transition-all"
        placeholder="Find a location"
        onChange={filterLocations}
      />
      <div className="scrollbar overflow-y-auto bg-white h-[592px] p-4 rounded border">
        {filteredLocations.map((location) => {
          return (
            <div className="m-2 border-neutral-100 border hover:border-neutral-300 hover:bg-neutral-50 px-1 py-1.5 transition-all">
              <div className="ps-2 text-center lg:text-start">
                <h5 className="heading font-bold text-sm mb-2">
                  {location.title}
                </h5>
                <p className="text-xs text-neutral-900 mb-2">
                  {location.address}
                </p>
                <div className="flex flex-col">
                  <a
                    className="text-blue-secondary text-xs hover:underline"
                    href={"tel:" + location.phone}
                  >
                    {location.phone}
                  </a>
                  <a
                    className="text-blue-secondary text-xs hover:underline"
                    href={"mailto:" + location.email}
                  >
                    {location.email}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StoreList;
