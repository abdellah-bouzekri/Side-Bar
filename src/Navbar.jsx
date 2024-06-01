export default function Navbar({ handeltoggle, open }) {
  console.log(open);
  return (
    <>
      <div className={`sidebar ${open ? 'transform' : ''}`}>
        <button onClick={handeltoggle}>
          <div className="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </button>
        <div className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">More</a>
        </div>
      </div>
    </>
  );
}
