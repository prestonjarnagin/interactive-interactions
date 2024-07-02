import React from 'react';
import { FaEllipsis, FaTriangleExclamation, FaRegCircleXmark, FaSkull } from "react-icons/fa6";
import { TbCircleArrowDown, TbCircleArrowUp } from "react-icons/tb";
// import { substanceList } from './substanceList'

const interactionIcons = {
  alcohol: {
    caffeine: 'warn',
    coke: 'unsafe',
    poppers: 'warn',
    molly: 'unsafe',
    GHB: 'deadly',
    K: 'deadly',
    acid: 'safeDecrease',
    shrooms: 'safeDecrease',
    xanax: 'deadly',
    viagra: 'warn',
  },
  caffeine: {
    coke: 'warn',
    poppers: 'warn',
    molly: 'warn',
    GHB: 'warn',
    K: 'warn',
    acid: 'safeIncrease',
    shrooms: 'warn',
    xanax: 'safeDecrease',
    viagra: 'safeIncrease',
  },
  coke: {
    poppers: 'warn',
    molly: 'unsafe',
    GHB: 'unsafe',
    K: 'unsafe',
    acid: 'warn',
    shrooms: 'warn',
    xanax: 'safeDecrease',
    viagra: 'deadly',
  },
  poppers: {
    molly: 'warn',
    GHB: 'deadly',
    K: 'warn',
    acid: 'safeIncrease',
    shrooms: 'safeIncrease',
    xanax: 'safeIncrease',
    viagra: 'deadly',
  },
  molly: {
    GHB: 'warn',
    K: 'warn',
    acid: 'safeIncrease',
    shrooms: 'safeIncrease',
    xanax: 'safeDecrease',
    viagra: 'warn',
  },
  GHB: {
    K: 'deadly',
    acid: 'safeDecrease',
    shrooms: 'safeDecrease',
    xanax: 'unsafe',
    viagra: 'unsafe',
  },
  K: {
    acid: 'safeIncrease',
    shrooms: 'safeIncrease',
    xanax: 'unsafe',
    viagra: 'safeDecrease',
  },
  acid: {
        shrooms: 'safeIncrease',
    xanax: 'safeDecrease',
    viagra: 'warn',
  },
  shrooms: {
        xanax: 'safeDecrease',
    viagra: 'unsafe',
  },
  xanax: {
    viagra: 'unsafe',
  },
  'viagra': {},
}

const icons = {
  warn: <FaTriangleExclamation size={30}/>,
  unsafe: <FaRegCircleXmark color="orange" size={30} />,
  deadly: <FaSkull color="black" size={30} />,
  safeDecrease: <TbCircleArrowDown color="blue" size={30} />,
  safeIncrease: <TbCircleArrowUp color="red" size={30} />,
}

export const Comparison = ({substances}) => {

  const sameSubstance = substances[0] === substances[1]

  if (sameSubstance) {
    return (
      <div>
        <FaEllipsis size={30}/>
      </div>
    )
  }

  if (interactionIcons[substances[0]]?.[substances[1]]) {
      return (
        <div>
          {icons[interactionIcons[substances[0]][substances[1]]]}
        </div>
      )
  }
  if (interactionIcons[substances[1]]?.[substances[0]]) {
    return (
      <div>
        {icons[interactionIcons[substances[1]][substances[0]]]}
      </div>
    )
  }

  return (
    <div>
      ?
    </div>
  )
}
