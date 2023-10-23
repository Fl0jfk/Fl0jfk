function FilterButton({selectedCategory, onChange} : FilterButtonProps){
    return (
        <div className="mb-12 flex gap-4">
            <label className="text-2xl" htmlFor="categorySelect">Select a category: </label>
            <select className="bg-grey" id="categorySelect" onChange={onChange} value={selectedCategory}>
                <option value="All">All</option>
                <option value="Web">Web</option>
                <option value="Desktop">Desktop</option>
                <option value="Mobile">Mobile</option>
            </select>
        </div>
      
    )
}

type FilterButtonProps = {
    selectedCategory : string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;

}

export default FilterButton;