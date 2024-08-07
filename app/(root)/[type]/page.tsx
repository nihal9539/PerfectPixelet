
import React from 'react';
import dynamic from 'next/dynamic';

const AddTreansformationPage = dynamic(() => import('@/app/dashboard/transformations/add/[type]/page'), { ssr: false });


const Modify = ({ params: { type } }:SearchParamProps) => {
  return (
    <div className='p-16'>
      <AddTreansformationPage  params={{ type ,id:type}}  />
    </div>
  );
};

export default Modify;
