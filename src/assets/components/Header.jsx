const Header = ({ mode, setMode }) => {
  return mode ? (
    <div className="dark">
      <div className="header">
        <h1>To Do List</h1>
        <div className="mode">
          <span>Mode:</span>
          {!mode ? (
            <button
              className="darkMode"
              onClick={() => {
                setMode("dark");
              }}
            ></button>
          ) : (
            <button
              className="lightMode"
              onClick={() => {
                setMode("");
              }}
            ></button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="header">
        <h1>To Do List</h1>
        <div className="mode">
          <span>Mode:</span>
          {!mode ? (
            <button
              className="darkMode"
              onClick={() => {
                setMode(!mode);
              }}
            ></button>
          ) : (
            <button
              className="lightMode"
              onClick={() => {
                setMode(!mode);
              }}
            ></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
