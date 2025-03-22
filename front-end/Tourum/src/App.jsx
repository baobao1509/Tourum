import React from "react";
import { Avatar } from "./components/ui/avatar";
import { Clock, Calendar } from "lucide-react";
import "./App.css";  // Đảm bảo bạn đã import file CSS

const SearchResults = () => {
  const results = [
    { id: 1, title: "Tiêu Đề", author: "Jesika Koli", date: "02 December 2022", time: "3 Min. To Read", category: "Travel" },
    { id: 2, title: "Tiêu Đề", author: "Jesika Koli", date: "02 December 2022", time: "3 Min. To Read", category: "Travel" },
    { id: 3, title: "Tiêu Đề", author: "Jesika Koli", date: "02 December 2022", time: "3 Min. To Read", category: "Travel" },
    { id: 4, title: "Tiêu Đề", author: "Jesika Koli", date: "02 December 2022", time: "3 Min. To Read", category: "Travel" },
  ];

  return (
    <div className="container">
      <h2 className="title">Kết Quả Tìm Kiếm</h2>
      <div className="space-y-4">
        {results.map((item) => (
          <div key={item.id} className="card">
            <div className="card-image" />
            <div className="card-content">
              <span className="category">{item.category}</span>
              <h3 className="card-title">{item.title}</h3>
              <div className="meta">
                <Avatar className="w-5 h-5 mr-2" />
                <span>{item.author}</span>
                <span className="divider">|</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span>{item.date}</span>
                <span className="divider">|</span>
                <Clock className="w-4 h-4 mr-1" />
                <span>{item.time}</span>
              </div>
              <p className="content">Nội dung</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
