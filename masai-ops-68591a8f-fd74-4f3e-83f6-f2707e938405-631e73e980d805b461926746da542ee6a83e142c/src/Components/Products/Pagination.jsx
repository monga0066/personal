function Pagination({current,totalPages,onChange}) {
  const prev = <button data-testid="prev-page" disabled={current==1}  onClick={()=>onChange(current-1)} >PREV</button>;
  const currentPage = <button data-testid="current-page">{current}</button>;
  const next = <button data-testid="next-page" disabled={current==totalPages}   onClick={()=>onChange(current+1)}>NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{totalPages}</b>
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
