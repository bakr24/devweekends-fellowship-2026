function CategoryFilter({ 
    categoryFilter, setCategoryFilter,
}) {
  return(
    <select value={categoryFilter} onChange={(e)=>setCategoryFilter(e.target.value)
      }
    >
      <option value="All">All</option>
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Shopping">Shopping</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
}
export default CategoryFilter;
