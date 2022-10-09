import React from 'react'

function Pagination({postsPerPage,totalPosts}:any) {
  const pageNumbers=[];

  for(let i =1; i<= Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        {pageNumbers.map(number=>(
            <li key={number} className={'page-item'}>
              <a href="!#" className='page-link'>
                {number}
              </a>
            </li>
        ))}
      </ul>
      </div>
  )
}

export default Pagination