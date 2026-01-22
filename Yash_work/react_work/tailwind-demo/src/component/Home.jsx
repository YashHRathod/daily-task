import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Datepicker from './DatePicker';
import Cards from './Cards';
import { Pagination } from "antd";
import { Button, Modal } from "antd";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
    const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const pageSize = 10;
  const totalCards = [];

  for (let i = 1; i <= 50; i++) {
    totalCards.push(i);
  }

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCards = totalCards.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-red-300 p-10">
        <button onClick={()=>navigate("/form")}>Login</button>
      {/* Filter */}
      <div className="mb-6 flex justify-end">
        <Datepicker />
      </div>

      {/* Cards Grid */}
      <div
        className="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        gap-4
      "
      >
        {currentCards.map((num) => (
          <Cards key={num} number={num} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalCards.length}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>

      <button onClick={() => navigate('/table')}>TableBox</button>
      <Button className="p-4 m-4 bg-red-900 hover:bg-red-700 active:bg-red-700"type="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal
        title="Confirm Action"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p>Are you sure you want to continue?</p>
      </Modal>
      
    </div>
  );
}

export default Home
