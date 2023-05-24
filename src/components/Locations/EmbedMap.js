import React from "react";

const EmbedMap = (props) => {
  const mapSource = props.src;
  const classes = props.classes;
  const height = props.height;
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div>
      <div
        className={classNames(
          classes ? classes : "h-[500px] overflow-hidden w-full"
        )}
      >
        <iframe
          style={{ position: "relative", top: "-70px", border: "none" }}
          src={mapSource}
          width="100%"
          height={height ? height : "570px"}
        ></iframe>
      </div>
    </div>
  );
};

export default EmbedMap;
