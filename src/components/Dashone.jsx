import React from "react";
import '../Stylesheet/Styleone.css';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { data } from "./Data";

function Dashone() {
  return (
    <div className="container">
      <h3>CSPM Executive Dashboard</h3>
      <div className="row d-flex dashone_row">
        <div className="col-md-4">
          <div className="card">
          <h5 class="card-title">Widget head</h5>
            <div className="card-body">
              {/* <div>Widget img</div>
              <div>Widget Text</div> */}
             
             <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend layout="vertical" align="right" verticalAlign="middle" />
    </PieChart>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card">
          <h5 class="card-title">Widget head</h5>
            <div className="card-body">
              <div>Widget img</div>
              <div>Widget Text</div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card">
          <h5 class="card-title">Widget head</h5>
            <div className="card-body">
              <div>Widget img</div>
              <div>Widget Text</div>
            </div>
          </div>
        </div>
      </div>








      <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
    </div>
  );
}

export default Dashone;
