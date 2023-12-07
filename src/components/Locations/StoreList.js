import React, { useEffect, useState } from "react";

function StoreList(props) {
  const [filteredLocations, setFilteredLocations] = useState(props.locations);
  const locationLength = filteredLocations.length;
  //console.log(props.locations)
  //console.log(filteredLocations)
  const filterLocations = (e) => {
    //console.log(e.target.value)
    let text = e.target.value;
    if (text !== "") {
      setFilteredLocations(
        props.locations.filter(
          (location) =>
            location.Name.toLowerCase().includes(text.toLowerCase()) ||
            location.Address.toLowerCase().includes(text.toLowerCase())
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
      {/* <input
        type="search"
        className="w-full rounded-xl border border-blue-light px-3 py-1.5 outline-blue-secondary outline-offset-2 focus-visible:!outline-4 transition-all"
        placeholder="Find a location"
        onChange={filterLocations}
      /> */}
      <div className="scrollbar overflow-y-auto bg-white h-[630px] p-4 rounded border">
        {filteredLocations.map((location) => {
          return (
            <div className="m-2 border-neutral-100 border hover:border-neutral-300 hover:bg-neutral-50 px-1 py-1.5 transition-all">
              <div className="ps-2 text-center lg:text-start">
                <h5 className="heading font-bold text-sm mb-2">
                  {location.title}
                </h5>
                <div className="my-1 flex flex-wrap items-center gap-0.5">
                  <div className="bg-neutral-200 py-0.5 px-1 rounded">
                    <p className="text-[10px]">
                      {location.state === "NY" ? "NEW YORK" : "NEW JERSEY"}
                    </p>
                  </div>
                  <div className="bg-neutral-200 py-0.5 px-1 rounded">
                    <p className="text-[10px] uppercase">{location.city}</p>
                  </div>
                  {location.pcr === "true" ? (
                    <div className="bg-red-400 py-0.5 px-1 rounded">
                      <p className="text-[10px] text-white">PCR</p>
                    </div>
                  ) : null}
                  {location.rapid === "true" ? (
                    <div className="bg-green-500 py-0.5 px-1 rounded">
                      <p className="text-[10px] text-white">RAPID</p>
                    </div>
                  ) : null}
                  {location.flu === "true" ? (
                    <div className="bg-neutral-200 py-0.5 px-1 rounded">
                      <p className="text-[10px]">FLU</p>
                    </div>
                  ) : null}
                  {location.rsv === "true" ? (
                    <div className="bg-neutral-200 py-0.5 px-1 rounded">
                      <p className="text-[10px]">RSV</p>
                    </div>
                  ) : null}
                  {location.blood === "true" ? (
                    <div className="bg-neutral-200 py-0.5 px-1 rounded">
                      <p className="text-[10px]">BLOOD WORK</p>
                    </div>
                  ) : null}
                </div>
                <p className="text-xs text-neutral-900 mb-2">
                  {location.address}
                </p>
                {/* <a
                  className="text-blue-secondary text-xs hover:underline"
                  href={"tel:" + location.phone}
                >
                  {location.phone}
                </a> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StoreList;
