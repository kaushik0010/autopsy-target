// A simple React component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Dashboard</h1>
      <ul>
        <li>Home</li>
        <li>Settings</li>
        {/* Fixed: The list item below was missing a closing tag */}
        <li>Profile</li>
        <li>About</li>
      </ul>
    </div>
  );
};

console.log("Sidebar component loaded");