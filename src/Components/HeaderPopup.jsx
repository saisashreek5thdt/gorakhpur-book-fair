export default function HeaderPopup() {
  return (
    <>
      <div className="search-popup">
        <button className="close-search">
          <span className="fa fa-solid fa-xmark"></span>
        </button>
        <form action="#">
          <div className="form-group">
            <input
              type="search"
              name="search-field"
              placeholder="Search Here..."
              required
            />
            <button type="submit">
              <i className="fa fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
