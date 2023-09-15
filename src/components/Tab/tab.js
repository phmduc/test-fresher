import "./tab.css";
import { useState } from "react";
function Tab() {
  const [activeTab, setActiveTab] = useState(0); // Sử dụng state để theo dõi tab hiện tại

  const tabs = [
    "All",
    "Manpower Supply",
    "Mobile App / Websites",
    "UI/UX Design",
  ]; // Danh sách các tab
  // Dữ liệu cho các tab và items
  const tabData = [
    {
      tabName: "All",
      items: [
        { title: "TOI 3D Customize E-commerce 1", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_1" },
        { title: "E-learning – Internal training platform 1", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_2" },
        { title: "TOI 3D Customize E-commerce 1", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_1" },
        { title: "E-learning – Internal training platform 1", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_2" },
        { title: "TOI 3D Customize E-commerce 1", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_1" },
        { title: "E-learning – Internal training platform 1", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_2" },
        
      ],
    },
    {
      tabName: "Manpower Supply",
      items: [
        { title: "TOI 3D Customize E-commerce 2", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_1" },
        { title: "E-learning – Internal training platform 2", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_2" },
        { title: "TOI 3D Customize E-commerce 2", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_1" },
        { title: "E-learning – Internal training platform 2", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_2" },
        
        { title: "TOI 3D Customize E-commerce 2", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_1" },
        { title: "E-learning – Internal training platform 2", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_2" },
        
      ],
    },
    {
      tabName: "Mobile App / Websites",
      items: [
        { title: "TOI 3D Customize E-commerce 3", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_1" },
        { title: "E-learning – Internal training platform 3", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_2" },
        { title: "TOI 3D Customize E-commerce 3", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_1" },
        { title: "E-learning – Internal training platform 3", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_2" },
        { title: "TOI 3D Customize E-commerce 3", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_1" },
        { title: "E-learning – Internal training platform 3", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_2" },
        
      ],
    },
    {
      tabName: "UI/UX Design",
      items: [
        { title: "TOI 3D Customize E-commerce 4", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_1" },
        { title: "E-learning – Internal training platform 4", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_2" },
        { title: "TOI 3D Customize E-commerce 4", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_1" },
        { title: "E-learning – Internal training platform 4", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_2" },
        
        { title: "TOI 3D Customize E-commerce 4", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_1" },
        { title: "E-learning – Internal training platform 4", image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png", link: "link_to_item_2" },
        
      ],
    },
  ];

  const handleTabClick = (index) => {
    // Xử lý khi tab được nhấn
    setActiveTab(index);
  };

  return (
    <div className="section-tab py-5">
      <div className="container">
        <div className="tab-header d-flex justify-content-center mb-lg-5 mb-3">
          {tabData.map((tab, index) => (
            <div
              key={index}
              className={`tab-item ${index === activeTab ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.tabName}
            </div>
          ))}
        </div>
        <div className="tab-content">
            <div className="row">
            {tabData[activeTab].items.map((item, itemIndex) => (
                <div className="col-lg-4">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" key={itemIndex} className="item img-wrap">
                        <img src={item.image} alt={item.title} />
                        <h3 className="d-flex justify-content-between align-items-center">{item.title} <span>></span></h3>
                    </a>
                </div>
            ))}
            </div>
         
        </div>
      </div>
    </div>
  );
}

export default Tab;
