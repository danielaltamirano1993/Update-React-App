<div>
  <SearchBar
    filterText={filterText}
    inStockOnly={inStockOnly}
  />
  <ProductTable
    products={products}
    filterText={filterText}
    inStockOnly={inStockOnly}
  />
</div>;

function SearchBar({ filterText, inStockOnly }) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
      />
    </form>
  );
}
