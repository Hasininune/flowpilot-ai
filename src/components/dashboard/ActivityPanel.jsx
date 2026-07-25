function ActivityPanel() {

  const activity = [

    "Invoice workflow completed",

    "New employee added",

    "Email automation triggered",

    "AI generated report",

  ];

  return (

    <div className="dashboard-card">

      <div className="card-header">

        <h2>

          Activity Timeline

        </h2>

      </div>

      {activity.map((item, index) => (

        <div
          key={index}
          className="timeline-item"
        >

          <div className="timeline-dot"/>

          <span>{item}</span>

        </div>

      ))}

    </div>

  );

}

export default ActivityPanel;