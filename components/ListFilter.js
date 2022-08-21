import { useEffect, useState, useCallback } from "react";

const FilterOption = ({name, value, options}) => {
    return (
        <button className="bg-gray-200 border-1 border-gray-400 text-gray-400 rounded-lg px-2 py-1 mr-2 hover:brightness-125">{name}: {value} V</button>
    );

}

const ListFilter = ({filterQuery, updateFilterQuery, updateEndpoint}) => {

    return (
        <div className="w-3/4 lg:w-2/3 2xl:w-1/2 flex flex-row justify-between py-4">
            <button className="bg-gray-200 border-2 border-gray-400 text-gray-400 rounded-lg px-2 py-1 hover:brightness-125">Filter V</button>
            <div className="w-3/4 lg:w-2/3 2xl:w-1/2 flex flex-row flex-wrap justify-start">
                {filterQuery.map((f) => {
                    if(f?.selected === true) {
                        return(<FilterOption name={f.name} value={f.value} options={f.options} update={updateFilterQuery} />)
                    }
                    return
                })}
            </div>
            <button className="bg-gray-200 border-2 border-gray-400 text-gray-400 rounded-lg px-2 py-1 hover:brightness-125" onClick={() => updateEndpoint}>Update</button>
        </div>
    )
}

export default ListFilter;