import React from 'react';
import { useState, useEffect } from 'react';
import { FaEllipsis, FaTriangleExclamation, FaRegCircleXmark, FaSkull } from "react-icons/fa6";
import { TbCircleArrowDown, TbCircleArrowUp } from "react-icons/tb";
import { interactions } from './interactions'
import { Modal } from './Modal'

const icons = {
  warn: <FaTriangleExclamation size={30}/>,
  unsafe: <FaRegCircleXmark color="orange" size={30} />,
  deadly: <FaSkull color="black" size={30} />,
  safeDecrease: <TbCircleArrowDown color="blue" size={30} />,
  safeIncrease: <TbCircleArrowUp color="red" size={30} />,
}

const ComparisonIcon = ({substances}) => {
  const sameSubstance = substances[0] === substances[1]

  return (
  <>
    <div

    >
      {sameSubstance ? <FaEllipsis size={30}/> : (
        interactions[substances[0]]?.[substances[1]] ? icons[interactions[substances[0]][substances[1]]] : (
          interactions[substances[1]]?.[substances[0]] ? icons[interactions[substances[1]][substances[0]]] : null
        )
      )}

    </div>

  </>
  )
}

export const Comparison = ({substances}) => {
  const [showModal, setShowModal] = useState(false)

  const closeHandler = (e) => {
    e.stopPropagation()
    setShowModal(false)
  }

  return (
      <div
        onClick={() => setShowModal(true)}
      >
      <ComparisonIcon substances={substances}/>
      {showModal && (
        <Modal closeHandler={closeHandler}>
          <h1>{substances[0]} and {substances[1]}</h1>
        </Modal>
      )}
    </div>
  )
}
