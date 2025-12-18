// A simple React component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Dashboard</h1>
      <ul>
        <li>Home</li>
        <li>Settings</li>
        {/* ERROR: The list item below is missing a closing tag */}
        <li>Profile
      </ul>
    </div>
  );
};

console.log("Sidebar component loaded");