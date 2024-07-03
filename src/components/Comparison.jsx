import { useState } from "react";
import {
  FaEllipsis,
  FaTriangleExclamation,
  FaRegCircleXmark,
  FaSkull,
} from "react-icons/fa6";
import { TbCircleArrowDown, TbCircleArrowUp } from "react-icons/tb";
import { interactions } from "../interactions";
import { Modal } from "./Modal";
import { InteractionInformation } from "./InteractionInformation";

const icons = {
  warn: <FaTriangleExclamation size={30} color="rgb(235,243,10)" />,
  unsafe: <FaRegCircleXmark color="rgb(226,114,54)" size={30} />,
  deadly: <FaSkull color="FFFFF" size={30} filter="invert" />,
  safeDecrease: <TbCircleArrowDown color="rgb(23,169,221)" size={30} />,
  safeIncrease: <TbCircleArrowUp color="rgb(204,37,114)" size={30} />,
};

const ComparisonIcon = ({ substances }) => {
  const sameSubstance = substances[0] === substances[1];

  return (
    <>
      <div>
        {sameSubstance ? (
          <FaEllipsis size={30} />
        ) : interactions[substances[0]]?.[substances[1]] ? (
          icons[interactions[substances[0]][substances[1]]]
        ) : interactions[substances[1]]?.[substances[0]] ? (
          icons[interactions[substances[1]][substances[0]]]
        ) : null}
      </div>
    </>
  );
};

export const Comparison = ({ substances }) => {
  const [showModal, setShowModal] = useState(false);

  const closeHandler = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  return (
    <div
      onClick={() => setShowModal(true)}
      style={{
        cursor: "pointer",
      }}
    >
      <ComparisonIcon substances={substances} />
      {showModal && (
        <Modal closeHandler={closeHandler}>
          <InteractionInformation substances={substances} />
        </Modal>
      )}
    </div>
  );
};
