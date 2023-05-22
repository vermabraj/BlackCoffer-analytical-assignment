import React from 'react'
import {Routes,Route} from "react-router-dom";

import LikelihoodChart from '../Pages/LikelihoodChart';
import  Charts  from '../Components/Chart';
import RelevanceChart from '../Pages/Relevance';
import IntensityChart from '../Pages/Intensity';
const AllRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Charts />} />
      <Route path="/likelihood" element={<LikelihoodChart />} />
      <Route path="/relevance" element={<RelevanceChart />} />
      <Route path="/intensity" element={<IntensityChart />} />
    </Routes>
  );
}

export default AllRouters;
