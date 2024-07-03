import React from 'react';
import { Comparison } from './Comparison';

export const Table = () => {
  const substances = [
    'alcohol',
    'caffeine',
    'coke',
    'poppers',
    'molly',
    'GHB',
    'K',
    'acid',
    'shrooms',
    'xanax',
    'viagra',
  ]

  const tableHead = substances.map((substance, index) => {
    return (
      <th key={index} style={{
        color: 'white',
      }}>
        {substance}
      </th>
    )
  })

  const tableRows = function () {

    return (
      substances.map((substance, index) => {
        return (
          <tr key={index}>
            <th style={{
              color: 'white',
            }}>{substance}</th>

            {substances.map((headerSubstance, index) => {
              return (
                <td key={index} style={{
                  width: '3.5em',
                  height: '3.5em',
                  color: 'white',
                }}>
                  <Comparison substances={[substance, headerSubstance]} />
                </td>
              )
            })}
          </tr>
        )
      })
    )
  }

  return (
    <div style={{
      backgroundColor: 'black',
    }}>

      <table>
        <thead>
          <tr>
            <th></th>
            {tableHead}
          </tr>
        </thead>

        <tbody>
          {tableRows()}
        </tbody>
      </table>
    </div>
  )
}
