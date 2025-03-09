import { useState } from "react";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("breakfast");

  const tabs = [
    { id: "breakfast", icon: "fa-coffee", label: "Breakfast", subtitle: "Popular" },
    { id: "lunch", icon: "fa-hamburger", label: "Lunch", subtitle: "Special" },
    { id: "dinner", icon: "fa-utensils", label: "Dinner", subtitle: "Lovely" },
  ];

  const menuItems = {
    breakfast: [
      { name: "Chicken Burger", price: "$115", img: "img/menu-1.jpg" },
      { name: "Omelette", price: "$90", img: "img/menu-2.jpg" },
    ],
    lunch: [
      { name: "Grilled Chicken", price: "$150", img: "img/menu-3.jpg" },
      { name: "Beef Steak", price: "$200", img: "img/menu-4.jpg" },
    ],
    dinner: [
      { name: "Pasta", price: "$130", img: "img/menu-5.jpg" },
      { name: "Pizza", price: "$180", img: "img/menu-6.jpg" },
    ],
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>
        <div className="tab-class text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item">
                <button
                  className={`d-flex align-items-center text-start mx-3 pb-3 ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{ background: "none", border: "none" }}
                >
                  <i className={`fa ${tab.icon} fa-2x text-primary`} />
                  <div className="ps-3">
                    <small className="text-body">{tab.subtitle}</small>
                    <h6 className="mt-n1 mb-0">{tab.label}</h6>
                  </div>
                </button>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            <div className="row g-4">
              {menuItems[activeTab].map((item, index) => (
                <div key={index} className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 img-fluid rounded" src={item.img} alt="" style={{ width: 80 }} />
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>{item.name}</span>
                        <span className="text-primary">{item.price}</span>
                      </h5>
                      <small className="fst-italic">Delicious and fresh!</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
