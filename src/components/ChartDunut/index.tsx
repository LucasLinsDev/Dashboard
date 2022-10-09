import {DonutChart} from 'react-circle-chart'


export const ChartDunut = () =>{
  const data=[
  {
    value: 25,
    label: 'Stocks'
  },
  {
    value: 5,
    label: 'Cash'
  },
  {
    value: 25,
    label: 'Crypto'
  }
  
  
]
  
  return(
      
  <DonutChart items={data} size={74} totalTextColor='white' totalSx={{fontSize:'10px'}}/>
  )
}